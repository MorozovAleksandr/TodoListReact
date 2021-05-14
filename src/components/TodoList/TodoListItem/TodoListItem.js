import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ label, onDeleted, onToggleImportant, onToggleDone, done, important }) => {

    let classNames = 'TodoListItem';
    if (done) {
        classNames += ' done';
    }

    if (important) {
        classNames += ' important';
    }

    return (
        <div className={classNames}>
            <span className="TodoListItemText" onClick={onToggleDone}>{label}</span>
            <div>
                <button type="button" onClick={onToggleImportant} className="btn btn-outline-success btn-sm">
                    <i className="bi bi-exclamation"></i>
                </button>

                <button type="button" onClick={onDeleted} className="btn btn-outline-danger btn-sm">
                    <i className="bi bi-x-octagon-fill"></i>
                </button>
            </div>
        </div>
    );
}

export default TodoListItem;