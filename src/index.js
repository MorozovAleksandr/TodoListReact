import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader/AppHeader.js';
import SearchPanel from './components/SearchPanel/SearchPanel.js';
import TodoList from './components/TodoList/TodoList.js';

const App = () => {

    const todoData = [
        { label: 'Drink beer', important: false },
        { label: 'Drink vodka', important: false },
        { label: 'Drink juice', important: true }
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));