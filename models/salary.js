"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Salary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Salary.belongsTo(models.Job, { foreignKey: "JobId" });
    }
  }
  Salary.init(
    {
      JobId: DataTypes.INTEGER,
      amount: DataTypes.DECIMAL,
      bonus: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Salary",
    }
  );
  return Salary;
};
