import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import SearchBar from './SearchBar';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: null,
            isMenuOpen: false,
            isNotiOpen: false,
            notifications: [],
            searchQuery: '',
        };
    }

    handleSearch = () => {
        const { searchQuery } = this.state;
        if (searchQuery.trim()) {
            const query = encodeURIComponent(searchQuery);
            this.props.history.push(`/campaigns?search=${query}`);
        }
    };

    componentDidMount() {
        // Lấy thông tin người dùng từ localStorage
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            this.setState({ userInfo: JSON.parse(userInfo) });
        }

        const parsedUserInfo = JSON.parse(userInfo);
        const userId = parsedUserInfo ? parsedUserInfo.user_id : null;

        // Lấy thông tin người dùng từ server
        axios.get('http://localhost:8080/api/get-notifications', {
            params: {
                user_id: userId
            }
        })
            .then(response => {
                this.setState({ notifications: response.data.data });
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
                            <li><a href='/home'>Trang chủ</a></li>
                            <li><a href='/campaigns'>Chiến dịch</a></li>
                        </ul>
                    </div>
                    <div className='right-content'>
                        <button
                            className='rounded-lg h-12 w-40 text-white bg-[linear-gradient(88.87deg,_#ff6c57_-5.14%,_#ff922e_119.29%)] text-lg font-semibold'
                            onClick={
                                () => {
                                    window.location.href = '/create-campaign';
                                }
                            }
                        >
                            Tạo chiến dịch
                        </button>

                        <div className='header-search'>
                            <SearchBar
                                onChange={(e) => this.setState({ searchQuery: e.target.value })}
                                onKeyPress={(e) => e.key === 'Enter' && this.handleSearch()}
                            />
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
