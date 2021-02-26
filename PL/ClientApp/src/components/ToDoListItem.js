import ToDoListItemContent from "./ToDoListItemContent";
import ToDoListItemOptions from "./ToDoListItemOptions";
import React, {useState} from "react";

const ToDoListItem = (props) => {
    const { id, title: initialTitle, mode: initialMode, addItem: superAddItem, editItem: superEditItem, deleteItem, className } = props;
    
    const [ title, setTitle] = useState(initialTitle);
    const [ mode, setMode ] = useState(initialMode);
    
    const addItem = title => {
        superAddItem(title);
        setMode('view');
    }
    
    const editItem = (id, title) => {
        superEditItem(id, title);
        setMode('view');
    }
    
    return (
        <div className={ "d-flex align-items-center " + className }>
            <div className="flex-grow-1">
                <ToDoListItemContent 
                    id={id}
                    title={title}
                    setTitle={setTitle}
                    mode={mode}
                    setMode={setMode}
                    addItem={addItem}
                    editItem={editItem}
                />
            </div>
            <div>
                <ToDoListItemOptions 
                    id={id}
                    title={title}
                    mode={mode}
                    setMode={setMode}
                    addItem={addItem}
                    editItem={editItem}
                    deleteItem={deleteItem}
                />
            </div>
        </div>
    );
}

export default ToDoListItem;