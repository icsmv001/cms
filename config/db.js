

var mysql = require('mysql');
connectionString = 'mysql://cms:123@localhost/cms';
//  -- teste ok --> connectionString = 'mysql://livro:livro123@localhost/livro';

db = {}
db.cnn = {};
db.cnn.exec = function(query, callback) {
var connection = mysql.createConnection(connectionString);

//  var connection = mysql.createConnection({
//  host : 'localhost',
//  user : 'cms',
//  password : '123',
//  database : 'cms'
 
  //});

  connection.query(query, function(err, rows) {
  	if(err) throw err;
  	callback(rows, err);
    console.log(err);
  	connection.end ();
  });
};



module.exports = db;

