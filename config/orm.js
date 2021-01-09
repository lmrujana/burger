const connection = require('./connection');

const tableName = "burgers";

const orm = {
    selectAll: function(callback){
        let s = `SELECT * FROM ${tableName}`;

        connection.query(s, function(err, results){
            if(err) throw err;
            callback(results);
        });
    },
    insertOne: function(burgerName, callback){
        let s = `INSERT INTO ${tableName} (burger_name) VALUES (?)`;

        connection.query(s, [burgerName], function(err, results){
            if(err) throw err;
            callback(results);
        })
    },
    updateOne: function(id, callback){
        let s = `UPDATE ${tableName} SET devoured = true WHERE id = ?`;

        connection.query(s, [id], function(err, results){
            if(err) throw err;
            callback(results);
        });
    }
}

module.exports = orm;