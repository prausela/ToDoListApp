using BLL.Services;
using CIL.Interfaces.Repositories;
using CIL.Interfaces.Services;
using DAL;
using DAL.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DIL
{
    public static class CompositionRoot
    {
        public static void InjectDependencies(IServiceCollection services, IConfiguration configuration)
        {
            string connectionString = configuration.GetConnectionString("DatabaseConnection");
            services.AddDbContext<DatabaseContext>(options => options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));
            services.AddScoped<DatabaseContext>();
            services.AddScoped<IToDoListService, ToDoListService>();
            services.AddScoped<IToDoListRepository, ToDoListRepository>();
        }
    }
}