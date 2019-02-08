const Sequlize = require('sequelize');

const sequlize = require('../util/database');

const User = sequlize.define('user', {
    id: {
        type: Sequlize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequlize.STRING,
    email: Sequlize.STRING
});

module.exports = User;