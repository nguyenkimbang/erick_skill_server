const Sequelize = require('sequelize');
const models = require('./initModels');
const envConfigs = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];

let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const db = models(sequelize);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

