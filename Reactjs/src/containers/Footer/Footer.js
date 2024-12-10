import { React, Component } from 'react'
import './Footer.scss'
import FooterLogo from '../../assets/images/footer/footer-copyright.png';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="footer-nav">
                    <div className="footer-nav-item-container col-fourth">
                        <a href="#" className="footer-nav-item">Tin tức</a>
                    </div>
                    <div className="footer-nav-item-container col-fourth">
                        <a href="#" className="footer-nav-item">Hỏi đáp</a>
                    </div>
                    <div className="footer-nav-item-container col-fourth">
                        <a href="#" className="footer-nav-item">Điều khoản</a>
                    </div>
                    <div className="footer-nav-item-container col-fourth">
                        <a href="#" className="footer-nav-item">Chính sách bảo mật</a>
                    </div>
                </div>
                <div className="footer-copyright">
                    Powered by
                    <a href="#" className="footer-logo">
                        <img src={FooterLogo} alt="" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer;