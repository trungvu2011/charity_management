'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reports', [
      {
        reviewer: 'Nguyên Phó Thủ tướng Vũ Đức Đam',
        img: 'https://thiennguyen.app/_next/static/media/vuducdam.cd27b0f0.jpg',
        achievement: 'Nguyên Trưởng ban chỉ đạo đề án iTrithuc',
        content: "Đây là dự án đầu tiên tại Việt Nam sử dụng công nghệ trong việc thiện nguyện. Sự trợ giúp này được công khai, minh bạch hoàn toàn qua đó lan tỏa những điều tốt đẹp trong xã hội.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewer: 'Tạ Minh Tuấn',
        img: 'https://thiennguyen.app/_next/static/media/taminhtuan.57434eb4.jpg',
        achievement: 'Sáng lập đội hỗ trợ sơ cứu FAS Angel',
        content: "Sự ra đời của App Thiện Nguyện minh bạch đã giúp tôi có nhiều thời gian hơn để giúp đỡ người bị nạn mà không phải lo lắng đến vấn đề báo cáo không minh bạch hay báo cáo chậm với các nhà hảo tâm, đây cũng là giải pháp chuẩn nhất cho đến thời điểm hiện tại để có thể áp dụng quản lý chất lượng các chương trình thiện nguyện.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewer: 'Phạm Quốc Việt',
        img: 'https://thiennguyen.app/_next/static/media/phamquocviet.9b6c885c.png',
        achievement: 'Nguyên Trưởng ban chỉ đạo đề án iTrithuc',
        content: "Đây là dự án đầu tiên tại Việt Nam sử dụng công nghệ trong việc thiện nguyện. Sự trợ giúp này được công khai, minh bạch hoàn toàn qua đó lan tỏa những điều tốt đẹp trong xã hội.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewer: 'Lê Hữu Toàn',
        img: 'https://thiennguyen.app/_next/static/media/lehuutoan.b5346409.jpg',
        achievement: 'Võ sĩ quyền anh, Người đạp xe xuyên Việt gây quỹ xây trường',
        content: "Em thấy vận động quyên góp bằng tài khoản thiện nguyện minh bạch rất hay. Tất cả mọi người đều có thể theo dõi sao kê của mình đầy đủ được. Tạo lòng tin cho nhà hảo tâm và yên tâm khi quyên góp cho tài khoản thiện nguyện.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewer: 'Trần Trọng An',
        img: 'https://thiennguyen.app/_next/static/media/trantrongan.54072f61.png',
        achievement: 'Phó TBT Tạp chí điện tử Gia Đình Mới',
        content: "Người kết nối từ thiện cộng đồng MB đã cung cấp tài khoản 4 số rất dễ nhớ, dễ nhập khi chuyển khoản. Đặc biệt là mọi khoản chuyển đi/ đến tài khoản đều tự động công khai lên web, app nên bất kỳ ai cũng có thể truy vấn, tra cứu. Giải pháp của MB thực sự tuyệt vời vì giúp cho hoạt động thiện nguyện trở nên đơn giản và minh bạch.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewer: 'Tẩn Tường Nhân',
        img: 'https://thiennguyen.app/_next/static/media/tantuongnhan.10bc1cc5.png',
        achievement: 'Youtuber, Sáng lập Kênh Trình Tường TV',
        content: "Tài khoản chỉ có 4 số, rất dễ nhớ, những người lần đầu tiên gửi ủng hộ, trợ duyên qua số tài khoản này rất ngạc nhiên, hào hứng. Đối với mình số tài khoản thiện nguyện 0110 có ý nghĩa là tấm gương phản chiếu bản thân mình, tâm phải sáng, là cầu nối giúp đỡ cho những hoàn cảnh, mảnh đời khó khăn, bất hạnh trên vùng cao.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {
      validate: true,
      individualHooks: true
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Reports', null, {});
  }
};
