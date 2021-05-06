import React from 'react';
import './TodoListItem.css';

export default class TodoListItem extends React.Component {

    constructor() {
        super();
        this.state = {
            done: false,
            important: false,
        }
    }

    onLabelClick = () => {
        this.setState((state) => {
            return {
                done: !state.done,
            }
        })
    }

    onMarkImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important,
            }
        })
    }

    render() {
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;

        let classNames = 'TodoListItem';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <div className={classNames}>
                <span className="TodoListItemText" onClick={this.onLabelClick}>{label}</span>
                <div>
                    <button type="button" onClick={this.onMarkImportant} className="btn btn-outline-success btn-sm">
                        <i className="bi bi-exclamation"></i>
                    </button>

                    <button type="button" onClick={onDeleted} className="btn btn-outline-danger btn-sm">
                        <i className="bi bi-x-octagon-fill"></i>
                    </button>
                </div>
            </div>
        );
    };
}