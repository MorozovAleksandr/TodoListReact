import TodoListItem from "./TodoListItem/TodoListItem.js";
import './TodoList.css'

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item;

        return (
            <li className='list-group-item' key={id}><TodoListItem {...itemProps} /></li>
        );
    })

    return (
        <ul className='list-group TodoList mt-2'>
            {elements}
        </ul>
    );
};

export default TodoList;