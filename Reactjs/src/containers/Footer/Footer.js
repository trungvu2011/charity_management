import {React, Component} from 'react'
import './Footer.scss'
import FooterLogo from '../../assets/images/footer/footer-copyright.png';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div class="footer-nav">
                    <div class="footer-nav-item-container col-fourth">
                        <a href="#" class="footer-nav-item">Tin tức</a>
                    </div>
                    <div class="footer-nav-item-container col-fourth">
                        <a href="#" class="footer-nav-item">Hỏi đáp</a>
                    </div>
                    <div class="footer-nav-item-container col-fourth">
                        <a href="#" class="footer-nav-item">Điều khoản</a>
                    </div>
                    <div class="footer-nav-item-container col-fourth">
                        <a href="#" class="footer-nav-item">Chính sách bảo mật</a>
                    </div>
                </div>
                <div class="footer-copyright">
                    Powered by 
                    <a href="#" class="footer-logo">
                        <img src={FooterLogo} alt="" />
                    </a>
                </div>
        </div>
        )
    }
}

export default Footer;