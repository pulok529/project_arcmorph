using Dapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Bornomala.Rbac.Api.Models;

namespace Bornomala.Rbac.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RbacController : ControllerBase
{
    private readonly string _connectionString;

    public RbacController(IConfiguration config)
    {
        _connectionString = config.GetConnectionString("DefaultConnection") 
            ?? "Server=localhost,1433;Database=EducationDB_Legacy;User Id=sa;Password=Bornomala@Secure2026;TrustServerCertificate=True;";
    }

    // -------------------------------------------------------------
    // USERS ENDPOINTS
    // -------------------------------------------------------------

    [HttpGet("users")]
    public async Task<IActionResult> GetUsers([FromQuery] string? search, [FromQuery] string? roleId, [FromQuery] string? branch)
    {
        using var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();

        var sql = @"
            SELECT 
                u.UserId, u.UserName, u.LoginName, u.UserStatus, u.Email, u.ContactNo, u.SchoolName,
                ISNULL(m.RoleId, 'role_teacher') AS RoleId,
                ISNULL(r.RoleName, 'Teacher / Faculty') AS RoleName
            FROM tblUser u
            LEFT JOIN tblUserRoleMapping m ON u.UserId = m.UserId
            LEFT JOIN tblRole r ON m.RoleId = r.RoleId
            ORDER BY u.UserId ASC;
        ";

        var rawUsers = (await connection.QueryAsync<dynamic>(sql)).ToList();

        var list = rawUsers.Select(u => new UserDto
        {
            Id = $"usr_{u.UserId}",
            Username = (string)u.LoginName,
            FullName = (string)u.UserName,
            Email = (string?)u.Email ?? "staff@bornomala.edu.bd",
            Phone = (string?)u.ContactNo ?? "+880 1700 000000",
            Branch = (string?)u.SchoolName ?? "Main Campus (Dania)",
            RoleId = (string)u.RoleId,
            Status = ((string?)u.UserStatus)?.ToLower() == "active" ? "active" : "active",
            LegacyId = $"LEGACY_{u.UserId}",
            CreatedAt = "2024-01-01",
            LastLogin = "Recent"
        }).ToList();

        if (!string.IsNullOrWhiteSpace(search))
        {
            var s = search.Trim().ToLower();
            list = list.Where(u => 
                u.FullName.ToLower().Contains(s) || 
                u.Username.ToLower().Contains(s) || 
                u.Email.ToLower().Contains(s)
            ).ToList();
        }

        if (!string.IsNullOrWhiteSpace(roleId) && roleId != "ALL")
        {
            list = list.Where(u => u.RoleId == roleId).ToList();
        }

        if (!string.IsNullOrWhiteSpace(branch) && branch != "ALL")
        {
            list = list.Where(u => u.Branch.Contains(branch)).ToList();
        }

        return Ok(list);
    }

