import React from 'react';
import './AddTodoItem.css';

class AddTodoItem extends React.Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        });
    }

    render() {
        return (
            <form className="AddTodoItem d-flex" onSubmit={this.onSubmit}>
                <input type="text" onChange={this.onLabelChange} value={this.state.label} className="form-control" placeholder="What needs to be done" />
                <button className="btn btnAdd btn-outline-secondary">Add item</button>
            </form>
        )
    }
}

export default AddTodoItem;