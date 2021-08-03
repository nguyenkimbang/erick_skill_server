'use strict';

const Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeIndex "PK__order_it__837942D4BBE8C529" from table "order_items"
 * removeColumn "item_id" from table "order_items"
 * changeColumn "product_id" on table "order_items"
 * addIndex "PK__order_it__837942D4BBE8C529" to table "order_items"
 *
 **/

const info = {
  'revision': 2,
  'name': 'first-init',
  'created': '2021-03-07T08:09:25.519Z',
  'comment': '',
};

const migrationCommands = [{
  fn: 'removeIndex',
  params: [
    'order_items',
    'PK__order_it__837942D4BBE8C529',
  ],
},
{
  fn: 'removeColumn',
  params: ['order_items', 'item_id'],
},
{
  fn: 'changeColumn',
  params: [
    'order_items',
    'product_id',
    {
      'type': Sequelize.INTEGER,
      'onUpdate': 'CASCADE',
      'onDelete': 'NO ACTION',
      'field': 'product_id',
      'references': {
        'model': 'products',
        'key': 'product_id',
      },
      'primaryKey': true,
      'allowNull': false,
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
      'name': 'product_id',
    }],
    {
      'indexName': 'PK__order_it__837942D4BBE8C529',
      'name': 'PK__order_it__837942D4BBE8C529',
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
