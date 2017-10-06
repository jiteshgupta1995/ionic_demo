var express = require('express');
var app = express();
var port = 3000;

var mysql = require('mysql');
// var sql = require("mssql");
// var sql = require('sql');

var con = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "TestDatabase"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
});

app.post('/signup', (req, res) => {
    // You'll create your note here.
    var email=req.query.email;
    var pass=req.query.password;
    var firstname=req.query.firstName;
    var lastname=req.query.lastName;
    var id = Math.floor((Math.random() * 100) + 1);
    var sql = "INSERT into customer (customer_id,email,password,firstName,lastName) VALUES ("+id+",'"+email+"','"+pass+"','"+firstname+"','"+lastname+"')";
    console.log(sql);
    con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Result: " + result);
		res.send("Done signup");
	});        	
});

app.post('/login', (req, res) => {
    // You'll create your note here.
    var email=req.query.email;
    var pass=req.query.password;
    var sql = "SELECT * from customer where email='"+email+"' and password='"+pass+"'";
    console.log(sql);
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Result: " + result);
		res.send("Login details found");
	});
});


app.post('/forgot', (req, res) => {
    // You'll create your note here.
    var email=req.query.email;
    var pass=req.query.password;
    var sql = "UPDATE customer set password='"+pass+"' where email='"+email+"'";
    console.log(sql);
   	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Result: " + result);
		res.send("reset done");
	}); 
});