import {useEffect, useState} from "react";
import {Card, Button} from 'react-bootstrap';
import ToDoListItem from "./ToDoListItem";
import ToDoListSevice from "../services/ToDoListSevice";
import {OK} from '../services/ApiConstants';

const ToDoList = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        ToDoListSevice.getToDoListItems().then(response => {
            if(response.status === OK){
                setItems(response.data);
            }
        }
    )}, []);
    
    const [counter, setCounter] = useState(1);
    const [addingItem, setAddingItem] = useState(false);
    
    const addItem       = title => {
        const newItem  = {
            id: counter, 
            title: title
        }
        setAddingItem(false);
        const newItems = [
            ...items,
            newItem
        ];
        ToDoListSevice.addToDoListItem(title).then(() => {
            setCounter(counter+1);
            setItems(newItems);
        })
    }
    
    const editItem      = (id, newTitle) => {
        const newItems = [...items];
        let item       = newItems.filter(item => item.id === id);
        item.title     = newTitle;
        ToDoListSevice.editToDoListItem(id, newTitle).then(() => setItems(newItems));
    }
    
    const deleteItem    = id => {
        let newItems = [...items];
        newItems     = newItems.filter(item => item.id !== id);
        ToDoListSevice.deleteToDoListItem(id).then(() => setItems(newItems));        
    }
    
    const itemMethods = {
        addItem,
        editItem,
        deleteItem
    }
    
    return (
        <Card className="m-5">
            <Card.Body>
                <Card.Title>To Do List</Card.Title>
                <div className="my-2">
                    {
                        items.map(item => (
                                <ToDoListItem
                                    className="mt-2"
                                    id={item.id}
                                    title={item.title}
                                    mode="view"
                                    key={item.id}
                                    {...itemMethods}
                                />
                            )
                        )
                    }
                    {
                        addingItem ? (
                            <ToDoListItem
                                className="mt-2"
                                title=""
                                mode="add"
                                {...itemMethods}
                            />
                        ) : undefined
                    }
                </div>
                {
                    !addingItem ? (
                        <Button
                            variant="primary"
                            onClick={() => setAddingItem(true)}
                            block
                        >
                            New Task
                        </Button>
                    ) : undefined
                }
            </Card.Body>
        </Card>
    );
}

export default ToDoList;