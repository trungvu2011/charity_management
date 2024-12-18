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
      },
      {
        firstName: 'Charlie',
        lastName: 'Davis',
        email: 'charlie.davis@example.com',
        password: 'charlie123',
        phonenumber: '0934567890',
        address: 'Quang Ngai',
        userType: false, // Individual
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Eve',
        lastName: 'Johnson',
        email: 'eve.johnson@example.com',
        password: 'evepass123',
        phonenumber: '0945678901',
        address: 'Hanoi',
        userType: true, // Organization
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'David',
        lastName: 'Martinez',
        email: 'david.martinez@example.com',
        password: 'davidsmith456',
        phonenumber: '0956789012',
        address: 'Ho Chi Minh City',
        userType: false, // Individual
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Olivia',
        lastName: 'Garcia',
        email: 'olivia.garcia@example.com',
        password: 'oliviapass789',
        phonenumber: '0967890123',
        address: 'Da Nang',
        userType: true, // Organization
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Liam',
        lastName: 'Martinez',
        email: 'liam.martinez@example.com',
        password: 'liampass101',
        phonenumber: '0978901234',
        address: 'Nha Trang',
        userType: false, // Individual
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Sophia',
        lastName: 'Hernandez',
        email: 'sophia.hernandez@example.com',
        password: 'sophia456',
        phonenumber: '0989012345',
        address: 'Hue',
        userType: true, // Organization
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Mason',
        lastName: 'Lopez',
        email: 'mason.lopez@example.com',
        password: 'masonpass987',
        phonenumber: '0990123456',
        address: 'Vung Tau',
        userType: false, // Individual
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Lucas',
        lastName: 'Wilson',
        email: 'lucas.wilson@example.com',
        password: 'lucas123',
        phonenumber: '0901234567',
        address: 'Can Tho',
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
