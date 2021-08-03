const DataTypes = require('sequelize').DataTypes;
const _brands = require('./brands');
const _categories = require('./categories');
const _customers = require('./customers');
const _order_items = require('./order_items');
const _orders = require('./orders');
const _products = require('./products');
const _staffs = require('./staffs');
const _stocks = require('./stocks');
const _stores = require('./stores');

function initModels(sequelize) {
  const brands = _brands(sequelize, DataTypes);
  const categories = _categories(sequelize, DataTypes);
  const customers = _customers(sequelize, DataTypes);
  const order_items = _order_items(sequelize, DataTypes);
  const orders = _orders(sequelize, DataTypes);
  const products = _products(sequelize, DataTypes);
  const staffs = _staffs(sequelize, DataTypes);
  const stocks = _stocks(sequelize, DataTypes);
  const stores = _stores(sequelize, DataTypes);

  products.belongsToMany(stores, {as: 'stores', through: stocks, foreignKey: 'product_id', otherKey: 'store_id'});
  stores.belongsToMany(products, {as: 'products', through: stocks, foreignKey: 'store_id', otherKey: 'product_id'});
  products.belongsTo(brands, {as: 'brand', foreignKey: 'brand_id'});
  brands.hasMany(products, {as: 'products', foreignKey: 'brand_id'});
  products.belongsTo(categories, {as: 'category', foreignKey: 'category_id'});
  categories.hasMany(products, {as: 'products', foreignKey: 'category_id'});
  stocks.belongsTo(products, {as: 'product', foreignKey: 'product_id'});
  products.hasMany(stocks, {as: 'stocks', foreignKey: 'product_id'});
  order_items.belongsTo(products, {as: 'product', foreignKey: 'product_id'});
  products.hasMany(order_items, {as: 'order_items', foreignKey: 'product_id'});
  orders.belongsTo(customers, {as: 'customer', foreignKey: 'customer_id'});
  customers.hasMany(orders, {as: 'orders', foreignKey: 'customer_id'});
  order_items.belongsTo(orders, {as: 'order', foreignKey: 'order_id'});
  orders.hasMany(order_items, {as: 'order_items', foreignKey: 'order_id'});
  orders.belongsTo(staffs, {as: 'staff', foreignKey: 'staff_id'});
  staffs.hasMany(orders, {as: 'orders', foreignKey: 'staff_id'});
  staffs.belongsTo(staffs, {as: 'manager', foreignKey: 'manager_id'});
  staffs.hasMany(staffs, {as: 'staffs', foreignKey: 'manager_id'});
  stocks.belongsTo(stores, {as: 'store', foreignKey: 'store_id'});
  stores.hasMany(stocks, {as: 'stocks', foreignKey: 'store_id'});
  orders.belongsTo(stores, {as: 'store', foreignKey: 'store_id'});
  stores.hasMany(orders, {as: 'orders', foreignKey: 'store_id'});
  staffs.belongsTo(stores, {as: 'store', foreignKey: 'store_id'});
  stores.hasMany(staffs, {as: 'staffs', foreignKey: 'store_id'});

  return {
    brands,
    categories,
    customers,
    order_items,
    orders,
    products,
    staffs,
    stocks,
    stores,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
