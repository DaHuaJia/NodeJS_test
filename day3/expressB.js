var express = require("express");
var app = express();

// 配置静态文件访问
app.use("/images", express.static("images"));

app.get("/", function(req, res){
	res.send("Hello World.");
});

app.get("/time", function(req, res){
	res.send("Hello World. "+Date.now());
});


var server = app.listen(1234, function(){
	console.log("server is started...");
});