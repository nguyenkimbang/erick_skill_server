const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('staffs', {
    staff_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'UQ__staffs__AB6E616406D457D2',
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'stores',
        key: 'store_id',
      },
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'staffs',
        key: 'staff_id',
      },
    },
  }, {
    sequelize,
    tableName: 'staffs',
    // schema: 'sales',
    timestamps: false,
    indexes: [
      {
        name: 'PK__staffs__1963DD9CDBFBF4E6',
        unique: true,
        fields: [
          {name: 'staff_id'},
        ],
      },
      {
        name: 'UQ__staffs__AB6E616406D457D2',
        unique: true,
        fields: [
          {name: 'email'},
        ],
      },
    ],
  });
};
