import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import SearchBar from './SearchBar';

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: null,
            isMenuOpen: false,
        };
    }

    componentDidMount() {
        // Lấy thông tin người dùng từ localStorage
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            this.setState({ userInfo: JSON.parse(userInfo) });
        }
    }

    handleToggleMenu = () => {
        this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
    };

    handleLogout = () => {
        // Xóa thông tin người dùng khỏi localStorage và cập nhật Redux
        localStorage.removeItem('userInfo');
        this.setState({ userInfo: null });
        // Thực hiện thêm hành động Redux nếu cần
        // this.props.processLogout();
        window.location.reload(); // Reload lại trang hoặc điều hướng
    };

    handleNavigateHome = () => {
        window.location.href = '/home';
    };

    render() {
        const { userInfo, isMenuOpen } = this.state;
        const isLoggedIn = !!userInfo; // Kiểm tra đăng nhập

        return (
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>
                        <div className='header-logo' onClick={this.handleNavigateHome}></div>
                    </div>
                    <div className='center-content'>
                        <ul className='header-nav'>
                            <li><a href='/'>Giới thiệu</a></li>
                            <li><a href='/campaigns'>Chiến dịch</a></li>
                            <li><a href='/create-campaign'>Tạo chiến dịch mới</a></li>
                        </ul>
                    </div>
                    <div className='right-content'>
                        <div className='header-search'>
                            <SearchBar />
                        </div>

                        {isLoggedIn && userInfo ? (
                            <>
                                <div>
                                    <i className='fas fa-bell bell-noti'></i>
                                </div>
                                <div className='user-menu'>
                                    <i className='fas fa-user user-avatar'
                                        onClick={this.handleToggleMenu}>

                                    </i>
                                    {isMenuOpen && (
                                        <div className='menu-dropdown'>
                                            <ul>
                                                <li>
                                                    <a href='/user-edit'>Chỉnh sửa thông tin</a>
                                                </li>
                                                <li onClick={this.handleLogout}>
                                                    Đăng xuất
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </>

                        ) : (
                            <div className='header-login'>
                                <a href='/login'>Đăng nhập</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

export default connect(mapStateToProps)(HomeHeader);
