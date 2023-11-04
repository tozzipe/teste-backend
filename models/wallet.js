'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wallet extends Model {
    static associate(models) {
      Wallet.belongsTo(models.User, { foreignKey: 'userId' });
      Wallet.hasMany(models.Coin, { foreignKey: 'walletId' });
    }
  }
Wallet.init({
  userId: DataTypes.STRING,
  walletId: DataTypes.STRING,
}, {
  sequelize, // Passe o objeto sequelize para a inicialização do modelo
  modelName: 'Wallet',
});
return Wallet;
};
