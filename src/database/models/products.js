const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    product_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'brands',
        key: 'brand_id',
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'category_id',
      },
    },
    model_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    list_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'products',
    // schema: 'production',
    timestamps: false,
    indexes: [
      {
        name: 'PK__products__47027DF58A6E18F7',
        unique: true,
        fields: [
          {name: 'product_id'},
        ],
      },
    ],
  });
};
