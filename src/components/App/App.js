import './App.css';

import AppHeader from '../AppHeader/AppHeader.js';
import ItemStatusFilte from '../ItemStatusFilter/ItemStatusFilter.js';
import SearchPanel from '../SearchPanel/SearchPanel.js';
import TodoList from '../TodoList/TodoList.js';

const App = () => {

    const todoData = [
        { label: 'Drink beer', important: false, id: 0 },
        { label: 'Drink vodka', important: false, id: 1 },
        { label: 'Drink juice', important: true, id: 2 }
    ];

    return (
        <div className='container-sm'>
            <AppHeader toDo={1} done={3} />
            <SearchPanel />
            <ItemStatusFilte />
            <TodoList onDeleted={(id) => console.log(id)} todos={todoData} />
        </div>
    );
};

export default App;