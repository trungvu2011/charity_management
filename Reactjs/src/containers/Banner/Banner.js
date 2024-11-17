import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Banner.scss';
import bannerImg from '../../assets/images/banner/banner-img.png';

class Banner extends Component {
    render() {
        return (
            <div className='banner-container'>
                <div className='banner-title-container'>
                    <div className='banner-title'>Giải pháp công nghệ đồng hành cùng cộng đồng thiện nguyện minh bạch</div>
                </div>
                <div className='banner-img-container'>
                    <img src={bannerImg} alt='banner-img'/>
                </div>
            </div>
        )
    }
}

export default Banner;