/* eslint-disable no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tasks',
      [
        {
          title: 'Clean my garage',
          details: 'Please help me clean the mess in my garage and organise the shelves.',
          CategoryId: 5,
          ownerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Grocery shopping',
          details: 'I need some groceries but I can\'t leave the house.',
          CategoryId: 3,
          ownerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Walk my dog',
          details: 'Please walk my dog tomorrow morning.',
          CategoryId: 4,
          ownerId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Pick up parcel',
          details: 'Need help picking up a parcel from the post office.',
          CategoryId: 2,
          ownerId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Broken drum kit',
          details: 'Please help me rebuild my drum kit',
          CategoryId: 2,
          ownerId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
