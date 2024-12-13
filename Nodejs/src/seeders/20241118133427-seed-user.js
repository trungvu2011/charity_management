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
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        password: 'password123', // Consider hashing this
        phonenumber: '0987654321',
        address: 'Da Nang',
        userType: false, // Individual
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Alice',
        lastName: 'Smith',
        email: 'alice.smith@example.com',
        password: 'alicepass456',
        phonenumber: '0912345678',
        address: 'Ho Chi Minh City',
        userType: true, // Organization
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Bob',
        lastName: 'Brown',
        email: 'bob.brown@example.com',
        password: 'bobpass789',
        phonenumber: '0923456789',
        address: 'Hanoi',
        userType: false, // Individual
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
