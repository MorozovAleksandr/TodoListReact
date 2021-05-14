import './AddTodoItem.css';

const AddTodoItem = ({ onAddItem }) => {
    return (
        <div className="AddTodoItem">
            <button onClick={() => onAddItem('hi')} className="btn btn-outline-secondary">Add item</button>
        </div>
    )
}

export default AddTodoItem;