using System.Collections.Generic;
using CIL.Interfaces.Repositories;
using CIL.Interfaces.Services;
using CIL.Models;

namespace BLL.Services
{
    public class ToDoListService : IToDoListService
    {
        private readonly IToDoListRepository _repository;

        public ToDoListService(IToDoListRepository repository)
        {
            _repository = repository;
        }
        
        public IEnumerable<ToDoListItem> GetItems()
        {
            return _repository.GetItems();
        }

        public ToDoListItem AddItem(string title)
        {
            return _repository.AddItem(title);
        }

        public ToDoListItem EditItem(long id, string newTitle)
        {
            return _repository.EditItem(id, newTitle);
        }

        public void RemoveItem(long id)
        {
            _repository.RemoveItem(id);
        }
    }
}