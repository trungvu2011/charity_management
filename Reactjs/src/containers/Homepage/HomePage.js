import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../Header/HomeHeader';
import Banner from '../Banner/Banner';
import Introduction from '../Introduction/Introduction';
import HomepageStatistics from '../HomepageStatistics/HomepageStatistics';

class HomePage extends Component {

    render() {
        return (
            <div>
                <div><HomeHeader/></div>
                <div><Banner/></div>
                <div><Introduction/></div>
                <div><HomepageStatistics/></div>
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
