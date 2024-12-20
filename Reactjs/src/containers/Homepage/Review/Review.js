import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Review.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviewImg from '../../../assets/review/vuducdam.jpg';
import axios from 'axios';

class Review extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviewList: []
        }
    }

    componentDidMount() {
        this.getReviewList();
    }


    getReviewList = () => {
        axios.get('http://localhost:8080/api/get-all-review')
            .then(response => {
                this.setState({
                    reviewList: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    renderReviewCard = () => {
        return this.state.reviewList.map((review, index) => {
            return (
                <div className='review-card' key={index}>
                    <div className='card-top'>
                        <img alt="" src={review.img} />
                    </div>
                    <div className='card-bottom'>
                        <h4>{review.reviewer}</h4>
                        <h5>{review.achievement}</h5>
                        <p>
                            {review.content}
                        </p>
                    </div>
                    <div className='custom-shape'></div>
                </div>
            )
        })
    }

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
                        dots: false,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                }
            ]
        };
        return (
            <div className="review">
                <div className='review-title'>
                    Chia sẻ từ người dùng Thiện nguyện
                </div>
                <div className='review-container'>
                    <div className='review-body'>
                        <Slider {...settings}>
                            {this.renderReviewCard()}
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default Review;