import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './Header/HomeHeader';
import Banner from './Banner/Banner';
import CampaignByOrganization from './Section/CampaignByOrganization';

class HomePage extends Component {

    render() {
        return (
            <div>
                <HomeHeader/>
                <Banner/>
                <CampaignByOrganization/>
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
