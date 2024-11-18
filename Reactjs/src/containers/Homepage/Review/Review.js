import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Review.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviewImg from '../../../assets/review/vuducdam.jpg';

class Review extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
        };
        return (
            <div className="review">
                <div className='review-title'>
                    Chia sẻ từ người dùng Thiện nguyện
                </div>
                <div className='review-container'>
                    <div className='review-body'>
                        <Slider {...settings}>
                            <div className='review-card'>
                                <div className='card-top'>
                                    <img alt="" src={reviewImg} />
                                </div>
                                <div className='card-bottom'>
                                    <h4>Nguyên Phó Thủ tướng Vũ Đức Dam</h4>
                                    <h5>Nguyên Trưởng ban chỉ đạo đề án iTrithuc</h5>
                                    <p>
                                        Đây là dự án đầu tiên tại Việt Nam sử dụng công nghệ trong việc thiện nguyện. Sự trợ giúp này được công khai, minh bạch hoàn toàn qua đó lan tỏa những điều tốt đẹp trong xã hội.
                                    </p>
                                </div>
                            </div>
                            <div className='review-card'>
                                <div className='card-top'>
                                    <img alt="" src={reviewImg} />
                                </div>
                                <div className='card-bottom'>
                                    <h4>Nguyên Phó Thủ tướng Vũ Đức Dam</h4>
                                    <h5>Nguyên Trưởng ban chỉ đạo đề án iTrithuc</h5>
                                    <p>
                                        Đây là dự án đầu tiên tại Việt Nam sử dụng công nghệ trong việc thiện nguyện. Sự trợ giúp này được công khai, minh bạch hoàn toàn qua đó lan tỏa những điều tốt đẹp trong xã hội.
                                    </p>
                                </div>
                            </div>
                            <div className='review-card'>
                                <div className='card-top'>
                                    <img alt="" src={reviewImg} />
                                </div>
                                <div className='card-bottom'>
                                    <h4>Nguyên Phó Thủ tướng Vũ Đức Dam</h4>
                                    <h5>Nguyên Trưởng ban chỉ đạo đề án iTrithuc</h5>
                                    <p>
                                        Đây là dự án đầu tiên tại Việt Nam sử dụng công nghệ trong việc thiện nguyện. Sự trợ giúp này được công khai, minh bạch hoàn toàn qua đó lan tỏa những điều tốt đẹp trong xã hội.
                                    </p>
                                </div>
                            </div>
                            <div className='review-card'>
                                <div className='card-top'>
                                    <img alt="" src={reviewImg} />
                                </div>
                                <div className='card-bottom'>
                                    <h4>Nguyên Phó Thủ tướng Vũ Đức Dam</h4>
                                    <h5>Nguyên Trưởng ban chỉ đạo đề án iTrithuc</h5>
                                    <p>
                                        Đây là dự án đầu tiên tại Việt Nam sử dụng công nghệ trong việc thiện nguyện. Sự trợ giúp này được công khai, minh bạch hoàn toàn qua đó lan tỏa những điều tốt đẹp trong xã hội.
                                    </p>
                                </div>
                            </div>
                            <div className='review-card'>
                                <div className='card-top'>
                                    <img alt="" src={reviewImg} />
                                </div>
                                <div className='card-bottom'>
                                    <h4>Nguyên Phó Thủ tướng Vũ Đức Dam</h4>
                                    <h5>Nguyên Trưởng ban chỉ đạo đề án iTrithuc</h5>
                                    <p>
                                        Đây là dự án đầu tiên tại Việt Nam sử dụng công nghệ trong việc thiện nguyện. Sự trợ giúp này được công khai, minh bạch hoàn toàn qua đó lan tỏa những điều tốt đẹp trong xã hội.
                                    </p>
                                </div>
                            </div>
                            <div className='review-card'>
                                <div className='card-top'>
                                    <img alt="" src={reviewImg} />
                                </div>
                                <div className='card-bottom'>
                                    <h4>Nguyên Phó Thủ tướng Vũ Đức Dam</h4>
                                    <h5>Nguyên Trưởng ban chỉ đạo đề án iTrithuc</h5>
                                    <p>
                                        Đây là dự án đầu tiên tại Việt Nam sử dụng công nghệ trong việc thiện nguyện. Sự trợ giúp này được công khai, minh bạch hoàn toàn qua đó lan tỏa những điều tốt đẹp trong xã hội.
                                    </p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default Review;