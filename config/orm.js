const connection = require("./connection.js");

const orm = {
  select: function(cb) {
    const query = "SELECT * FROM burgers";
    connection.query(query, function(err, res) {
      if(err) throw err;
      cb(res);
    });
  },
  create: function(value,cb) {
    const query = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(query, [value], function(err, res) {
      if(err) throw err;
      cb(res);
    });
  },
  update: function(condition,cb) {
    const query = "UPDATE burgers SET devoured = true WHERE id = ?";
    connection.query(query, [condition], function(err, res) {
      if(err) throw err;
      cb(res);
    });
  }
};

module.exports = orm;
