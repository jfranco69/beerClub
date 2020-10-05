const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const suplier = suquelize.define('supliers' {
    cnpj: DataTypes.STRING(14),
    companyName: DataTypes.STRING,
    address: DataTypes.STRING,
    addressNumber: DataTypes.INTEGER,
    addressComplement: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    city: DataTypes.STRING,
    federativeUnit: DataTypes.STRING,
    country: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'suplier',
    tableName: 'supliers'
  });
  suplier.associate = (models) => {

  }
  return suplier;
};