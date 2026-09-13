using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Bornomala.Rbac.Api.Data;

var builder = WebApplication.CreateBuilder(args);

// Add Controllers
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

// CORS for Frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.WithOrigins(
            "http://localhost:3006", 
            "http://127.0.0.1:3006",
            "http://localhost:3005",
            "http://127.0.0.1:3005",
            "http://localhost:3000",
            "http://127.0.0.1:3000"
        )
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials();
    });
});

// JWT Authentication
var jwtSecret = builder.Configuration["Jwt:Secret"] ?? "BornomalaAcademicSuperSecretKey2026!StrongEncryption";
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecret)),
            ValidateIssuer = false,
            ValidateAudience = false,
            ClockSkew = TimeSpan.Zero
        };
    });

var app = builder.Build();

// Auto-initialize and seed MSSQL Database
var connectionString = app.Configuration.GetConnectionString("DefaultConnection") 
    ?? "Server=localhost,1433;Database=EducationDB_Legacy;User Id=sa;Password=Bornomala@Secure2026;TrustServerCertificate=True;";

try
{
    Console.WriteLine("[Bornomala.Rbac.Api] Initializing MSSQL database tables and legacy RBAC seed...");
    DatabaseInitializer.Initialize(connectionString);
    Console.WriteLine("[Bornomala.Rbac.Api] ✓ Database initialized successfully.");
}
catch (Exception ex)
{
    Console.WriteLine($"[Bornomala.Rbac.Api] ⚠️ Database initialization notice: {ex.Message}");
}

app.UseCors("AllowAll");
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

// Health Endpoint
app.MapGet("/api/health", () => Results.Ok(new
{
    Status = "Online",
    Framework = ".NET 9.0 ASP.NET Core Web API",
    Database = "Microsoft SQL Server 2022 (EducationDB_Legacy)",
    Architecture = "Bornomala Academic Monolith Modernization Phase 1 RBAC",
    Timestamp = DateTime.UtcNow
}));

Console.WriteLine("[Bornomala.Rbac.Api] Server running and listening for requests.");
app.Run();
