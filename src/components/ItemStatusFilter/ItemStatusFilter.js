import React from 'react';
import './ItemStatusFilter.css';

export default class ItemStatusFiltre extends React.Component {
    render() {
        return (
            <div className="btn-group" role="group">
                <button type="button" className="btnFilter btn btn-outline-primary" onClick={() => this.props.onChangeFilterFlag('all')}>All</button>
                <button type="button" className="btnFilter btn btn-outline-primary" onClick={() => this.props.onChangeFilterFlag('active')}>Active</button>
                <button type="button" className="btnFilter btn btn-outline-primary" onClick={() => this.props.onChangeFilterFlag('done')}>Done</button>
            </div>
        );
    }
}
