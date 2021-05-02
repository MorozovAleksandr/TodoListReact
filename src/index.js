import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    return (
        <ul>
            <li>Learn Reactik</li>
            <li>Build awesome App</li>
        </ul>
    );
};

const AppHeader = () => <h1>My todo list</h1>;

const SearchPanel = () => <input placeholder='search' />;

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));