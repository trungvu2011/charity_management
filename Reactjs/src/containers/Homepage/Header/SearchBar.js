import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // Import withRouter
import './SearchBar.scss';

class SearchBar extends Component {
    state = {
        searchQuery: ''
    };

    handleSearch = () => {
        const { searchQuery } = this.state;
        const { history } = this.props; // Dùng history từ withRouter
        if (searchQuery.trim()) {
            history.push(`/campaigns?search=${encodeURIComponent(searchQuery)}`);
        }
    };

    handleInputChange = (e) => {
        this.setState({ searchQuery: e.target.value });
    };

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.handleSearch();
        }
    };

    render() {
        return (
            <div className='search-bar-container'>
                <input
                    type='text'
                    className='search-bar-input'
                    placeholder='Tìm kiếm tên chiến dịch'
                    style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                    value={this.state.searchQuery}
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyDown}
                />
                <i className="fas fa-search" onClick={this.handleSearch}></i>
            </div>
        );
    }
}

export default withRouter(SearchBar); // Gói component với withRouter
