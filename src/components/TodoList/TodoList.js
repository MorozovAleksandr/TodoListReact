import TodoListItem from "./TodoListItem/TodoListItem.js";
import './TodoList.css'

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone, FilterFlag }) => {

    const filteredTodos = (FilterFlag === 'all') ? todos : (FilterFlag === 'active') ? todos.filter((el) => !el.done) : (FilterFlag === 'done') ? todos.filter((el) => el.done) : todos;

    const elements = filteredTodos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li className='list-group-item' key={id}><TodoListItem {...itemProps} onDeleted={() => onDeleted(id)} onToggleImportant={() => onToggleImportant(id)} onToggleDone={() => onToggleDone(id)} /></li>
        );
    })

    return (
        <ul className='list-group TodoList mt-2'>
            {elements}
        </ul>
    );
};

export default TodoList;