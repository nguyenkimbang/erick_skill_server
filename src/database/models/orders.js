const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    order_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'customers',
        key: 'customer_id',
      },
    },
    order_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    required_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    shipped_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'stores',
        key: 'store_id',
      },
    },
    staff_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'staffs',
        key: 'staff_id',
      },
    },
  }, {
    sequelize,
    tableName: 'orders',
    // schema: 'sales',
    timestamps: false,
    indexes: [
      {
        name: 'PK__orders__4659622975EC87A6',
        unique: true,
        fields: [
          {name: 'order_id'},
        ],
      },
    ],
  });
};
