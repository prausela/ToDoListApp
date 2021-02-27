using CIL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class DatabaseContext : DbContext
    {
        public DbSet<ToDoListItem> Items { get; set; }
        
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) {}
    }
}