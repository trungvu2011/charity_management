import { React, Component } from 'react';
import '../HomepageStatistics/HomepageStatistics.scss';

class HomepageStatistics extends Component {
    render() {
        return (
            <div className="home-statistics-container">
                <div className="feature-container">
                    <div className="feature-item">
                        <div className="item-top">Minh bạch cho tổ chức, <br />cá nhân gây quỹ</div>
                        <div className="item-body">
                            <img src="./assets/img/statistics/check-icon.svg" alt="" className="check-icon" />
                            <div className="item-description">Giúp bạn nhanh chóng thiết lập mục tiêu, minh bạch sao kê tài khoản, lập báo cáo thu chi theo quy định, đăng bài viết, cập nhật các hoạt động, kết nối với nhà hảo tâm mọi lúc mọi nơi</div>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="item-top">Niềm tin cho nhà hảo tâm</div>
                        <div className="item-body">
                            <img src="./assets/img/statistics/check-icon.svg" alt="" className="check-icon" />
                            <div className="item-description">Giúp bạn ủng hộ trực tuyến thuận tiện và minh bạch, giám sát sao kê tài khoản thiện nguyện, lựa chọn theo dõi và đồng hành cùng các chiến dịch bạn quan tâm, dễ dàng tương tác, hỗ trợ các chiến dịch</div>
                        </div>
                    </div>
                </div>
                <div className="statistics-container"></div>
            </div>
        )
    }
}

export default HomepageStatistics;