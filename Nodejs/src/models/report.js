'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Relationship with Campaigns table
      Report.belongsTo(models.Campaign, {
        foreignKey: 'campaign_id',
      });
    }
  };
  Report.init({
    report_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      references: { model: 'Campaigns', key: 'campaign_id' }
    },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    report_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Report',
  });
  return Report;
};