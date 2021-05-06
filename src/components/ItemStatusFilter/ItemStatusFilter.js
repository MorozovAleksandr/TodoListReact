import React from 'react';
import './ItemStatusFilter.css';

export default class ItemStatusFiltre extends React.Component {
    render() {
        return (
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-outline-primary">All</button>
                <button type="button" className="btn btn-outline-primary">Active</button>
                <button type="button" className="btn btn-outline-primary">Done</button>
            </div>
        );
    }
}
