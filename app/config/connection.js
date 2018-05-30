// Setting up mysql connection

var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'y5s2h87f6ur56vae.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        port: 3306,
        user: 'ikn29d7nnqf1j2sq',
        password: 'wg063hdtdjq7wjx7',
        database: 'hn9sfgv5p19t7cgb',
    });
};

 connection.connect(function(err){
    if (err){
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('mysql connected w/ id ' + connection.threadId);
});



module.exports = connection;