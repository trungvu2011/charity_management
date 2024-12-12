'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Admin',
        lastName: 'Individual',
        email: 'admin_individual@gmail.com',
        password: '123456', // You might consider hashing this in a real app
        phonenumber: '0123456789',
        address: 'Hanoi',
        userType: false, // Individual
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Admin',
        lastName: 'Organization',
        email: 'admin_organization@gmail.com',
        password: '123456',
        phonenumber: '0123456789',
        address: 'HCM',
        userType: true, // Organization
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
