'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BorrowingRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BorrowingRecord.init({
    bookId: DataTypes.INTEGER,
    borrowerId: DataTypes.INTEGER,
    charge: DataTypes.FLOAT,
    borrowDate: DataTypes.DATE,
    dueDate: DataTypes.DATE,
    returnDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'BorrowingRecord',
  });
  
  return BorrowingRecord;
};