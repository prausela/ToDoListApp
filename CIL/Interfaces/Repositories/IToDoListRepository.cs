using System;
using System.Collections.Generic;
using CIL.Models;

namespace CIL.Interfaces.Repositories
{
    public interface IToDoListRepository
    {
        IEnumerable<ToDoListItem> GetItems();
        ToDoListItem AddItem(String title);
        ToDoListItem EditItem(long id, String newTitle);
        void RemoveItem(long id);
    }
}