    [HttpPost("users")]
    public async Task<IActionResult> CreateUser([FromBody] CreateUserRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.FullName) || string.IsNullOrWhiteSpace(request.Username))
            return BadRequest(new { message = "Full name and username are required." });

        using var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();

        // Check if username exists
        var existing = await connection.ExecuteScalarAsync<int?>(
            "SELECT TOP 1 UserId FROM tblUser WHERE LOWER(LoginName) = LOWER(@Username);",
            new { Username = request.Username.Trim() }
        );

        if (existing.HasValue)
            return BadRequest(new { message = "Staff member with this username already exists." });

        var newUserId = (await connection.ExecuteScalarAsync<int?>("SELECT ISNULL(MAX(UserId), 0) FROM tblUser;")) + 1 ?? 1;
        var pwd = string.IsNullOrWhiteSpace(request.Password) ? "Admin@123" : request.Password;

        await connection.ExecuteAsync(@"
            INSERT INTO tblUser (UserId, UserName, LoginName, Password, UserStatus, Email, ContactNo, SchoolName, UserType)
            VALUES (@UserId, @FullName, @Username, @Password, @Status, @Email, @Phone, @Branch, 'Staff');

            INSERT INTO tblUserRoleMapping (UserId, RoleId)
            VALUES (@UserId, @RoleId);
        ", new
        {
            UserId = newUserId,
            FullName = request.FullName.Trim(),
            Username = request.Username.Trim(),
            Password = pwd,
            Status = request.Status,
            Email = request.Email.Trim(),
            Phone = request.Phone.Trim(),
            Branch = string.IsNullOrWhiteSpace(request.Branch) ? "Main Campus (Dania)" : request.Branch,
            RoleId = string.IsNullOrWhiteSpace(request.RoleId) ? "role_teacher" : request.RoleId
        });

        return Ok(new UserDto
        {
            Id = $"usr_{newUserId}",
            Username = request.Username.Trim(),
            FullName = request.FullName.Trim(),
            Email = request.Email.Trim(),
            Phone = request.Phone.Trim(),
            Branch = request.Branch,
            RoleId = request.RoleId,
            Status = request.Status,
            LegacyId = $"LEGACY_{newUserId}",
            CreatedAt = DateTime.UtcNow.ToString("yyyy-MM-dd"),
            LastLogin = "Just registered"
        });
    }

    [HttpPut("users/{id}")]
    public async Task<IActionResult> UpdateUser(string id, [FromBody] UpdateUserRequest request)
    {
        var rawId = id.Replace("usr_", "");
        if (!int.TryParse(rawId, out int userId))
            return BadRequest(new { message = "Invalid user ID format." });

        using var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();

        await connection.ExecuteAsync(@"
            UPDATE tblUser
            SET UserName = @FullName,
                LoginName = @Username,
                Email = @Email,
                ContactNo = @Phone,
                SchoolName = @Branch
            WHERE UserId = @UserId;

            IF EXISTS (SELECT 1 FROM tblUserRoleMapping WHERE UserId = @UserId)
                UPDATE tblUserRoleMapping SET RoleId = @RoleId WHERE UserId = @UserId;
            ELSE
                INSERT INTO tblUserRoleMapping (UserId, RoleId) VALUES (@UserId, @RoleId);
        ", new
        {
            UserId = userId,
            FullName = request.FullName.Trim(),
            Username = request.Username.Trim(),
            Email = request.Email.Trim(),
            Phone = request.Phone.Trim(),
            Branch = request.Branch,
            RoleId = request.RoleId
        });

        return Ok(new { message = "User updated successfully" });
    }

    [HttpDelete("users/{id}")]
    public async Task<IActionResult> DeleteUser(string id)
    {
        var rawId = id.Replace("usr_", "");
        if (!int.TryParse(rawId, out int userId))
            return BadRequest(new { message = "Invalid user ID format." });

        if (userId == 1)
            return BadRequest(new { message = "Cannot delete the primary root Super Administrator account." });

        using var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();

        await connection.ExecuteAsync(@"
            DELETE FROM tblUserRoleMapping WHERE UserId = @UserId;
            DELETE FROM tblUser WHERE UserId = @UserId;
        ", new { UserId = userId });

        return Ok(new { message = "User deleted successfully" });
    }

    [HttpPatch("users/{id}/toggle-status")]
    public async Task<IActionResult> ToggleUserStatus(string id)
    {
        var rawId = id.Replace("usr_", "");
        if (!int.TryParse(rawId, out int userId))
            return BadRequest(new { message = "Invalid user ID format." });

        using var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();

        var currentStatus = await connection.ExecuteScalarAsync<string>("SELECT UserStatus FROM tblUser WHERE UserId = @UserId;", new { UserId = userId });
        var newStatus = (currentStatus?.ToLower() == "active") ? "suspended" : "active";

        await connection.ExecuteAsync("UPDATE tblUser SET UserStatus = @Status WHERE UserId = @UserId;", new { Status = newStatus, UserId = userId });

        return Ok(new { userId = id, status = newStatus });
    }

    // -------------------------------------------------------------
    // ROLES ENDPOINTS
    // -------------------------------------------------------------

    [HttpGet("roles")]
    public async Task<IActionResult> GetRoles()
    {
        using var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();

        var sql = @"
            SELECT 
                r.RoleId AS Id, r.RoleName AS Name, r.RoleCode AS Code, r.Description, 
                r.IsSystem, r.Priority, r.BadgeVariant,
                COUNT(m.UserId) AS MemberCount
            FROM tblRole r
            LEFT JOIN tblUserRoleMapping m ON r.RoleId = m.RoleId
            GROUP BY r.RoleId, r.RoleName, r.RoleCode, r.Description, r.IsSystem, r.Priority, r.BadgeVariant
            ORDER BY r.Priority ASC;
        ";

        var roles = (await connection.QueryAsync<RoleDto>(sql)).ToList();
        return Ok(roles);
    }

    [HttpPost("roles")]
    public async Task<IActionResult> CreateRole([FromBody] CreateRoleRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Name))
            return BadRequest(new { message = "Role name is required." });

        var roleId = "role_" + request.Name.Trim().ToLower().Replace(" ", "_");
        var code = string.IsNullOrWhiteSpace(request.Code) 
            ? request.Name.Trim().ToUpper().Replace(" ", "_") 
            : request.Code.Trim().ToUpper();

        using var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();

        var exists = await connection.ExecuteScalarAsync<int?>("SELECT 1 FROM tblRole WHERE RoleId = @RoleId;", new { RoleId = roleId });
        if (exists.HasValue)
            return BadRequest(new { message = "A role with this title already exists." });

        await connection.ExecuteAsync(@"
            INSERT INTO tblRole (RoleId, RoleName, RoleCode, Description, Priority, IsSystem, BadgeVariant)
            VALUES (@RoleId, @Name, @Code, @Description, @Priority, 0, @BadgeVariant);
        ", new
        {
            RoleId = roleId,
            Name = request.Name.Trim(),
            Code = code,
            Description = request.Description,
            Priority = request.Priority,
            BadgeVariant = request.BadgeVariant
        });

        // Seed empty permissions for the new role across all modules
        var modules = new[] { "Admissions", "Academics", "Examination", "Accounts", "HRM", "Administration" };
        foreach (var mod in modules)
        {
            await connection.ExecuteAsync(@"
                INSERT INTO tblActionPermission (RoleId, Module, CanView, CanCreate, CanEdit, CanDelete, CanExport, CanApprove)
                VALUES (@RoleId, @Module, 0, 0, 0, 0, 0, 0);
            ", new { RoleId = roleId, Module = mod });
        }

        return Ok(new RoleDto
        {
            Id = roleId,
            Name = request.Name.Trim(),
            Code = code,
            Description = request.Description,
            Priority = request.Priority,
            IsSystem = false,
            BadgeVariant = request.BadgeVariant,
            MemberCount = 0
        });
    }

    [HttpDelete("roles/{id}")]
    public async Task<IActionResult> DeleteRole(string id)
    {
        using var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();

        var role = await connection.QueryFirstOrDefaultAsync<dynamic>("SELECT IsSystem, RoleName FROM tblRole WHERE RoleId = @RoleId;", new { RoleId = id });
        if (role == null) return NotFound();

        if ((bool)role.IsSystem)
            return BadRequest(new { message = "Cannot delete built-in system security roles." });

        await connection.ExecuteAsync(@"
            DELETE FROM tblActionPermission WHERE RoleId = @RoleId;
            DELETE FROM tblUserRoleMapping WHERE RoleId = @RoleId;
            DELETE FROM tblRole WHERE RoleId = @RoleId;
        ", new { RoleId = id });

        return Ok(new { message = "Role deleted successfully" });
    }

    // -------------------------------------------------------------
    // PERMISSIONS MATRIX ENDPOINTS
    // -------------------------------------------------------------

    [HttpGet("permissions")]
    public async Task<IActionResult> GetPermissions()
    {
        using var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();

        var sql = @"SELECT RoleId, Module, CanView, CanCreate, CanEdit, CanDelete, CanExport, CanApprove FROM tblActionPermission;";
        var rows = (await connection.QueryAsync<dynamic>(sql)).ToList();

        var result = new Dictionary<string, Dictionary<string, ActionPermissionsDto>>();
        foreach (var row in rows)
        {
            string roleId = (string)row.RoleId;
            string mod = (string)row.Module;

            if (!result.ContainsKey(roleId))
                result[roleId] = new Dictionary<string, ActionPermissionsDto>();

            result[roleId][mod] = new ActionPermissionsDto
            {
                CanView = (bool)row.CanView,
                CanCreate = (bool)row.CanCreate,
                CanEdit = (bool)row.CanEdit,
                CanDelete = (bool)row.CanDelete,
                CanExport = (bool)row.CanExport,
                CanApprove = (bool)row.CanApprove
            };
        }

        return Ok(result);
    }

    [HttpPut("permissions/{roleId}/{module}")]
    public async Task<IActionResult> UpdatePermission(string roleId, string module, [FromBody] UpdatePermissionRequest request)
    {
        using var connection = new SqlConnection(_connectionString);
        await connection.OpenAsync();

        await connection.ExecuteAsync(@"
            IF EXISTS (SELECT 1 FROM tblActionPermission WHERE RoleId = @RoleId AND Module = @Module)
            BEGIN
                UPDATE tblActionPermission
                SET CanView = @CanView,
                    CanCreate = @CanCreate,
                    CanEdit = @CanEdit,
                    CanDelete = @CanDelete,
                    CanExport = @CanExport,
                    CanApprove = @CanApprove
                WHERE RoleId = @RoleId AND Module = @Module;
            END
            ELSE
            BEGIN
                INSERT INTO tblActionPermission (RoleId, Module, CanView, CanCreate, CanEdit, CanDelete, CanExport, CanApprove)
                VALUES (@RoleId, @Module, @CanView, @CanCreate, @CanEdit, @CanDelete, @CanExport, @CanApprove);
            END;
        ", new
        {
            RoleId = roleId,
            Module = module,
            request.CanView,
            request.CanCreate,
            request.CanEdit,
            request.CanDelete,
            request.CanExport,
            request.CanApprove
        });

        return Ok(new { message = "Permission updated successfully" });
    }

    [HttpPost("reset")]
    public IActionResult ResetToDefaults()
    {
        Data.DatabaseInitializer.Initialize(_connectionString);
        return Ok(new { message = "RBAC database restored to legacy migration defaults" });
    }
}
