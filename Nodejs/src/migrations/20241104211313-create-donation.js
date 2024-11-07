'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Donations', {
      donation_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      campaign_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Campaigns', key: 'campaign_id' }
      },
      donor_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Donors', key: 'donor_id' }
      },
      amount: {
        type: Sequelize.DECIMAL
      },
      donation_date: {
        type: Sequelize.DATE
      },
      message: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Donations');
  }
};