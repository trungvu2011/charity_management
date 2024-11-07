'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Organization.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
    }
  };
  Organization.init({
    organization_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: { model: 'Users', key: 'user_id' }
    },
    description: DataTypes.TEXT,
    established_date: DataTypes.DATE,
    website: DataTypes.STRING,
    contact_info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Organization',
  });
  return Organization;
};