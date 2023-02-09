const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Card }) {
      this.hasMany(Card, { foreignKey: 'theme_id' });
    }
  }
  Theme.init(
    {
      topic: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Theme',
      tableName: 'Themes',
    }
  );
  return Theme;
};
