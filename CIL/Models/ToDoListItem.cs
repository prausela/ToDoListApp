using System;

namespace CIL.Models
{
    public class ToDoListItem
    {
        public long Id { get; set; }

        public String Title { get; set; }

        public ToDoListItem(String title)
        {
            Title = title;
        }
    }
}