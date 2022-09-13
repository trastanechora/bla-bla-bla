"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Applicant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Applicant.belongsTo(models.Job, { foreignKey: "JobId" });
    }
  }
  Applicant.init(
    {
      fullname: DataTypes.STRING,
      gender: DataTypes.STRING,
      applicantCode: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      status: DataTypes.STRING,
      dateApplied: DataTypes.DATE,
      JobId: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Applicant",
    }
  );
  return Applicant;
};
