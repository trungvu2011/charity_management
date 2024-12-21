import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import SearchBar from './SearchBar';
import axios from 'axios';

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: null,
            isMenuOpen: false,
            isNotiOpen: false,
            notifications: [],
        };
    }

    componentDidMount() {
        // Lấy thông tin người dùng từ localStorage
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            this.setState({ userInfo: JSON.parse(userInfo) });
        }

        const parsedUserInfo = JSON.parse(userInfo);
        const userId = parsedUserInfo ? parsedUserInfo.user_id : null;
        console.log(userId);

        // Lấy thông tin người dùng từ server
        axios.get('http://localhost:8080/api/get-notifications', {
            params: {
                user_id: userId
            }
        })
            .then(response => {
                this.setState({ notifications: response.data.data });
                console.log('notifications', this.state.notifications);
            })
            .catch(error => {
                console.log(error);
            });

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

    renderNotifications = () => {
        const { notifications } = this.state;
        const sortedNotifications = [...notifications].reverse();
        return (
            <div className='noti-dropdown'>
                <div className='noti-header'>
                    <h4>Thông báo</h4>
                </div>
                <ul>
                    {sortedNotifications.map((noti, index) => (
                        <li key={index}>
                            <a href={`/campaign/id=${noti.campaign_id}`}>Chiến dịch
                                <span className='text-red-700'>{' ' + noti.campaign + ' '}</span>
                                đã kết thúc</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    render() {
        const { userInfo, isMenuOpen, isNotiOpen } = this.state;
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
                            <li><div className='nav-campaign' href=''></div></li>
                        </ul>
                    </div>
                    <div className='right-content'>
                        <div className='header-search'>
                            <SearchBar />
                        </div>

                        {isLoggedIn && userInfo ? (
                            <>
                                <div className='header-noti'>
                                    <i className='fas fa-bell bell-noti'
                                        onClick={() => this.setState((prevState) => ({ isNotiOpen: !prevState.isNotiOpen }))}
                                    ></i>
                                    {isNotiOpen && (
                                        this.renderNotifications()
                                    )}
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
