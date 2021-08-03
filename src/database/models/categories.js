const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categories', {
    category_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'categories',
    // schema: 'production',
    timestamps: false,
    indexes: [
      {
        name: 'PK__categori__D54EE9B4A173A05F',
        unique: true,
        fields: [
          {name: 'category_id'},
        ],
      },
    ],
  });
};
