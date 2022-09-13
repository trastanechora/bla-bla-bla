"use strict";
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable("Salaries", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      JobId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Jobs",
          key: "id",
        },
      },
      amount: {
        type: Sequelize.DECIMAL,
        defaultValue: 0,
      },
      bonus: {
        type: Sequelize.DECIMAL,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("Salaries");
  },
};
