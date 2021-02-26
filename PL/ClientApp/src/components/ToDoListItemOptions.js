import {Button} from "react-bootstrap";

const ToDoListItemOptions = props => {
    const { id, title, mode, setMode, addItem, editItem, deleteItem } = props;
    
    const viewModeButtons = [
        {
            id: 0, 
            text: "Edit", 
            variant:"warning", 
            action: () => setMode("edit")
        },
        {
            id: 1,
            text: "Delete",
            variant: "danger",
            action: () => deleteItem(id)
        }
    ];
    
    const addModeButtons  = [
        {
            id: 2,
            text: "Add",
            variant: "success",
            action: () => addItem(title)
        }  
    ];

    const editModeButtons = [
        {
            id: 3,
            text: "Save Changes",
            variant: "info",
            action: () => editItem(id,title)
        }
    ];
    
    const buttons = {
        view: viewModeButtons,
        add: addModeButtons,
        edit: editModeButtons
    }
    
    return (
        <>
            {
                buttons[mode].map(button => (
                    <Button
                        className="ml-2"
                        variant={button.variant}
                        onClick={button.action}
                        key={button.id}
                    >
                        {button.text}
                    </Button>
                ))
            }
        </>
    );
}

export default ToDoListItemOptions;