'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {username: 'damai', password: 'agfdate', name:'damai', address: 'lampung', posts: 'try1', createdAt: new Date(), updatedAt: new Date()},
      {username: 'nuki', password: 'agfdate', name:'nuki', address: 'malang', posts: 'try2', createdAt: new Date(), updatedAt: new Date()},
      {username: 'jess', password: 'agfdate', name:'jessica', address: 'kalimantan', posts: 'try3', createdAt: new Date(), updatedAt: new Date()},
      {username: 'oca', password: 'agfdate', name:'febiannisa', address: 'jakarta', posts: 'try4', createdAt: new Date(), updatedAt: new Date()},
      {username: 'iyan', password: 'agfdate', name:'adryan', address: 'bandung', posts: 'try5', createdAt: new Date(), updatedAt: new Date()},      
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
