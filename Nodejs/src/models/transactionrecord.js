'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Relationship with Campaigns table
      TransactionRecord.belongsTo(models.Campaign, {
        foreignKey: 'campaign_id',
      });
    }
  };
  TransactionRecord.init({
    transaction_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      references: { model: 'Campaigns', key: 'campaign_id' }
    },
    amount: DataTypes.BIGINT,
    transaction_date: {
      type: DataTypes.DATE,
      amount: DataTypes.BIGINT,
      defaultValue: DataTypes.NOW
    },
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'TransactionRecord',
  });
  return TransactionRecord;
};