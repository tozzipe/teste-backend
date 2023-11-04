'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Coins', [

      {
        walletId: '1a1dc91c907325c69271ddf0c944bc72',
        coin: 'BTC',
        balance: 2.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        walletId: '1a1dc91c907325c69271ddf0c944bc72',
        coin: 'ETH',
        balance: 3.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        walletId: '1a1dc91c907325c69271ddf0c944bc72',
        coin: 'LTC',
        balance: 1.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        walletId: '098f6bcd4621d373cade4e832627b4f6',
        coin: 'BTC',
        balance: 4.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        walletId: '098f6bcd4621d373cade4e832627b4f6',
        coin: 'ETH',
        balance: 2.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        walletId: '09ca7e2e77b0710549f70e81f558cf71',
        coin: 'BTC',
        balance: 1.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        walletId: '09ca7e2e77b0710549f70e81f558cf71',
        coin: 'XRP',
        balance: 5.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Coins', null, {});
  },
};



