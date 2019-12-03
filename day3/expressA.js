var express = require("express");
var app = express();

/**
	同时存在多个请求路径匹配是，先用get方法，在用post方法
	app.use 的优先级最低，当请求方式未定义，则进入app.use()
**/
// get方法
app.get("/", function(req, res){
	res.send("hello world.");
});

// post方法
app.post("/", function(req, res){
	res.send("hello world. from POST.");
});

// 静态匹配
app.use("/", function (req, res, next) {
  console.log('Time: %d', Date.now());
  next();
});

app.get("/admin", function(req, res){
	res.send("<h1>hello admin. wait for you change world.</h1>");
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
})


var server = app.listen(1234, function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("访问的地址为：http://%s:%s", host, port);
});