import React from 'react';
import './ItemStatusFilter.css';

export default class ItemStatusFiltre extends React.Component {
    render() {
        return (
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-outline-primary" onClick={() => this.props.changeFilterFlag('all')}>All</button>
                <button type="button" className="btn btn-outline-primary" onClick={() => this.props.changeFilterFlag('active')}>Active</button>
                <button type="button" className="btn btn-outline-primary" onClick={() => this.props.changeFilterFlag('done')}>Done</button>
            </div>
        );
    }
}
