import TodoListItem from "./TodoListItem/TodoListItem.js";
import './TodoList.css'

const TodoList = ({ todos, onDeleted }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li className='list-group-item' key={id}><TodoListItem {...itemProps} onDeleted={() => onDeleted(id)} /></li>
        );
    })

    return (
        <ul className='list-group TodoList mt-2'>
            {elements}
        </ul>
    );
};

export default TodoList;