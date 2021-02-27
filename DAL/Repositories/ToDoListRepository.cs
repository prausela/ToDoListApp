using System.Collections.Generic;
using System.Linq;
using CIL.Interfaces.Repositories;
using CIL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public class ToDoListRepository : IToDoListRepository
    {
        private readonly DatabaseContext _context;

        private readonly DbSet<ToDoListItem> _items;

        public ToDoListRepository(DatabaseContext context)
        {
            _context = context;
            _items   = context.Set<ToDoListItem>();
        }
        
        public IEnumerable<ToDoListItem> GetItems()
        {
            return _items.AsEnumerable();
        }

        public ToDoListItem AddItem(string title)
        {
            ToDoListItem newItem = new ToDoListItem(title);
            _items.Add(newItem);
            _context.SaveChanges();
            return newItem;
        }

        public ToDoListItem EditItem(long id, string newTitle)
        {
            ToDoListItem item = _items.SingleOrDefault(i => i.Id == id);
            if (item != null)
            {
                item.Title = newTitle;
                _items.Update(item);
                _context.SaveChanges();
            }
            return item;
        }

        public void RemoveItem(long id)
        {
            ToDoListItem item = _items.SingleOrDefault(i => i.Id == id);
            if (item != null)
            {
                _items.Remove(item);
                _context.SaveChanges();
            }
        }
    }
}