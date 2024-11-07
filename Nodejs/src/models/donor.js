'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Relationship with Users table
      Donor.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      // Relationship with Donations table
      Donor.hasMany(models.Donation, {
        foreignKey: 'donor_id',
      });
    }
  };
  Donor.init({
    donor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: 'Users', key: 'user_id' }
    },
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Donor',
  });
  return Donor;
};