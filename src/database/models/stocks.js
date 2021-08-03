const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stocks', {
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'stores',
        key: 'store_id',
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'products',
        key: 'product_id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    sequelize,
    tableName: 'stocks',
    // schema: 'production',
    timestamps: false,
    indexes: [
      {
        name: 'PK__stocks__E68284D321FCD587',
        unique: true,
        fields: [
          {name: 'store_id'},
          {name: 'product_id'},
        ],
      },
    ],
  });
};
