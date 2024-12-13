'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Donations', [
      {
        campaign_id: 1,
        user_id: 1,
        amount: 1000000,
        donation_date: new Date(),
        message: 'Chúc chiến dịch thành công!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 2,
        user_id: 2,
        amount: 500000,
        donation_date: new Date(),
        message: 'Hy vọng sẽ giúp đỡ được nhiều người!',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        campaign_id: 3,
        user_id: 3,
        amount: 2000000,
        donation_date: new Date(),
        message: 'Tri ân những người đã hy sinh!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 4,
        user_id: 1,
        amount: 1500000,
        donation_date: new Date(),
        message: 'Mong mọi điều tốt đẹp!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 5,
        user_id: 2,
        amount: 3000000,
        donation_date: new Date(),
        message: 'Chung tay giúp đỡ cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 6,
        user_id: 3,
        amount: 2500000,
        donation_date: new Date(),
        message: 'Hy vọng những điều tốt lành!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 7,
        user_id: 1,
        amount: 1800000,
        donation_date: new Date(),
        message: 'Đồng hành cùng chiến dịch!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 8,
        user_id: 2,
        amount: 3500000,
        donation_date: new Date(),
        message: 'Cảm ơn mọi người đã cố gắng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 9,
        user_id: 3,
        amount: 4000000,
        donation_date: new Date(),
        message: 'Ủng hộ chiến dịch ý nghĩa!',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Donations', null, {});
  }
};
