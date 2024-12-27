import { React, Component } from 'react';
import { connect } from 'react-redux';
import './Campaign.scss';
import { getAllCampaignsAPI } from '../../../services/campaignService';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import campaignImg from '../../../assets/campaign/higreen.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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

        return campaigns.map((campaign, index) => {
            let imgSrc = campaign.img.startsWith('http') ? campaign.img : `http://localhost:8080${campaign.img}`;
            return (
                <Link
                    key={index}
                    to={{
                        pathname: `/campaign/id=${campaign.campaign_id}`, // Điều hướng đến chi tiết chiến dịch
                        state: { campaign } // Truyền dữ liệu campaign qua state
                    }}
                    className='relative flex flex-col w-full h-[480px] bg-white rounded-xl shadow-md hover:cursor-pointer no-underline truncate'
                >
                    <img src={imgSrc} alt="" className='w-full h-[300px] object-cover rounded-t-xl mb-3' />
                    <div className='absolute bg-[#f4f4f4] top-4 left-2 rounded-full pt-2 pb-2 pl-3 pr-3'>
                        <span className='text-black text-sm font-medium'>
                            {campaign.status === 0 ? `Còn ${campaign.remainingDays} ngày` : campaign.status === 1 ? 'Đã kết thúc' : 'Đạt mục tiêu'}
                        </span>
                    </div>
                    <span className='w-full p-3 text-black text-xl font-extrabold truncate'>{campaign.title}</span>
                    <div className='flex flex-row p-3'>
                        <span className='text-base text-gray-500'>Tạo bởi</span>
                        <span className='ml-2 text-base text-[#f54a00] font-extrabold'>{campaign.creator}</span>
                    </div>
                    <div className='flex flex-row pl-3 pr-3 pb-3 justify-between'>
                        <div className='flex flex-row'>
                            <span className='text-base text-[#f54a00] font-extrabold'>{formatCurrency(campaign.raisedAmount)} VND</span>
                            <span className='text-black text-base font-medium ml-2'>đã đạt được</span>
                        </div>
                        <div className='flex flex-row'>
                            <span className='text-black text-base font-extrabold'>{campaign.progress}%</span>
                        </div>
                    </div>
                    <div className='pl-3 pr-3 pb-3'>
                        <div className='relative w-full h-2 bg-gray-300 rounded-full'>
                            <div className='absolute h-2 bg-[#f54a00] rounded-full' style={{ width: `${campaign.progress}%` }}></div>
                        </div>
                    </div>
                    <div className='flex flex-row pl-3 pr-3 pb-3 justify-between'>
                        <div className='flex flex-row'>
                            <span className='text-base text-gray-500'>Của mục tiêu {formatCurrency(campaign.goal_amount)}</span>
                        </div>
                    </div>
                </Link>
            );
        });
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
