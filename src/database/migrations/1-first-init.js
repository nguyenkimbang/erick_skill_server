'use strict';

const Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "brands", deps: []
 * createTable "categories", deps: []
 * createTable "customers", deps: []
 * createTable "stores", deps: []
 * createTable "staffs", deps: [stores, staffs]
 * createTable "products", deps: [brands, categories]
 * createTable "orders", deps: [customers, stores, staffs]
 * createTable "order_items", deps: [orders, products]
 * createTable "stocks", deps: [stores, products]
 * addIndex "brands_brand_id" to table "brands"
 * addIndex "PK__categori__D54EE9B4A173A05F" to table "categories"
 * addIndex "PK__customer__CD65CB85136847C0" to table "customers"
 * addIndex "PK__order_it__837942D4BBE8C529" to table "order_items"
 * addIndex "PK__orders__4659622975EC87A6" to table "orders"
 * addIndex "PK__products__47027DF58A6E18F7" to table "products"
 * addIndex "PK__staffs__1963DD9CDBFBF4E6" to table "staffs"
 * addIndex "UQ__staffs__AB6E616406D457D2" to table "staffs"
 * addIndex "PK__stocks__E68284D321FCD587" to table "stocks"
 * addIndex "PK__stores__A2F2A30C06E745D6" to table "stores"
 *
 **/

const info = {
  'revision': 1,
  'name': 'first-init',
  'created': '2021-03-07T03:43:08.790Z',
  'comment': '',
};

