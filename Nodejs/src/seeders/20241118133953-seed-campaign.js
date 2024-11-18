'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let today = new Date(); // Move the definition inside the function
    return queryInterface.bulkInsert('Campaigns', [
      {
        campaign_id: 1,
        user_id: 2,
        title: 'HiGreen - Vì Trường Sa xanh',
        img: "https://static.thiennguyen.app/public/donate-target/photo/2024/10/28/012084ea-def1-47e2-bd41-22c73b589c2d.jpg",
        description: "Năm thứ 2 được tổ chức, HiGreen - Trường Sa Xanh 2024 kêu gọi cộng đồng đồng lòng thực hiện trồng thêm 100.000 cây xanh cho Trường Sa.",
        goal_amount: 50000000,
        start_date: new Date(),
        end_date: new Date(new Date().setDate(today.getDate() + 30)),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 2,
        user_id: 2,
        title: 'Xây Nhà An Toàn - Vững Vàng Qua Lũ: Chung tay hướng về Miền Trung',
        img: "https://static.thiennguyen.app/public/donate-target/photo/2024/9/19/23d80979-7274-40f3-9c60-ce98865cdac3.jpg",
        description: "Chung tay hỗ trợ bà con miền Trung xây nhà an toàn, vững vàng vượt qua bão lũ!",
        goal_amount: 2720000000,
        start_date: new Date(),
        end_date: new Date(new Date().setDate(today.getDate() + 30)),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 3,
        user_id: 2,
        title: 'Tri ân chiến sĩ Trường Sơn',
        img: "https://static.thiennguyen.app/public/donate-target/photo/2024/10/8/eb6a79ac-43b0-4db3-a312-a497badc0ba6.jpg",
        description: "Hòa bình hôm nay là nhờ sự hy sinh không thể so sánh",
        goal_amount: 500000000,
        start_date: new Date(),
        end_date: new Date(new Date().setDate(today.getDate() + 30)),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 4,
        user_id: 2,
        title: 'Ta thêm lòng tiếp sức, để bớt cuộc chia ly 2024',
        img: "https://static.thiennguyen.app/public/donate-target/photo/2024/1/27/002bbaab-685a-41a7-b6af-8c84f46ee1aa.jpg",
        description: "Hòa bình hôm nay là nhờ sự hy sinh không thể so sánh",
        goal_amount: 5000000000,
        start_date: new Date(),
        end_date: new Date(new Date().setDate(today.getDate() + 30)),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 5,
        user_id: 2,
        title: 'Quỹ xe cứu thương 0 đồng',
        img: "https://static.thiennguyen.app/public/donate-target/photo/2024/1/8/62ee2ec1-4e95-4a59-9d29-ce690f35214e.jpg",
        description: "đưa đón bệnh nhân nghèo , hoàn cảnh xấu số , mai táng ( miễn phí ) toàn quốc ",
        goal_amount: 1000000000,
        start_date: new Date(),
        end_date: new Date(new Date().setDate(today.getDate() + 30)),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 6,
        user_id: 2,
        title: 'Phủ xanh Đất Mẹ 63 tỉnh thành',
        img: "https://static.thiennguyen.app/public/donate-target/photo/2024/5/8/f33c6478-8de3-4868-9414-3699f792b038.jpg",
        description: "Môi trường bị tán phá, thời tiết biến đổi thất thường, nắng nóng khắp nơi vì những cánh rừng, những mảng xanh đã bị đốn hạ. ",
        goal_amount: 1000000000,
        start_date: new Date(),
        end_date: new Date(new Date().setDate(today.getDate() + 30)),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 7,
        user_id: 1,
        title: 'Hành Trình Chiến Đấu Cùng Bắp',
        img: "https://static.thiennguyen.app/public/donate-target/photo/2024/11/16/781396d6-f765-452f-8dc4-f5b0acd17fa9.jpg",
        description: "☘️XIN GIÚP CON ĐỦ CHI PHÍ 180.000$ đô, ĐỂ CON CÓ THỂ SANG TRUNG QUỐC TIẾP TỤC ĐIỀU TRỊ PHÁT ĐỒ HOÁ TRỊ MỚI VÀ THEO PHƯƠNG PHÁP CÁY GHÉP CAR- T",
        goal_amount: 4500000000,
        start_date: new Date(),
        end_date: new Date(new Date().setDate(today.getDate() + 30)),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 8,
        user_id: 1,
        title: 'Lời khẩn cầu của một người mẹ tìm liều thuốc mắc nhất thế giới để cứu mạng con trai!',
        img: "https://static.thiennguyen.app/public/donate-target/photo/2024/1/4/9c9f0546-afca-4137-a8d6-d514351333e3.jpg",
        description: "Chào mọi người! Mình tên là Quỳnh. Con trai mình tên là Huỳnh Bá Minh Vương (hay còn gọi là Zin) sinh ngày 11/01/2021 được chẩn đoán mắc căn bệnh Teo cơ tuỷ sống (SMA)vào tháng 11/2021 khi con mới tròn 10 tháng tuổi! 😟",
        goal_amount: 40000000000,
        start_date: new Date(),
        end_date: new Date(new Date().setDate(today.getDate() + 30)),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 9,
        user_id: 1,
        title: 'CÂY CẦU MƠ ƯỚC SỐ 06',
        img: "https://static.thiennguyen.app/public/donate-target/photo/2024/10/5/3f19c32a-8df9-4611-a4e7-a2e33d942f25.jpg",
        description: "🌈BIẾN ƯỚC MƠ THÀNH HIỆN THỰC 💁‍♀️CÂY CẦU MƠ ƯỚC SỐ 6🙏 Xã Quảng Ngần, huyện Vị Xuyên, tỉnh Hà Giang là một xã vùng III, vùng sâu, vùng xa có điều kiện kinh tế xã hội đặc biệt khó khăn của huyện Vị Xuyên, tỉnh Hà Giang. Toàn xã có 540 hộ với 2.644 khẩu, tỷ lệ hộ nghèo, cận nghèo chiếm trên 54,14%, trong đó dân tộc Dao chiếm trên 90%.",
        goal_amount: 200000000,
        start_date: new Date(),
        end_date: new Date(new Date().setDate(today.getDate() + 30)),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 10,
        user_id: 1,
        title: 'Đông ấm cho em 5 (Hơi ấm chuyền tay)',
        img: "https://static.thiennguyen.app/public/donate-target/photo/2024/10/18/cc75b1db-b0a7-4613-9be5-83d452b51c53.jpg",
        description: "Theo Trung tâm Dự báo khí tượng, thủy văn Quốc gia, miền Bắc mùa đông năm nay được dự báo sẽ rét hơn, và điều này đã bắt đầu thể hiện từ những ngày đầu thu. Dưới tác động của hiện tượng La Nina, mùa đông sẽ có nhiều thay đổi so với năm 2023 (năm chúng ta chịu ảnh hưởng của El Nino). ",
        goal_amount: 1147302000,
        start_date: new Date(),
        end_date: new Date(new Date().setDate(today.getDate() + 30)),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 11,
        user_id: 1,
        title: 'CHUNG TAY XÂY DỰNG NGÔI NHÀ MƠ ƯỚC SỐ 40',
        img: "https://static.thiennguyen.app/public/donate-target/photo/2024/10/11/2b39fc3d-9152-409c-b61b-9ac9d57a2d98.jpg",
        description: "🏡 KÊU GỌI KINH PHÍ XÂY DỰNG NGÔI NHÀ MƠ ƯỚC SỐ 40 - GIA ĐÌNH GIÀNG A TỦA ",
        goal_amount: 40000000,
        start_date: new Date(),
        end_date: new Date(new Date().setDate(today.getDate() + 30)),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 12,
        user_id: 1,
        title: 'TRẠM PHÓNG TƯƠNG LAI 2 - Xây dựng & sửa chữa điểm trường Tiểu học 3 Khánh Hải tại X. Khánh Hải H. Trần Văn Thời, Cà Mau',
        img: "https://static.thiennguyen.app/public/donate-target/photo/2024/10/20/7e3c46e7-c753-46ed-a3f4-7fcae93ef4f1.jpg",
        description: "Điểm trường Tiểu học 3 Khánh Hải nằm tại Ấp Khánh Hưng A, Xã Khánh Hải, Huyện Trần Văn Thời, Cà Mau bao gồm 10 lớp học từ lớp 1 đến lớp 5, với sỉ số năm học 2023-2024 là 230 em, đa số là dân tộc Kinh, có 6 em người đồng bào Khmer và dân tộc khác.",
        goal_amount: 500000000,
        start_date: new Date(),
        end_date: new Date(new Date().setDate(today.getDate() + 30)),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Campaigns', null, {});
  }
};
