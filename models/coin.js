'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coin extends Model {
    static associate(models) {
      Coin.belongsTo(models.Wallet, { foreignKey: 'walletId' });
    }
  }
  Coin.init({
    walletId: DataTypes.STRING,
    coin: DataTypes.STRING,
    balance: DataTypes.DECIMAL(10, 2),
}, {
  sequelize, // Passe o objeto sequelize para a inicialização do modelo
  modelName: 'Coin',
});
return Coin;
};
