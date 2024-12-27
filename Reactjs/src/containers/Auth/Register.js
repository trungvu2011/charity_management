import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import './Register.scss';
import { FormattedMessage } from 'react-intl';
import { handleRegisterApi } from '../../services/userService';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            phonenumber: '',
            address: '',
            userType: '',
            isShowPassword: false,
            errMessage: ''
        };
    }

    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleRegister = async () => {
        const { email, password, firstName, lastName, phonenumber, userType } = this.state;

        // Kiểm tra nếu còn trường nào trống
        if (!email || !password || !firstName || !lastName || !phonenumber || !userType) {
            this.setState({ errMessage: 'Vui lòng điền đầy đủ thông tin!' });
            return;
        }

        this.setState({ errMessage: '' }); // Xóa lỗi trước đó nếu có

        try {
            let data = await handleRegisterApi({
                email,
                password,
                firstName,
                lastName,
                phonenumber,
                address: this.state.address,
                userType,
            });


            if (data && data.errCode !== 0) {
                this.setState({ errMessage: data.errMessage });
            }
            if (data && data.errCode === 0) {
                alert('Đăng ký thành công!');
                // this.props.userRegisterSuccess(data);
                this.props.navigate('/login');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                this.setState({ errMessage: error.response.data.errMessage });
            }
        }
    }


    handleShowPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        });
    }

    render() {
        return (
            <div className="register-container">
                <div className='left-container'>
                    <div className='content-left'></div>
                </div>
                <div className='right-container'>
                    <div className='box-register'>
                        <div className='register-title'>Đăng ký</div>
                        <div className='input-box'>
                            <input type='text'
                                name='email'
                                placeholder='Nhập địa chỉ email'
                                value={this.state.email}
                                onChange={(event) => this.handleOnChange(event)} />
                        </div>
                        <div className='input-box name-box'>
                            <input type='text'
                                name='lastName'
                                placeholder='Họ và tên đệm'
                                value={this.state.lastName}
                                onChange={(event) => this.handleOnChange(event)} />
                            <input type='text'
                                name='firstName'
                                placeholder='Tên'
                                value={this.state.firstName}
                                onChange={(event) => this.handleOnChange(event)} />
                        </div>
                        <div className='input-box'>
                            <input type='text'
                                name='phonenumber'
                                placeholder='Số điện thoại'
                                value={this.state.phonenumber}
                                onChange={(event) => this.handleOnChange(event)} />
                        </div>
                        <div className='input-box'>
                            <input type='text'
                                name='address'
                                placeholder='Địa chỉ'
                                value={this.state.address}
                                onChange={(event) => this.handleOnChange(event)} />
                        </div>
                        <div className='input-box'>
                            <select
                                name='userType'
                                value={this.state.userType}
                                onChange={this.handleOnChange}
                            >
                                <option value=''>Chọn vai trò</option>
                                <option value='0'>Cá nhân</option>
                                <option value='1'>Tổ chức</option>
                            </select>
                        </div>
                        <div className='input-box'>
                            <input
                                name='password'
                                type={this.state.isShowPassword ? 'text' : 'password'}
                                placeholder='Nhập mật khẩu'
                                value={this.state.password}
                                onChange={(event) => this.handleOnChange(event)} />
                            <span
                                onClick={() => { this.handleShowPassword() }}
                            >
                                <i className={this.state.isShowPassword ? "far fa-eye" : "far fa-eye-slash"} />
                            </span>
                        </div>

                        <div className="error-message">{this.state.errMessage}</div> {/* Hiển thị lỗi */}

                        <button
                            className='register-button'
                            onClick={this.handleRegister}
                            disabled={!(this.state.email && this.state.password && this.state.firstName && this.state.lastName && this.state.phonenumber && this.state.userType)}
                        >
                            Đăng ký
                        </button>
                        <div className='login-link'>
                            <span>Đã có tài khoản?</span>
                            <a href='/login'>Đăng nhập</a>
                        </div>
                    </div>
                </div>
            </div>

        );
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
