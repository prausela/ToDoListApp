using System;
using System.Collections.Generic;
using CIL.Interfaces.Services;
using CIL.Models;
using Microsoft.AspNetCore.Mvc;
using PL.Dtos;

namespace PL.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ToDoListController : ControllerBase
    {
        private readonly IToDoListService _toDoListService;

        public ToDoListController(IToDoListService toDoListService)
        {
            _toDoListService = toDoListService;
        }

        [HttpGet]
        public IEnumerable<ToDoListItem> GetItems()
        {
            return _toDoListService.GetItems();
        }

        [HttpPost]
        public ToDoListItem AddItem([FromBody] ToDoListItemDto dto)
        {
            return _toDoListService.AddItem(dto.Title);
        }

        [HttpPut]
        [Route("{id}")]
        public ToDoListItem EditItem(long id, [FromBody] ToDoListItemDto dto)
        {
            return _toDoListService.EditItem(id, dto.Title);
        }

        [HttpDelete]
        [Route("{id}")]
        public void RemoveItem(long id)
        {
            _toDoListService.RemoveItem(id);
        }
    }
}