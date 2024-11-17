import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './Header/HomeHeader';
import Banner from './Banner/Banner';
import Campaign from './Section/Campaign';

class HomePage extends Component {

    render() {
        return (
            <div>
                <HomeHeader/>
                <Banner/>
                <Campaign/>
                <div style={{height: '300px'}}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
