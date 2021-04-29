using System.IO;
using CIL.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace DAL
{
    public class DatabaseContext : DbContext
    {
        public DbSet<ToDoListItem> Items { get; set; }
        
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) {}
    }
    
    
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<DatabaseContext> 
    { 
        public DatabaseContext CreateDbContext(string[] args) 
        { 
            IConfigurationRoot configuration = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile(@Directory.GetCurrentDirectory() + "/../PL/appsettings.json").Build(); 
            var builder = new DbContextOptionsBuilder<DatabaseContext>(); 
            var connectionString = configuration.GetConnectionString("DatabaseConnection"); 
            builder.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)); 
            return new DatabaseContext(builder.Options); 
        } 
    }
}