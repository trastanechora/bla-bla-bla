"use strict";
const fs = require(`fs`);
module.exports = {
  up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const data = JSON.parse(
      fs.readFileSync(`./data/departements.json`, `utf-8`)
    ).map((el) => {
      delete el.id;
      return {
        ...el,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    return queryInterface.bulkInsert(`Departments`, data, {});
  },

  down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkdelete("Departments", null, {});
  },
};
