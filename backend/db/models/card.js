const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ Theme, User }) {
      this.belongsTo(Theme, { foreignKey: 'theme_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Card.init(
    {
      question: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      point: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      theme_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Card',
      tableName: 'Cards',
    }
  );
  return Card;
};