const migrationCommands = [{
  fn: 'createTable',
  params: [
    'brands',
    {
      'brand_id': {
        'type': Sequelize.INTEGER,
        'field': 'brand_id',
        'primaryKey': true,
        'allowNull': false,
        'autoIncrement': true,
      },
      'brand_name': {
        'type': Sequelize.STRING,
        'field': 'brand_name',
        'allowNull': false,
      },
    },
    {},
  ],
},
{
  fn: 'createTable',
  params: [
    'categories',
    {
      'category_id': {
        'type': Sequelize.INTEGER,
        'field': 'category_id',
        'primaryKey': true,
        'allowNull': false,
        'autoIncrement': true,
      },
      'category_name': {
        'type': Sequelize.STRING,
        'field': 'category_name',
        'allowNull': false,
      },
    },
    {},
  ],
},
{
  fn: 'createTable',
  params: [
    'customers',
    {
      'customer_id': {
        'type': Sequelize.INTEGER,
        'field': 'customer_id',
        'primaryKey': true,
        'allowNull': false,
        'autoIncrement': true,
      },
      'first_name': {
        'type': Sequelize.STRING,
        'field': 'first_name',
        'allowNull': false,
      },
      'last_name': {
        'type': Sequelize.STRING,
        'field': 'last_name',
        'allowNull': false,
      },
      'phone': {
        'type': Sequelize.STRING,
        'field': 'phone',
        'allowNull': true,
      },
      'email': {
        'type': Sequelize.STRING,
        'field': 'email',
        'allowNull': false,
      },
      'street': {
        'type': Sequelize.STRING,
        'field': 'street',
        'allowNull': true,
      },
      'city': {
        'type': Sequelize.STRING,
        'field': 'city',
        'allowNull': true,
      },
      'state': {
        'type': Sequelize.STRING,
        'field': 'state',
        'allowNull': true,
      },
      'zip_code': {
        'type': Sequelize.STRING,
        'field': 'zip_code',
        'allowNull': true,
      },
    },
    {},
  ],
},
{
  fn: 'createTable',
  params: [
    'stores',
    {
      'store_id': {
        'type': Sequelize.INTEGER,
        'field': 'store_id',
        'primaryKey': true,
        'allowNull': false,
        'autoIncrement': true,
      },
      'store_name': {
        'type': Sequelize.STRING,
        'field': 'store_name',
        'allowNull': false,
      },
      'phone': {
        'type': Sequelize.STRING,
        'field': 'phone',
        'allowNull': true,
      },
      'email': {
        'type': Sequelize.STRING,
        'field': 'email',
        'allowNull': true,
      },
      'street': {
        'type': Sequelize.STRING,
        'field': 'street',
        'allowNull': true,
      },
      'city': {
        'type': Sequelize.STRING,
        'field': 'city',
        'allowNull': true,
      },
      'state': {
        'type': Sequelize.STRING,
        'field': 'state',
        'allowNull': true,
      },
      'zip_code': {
        'type': Sequelize.STRING,
        'field': 'zip_code',
        'allowNull': true,
      },
    },
    {},
  ],
},
{
  fn: 'createTable',
  params: [
    'staffs',
    {
      'staff_id': {
        'type': Sequelize.INTEGER,
        'field': 'staff_id',
        'primaryKey': true,
        'allowNull': false,
        'autoIncrement': true,
      },
      'first_name': {
        'type': Sequelize.STRING,
        'field': 'first_name',
        'allowNull': false,
      },
      'last_name': {
        'type': Sequelize.STRING,
        'field': 'last_name',
        'allowNull': false,
      },
      'email': {
        'type': Sequelize.STRING,
        'field': 'email',
        'unique': 'UQ__staffs__AB6E616406D457D2',
        'allowNull': false,
      },
      'phone': {
        'type': Sequelize.STRING,
        'field': 'phone',
        'allowNull': true,
      },
      'active': {
        'type': Sequelize.INTEGER,
        'field': 'active',
        'allowNull': false,
      },
      'store_id': {
        'type': Sequelize.INTEGER,
        'onUpdate': 'CASCADE',
        'onDelete': 'NO ACTION',
        'field': 'store_id',
        'references': {
          'model': 'stores',
          'key': 'store_id',
        },
        'allowNull': false,
      },
      'manager_id': {
        'type': Sequelize.INTEGER,
        'onUpdate': 'CASCADE',
        'onDelete': 'SET NULL',
        'field': 'manager_id',
        'references': {
          'model': 'staffs',
          'key': 'staff_id',
        },
        'allowNull': true,
      },
    },
    {},
  ],
},
{
  fn: 'createTable',
  params: [
    'products',
    {
      'product_id': {
        'type': Sequelize.INTEGER,
        'field': 'product_id',
        'primaryKey': true,
        'allowNull': false,
        'autoIncrement': true,
      },
      'product_name': {
        'type': Sequelize.STRING,
        'field': 'product_name',
        'allowNull': false,
      },
      'brand_id': {
        'type': Sequelize.INTEGER,
        'onUpdate': 'CASCADE',
        'onDelete': 'NO ACTION',
        'field': 'brand_id',
        'references': {
          'model': 'brands',
          'key': 'brand_id',
        },
        'allowNull': false,
      },
      'category_id': {
        'type': Sequelize.INTEGER,
        'onUpdate': 'CASCADE',
        'onDelete': 'NO ACTION',
        'field': 'category_id',
        'references': {
          'model': 'categories',
          'key': 'category_id',
        },
        'allowNull': false,
      },
      'model_year': {
        'type': Sequelize.INTEGER,
        'field': 'model_year',
        'allowNull': false,
      },
      'list_price': {
        'type': Sequelize.DECIMAL(10, 2),
        'field': 'list_price',
        'allowNull': false,
      },
    },
    {},
  ],
},
{
  fn: 'createTable',
  params: [
    'orders',
    {
      'order_id': {
        'type': Sequelize.INTEGER,
        'field': 'order_id',
        'primaryKey': true,
        'allowNull': false,
        'autoIncrement': true,
      },
      'customer_id': {
        'type': Sequelize.INTEGER,
        'onUpdate': 'CASCADE',
        'onDelete': 'SET NULL',
        'field': 'customer_id',
        'references': {
          'model': 'customers',
          'key': 'customer_id',
        },
        'allowNull': true,
      },
      'order_status': {
        'type': Sequelize.INTEGER,
        'field': 'order_status',
        'allowNull': false,
      },
      'order_date': {
        'type': Sequelize.DATE,
        'field': 'order_date',
        'allowNull': false,
      },
      'required_date': {
        'type': Sequelize.DATE,
        'field': 'required_date',
        'allowNull': false,
      },
      'shipped_date': {
        'type': Sequelize.DATE,
        'field': 'shipped_date',
        'allowNull': true,
      },
      'store_id': {
        'type': Sequelize.INTEGER,
        'onUpdate': 'CASCADE',
        'onDelete': 'NO ACTION',
        'field': 'store_id',
        'references': {
          'model': 'stores',
          'key': 'store_id',
        },
        'allowNull': false,
      },
      'staff_id': {
        'type': Sequelize.INTEGER,
        'onUpdate': 'CASCADE',
        'onDelete': 'NO ACTION',
        'field': 'staff_id',
        'references': {
          'model': 'staffs',
          'key': 'staff_id',
        },
        'allowNull': false,
      },
    },
    {},
  ],
},
{
  fn: 'createTable',
  params: [
    'order_items',
    {
      'order_id': {
        'type': Sequelize.INTEGER,
        'onUpdate': 'CASCADE',
        'onDelete': 'NO ACTION',
        'field': 'order_id',
        'references': {
          'model': 'orders',
          'key': 'order_id',
        },
        'primaryKey': true,
        'allowNull': false,
      },
      'item_id': {
        'type': Sequelize.INTEGER,
        'field': 'item_id',
        'primaryKey': true,
        'allowNull': false,
      },
      'product_id': {
        'type': Sequelize.INTEGER,
        'onUpdate': 'CASCADE',
        'onDelete': 'NO ACTION',
        'field': 'product_id',
        'references': {
          'model': 'products',
          'key': 'product_id',
        },
        'allowNull': false,
      },
      'quantity': {
        'type': Sequelize.INTEGER,
        'field': 'quantity',
        'allowNull': false,
      },
      'list_price': {
        'type': Sequelize.DECIMAL(10, 2),
        'field': 'list_price',
        'allowNull': false,
      },
      'discount': {
        'type': Sequelize.DECIMAL(4, 2),
        'field': 'discount',
        'defaultValue': 0,
        'allowNull': false,
      },
    },
    {},
  ],
},
{
  fn: 'createTable',
  params: [
    'stocks',
    {
      'store_id': {
        'type': Sequelize.INTEGER,
        'onUpdate': 'CASCADE',
        'onDelete': 'CASCADE',
        'unique': 'stocks_store_id_product_id_unique',
        'field': 'store_id',
        'references': {
          'model': 'stores',
          'key': 'store_id',
        },
        'primaryKey': true,
        'allowNull': false,
      },
      'product_id': {
        'type': Sequelize.INTEGER,
        'onUpdate': 'CASCADE',
        'onDelete': 'CASCADE',
        'unique': 'stocks_store_id_product_id_unique',
        'field': 'product_id',
        'references': {
          'model': 'products',
          'key': 'product_id',
        },
        'primaryKey': true,
        'allowNull': false,
      },
      'quantity': {
        'type': Sequelize.INTEGER,
        'field': 'quantity',
        'allowNull': true,
      },
    },
    {},
  ],
},
{
  fn: 'addIndex',
  params: [
    'brands',
    [{
      'name': 'brand_id',
    }],
    {
      'indexName': 'brands_brand_id',
      'name': 'brands_brand_id',
      'indicesType': 'UNIQUE',
      'type': 'UNIQUE',
    },
  ],
},
{
  fn: 'addIndex',
  params: [
    'categories',
    [{
      'name': 'category_id',
    }],
    {
      'indexName': 'PK__categori__D54EE9B4A173A05F',
      'name': 'PK__categori__D54EE9B4A173A05F',
      'indicesType': 'UNIQUE',
      'type': 'UNIQUE',
    },
  ],
},
{
  fn: 'addIndex',
  params: [
    'customers',
    [{
      'name': 'customer_id',
    }],
    {
      'indexName': 'PK__customer__CD65CB85136847C0',
      'name': 'PK__customer__CD65CB85136847C0',
      'indicesType': 'UNIQUE',
      'type': 'UNIQUE',
    },
  ],
},
{
  fn: 'addIndex',
  params: [
    'order_items',
    [{
      'name': 'order_id',
    }, {
      'name': 'item_id',
    }],
    {
      'indexName': 'PK__order_it__837942D4BBE8C529',
      'name': 'PK__order_it__837942D4BBE8C529',
      'indicesType': 'UNIQUE',
      'type': 'UNIQUE',
    },
  ],
},
{
  fn: 'addIndex',
  params: [
    'orders',
    [{
      'name': 'order_id',
    }],
    {
      'indexName': 'PK__orders__4659622975EC87A6',
      'name': 'PK__orders__4659622975EC87A6',
      'indicesType': 'UNIQUE',
      'type': 'UNIQUE',
    },
  ],
},
{
  fn: 'addIndex',
  params: [
    'products',
    [{
      'name': 'product_id',
    }],
    {
      'indexName': 'PK__products__47027DF58A6E18F7',
      'name': 'PK__products__47027DF58A6E18F7',
      'indicesType': 'UNIQUE',
      'type': 'UNIQUE',
    },
  ],
},
{
  fn: 'addIndex',
  params: [
    'staffs',
    [{
      'name': 'staff_id',
    }],
    {
      'indexName': 'PK__staffs__1963DD9CDBFBF4E6',
      'name': 'PK__staffs__1963DD9CDBFBF4E6',
      'indicesType': 'UNIQUE',
      'type': 'UNIQUE',
    },
  ],
},
{
  fn: 'addIndex',
  params: [
    'staffs',
    [{
      'name': 'email',
    }],
    {
      'indexName': 'UQ__staffs__AB6E616406D457D2',
      'name': 'UQ__staffs__AB6E616406D457D2',
      'indicesType': 'UNIQUE',
      'type': 'UNIQUE',
    },
  ],
},
{
  fn: 'addIndex',
  params: [
    'stocks',
    [{
      'name': 'store_id',
    }, {
      'name': 'product_id',
    }],
    {
      'indexName': 'PK__stocks__E68284D321FCD587',
      'name': 'PK__stocks__E68284D321FCD587',
      'indicesType': 'UNIQUE',
      'type': 'UNIQUE',
    },
  ],
},
{
  fn: 'addIndex',
  params: [
    'stores',
    [{
      'name': 'store_id',
    }],
    {
      'indexName': 'PK__stores__A2F2A30C06E745D6',
      'name': 'PK__stores__A2F2A30C06E745D6',
      'indicesType': 'UNIQUE',
      'type': 'UNIQUE',
    },
  ],
},
];

module.exports = {
  pos: 0,
  up: function(queryInterface, Sequelize) {
    let index = this.pos;
    return new Promise(function(resolve, reject) {
      function next() {
        if (index < migrationCommands.length) {
          const command = migrationCommands[index];
          console.log('[#'+index+'] execute: ' + command.fn);
          index++;
          queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
        } else {
          resolve();
        }
      }
      next();
    });
  },
  info: info,
};
