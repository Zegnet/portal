const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Dados = require('../models/Dados');

const connection = new Sequelize(dbConfig);
Dados.init(connection);


module.exports = connection;