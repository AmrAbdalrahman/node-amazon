const Sequlize = require('sequelize');

const sequlize = require('../util/database');

const Product = sequlize.define('product',{
   id: {
       type: Sequlize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true
   },
    title: Sequlize.STRING,
    price: {
       type: Sequlize.DOUBLE,
        allowNull: false,
    },
    imageUrl: {
       type: Sequlize.STRING,
        allowNull: false
    },
    description: {
       type: Sequlize.STRING,
        allowNull: false
    }
});

module.exports = Product;