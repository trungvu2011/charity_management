import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CampaignByOrganization.scss';

class CampaignByOrganization extends Component {

    render() {
        return (
            <div className='section-campaign'>
                <div className='campaign-title'>
                    Chiến dịch gây quỹ nổi bật
                </div>
                <div className='campaign-content'>
                    
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CampaignByOrganization);
