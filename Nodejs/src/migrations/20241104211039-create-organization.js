'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Organizations', {
      organization_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'Users', key: 'user_id' },
        onDelete: 'CASCADE'
      },
      description: {
        type: Sequelize.TEXT
      },
      established_date: {
        type: Sequelize.DATE
      },
      website: {
        type: Sequelize.STRING
      },
      contact_info: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Organizations');
  }
};