import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleOnChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })

        try {
            let data = await handleLoginApi(this.state.email, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                localStorage.setItem('userInfo', JSON.stringify(data.user));
                this.props.navigate('/home');
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })

                }
            }
        }
    }

    handleShowPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })

    }

    render() {
        return (
            <div className="login-container">
                <div className='left-container'>
                    <div className='content-left'></div>
                </div>
                <div className='right-container'>
                    <div className='box-login'>
                        <div className='login-title'>Đăng nhập</div>
                        <div className='input-box'>
                            <label>Email</label>
                            <input type='text' placeholder='Nhập địa chỉ email' value={this.state.email} onChange={(event) => this.handleOnChangeEmail(event)} />
                        </div>
                        <div className='input-box'>
                            <label>Mật khẩu</label>
                            <input type={this.state.isShowPassword ? 'text' : 'password'} placeholder='Nhập mật khẩu' value={this.state.password} onChange={(event) => this.handleOnChangePassword(event)} />
                            <span
                                onClick={() => { this.handleShowPassword() }}
                            >
                                <i className={this.state.isShowPassword ? "far fa-eye" : "far fa-eye-slash"} />
                            </span>
                        </div>
                        <div className='forgot-password'>
                            <a href='/forgot-password'>Quên mật khẩu</a>
                        </div>
                        <button className='login-button' onClick={this.handleLogin}>Đăng nhập</button>
                        <div className='register-container'>
                            <span>Bạn chưa có tài khoản?</span>
                            <a href='/register'>Đăng ký ngay</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
