import { React, Component } from 'react';
import { connect } from 'react-redux';
import './Campaign.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import campaignImg from '../../../assets/campaign/higreen.jpg'

class Campaign extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
        };
        return (
            <div className='section-campaign'>
                <div className='campaign-title'>
                    Chiến dịch gây quỹ nổi bật
                </div>
                <div className='campaign-container'>
                    <div className='campaign-header'>
                        <div className="create-by">
                            Tạo bởi <span>Tổ chức</span>
                        </div>
                        <a href="" className="see-more">Xem thêm</a>
                    </div>
                    <div className='campaign-body'>
                        <Slider {...settings}>
                            <div className='campaign-card'>
                                <span className="remaining-days">Còn 31 ngày</span>
                                <img className='card-image' src={campaignImg} alt='campaign' />
                                <div className='campaign-header'>HiGreen - Vì Trường Sa Xanh 1</div>
                                <div className="card-meta">
                                    Tạo bởi <span className="creator">MB HiGreen</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `46%` }}></div>
                                </div>
                                <div className="amount-raised">
                                    Đã đạt được <span>22.839.927 VND</span>
                                </div>
                            </div>
                            <div className='campaign-card'>
                                <span className="remaining-days">Còn 31 ngày</span>
                                <span className="remaining-days">Còn 31 ngày</span>
                                <img className='card-image' src={campaignImg} alt='campaign' />
                                <div className='campaign-header'>HiGreen - Vì Trường Sa Xanh 2</div>
                                <div className="card-meta">
                                    Tạo bởi <span className="creator">MB HiGreen</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `46%` }}></div>
                                </div>
                                <div className="amount-raised">
                                    Đã đạt được <span>22.839.927 VND</span>
                                </div>
                            </div>
                            <div className='campaign-card'>
                                <span className="remaining-days">Còn 31 ngày</span>
                                <img className='card-image' src={campaignImg} alt='campaign' />
                                <div className='campaign-header'>HiGreen - Vì Trường Sa Xanh 3</div>
                                <div className="card-meta">
                                    Tạo bởi <span className="creator">MB HiGreen</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `46%` }}></div>
                                </div>
                                <div className="amount-raised">
                                    Đã đạt được <span>22.839.927 VND</span>
                                </div>
                            </div>
                            <div className='campaign-card'>
                                <span className="remaining-days">Còn 31 ngày</span>
                                <img className='card-image' src={campaignImg} alt='campaign' />
                                <div className='campaign-header'>HiGreen - Vì Trường Sa Xanh 4</div>
                                <div className="card-meta">
                                    Tạo bởi <span className="creator">MB HiGreen</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `46%` }}></div>
                                </div>
                                <div className="amount-raised">
                                    Đã đạt được <span>22.839.927 VND</span>
                                </div>
                            </div>
                            <div className='campaign-card'>
                                <span className="remaining-days">Còn 31 ngày</span>
                                <img className='card-image' src={campaignImg} alt='campaign' />
                                <div className='campaign-header'>HiGreen - Vì Trường Sa Xanh 5</div>
                                <div className="card-meta">
                                    Tạo bởi <span className="creator">MB HiGreen</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `46%` }}></div>
                                </div>
                                <div className="amount-raised">
                                    Đã đạt được <span>22.839.927 VND</span>
                                </div>
                            </div>
                            <div className='campaign-card'>
                                <span className="remaining-days">Còn 31 ngày</span>
                                <img className='card-image' src={campaignImg} alt='campaign' />
                                <div className='campaign-header'>HiGreen - Vì Trường Sa Xanh 6</div>
                                <div className="card-meta">
                                    Tạo bởi <span className="creator">MB HiGreen</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `46%` }}></div>
                                </div>
                                <div className="amount-raised">
                                    Đã đạt được <span>22.839.927 VND</span>
                                </div>
                            </div>
                        </Slider>

                    </div>
                </div>
                <div className='campaign-container'>
                    <div className='campaign-header'>
                        <div className="create-by">
                            Tạo bởi <span>Cá nhân</span>
                        </div>
                        <a href="" className="see-more">Xem thêm</a>
                    </div>
                    <div className='campaign-body'>
                        <Slider {...settings}>
                            <div className='campaign-card'>
                                <span className="remaining-days">Còn 31 ngày</span>
                                <img className='card-image' src={campaignImg} alt='campaign' />
                                <div className='campaign-header'>HiGreen - Vì Trường Sa Xanh 1</div>
                                <div className="card-meta">
                                    Tạo bởi <span className="creator">MB HiGreen</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `46%` }}></div>
                                </div>
                                <div className="amount-raised">
                                    Đã đạt được <span>22.839.927 VND</span>
                                </div>
                            </div>
                            <div className='campaign-card'>
                                <span className="remaining-days">Còn 31 ngày</span>
                                <span className="remaining-days">Còn 31 ngày</span>
                                <img className='card-image' src={campaignImg} alt='campaign' />
                                <div className='campaign-header'>HiGreen - Vì Trường Sa Xanh 2</div>
                                <div className="card-meta">
                                    Tạo bởi <span className="creator">MB HiGreen</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `46%` }}></div>
                                </div>
                                <div className="amount-raised">
                                    Đã đạt được <span>22.839.927 VND</span>
                                </div>
                            </div>
                            <div className='campaign-card'>
                                <span className="remaining-days">Còn 31 ngày</span>
                                <img className='card-image' src={campaignImg} alt='campaign' />
                                <div className='campaign-header'>HiGreen - Vì Trường Sa Xanh 3</div>
                                <div className="card-meta">
                                    Tạo bởi <span className="creator">MB HiGreen</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `46%` }}></div>
                                </div>
                                <div className="amount-raised">
                                    Đã đạt được <span>22.839.927 VND</span>
                                </div>
                            </div>
                            <div className='campaign-card'>
                                <span className="remaining-days">Còn 31 ngày</span>
                                <img className='card-image' src={campaignImg} alt='campaign' />
                                <div className='campaign-header'>HiGreen - Vì Trường Sa Xanh 4</div>
                                <div className="card-meta">
                                    Tạo bởi <span className="creator">MB HiGreen</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `46%` }}></div>
                                </div>
                                <div className="amount-raised">
                                    Đã đạt được <span>22.839.927 VND</span>
                                </div>
                            </div>
                            <div className='campaign-card'>
                                <span className="remaining-days">Còn 31 ngày</span>
                                <img className='card-image' src={campaignImg} alt='campaign' />
                                <div className='campaign-header'>HiGreen - Vì Trường Sa Xanh 5</div>
                                <div className="card-meta">
                                    Tạo bởi <span className="creator">MB HiGreen</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `46%` }}></div>
                                </div>
                                <div className="amount-raised">
                                    Đã đạt được <span>22.839.927 VND</span>
                                </div>
                            </div>
                            <div className='campaign-card'>
                                <span className="remaining-days">Còn 31 ngày</span>
                                <img className='card-image' src={campaignImg} alt='campaign' />
                                <div className='campaign-header'>HiGreen - Vì Trường Sa Xanh 6</div>
                                <div className="card-meta">
                                    Tạo bởi <span className="creator">MB HiGreen</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `46%` }}></div>
                                </div>
                                <div className="amount-raised">
                                    Đã đạt được <span>22.839.927 VND</span>
                                </div>
                            </div>
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
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campaign);
