const Sequlize = require('sequelize');

const sequlize = require('../util/database');

const CartItem = sequlize.define('cartItem',{
    id: {
        type: Sequlize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    quantity: Sequlize.INTEGER
});

module.exports = CartItem;