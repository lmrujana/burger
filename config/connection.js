const mysql = require('mysql');
let connection; 

const source = {
    localhost: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'myPassword123',
        database: 'burger_db'
    }
};

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection(source.localhost);
};

connection.connect(function(err){
    if(err){
        console.log(`error connecting ${err.stack}`);
        return;
    };
    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;