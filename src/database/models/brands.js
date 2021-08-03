const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('brands', {
    brand_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    brand_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'brands',
    // schema: 'production',
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: [
          {name: 'brand_id'},
        ],
      },
    ],
  });
};
