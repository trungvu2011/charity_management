'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Campaigns', {
      campaign_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'user_id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      title: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      goal_amount: {
        type: Sequelize.DECIMAL
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.BOOLEAN // 0 = inactive, 1 = active
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
    await queryInterface.dropTable('Campaigns');
  }
};