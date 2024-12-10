import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../Homepage/Header/HomeHeader';
import Footer from '../Footer/Footer';
import UserEdit from './UserEdit.js';

class UserEditPage extends Component {

    render() {
        return (
            <div>
                <HomeHeader />
                <UserEdit />
                <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserEditPage);
