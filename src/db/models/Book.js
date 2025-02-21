'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.User)
      Book.belongsToMany(models.Library, { through: models.LibraryInventory })
      Book.belongsToMany(models.User, { through: models.BorrowingRecord })
    }
  }
  Book.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    coverImgUrl: DataTypes.STRING,
    cost: DataTypes.FLOAT,
    authorId: DataTypes.NUMBER,
    publishedDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Book',
  });

  return Book;
};