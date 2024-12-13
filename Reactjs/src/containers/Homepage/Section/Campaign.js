import { React, Component } from 'react';
import { connect } from 'react-redux';
import './Campaign.scss';
import { getAllCampaignsAPI } from '../../../services/campaignService';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import campaignImg from '../../../assets/campaign/higreen.jpg';

class Campaign extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campaigns: [],
            individualCampaigns: [],
            organizationCampaigns: []
        };
    }

    async componentDidMount() {
        try {
            let campaigns = await getAllCampaignsAPI();
            this.setState({
                campaigns: campaigns
            }, this.categorizeCampaigns);
        } catch (error) {
            console.error("Error fetching campaigns:", error);
        }
    }

    categorizeCampaigns = () => {
        const individualCampaigns = this.state.campaigns.filter(campaign => campaign.type === false);
        const organizationCampaigns = this.state.campaigns.filter(campaign => campaign.type === true);

        this.setState({
            individualCampaigns,
            organizationCampaigns
        });
    };

    renderCampaigns = (campaigns) => {
        const formatCurrency = (amount) => {
            return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND";
        };

        return campaigns.map((campaign, index) => (
            <a className='campaign-card' href="#" key={index}>
                <span className="remaining-days">Còn {campaign.remainingDays} ngày</span>
                <img className='card-image' src={campaign.img} alt='campaign' />
                <div className='card-header'>{campaign.title}</div>
                <div className="card-meta">
                    Tạo bởi <span className="creator">{campaign.creator}</span>
                </div>
                <div className="amount-raised">
                    Đã đạt được <span>{formatCurrency(campaign.raisedAmount)}</span>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${campaign.progress}%` }}></div>
                </div>
                <div className="goal-amount">
                    <span>
                        Mục tiêu: <span style={{ color: '#ff5722' }}>{formatCurrency(campaign.goal_amount)}</span>
                    </span>
                    <span>{campaign.progress}%</span>
                </div>
            </a>
        ));
    };

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ],
        };

        return (
            <div className='section-campaign'>
                <div className='campaign-title'>
                    Chiến dịch gây quỹ nổi bật
                </div>

                {/* Campaigns by Organization */}
                <div className='campaign-container'>
                    <div className='campaign-header'>
                        <div className="create-by">
                            Tạo bởi <span>Tổ chức</span>
                        </div>
                        <a href="" className="see-more">Xem thêm</a>
                    </div>
                    <div className='campaign-body'>
                        <Slider {...settings}>
                            {this.renderCampaigns(this.state.organizationCampaigns)}
                        </Slider>
                    </div>
                </div>

                {/* Campaigns by Individual */}
                <div className='campaign-container'>
                    <div className='campaign-header'>
                        <div className="create-by">
                            Tạo bởi <span>Cá nhân</span>
                        </div>
                        <a href="" className="see-more">Xem thêm</a>
                    </div>
                    <div className='campaign-body'>
                        <Slider {...settings}>
                            {this.renderCampaigns(this.state.individualCampaigns)}
                        </Slider>
                    </div>
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
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Campaign);
