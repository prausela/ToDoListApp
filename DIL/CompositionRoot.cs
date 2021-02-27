using BLL.Services;
using CIL.Interfaces.Repositories;
using CIL.Interfaces.Services;
using DAL;
using DAL.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace DIL
{
    public class CompositionRoot
    {
        public CompositionRoot() { }

        public static void InjectDependencies(IServiceCollection services)
        {
            services.AddDbContext<DatabaseContext>(opts => opts.UseInMemoryDatabase("database"));
            services.AddScoped<DatabaseContext>();
            services.AddScoped<IToDoListService, ToDoListService>();
            services.AddScoped<IToDoListRepository, ToDoListRepository>();
        }
    }
}