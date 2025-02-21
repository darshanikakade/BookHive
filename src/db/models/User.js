'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Book, { foreignKey: "authorId", as: "books" });
      User.belongsToMany(models.Book, { through: models.BorrowingRecord })
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    about: DataTypes.TEXT,
    languagePref: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
