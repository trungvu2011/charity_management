import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './Header/HomeHeader';
import Banner from './Banner/Banner';
import Campaign from './Section/Campaign';
import Introduction from '../Introduction/Introduction';
import Footer from '../Footer/Footer';

class HomePage extends Component {

    render() {
        return (
            <div>
                <HomeHeader />
                <Banner />
                <Introduction />
                <Campaign />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
