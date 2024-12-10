import React, { Component } from 'react';
import './UserEdit.scss';
import { handleEditUserApi } from '../../services/userService';

class UserEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            email: '',
            lastName: '',
            firstName: '',
            phonenumber: '',
            address: '',
            isLoading: false,
            errorMessage: ''
        };
    }

    componentDidMount() {
        // Giả sử bạn lấy dữ liệu người dùng từ API hoặc localStorage
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (userInfo) {
            this.setState({
                user_id: userInfo.user_id,
                email: userInfo.email,
                lastName: userInfo.lastName || '',
                firstName: userInfo.firstName || '',
                phonenumber: userInfo.phonenumber || '',
                address: userInfo.address || '',
            });
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        const { firstName, lastName, email, phonenumber, address } = this.state;

        // Xử lý gửi dữ liệu (có thể gửi API ở đây)
        let data = await handleEditUserApi({ firstName, lastName, email, phonenumber, address });
        this.setState({ isLoading: true });


        // Giả sử gửi thành công
        setTimeout(() => {
            localStorage.setItem('userInfo', JSON.stringify({ firstName, lastName, email, phonenumber, address }));
            this.setState({ isLoading: false });
            alert('Cập nhật thông tin thành công!');
        }, 2000);
    };

    render() {
        const { firstName, lastName, email, phonenumber, address, isLoading, errorMessage } = this.state;

        return (
            <div className="user-edit-container">
                <h2>Chỉnh sửa thông tin người dùng</h2>

                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Tên người dùng</label>
                    <div className="form-group name-group">
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phonenumber">Số điện thoại</label>
                        <input
                            type="text"
                            id="phonenumber"
                            name="phonenumber"
                            value={phonenumber}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Địa chỉ</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={address}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-actions">
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Đang lưu...' : 'Lưu thay đổi'}
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserEdit;
