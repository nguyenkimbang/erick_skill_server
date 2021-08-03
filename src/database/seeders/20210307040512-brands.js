'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('brands', [
      {
        'brand_id': 1,
        'brand_name': 'Electra',
      },
      {
        'brand_id': 2,
        'brand_name': 'Haro',
      },
      {
        'brand_id': 3,
        'brand_name': 'Heller',
      },
      {
        'brand_id': 4,
        'brand_name': 'Pure Cycles',
      },
      {
        'brand_id': 5,
        'brand_name': 'Ritchey',
      },
      {
        'brand_id': 6,
        'brand_name': 'Strider',
      },
      {
        'brand_id': 7,
        'brand_name': 'Sun Bicycles',
      },
      {
        'brand_id': 8,
        'brand_name': 'Surly',
      },
      {
        'brand_id': 9,
        'brand_name': 'Trek',
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
