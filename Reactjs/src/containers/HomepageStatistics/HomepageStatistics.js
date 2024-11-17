import {React, Component} from 'react';
import '../HomepageStatistics/HomepageStatistics.scss';

class HomepageStatistics extends Component {
    render() {
        return (
            <div class="home-statistics-container">
                <div class="feature-container">
                    <div class="feature-item">
                        <div class="item-top">Minh bạch cho tổ chức, <br/>cá nhân gây quỹ</div>
                        <div class="item-body">
                            <img src="./assets/img/statistics/check-icon.svg" alt="" class="check-icon"/>
                            <div class="item-description">Giúp bạn nhanh chóng thiết lập mục tiêu, minh bạch sao kê tài khoản, lập báo cáo thu chi theo quy định, đăng bài viết, cập nhật các hoạt động, kết nối với nhà hảo tâm mọi lúc mọi nơi</div>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="item-top">Niềm tin cho nhà hảo tâm</div>
                        <div class="item-body">
                            <img src="./assets/img/statistics/check-icon.svg" alt="" class="check-icon"/>
                            <div class="item-description">Giúp bạn ủng hộ trực tuyến thuận tiện và minh bạch, giám sát sao kê tài khoản thiện nguyện, lựa chọn theo dõi và đồng hành cùng các chiến dịch bạn quan tâm, dễ dàng tương tác, hỗ trợ các chiến dịch</div>
                        </div>
                    </div>
                </div>
                <div class="statistics-container"></div>
            </div>
        )
    }
}

export default HomepageStatistics;