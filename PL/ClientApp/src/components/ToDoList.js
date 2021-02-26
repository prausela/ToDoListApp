import {useState} from "react";
import {Card, Button} from 'react-bootstrap';
import ToDoListItem from "./ToDoListItem";

const ToDoList = () => {
    const [items, setItems] = useState([
        {id: 0, title: "Lavar la ropa"}
    ]);
    
    const [counter, setCounter] = useState(1);
    const [addingItem, setAddingItem] = useState(false);
    
    const addItem       = title => {
        const newItems = [
            ...items,
            {id: counter, title: title}
        ];
        setCounter(counter+1);
        setItems(newItems);
        setAddingItem(false);
    }
    
    const editItem      = (id, newTitle) => {
        const newItems = [...items];
        let item       = newItems.filter(item => item.id === id);
        item.title     = newTitle;
        setItems(newItems);
    }
    
    const deleteItem    = id => {
        let newItems = [...items];
        newItems     = newItems.filter(item => item.id !== id);
        setItems(newItems);
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
                <Card.Text>
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
                </Card.Text>
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