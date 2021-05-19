import './App.css';

import AppHeader from '../AppHeader/AppHeader.js';
import ItemStatusFilte from '../ItemStatusFilter/ItemStatusFilter.js';
import SearchPanel from '../SearchPanel/SearchPanel.js';
import TodoList from '../TodoList/TodoList.js';
import AddTodoItem from '../AddTodoItem/AddTodoItem.js';
import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.maxId = 0;
        this.state = {
            todoData: [
                this.createTodoItem('Drink beer'),
                this.createTodoItem('Drink vodka'),
                this.createTodoItem('Drink Juice')
            ],
            FilterFlag: 'all',
            term: ''
        }
    }

    createTodoItem = (label) => {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState((state) => {
            const idx = state.todoData.findIndex(el => el.id === id);
            const before = state.todoData.slice(0, idx);
            const after = state.todoData.slice(idx + 1);
            const newTodoData = [...before, ...after];
            return {
                todoData: newTodoData
            }
        })
    }

    addItem = (item) => {
        const newTodoItem = this.createTodoItem(item);
        this.setState(({ todoData }) => {
            const newTodoData = [...todoData, newTodoItem];
            return {
                todoData: newTodoData
            }
        })
    }

    toggleProperty = (id, property) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex(el => el.id === id);
            const oldItem = todoData[idx];
            const newItem = { ...oldItem, [property]: !oldItem[property] }
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);
            const newTodoData = [...before, newItem, ...after];

            return {
                todoData: newTodoData
            }
        })
    }

    onToggleImportant = (id) => {
        this.toggleProperty(id, 'important');
    }

    onToggleDone = (id) => {
        this.toggleProperty(id, 'done');
    }

    onSearchChange = (term) => {
        this.setState({ term });
    }

    onChangeFilterFlag = (FilterFlag) => {
        this.setState({ FilterFlag });
    }

    search(items, term) {
        if (term.length === 0) return items;

        return items.filter((el) => {
            return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    render() {
        const visibleItems = this.search(this.state.todoData, this.state.term);

        const doneCount = this.state.todoData.filter(el => el.done).length;
        const toDoCount = this.state.todoData.length - doneCount;

        return (
            <div className='container-sm'>
                <AppHeader toDo={toDoCount} done={doneCount} />
                <SearchPanel onSearchChange={this.onSearchChange} />
                <ItemStatusFilte onChangeFilterFlag={this.onChangeFilterFlag} />
                <TodoList onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone} FilterFlag={this.state.FilterFlag} onDeleted={this.deleteItem} todos={visibleItems} />
                <AddTodoItem onAddItem={this.addItem} />
            </div>
        );
    }
};

export default App;