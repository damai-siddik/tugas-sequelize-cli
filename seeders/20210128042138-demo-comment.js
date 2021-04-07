'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [
      {postId: 1, article: 'make a coffe', createdAt: new Date(), updatedAt: new Date()},
      {postId: 2, article: 'make a cake', createdAt: new Date(), updatedAt: new Date()},
      {postId: 3, article: 'make a tea', createdAt: new Date(), updatedAt: new Date()},
      {postId: 4, article: 'make a cocoba', createdAt: new Date(), updatedAt: new Date()},
      {postId: 5, article: 'make a buble', createdAt: new Date(), updatedAt: new Date()},
    ],
    {});
    
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
