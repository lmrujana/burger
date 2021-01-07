const orm = require('../config/orm');

const burger = {
    all: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },
    insertOne: function(burgerName, cb){
        orm.insertOne(burgerName, function(res){
            cb(res);
        });
    },
    updateOne: function(burguerId, cb){
        orm.updateOne(burguerId, function(res){
            cb(res);
        });
    }
};

module.exports = burger;




