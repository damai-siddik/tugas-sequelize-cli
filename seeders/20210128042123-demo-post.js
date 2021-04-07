'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      {title: 'T1', description: 'try1', comments:'try1', userId:1, createdAt: new Date(), updatedAt: new Date()},
      {title: 'T2', description: 'try2', comments:'try2', userId:2, createdAt: new Date(), updatedAt: new Date()},
      {title: 'T3', description: 'try3', comments:'try3', userId:3, createdAt: new Date(), updatedAt: new Date()},
      {title: 'T4', description: 'try4', comments:'try4', userId:4, createdAt: new Date(), updatedAt: new Date()},
      {title: 'T5', description: 'try5', comments:'try5', userId:5, createdAt: new Date(), updatedAt: new Date()},
    ],
    {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
