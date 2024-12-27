'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Campaign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Relationship with Users table
      Campaign.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      // Relationship with TransactionRecords table
      Campaign.hasMany(models.TransactionRecord, {
        foreignKey: 'transaction_id',
        as: 'transaction'
      });
      // Relationship with Reports table
      Campaign.hasMany(models.Report, {
        foreignKey: 'report_id',
        as: 'report'
      });
    }
  };
  Campaign.init({
    campaign_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: 'Users', key: 'user_id' }
    },
    title: DataTypes.STRING,
    img: DataTypes.STRING,
    description: DataTypes.TEXT,
    goal_amount: DataTypes.BIGINT,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    status: DataTypes.INTEGER, // 0 = inactive, 1 = active
    BANK_ID: DataTypes.STRING,
    BANK_NO: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Campaign',
  });
  return Campaign;
};