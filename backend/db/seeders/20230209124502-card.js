/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Cards', [
      // Аниме
      {
        question:
          'Есть ли такое аниме? «Я напился и привёл домой старшеклассницу»',
        answer: 'Да',
        img: 'https://avatars.mds.yandex.net/i?id=8e72a6a3589270181bef1a2f02cc9bf0-5318071-images-thumbs&n=13',
        description:
          'Оно существует! И, как ни странно, транслирует очень правильные ценности',
        point: 100,
        user_id: 1,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          'Есть ли такое аниме? «Раз героем мне не стать, самое время - работу искать!»',
        answer: 'Да',
        img: 'https://avatars.mds.yandex.net/i?id=dd31a086cd84a83746a3db8fe0f36ece-5666834-images-thumbs&n=13',
        description:
          'Такое аниме действительно существует! Главный герой, работая продавцом, встретил дочь короля демонов. Из одного Ада в другой.',
        point: 200,
        user_id: 1,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          'Есть ли такое аниме? «Между жизнью и смертью я выбираю гамбургер»',
        answer: 'Нет',
        img: '/home/roman/flash-card/backend/img/rtayd8.jpg',
        description: 'Такого аниме не существует! ',
        point: 300,
        user_id: 1,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Есть ли такое аниме? «Отвергнутый подряд 420 девушками»',
        answer: 'Да',
        img: 'https://b1.filmpro.ru/c/603637.200x288.jpg',
        description: 'Не повезло же главному герою…',
        point: 400,
        user_id: 1,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          'Есть ли такое аниме? «Ты же любишь мамочку, удары которой бьют по площади двойным уроном?»',
        answer: 'Да',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/e5173fae-df78-4017-83fb-38e23690af54/300x450',
        description:
          'Оно существует. И название отражает суть примерно на 147%.',
        point: 500,
        user_id: 1,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Мультяшки
      {
        question: 'У какой из диснеевских принцесс самые длинные волосы?',
        answer: 'Рапунцель',
        img: 'https://avatars.mds.yandex.net/i?id=8fb668849ce2a98f1306c354264a7198d94a328c-3449574-images-thumbs&n=13',
        description: 'RAPUNCEL',
        point: 100,
        user_id: 1,
        theme_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          'Как звали робота основной задачей которого было очищать планету от накопившегося мусора.',
        answer: 'ВАЛЛ-И',
        img: 'https://avatars.mds.yandex.net/i?id=9cef31b2a1d7440bc25721f179bb88e2e0ecad36-8182507-images-thumbs&n=13',
        description: 'WALLE',
        point: 200,
        user_id: 1,
        theme_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          'Как звали красивого, умного и в меру упитанного мужчину в самом расцвете сил',
        answer: 'Карлсон',
        img: 'https://avatars.mds.yandex.net/i?id=01451509044073dea18a9118f9df098cb45447ea-8176762-images-thumbs&n=13',
        description: 'KARLSON',
        point: 300,
        user_id: 1,
        theme_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Для него «бесконечность не предел»',
        answer: 'Базз Лайтер',
        img: 'https://avatars.mds.yandex.net/i?id=4b5f219d317b4def84bc64d66f6a419510b9a744-4464154-images-thumbs&n=13',
        description: 'BAZZ LIGHTER',
        point: 400,
        user_id: 1,
        theme_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          'Он известный коротышка, Озорник и шалунишка. Шляпа, галстук - вот приметы. Угадали? Кто же это?',
        answer: 'Незнайка',
        img: 'https://avatars.mds.yandex.net/i?id=c71c1d6bc8e22cd18970c89295cfe2c0cc434044-8497069-images-thumbs&n=13',
        description: 'NEZNAYKA',
        point: 500,
        user_id: 1,
        theme_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Кино
      {
        question:
          'В какую страну отправился Форрест Гамп в составе сборной США по настольному теннису?',
        answer: 'Китай',
        img: 'https://avatars.mds.yandex.net/i?id=955d1e355fe69f7739d264d487bff4c593f0380c-8210081-images-thumbs&n=13',
        description: 'CHINA',
        point: 100,
        user_id: 1,
        theme_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Какой фильм является самым кассовым в истории?',
        answer: 'Аватар',
        img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4adf61aa-3cb7-4381-9245-523971e5b4c8/300x450',
        description: 'Сборы в мире $2 923 905 528',
        point: 200,
        user_id: 1,
        theme_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          'Какая кинофраншиза является самой продолжительной в истории кино?',
        answer: 'Годзилла',
        img: 'https://avatars.mds.yandex.net/i?id=dfda53fe14690cab3d0b7a294055776c91950ac3-8264916-images-thumbs&n=13',
        description: '68 лет (1954 - настоящее время)',
        point: 300,
        user_id: 1,
        theme_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Какой фильм является самым провальным в истории?',
        answer: 'Сахара',
        img: 'https://avatars.mds.yandex.net/i?id=a8f80a489ae37e7101d36feb933d7fd3267f6327-8133404-images-thumbs&n=13',
        description: 'При бюджете фильма в $241 млн убыток составил $122 млн',
        point: 400,
        user_id: 1,
        theme_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Каким фильмом вы бы описали обучение в Эльбрусе?',
        answer: 'Выживший',
        img: 'https://avatars.mds.yandex.net/i?id=1ab3952ff318e299e4b447abaa8a4bef9c8c418f-7760211-images-thumbs&n=13',
        description: 'По версии Ежиного патруля',
        point: 500,
        user_id: 1,
        theme_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Факты
      {
        question: 'Какой самы популярный напиток в мире?',
        answer: 'Кофе',
        img: '/home/roman/flash-card/backend/img/rtayd8.jpg',
        description: 'Ежегодно люди употребляют около 400 млрд. чашек',
        point: 100,
        user_id: 1,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Правда ли, что все Панды в мире принадлежат Китаю?',
        answer: 'Да',
        img: '/home/roman/flash-card/backend/img/rtayd8.jpg',
        description: 'Все зоопарки мира лишь берут панд в аренду',
        point: 200,
        user_id: 1,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Какому знаку зодиака запрещено водить машину в Индонезии?',
        answer: 'Всем разрешено',
        img: '/home/roman/flash-card/backend/img/rtayd8.jpg',
        description:
          'Знаки зодиака, к счастью, не являются критериями чего-либо серьезного',
        point: 300,
        user_id: 1,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Какую книгу чаще всего воруют в американских магазинах?',
        answer: 'Библию',
        img: '/home/roman/flash-card/backend/img/rtayd8.jpg',
        description: 'HOLY JESUS',
        point: 400,
        user_id: 1,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Умирают ли люди от непонятного почерка врачей?',
        answer: 'Да',
        img: '/home/roman/flash-card/backend/img/rtayd8.jpg',
        description:
          'По американской статистике ежегодно от этого умирают более 7000 пациентов, в связи с тем, что им попросту выдают не те лекарства или вовсе неверно расшифровывают непонятные врачебные аббревиатуры',
        point: 500,
        user_id: 1,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
