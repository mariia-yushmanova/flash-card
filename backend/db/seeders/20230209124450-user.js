const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'admin',
        password: await bcrypt.hash('123', 10),
        email: 'ad@ad.ru',
        score: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'superplayer',
        password: await bcrypt.hash('123', 10),
        email: 'super@player.ru',
        score: 1_000_000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
