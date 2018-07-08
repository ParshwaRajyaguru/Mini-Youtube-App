import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm: ''};
        this.onhandleInputChange = this.onhandleInputChange.bind(this);
    }

    onhandleInputChange(e) {
        this.setState({searchTerm: e.target.value});
        this.props.onSearchTermChange(this.state.searchTerm);
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value = {this.state.searchTerm}
                    onChange = {this.onhandleInputChange}
                />
            </div>
        );
    }
}


export default SearchBar;