const orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.select(function(res) {
      cb(res);
    });
  },
  create: function(value, cb) {
    orm.create(value, function(res) {
      cb(res);
    });
  },
  update: function(condition, cb) {
    orm.update(condition, function(res) {
      cb(res);
    });
  }
};
module.exports = burger;
