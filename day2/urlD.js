// server.js
var http = require("http");
var url = require("url");
var querystring = require("querystring");

function onRequest(request, response){
	var pathname = url.parse(request.url).pathname;
	
	var query = url.parse(request.url).query;
	var username = querystring.parse(query)["username"];
	var passwords = querystring.parse(query)["password"];
	
	// 拦截 /favicon.ico
	if(pathname == "/favicon.ico"){
		response.writeHead(400, {"Content-Type": "text/plain"});
		response.end();
	}else{
		console.log("访问路径名："+pathname);
		console.log("登录用户名："+username);
		console.log("密码："+passwords);
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello "+ pathname);
		response.end();
	}
}

http.createServer(onRequest).listen(1234);
console.log("Port is 1234. Server has started...");

