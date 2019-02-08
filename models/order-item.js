const Sequlize = require('sequelize');

const sequlize = require('../util/database');

const OrderItem = sequlize.define('orderItem',{
    id: {
        type: Sequlize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    quantity: Sequlize.INTEGER
});

module.exports = OrderItem;