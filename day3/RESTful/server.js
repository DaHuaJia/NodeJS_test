var express = require("express");
var url = require("url");
var querystring = require("querystring");
var app = express();
var fs = require("fs");

var data = "";
fs.readFile(__dirname+"/users.json", "utf8", function(err, dataUser){
	data = dataUser;
	data = JSON.parse(data);
	console.log(data);
});
	
// 查全部
app.get("/list", function(req, res){
	res.setHeader("Content-Type", "text/html; charset=utf8");
	res.end(JSON.stringify(data));
});

// 添加用户
app.get("/addUser", function(req, res){
	res.setHeader("Content-Type", "text/html; charset=utf8");
	var query = url.parse(req.url).query;
	var param = querystring.parse(query)["data"];
	
	data["user4"] = param;
	res.end(JSON.stringify(data));
});

// 根据id 查看用户
app.get("/see", function(req, res){
	res.setHeader("Content-Type", "text/html; charset=utf8");
	var query = url.parse(req.url).query;
	var id = querystring.parse(query)["id"];
	
	res.end(JSON.stringify(data["user"+id]));
});

// 删除用户
app.get('/delete', function (req, res) {
   res.setHeader("Content-Type", "text/html; charset=utf8");
	var query = url.parse(req.url).query;
	var id = querystring.parse(query)["id"];
	
	delete data["user"+id];
	res.end(JSON.stringify(data));
})

var server = app.listen(1234, function(err){
	console.log("server is started ...");
});
