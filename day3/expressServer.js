var express = require("express");
var app = express();

/**
	相应表单页面和提交页面
**/
// 配置静态文件访问
app.use("/images", express.static("images"));

app.get("/index.html", function(req, res){
	res.sendFile(__dirname+"/"+"index.html");
});

app.get("/login", function(req, res){
	// 输出 JSON 格式
	var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});


var server = app.listen(1234, function(){
	console.log("server is started...");
});