/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories',
      [
        { name: 'Pickup/Delivery', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Maintenance', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Shopping', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Pets', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Cleaning', createdAt: new Date(), updatedAt: new Date() },
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
