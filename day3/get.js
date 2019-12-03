var http = require("http");
var url = require("url");
var util = require("util");

http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type":"text/plain; charset=utf-8"});
	// 获取 url 中的 query 字段内容（Map）
	var params = url.parse(req.url, true).query;
	res.write("网站名称："+params.name);
	res.write("\n网站URL："+params.url);
	
	// util.inspect() 将任一对象转换成字符串
	res.write("\n\nURL的全部内容："+util.inspect(url.parse(req.url, true)));
	res.end();
	
}).listen(1234);