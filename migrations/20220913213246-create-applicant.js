"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Applicants", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullname: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      applicantCode: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      dateApplied: {
        type: Sequelize.DATE,
      },
      JobId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Jobs",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
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
    await queryInterface.dropTable("Applicants");
  },
};
