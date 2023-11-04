'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        userId: 'c4ca4238a0b923820dcc509a6f75849b',
        firstName: 'João',
        lastName: 'Silva',
        email: 'joao@email.com',
        password: '1a1dc91c907325c69271ddf0c944bc72',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 'c81e728d9d4c2f636f067f89cc14862c',
        firstName: 'Maria',
        lastName: 'Santos',
        email: 'maria@email.com',
        password: '098f6bcd4621d373cade4e832627b4f6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 'eccbc87e4b5ce2fe28308fd9f2a7baf3',
        firstName: 'Pedro',
        lastName: 'Ribeiro',
        email: 'pedro@email.com',
        password: '09ca7e2e77b0710549f70e81f558cf71',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: '202cb962ac59075b964b07152d234b70',
        firstName: 'João',
        lastName: 'Santos',
        email: 'joao@email.com',
        password: '09ca7e2e77b0710549f70e81f558cf71',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
