
var mysql = require("mysql");
//Database Connection

app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : ' ',
		database : 'test1'
	});
	res.locals.connection.connect();
	next();
});
app.use('/',index);
app.use('/api/v1/users', users);



