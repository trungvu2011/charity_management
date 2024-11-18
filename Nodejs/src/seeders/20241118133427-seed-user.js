'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        user_id: 1,
        firstName: 'Admin',
        lastName: 'Individual',
        email: 'admin_individual@gmail.com',
        password: '123456',
        phonenumber: '0123456789',
        address: 'Hanoi',
        userType: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        firstName: 'Admin',
        lastName: 'Organization',
        email: 'admin_organization@gmail.com',
        password: '123456',
        phonenumber: '0123456789',
        address: 'HCM',
        userType: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {
      validate: true,
      individualHooks: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
