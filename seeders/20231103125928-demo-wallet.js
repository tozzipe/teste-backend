'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Wallets', [
      {
        walletId: '1a1dc91c907325c69271ddf0c944bc72',
        userId: 'c4ca4238a0b923820dcc509a6f75849b',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        walletId: '098f6bcd4621d373cade4e832627b4f6',
        userId: 'c81e728d9d4c2f636f067f89cc14862c',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        walletId: '09ca7e2e77b0710549f70e81f558cf71',
        userId: 'eccbc87e4b5ce2fe28308fd9f2a7baf3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        walletId: '9271fcdf5fd9113ad7bafc7bf877b4ff',
        userId: '202cb962ac59075b964b07152d234b70',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Wallets', null, {});
  },
};
