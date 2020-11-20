/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users',
      [
        {
          email: 'dr.teeth@email.com',
          first_name: 'Dr',
          last_name: 'Teeth',
          phone: '123456',
          address: '7 Eight Street, Ninetown, 1234',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'floyd.pepper@email.com',
          first_name: 'Floyd',
          last_name: 'Pepper',
          phone: '456789',
          address: '11 Electric Lane, Mayhem, 4321',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'janice@email.com',
          first_name: 'Janice',
          last_name: '',
          phone: '7',
          address: '82 Up Street, Downtown, 3957',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'zoot@email.com',
          first_name: 'Zoot',
          last_name: '',
          phone: 'none',
          address: '55 Sax Avenue, Outside, 9812',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'animal@email.com',
          first_name: 'Animal',
          last_name: '',
          phone: 'I ate it',
          address: '37 Beat Street, Inside, 9283',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
