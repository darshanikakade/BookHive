'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class LibraryInventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LibraryInventory.init({
    bookId: DataTypes.INTEGER,
    libraryId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LibraryInventory',
  });
  return LibraryInventory;
};