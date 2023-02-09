/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Themes', [
      {
        topic: 'Аниме',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic: 'Мультяшки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic: 'Кино',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic: 'Факты',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
