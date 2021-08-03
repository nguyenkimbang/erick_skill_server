'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('categories', [
      {
        'category_id': 1,
        'category_name': 'Children Bicycles',
      },
      {
        'category_id': 2,
        'category_name': 'Comfort Bicycles',
      },
      {
        'category_id': 3,
        'category_name': 'Cruisers Bicycles',
      },
      {
        'category_id': 4,
        'category_name': 'Cyclocross Bicycles',
      },
      {
        'category_id': 5,
        'category_name': 'Electric Bikes',
      },
      {
        'category_id': 6,
        'category_name': 'Mountain Bikes',
      },
      {
        'category_id': 7,
        'category_name': 'Road Bikes',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
