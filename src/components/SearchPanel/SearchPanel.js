import React from 'react';
import './SearchPanel.css'

class SearchPanel extends React.Component {

    state = {
        term: ''
    }

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    }

    render() {
        return (
            <input onChange={this.onSearchChange} className="SearchPanel" placeholder='Search' value={this.state.term} />
        )
    };
}

export default SearchPanel;