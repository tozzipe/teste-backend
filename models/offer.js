'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Offer.init({
    walletId: DataTypes.STRING,
    coin: DataTypes.STRING,
    amount: DataTypes.DECIMAL(10,2),
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Offer',
  });
  return Offer;
};