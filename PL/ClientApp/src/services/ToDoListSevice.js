import api from './ApiService';
import { TIMEOUT } from "./ApiConstants";

const toDoListServiceEndpoint = 'todolist';

const getToDoListItems = async () => {
    try {
        const response = await api.get(toDoListServiceEndpoint, {
            headers: {
                contentType: "application/json"
            }
        });
        return {
            status: response.status,
            data: response.data
        }
    } catch (err){
        if(err.response){
            return {
                status: err.response.status,
            }
        } else {
            return {
                status: TIMEOUT
            }
        }
    }
}

const addToDoListItem = async title => {
    try {
        const toDoListItem = {
            title: title
        }
        const response = await api.post(toDoListServiceEndpoint, toDoListItem, {
            headers: {
                contentType: "application/json"
            }
        });
        return {
            status: response.status,
            data: response.data
        }
    } catch (err){
        if(err.response){
            return {
                status: err.response.status,
            }
        } else {
            return {
                status: TIMEOUT
            }
        }
    }
}

const editToDoListItem = async (id, title) => {
    try {
        const toDoListItem = {
            title: title
        }
        const toDoListItemEndPoint = `${toDoListServiceEndpoint}/${id}`;
        const response = await api.put(toDoListItemEndPoint, toDoListItem, {
            headers: {
                contentType: "application/json"
            }
        });
        return {
            status: response.status,
            data: response.data
        }
    } catch (err){
        if(err.response){
            return {
                status: err.response.status,
            }
        } else {
            return {
                status: TIMEOUT
            }
        }
    }
}

const deleteToDoListItem = async id => {
    try {
        const toDoListItemEndPoint = `${toDoListServiceEndpoint}/${id}`;
        const response = await api.delete(toDoListItemEndPoint, {
            headers: {
                contentType: "application/json"
            }
        });
        return {
            status: response.status,
            data: response.data
        }
    } catch (err){
        if(err.response){
            return {
                status: err.response.status,
            }
        } else {
            return {
                status: TIMEOUT
            }
        }
    }
}

const ToDoListSevice = {
    getToDoListItems,
    addToDoListItem,
    editToDoListItem,
    deleteToDoListItem
}

export default ToDoListSevice;