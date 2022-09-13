"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Job.belongsTo(models.Department, { foreignKey: "DepartmentId" });
      Job.hasOne(models.Salary, { foreignKey: "JobId" });
    }
  }
  Job.init(
    {
      DepartmentId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      vacancy: DataTypes.INTEGER,
      requirement: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Job",
    }
  );
  return Job;
};
