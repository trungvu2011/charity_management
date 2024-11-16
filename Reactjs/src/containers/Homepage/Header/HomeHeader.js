import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import SearchBar from '../SearchBar';

class HomeHeader extends Component {

    render() {
        return (
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>
                        <div className='header-logo'></div>
                    </div>
                    <div className='center-content'>
                        <ul className='header-nav'>
                            <li><a href=''>Giới thiệu</a></li>
                            <li><a c href=''>Chiến dịch</a></li>
                            <li><div className='nav-campaign' href=''></div></li>
                        </ul>
                    </div>
                    <div className='right-content'>
                        <div className='header-search'>
                            <SearchBar/>
                        </div>
                        <div className='header-login'>
                            <a href=''>Đăng nhập</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
