import {Form} from 'react-bootstrap';

const ToDoListItemContent = props => {
    const { id, title, setTitle, mode, setMode, addItem, editItem } = props;
    
    const submit = {
        add: () => addItem(title),
        edit: () => editItem(id, title)
    }
    
    const submitWithEnterKey = event => {
        if(event.key && event.key === 'Enter'){
            submit[mode]();
            setMode('view');
        }
    }
    
    const editable = (
        <Form.Control 
            type="text" 
            placeholder="Enter task title" 
            value={title}
            onChange={event => setTitle(event.target.value)} 
            onKeyUp={submitWithEnterKey}
        />);
    
    const editableModes = new Set(["add", "edit"]);
    
    return editableModes.has(mode) ? (
        editable
    ) : (
        title
    );
}

export default ToDoListItemContent;