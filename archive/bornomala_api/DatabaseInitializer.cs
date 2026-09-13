using Dapper;
using Microsoft.Data.SqlClient;

namespace Bornomala.Rbac.Api.Data;

public static class DatabaseInitializer
{
    public static void Initialize(string connectionString)
    {
        using var connection = new SqlConnection(connectionString);
        connection.Open();

        // 1. Create RBAC Tables if not present
        connection.Execute(@"
            IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'tblRole')
            BEGIN
                CREATE TABLE tblRole (
                    RoleId NVARCHAR(50) PRIMARY KEY,
                    RoleName NVARCHAR(100) NOT NULL,
                    RoleCode NVARCHAR(50) NOT NULL,
                    Description NVARCHAR(500) NULL,
                    Priority INT NOT NULL DEFAULT 5,
                    IsSystem BIT NOT NULL DEFAULT 0,
                    BadgeVariant NVARCHAR(20) NOT NULL DEFAULT 'secondary'
                );
            END;

            IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'tblUserRoleMapping')
            BEGIN
                CREATE TABLE tblUserRoleMapping (
                    UserId INT NOT NULL,
                    RoleId NVARCHAR(50) NOT NULL,
                    PRIMARY KEY (UserId, RoleId)
                );
            END;

            IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'tblActionPermission')
            BEGIN
                CREATE TABLE tblActionPermission (
                    RoleId NVARCHAR(50) NOT NULL,
                    Module NVARCHAR(50) NOT NULL,
                    CanView BIT NOT NULL DEFAULT 0,
                    CanCreate BIT NOT NULL DEFAULT 0,
                    CanEdit BIT NOT NULL DEFAULT 0,
                    CanDelete BIT NOT NULL DEFAULT 0,
                    CanExport BIT NOT NULL DEFAULT 0,
                    CanApprove BIT NOT NULL DEFAULT 0,
                    PRIMARY KEY (RoleId, Module)
                );
            END;
        ");

        // 2. Seed Default Roles
        connection.Execute(@"
            IF NOT EXISTS (SELECT 1 FROM tblRole WHERE RoleId = 'role_super_admin')
                INSERT INTO tblRole VALUES ('role_super_admin', 'Super Administrator', 'SUPER_ADMIN', 'Full system authorization across all branches and database engines.', 1, 1, 'danger');
            
            IF NOT EXISTS (SELECT 1 FROM tblRole WHERE RoleId = 'role_principal')
                INSERT INTO tblRole VALUES ('role_principal', 'Principal / Headmaster', 'PRINCIPAL', 'Executive academic head with approval power over results and admissions.', 2, 1, 'primary');

            IF NOT EXISTS (SELECT 1 FROM tblRole WHERE RoleId = 'role_academic_head')
                INSERT INTO tblRole VALUES ('role_academic_head', 'Academic Director', 'ACADEMIC_HEAD', 'Oversees curriculum, class scheduling, and teacher assignments.', 3, 0, 'info');

            IF NOT EXISTS (SELECT 1 FROM tblRole WHERE RoleId = 'role_teacher')
                INSERT INTO tblRole VALUES ('role_teacher', 'Senior Teacher / Faculty', 'TEACHER', 'Class attendance logging, course assignment, and exam marks entry.', 4, 0, 'success');

            IF NOT EXISTS (SELECT 1 FROM tblRole WHERE RoleId = 'role_accountant')
                INSERT INTO tblRole VALUES ('role_accountant', 'Chief Accountant', 'ACCOUNTANT', 'Fee collection, cash vouchers, bank reconciliations, and student dues.', 5, 0, 'warning');

            IF NOT EXISTS (SELECT 1 FROM tblRole WHERE RoleId = 'role_admission_officer')
                INSERT INTO tblRole VALUES ('role_admission_officer', 'Admission Desk Officer', 'ADMISSION_OFFICER', 'Student registration, document verification, and seat allocation.', 6, 0, 'secondary');
        ");

        // 3. Seed Default Permissions
        var modules = new[] { "Admissions", "Academics", "Examination", "Accounts", "HRM", "Administration" };
        foreach (var mod in modules)
        {
            // Super Admin: All true
            connection.Execute(@"
                IF NOT EXISTS (SELECT 1 FROM tblActionPermission WHERE RoleId = 'role_super_admin' AND Module = @Module)
                    INSERT INTO tblActionPermission VALUES ('role_super_admin', @Module, 1, 1, 1, 1, 1, 1);
            ", new { Module = mod });

            // Principal: View, Create, Edit, Export, Approve
            connection.Execute(@"
                IF NOT EXISTS (SELECT 1 FROM tblActionPermission WHERE RoleId = 'role_principal' AND Module = @Module)
                    INSERT INTO tblActionPermission VALUES ('role_principal', @Module, 1, 1, 1, 0, 1, 1);
            ", new { Module = mod });

            // Academic Head
            var isAcad = mod is "Academics" or "Examination" or "Admissions";
            connection.Execute(@"
                IF NOT EXISTS (SELECT 1 FROM tblActionPermission WHERE RoleId = 'role_academic_head' AND Module = @Module)
                    INSERT INTO tblActionPermission VALUES ('role_academic_head', @Module, 1, @IsAcad, @IsAcad, 0, @IsAcad, @IsAcad);
            ", new { Module = mod, IsAcad = isAcad ? 1 : 0 });

            // Teacher
            var isTeacher = mod is "Academics" or "Examination";
            connection.Execute(@"
                IF NOT EXISTS (SELECT 1 FROM tblActionPermission WHERE RoleId = 'role_teacher' AND Module = @Module)
                    INSERT INTO tblActionPermission VALUES ('role_teacher', @Module, @IsTeacher, @IsTeacher, @IsTeacher, 0, 0, 0);
            ", new { Module = mod, IsTeacher = isTeacher ? 1 : 0 });

            // Accountant
            var isAcc = mod is "Accounts";
            connection.Execute(@"
                IF NOT EXISTS (SELECT 1 FROM tblActionPermission WHERE RoleId = 'role_accountant' AND Module = @Module)
                    INSERT INTO tblActionPermission VALUES ('role_accountant', @Module, @IsAcc, @IsAcc, @IsAcc, 0, @IsAcc, 0);
            ", new { Module = mod, IsAcc = isAcc ? 1 : 0 });

            // Admission Officer
            var isAdm = mod is "Admissions";
            connection.Execute(@"
                IF NOT EXISTS (SELECT 1 FROM tblActionPermission WHERE RoleId = 'role_admission_officer' AND Module = @Module)
                    INSERT INTO tblActionPermission VALUES ('role_admission_officer', @Module, @IsAdm, @IsAdm, @IsAdm, 0, @IsAdm, 0);
            ", new { Module = mod, IsAdm = isAdm ? 1 : 0 });
        }

        // 4. Ensure Super Admin User exists & mapped
        connection.Execute(@"
            -- Check if admin exists
            IF EXISTS (SELECT 1 FROM tblUser WHERE LoginName = 'admin' OR UserId = 1)
            BEGIN
                DECLARE @AdminId INT = (SELECT TOP 1 UserId FROM tblUser WHERE LoginName = 'admin' OR UserId = 1);
                IF NOT EXISTS (SELECT 1 FROM tblUserRoleMapping WHERE UserId = @AdminId)
                BEGIN
                    INSERT INTO tblUserRoleMapping VALUES (@AdminId, 'role_super_admin');
                END
                ELSE
                BEGIN
                    UPDATE tblUserRoleMapping SET RoleId = 'role_super_admin' WHERE UserId = @AdminId;
                END
            END;

            -- Check if dedicated superadmin exists
            IF NOT EXISTS (SELECT 1 FROM tblUser WHERE LoginName = 'superadmin')
            BEGIN
                DECLARE @MaxId INT = ISNULL((SELECT MAX(UserId) FROM tblUser), 0) + 1;
                INSERT INTO tblUser (UserId, UserName, UserType, LoginName, Password, UserStatus, Email, ContactNo, SchoolName)
                VALUES (@MaxId, 'MD Nazrul Islam (Super Admin)', 'SuperAdmin', 'superadmin', 'Admin@123', 'active', 'superadmin@bornomala.edu.bd', '+880 1760 150555', 'Main Campus (Dania)');

                INSERT INTO tblUserRoleMapping (UserId, RoleId) VALUES (@MaxId, 'role_super_admin');
            END;

            -- Default any unmapped legacy users to role_teacher
            INSERT INTO tblUserRoleMapping (UserId, RoleId)
            SELECT u.UserId, 'role_teacher'
            FROM tblUser u
            WHERE NOT EXISTS (SELECT 1 FROM tblUserRoleMapping m WHERE m.UserId = u.UserId);
        ");
    }
}
