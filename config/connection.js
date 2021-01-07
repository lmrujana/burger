const mysql = require('mysql');

const source = {
    localhost: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'myPassword123',
        database: 'burger_db'
    }
};

const connection = mysql.createConnection(source.localhost);

connection.connect(function(err){
    if(err){
        console.log(`error connecting ${err.stack}`);
        return;
    };
    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;