'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Relationship with Campaigns table
      Donation.belongsTo(models.Campaign, {
        foreignKey: 'campaign_id',
      });
      // Relationship with Users table
      Donation.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
    }
  };
  Donation.init({
    donation_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      references: { model: 'Campaigns', key: 'campaign_id' }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: 'Users', key: 'user_id' }
    },
    amount: DataTypes.DECIMAL,
    donation_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    message: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Donation',
  });
  return Donation;
};