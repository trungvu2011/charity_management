'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Donations', [
      // Donations for campaign 1
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
        campaign_id: 1,
        user_id: 2,
        amount: 1500000,
        donation_date: new Date(),
        message: 'Mong chiến dịch sẽ đạt được mục tiêu!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 1,
        user_id: 3,
        amount: 2000000,
        donation_date: new Date(),
        message: 'Chung tay góp sức vì cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 1,
        user_id: 4,
        amount: 500000,
        donation_date: new Date(),
        message: 'Cùng đồng hành với chiến dịch!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 1,
        user_id: 5,
        amount: 3000000,
        donation_date: new Date(),
        message: 'Hy vọng chiến dịch thành công tốt đẹp!',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Donations for campaign 2
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
        campaign_id: 2,
        user_id: 3,
        amount: 1000000,
        donation_date: new Date(),
        message: 'Cùng hỗ trợ cho những hoàn cảnh khó khăn!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 2,
        user_id: 4,
        amount: 1500000,
        donation_date: new Date(),
        message: 'Hỗ trợ chiến dịch vì cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 2,
        user_id: 5,
        amount: 2000000,
        donation_date: new Date(),
        message: 'Góp phần giúp đỡ những người gặp khó khăn!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 2,
        user_id: 1,
        amount: 2500000,
        donation_date: new Date(),
        message: 'Mong mọi người chung tay góp sức!',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Donations for campaign 3
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
        campaign_id: 3,
        user_id: 4,
        amount: 500000,
        donation_date: new Date(),
        message: 'Mong chiến dịch đạt được mục tiêu!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 3,
        user_id: 5,
        amount: 1500000,
        donation_date: new Date(),
        message: 'Cùng nhau giúp đỡ cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 3,
        user_id: 1,
        amount: 3000000,
        donation_date: new Date(),
        message: 'Hỗ trợ cho những người có hoàn cảnh khó khăn!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 3,
        user_id: 2,
        amount: 4000000,
        donation_date: new Date(),
        message: 'Ủng hộ chiến dịch ý nghĩa!',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Donations for campaign 4
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
        campaign_id: 4,
        user_id: 2,
        amount: 2000000,
        donation_date: new Date(),
        message: 'Cùng góp sức vì cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 4,
        user_id: 3,
        amount: 2500000,
        donation_date: new Date(),
        message: 'Chung tay giúp đỡ những người khó khăn!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 4,
        user_id: 4,
        amount: 3000000,
        donation_date: new Date(),
        message: 'Hy vọng chiến dịch sẽ thành công!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 4,
        user_id: 5,
        amount: 3500000,
        donation_date: new Date(),
        message: 'Chúc chiến dịch sẽ thành công tốt đẹp!',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Donations for campaign 5
      {
        campaign_id: 5,
        user_id: 1,
        amount: 3000000,
        donation_date: new Date(),
        message: 'Chung tay giúp đỡ cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 5,
        user_id: 2,
        amount: 3500000,
        donation_date: new Date(),
        message: 'Giúp đỡ những hoàn cảnh khó khăn!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 5,
        user_id: 3,
        amount: 2000000,
        donation_date: new Date(),
        message: 'Ủng hộ chiến dịch vì cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 5,
        user_id: 4,
        amount: 1500000,
        donation_date: new Date(),
        message: 'Hy vọng giúp đỡ được nhiều người!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 5,
        user_id: 5,
        amount: 2500000,
        donation_date: new Date(),
        message: 'Chúc chiến dịch thành công!',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Donations for campaign 6
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
        campaign_id: 6,
        user_id: 4,
        amount: 1000000,
        donation_date: new Date(),
        message: 'Ủng hộ cho chiến dịch ý nghĩa!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 6,
        user_id: 5,
        amount: 3000000,
        donation_date: new Date(),
        message: 'Cùng đồng hành với chiến dịch!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 6,
        user_id: 1,
        amount: 2000000,
        donation_date: new Date(),
        message: 'Cùng nhau làm việc tốt!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 6,
        user_id: 2,
        amount: 1500000,
        donation_date: new Date(),
        message: 'Cảm ơn mọi người đã đóng góp!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Donations for campaign 7
      {
        campaign_id: 7,
        user_id: 1,
        amount: 1500000,
        donation_date: new Date(),
        message: 'Đồng hành cùng chiến dịch!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 7,
        user_id: 2,
        amount: 2000000,
        donation_date: new Date(),
        message: 'Cảm ơn các bạn đã tham gia!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 7,
        user_id: 3,
        amount: 2500000,
        donation_date: new Date(),
        message: 'Hỗ trợ cho chiến dịch ý nghĩa!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 7,
        user_id: 4,
        amount: 3000000,
        donation_date: new Date(),
        message: 'Mong chiến dịch thành công!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 7,
        user_id: 5,
        amount: 3500000,
        donation_date: new Date(),
        message: 'Chung tay giúp đỡ cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Donations for campaign 8
      {
        campaign_id: 8,
        user_id: 1,
        amount: 500000,
        donation_date: new Date(),
        message: 'Mong chiến dịch thành công!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 8,
        user_id: 2,
        amount: 1500000,
        donation_date: new Date(),
        message: 'Ủng hộ cho chiến dịch!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 8,
        user_id: 3,
        amount: 2000000,
        donation_date: new Date(),
        message: 'Cùng giúp đỡ những hoàn cảnh khó khăn!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 8,
        user_id: 4,
        amount: 2500000,
        donation_date: new Date(),
        message: 'Hy vọng chiến dịch sẽ thành công!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 8,
        user_id: 5,
        amount: 3000000,
        donation_date: new Date(),
        message: 'Chung tay giúp đỡ cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Donations for campaign 9
      {
        campaign_id: 9,
        user_id: 1,
        amount: 2000000,
        donation_date: new Date(),
        message: 'Ủng hộ chiến dịch đầy ý nghĩa!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 9,
        user_id: 2,
        amount: 2500000,
        donation_date: new Date(),
        message: 'Mong chiến dịch đạt được mục tiêu!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 9,
        user_id: 3,
        amount: 3000000,
        donation_date: new Date(),
        message: 'Hỗ trợ chiến dịch vì cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 9,
        user_id: 4,
        amount: 3500000,
        donation_date: new Date(),
        message: 'Cùng góp sức cho cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 9,
        user_id: 5,
        amount: 4000000,
        donation_date: new Date(),
        message: 'Hy vọng giúp đỡ được nhiều người!',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Donations for campaign 10
      {
        campaign_id: 10,
        user_id: 1,
        amount: 2500000,
        donation_date: new Date(),
        message: 'Hy vọng chiến dịch sẽ thành công!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 10,
        user_id: 2,
        amount: 3000000,
        donation_date: new Date(),
        message: 'Chung tay vì cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 10,
        user_id: 3,
        amount: 3500000,
        donation_date: new Date(),
        message: 'Mong chiến dịch đạt được mục tiêu!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 10,
        user_id: 4,
        amount: 4000000,
        donation_date: new Date(),
        message: 'Chung tay giúp đỡ cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 10,
        user_id: 5,
        amount: 4500000,
        donation_date: new Date(),
        message: 'Cảm ơn mọi người đã tham gia!',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Donations for campaign 11
      {
        campaign_id: 11,
        user_id: 1,
        amount: 3000000,
        donation_date: new Date(),
        message: 'Giúp đỡ cộng đồng trong chiến dịch!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 11,
        user_id: 2,
        amount: 3500000,
        donation_date: new Date(),
        message: 'Cảm ơn những người tham gia!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 11,
        user_id: 3,
        amount: 4000000,
        donation_date: new Date(),
        message: 'Chung tay giúp đỡ những người khó khăn!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 11,
        user_id: 4,
        amount: 4500000,
        donation_date: new Date(),
        message: 'Hy vọng chiến dịch thành công tốt đẹp!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 11,
        user_id: 5,
        amount: 5000000,
        donation_date: new Date(),
        message: 'Cùng đồng hành với chiến dịch!',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Donations for campaign 12
      {
        campaign_id: 12,
        user_id: 1,
        amount: 3500000,
        donation_date: new Date(),
        message: 'Ủng hộ chiến dịch đầy ý nghĩa!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 12,
        user_id: 2,
        amount: 4000000,
        donation_date: new Date(),
        message: 'Mong chiến dịch thành công!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 12,
        user_id: 3,
        amount: 4500000,
        donation_date: new Date(),
        message: 'Cùng nhau giúp đỡ cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 12,
        user_id: 4,
        amount: 5000000,
        donation_date: new Date(),
        message: 'Chúc chiến dịch sẽ thành công!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 12,
        user_id: 5,
        amount: 5500000,
        donation_date: new Date(),
        message: 'Cảm ơn các bạn đã tham gia!',
        createdAt: new Date(),
        updatedAt: new Date()
      },// Donations for campaign 7
      {
        campaign_id: 7,
        user_id: 1,
        amount: 1500000,
        donation_date: new Date(),
        message: 'Đồng hành cùng chiến dịch!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 7,
        user_id: 2,
        amount: 2000000,
        donation_date: new Date(),
        message: 'Cảm ơn các bạn đã tham gia!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 7,
        user_id: 3,
        amount: 2500000,
        donation_date: new Date(),
        message: 'Hỗ trợ cho chiến dịch ý nghĩa!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 7,
        user_id: 4,
        amount: 3000000,
        donation_date: new Date(),
        message: 'Mong chiến dịch thành công!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 7,
        user_id: 5,
        amount: 3500000,
        donation_date: new Date(),
        message: 'Chung tay giúp đỡ cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Donations for campaign 8
      {
        campaign_id: 8,
        user_id: 1,
        amount: 500000,
        donation_date: new Date(),
        message: 'Mong chiến dịch thành công!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 8,
        user_id: 2,
        amount: 1500000,
        donation_date: new Date(),
        message: 'Ủng hộ cho chiến dịch!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 8,
        user_id: 3,
        amount: 2000000,
        donation_date: new Date(),
        message: 'Cùng giúp đỡ những hoàn cảnh khó khăn!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 8,
        user_id: 4,
        amount: 2500000,
        donation_date: new Date(),
        message: 'Hy vọng chiến dịch sẽ thành công!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 8,
        user_id: 5,
        amount: 3000000,
        donation_date: new Date(),
        message: 'Chung tay giúp đỡ cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Donations for campaign 9
      {
        campaign_id: 9,
        user_id: 1,
        amount: 2000000,
        donation_date: new Date(),
        message: 'Ủng hộ chiến dịch đầy ý nghĩa!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 9,
        user_id: 2,
        amount: 2500000,
        donation_date: new Date(),
        message: 'Mong chiến dịch đạt được mục tiêu!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 9,
        user_id: 3,
        amount: 3000000,
        donation_date: new Date(),
        message: 'Hỗ trợ chiến dịch vì cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 9,
        user_id: 4,
        amount: 3500000,
        donation_date: new Date(),
        message: 'Cùng góp sức cho cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 9,
        user_id: 5,
        amount: 4000000,
        donation_date: new Date(),
        message: 'Hy vọng giúp đỡ được nhiều người!',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Donations for campaign 10
      {
        campaign_id: 10,
        user_id: 1,
        amount: 2500000,
        donation_date: new Date(),
        message: 'Hy vọng chiến dịch sẽ thành công!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 10,
        user_id: 2,
        amount: 3000000,
        donation_date: new Date(),
        message: 'Chung tay vì cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 10,
        user_id: 3,
        amount: 3500000,
        donation_date: new Date(),
        message: 'Mong chiến dịch đạt được mục tiêu!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 10,
        user_id: 4,
        amount: 4000000,
        donation_date: new Date(),
        message: 'Chung tay giúp đỡ cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 10,
        user_id: 5,
        amount: 4500000,
        donation_date: new Date(),
        message: 'Cảm ơn mọi người đã tham gia!',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Donations for campaign 11
      {
        campaign_id: 11,
        user_id: 1,
        amount: 3000000,
        donation_date: new Date(),
        message: 'Giúp đỡ cộng đồng trong chiến dịch!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 11,
        user_id: 2,
        amount: 3500000,
        donation_date: new Date(),
        message: 'Cảm ơn những người tham gia!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 11,
        user_id: 3,
        amount: 4000000,
        donation_date: new Date(),
        message: 'Chung tay giúp đỡ những người khó khăn!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 11,
        user_id: 4,
        amount: 4500000,
        donation_date: new Date(),
        message: 'Hy vọng chiến dịch thành công tốt đẹp!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 11,
        user_id: 5,
        amount: 5000000,
        donation_date: new Date(),
        message: 'Cùng đồng hành với chiến dịch!',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Donations for campaign 12
      {
        campaign_id: 12,
        user_id: 1,
        amount: 3500000,
        donation_date: new Date(),
        message: 'Ủng hộ chiến dịch đầy ý nghĩa!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 12,
        user_id: 2,
        amount: 4000000,
        donation_date: new Date(),
        message: 'Mong chiến dịch thành công!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 12,
        user_id: 3,
        amount: 4500000,
        donation_date: new Date(),
        message: 'Cùng nhau giúp đỡ cộng đồng!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 12,
        user_id: 4,
        amount: 5000000,
        donation_date: new Date(),
        message: 'Chúc chiến dịch sẽ thành công!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campaign_id: 12,
        user_id: 5,
        amount: 5500000,
        donation_date: new Date(),
        message: 'Cảm ơn các bạn đã tham gia!',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Donations', null, {});
  }
};
