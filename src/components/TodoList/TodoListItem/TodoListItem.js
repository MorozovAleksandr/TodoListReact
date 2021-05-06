import React from 'react';
import './TodoListItem.css';

export default class TodoListItem extends React.Component {

    constructor() {
        super();
        this.state = {
            done: false,
        }
    }

    onLabelClick = () => {
        this.state.done ? this.setState({ done: false }) : this.setState({ done: true });
    }

    render() {
        const { label, important = false } = this.props;
        const { done } = this.state;

        let classNames = 'TodoListItem';
        if (done) {
            classNames += ' done';
        }

        const importantStyle = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bolder' : 'normal',
        };

        return (
            <div className={classNames}>
                <span className="TodoListItemText" onClick={this.onLabelClick} style={importantStyle}>{label}</span>
                <div>
                    <button type="button" className="btn btn-outline-success btn-sm">
                        <i className="bi bi-exclamation"></i>
                    </button>

                    <button type="button" className="btn btn-outline-danger btn-sm">
                        <i className="bi bi-x-octagon-fill"></i>
                    </button>
                </div>
            </div>
        );
    };
}