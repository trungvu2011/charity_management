'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Campaign, {
        foreignKey: 'user_id',
      });

      // If User is Organiazation, additional organization information may be available
      User.hasOne(models.Organization, {
        foreignKey: 'organization_id',
      });

      User.hasMany(models.Donor, {
        foreignKey: 'donor_id',
      });
    }
  };
  User.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    address: DataTypes.STRING,
    userType: DataTypes.BOOLEAN // 0 = individual, 1 = organization
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};