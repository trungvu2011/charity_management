import { React, Component } from 'react';
import '../Introduction/Introduction.scss';
import item1 from '../../assets/images/introduction/item1.png';
import item2 from '../../assets/images/introduction/item2.png';
import item3 from '../../assets/images/introduction/item3.png';


class Introduction extends Component {
    render() {
        return (
            <div className="introduction-container">
                <div className="general-introduction row">Giới thiệu chung</div>
                <div className="orange-line row">_________________</div>
                <div className="introduction-paragraph row">Giải pháp công nghệ tích hợp bao gồm App Thiện Nguyện và tài khoản thiện nguyện minh bạch 4 số, dành tặng các tổ chức, cá nhân vận động gây quỹ vì cộng đồng. Giải pháp là cấu phần thuộc Đề án Hệ tri thức Việt số hoá (iTrithuc)</div>
                <div className="introduction-item-container row">
                    <div className="introduction-item col-third">
                        <img src={item1} alt="" className="item-img" />
                        <div className="item-title">Tầm nhìn</div>
                        <div className="item-description">Đến năm 2025 trở thành mạng xã hội thiện nguyện đầu tiên tại Việt Nam dành cho cộng đồng thiện nguyện minh bạch</div>
                    </div>
                    <div className="introduction-item col-third">
                        <img src={item2} alt="" className="item-img" />
                        <div className="item-title">Sứ mệnh</div>
                        <div className="item-description">Ứng dụng công nghệ vào hoạt động nhân đạo, thiện nguyện, cộng đồng, thúc đẩy tính minh bạch</div>
                    </div>
                    <div className="introduction-item col-third">
                        <img src={item3} alt="" className="item-img" />
                        <div className="item-title">Giá trị cốt lõi</div>
                        <div className="item-description">Minh bạch, sẻ chia, kết nối, thuận tiện</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Introduction;