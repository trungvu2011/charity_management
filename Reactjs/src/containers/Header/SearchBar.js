import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchBar.scss';

class SearchBar extends Component {
    render() {
        return (
            <div className='search-bar-container'>
            <input type='text' className='search-bar-input' placeholder=' Tìm kiếm tên chiến dịch' style={{fontFamily: 'Helvetica, Arial, sans-serif'}}/>
            </div>
        )
    }
}

export default SearchBar;