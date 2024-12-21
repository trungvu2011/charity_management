'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Notification.belongsTo(models.User, { foreignKey: 'user_id' });
      Notification.belongsTo(models.Campaign, { foreignKey: 'campaign_id' });
    }
  }
  Notification.init({
    user_id: DataTypes.INTEGER,
    campaign_id: DataTypes.INTEGER,
    noti: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};