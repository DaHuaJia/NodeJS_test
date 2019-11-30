var http = require("http");

http.createServer(function(request, response){
	// 发送 HTTP 请求头
	// HTTP 状态值：200（OK）
	// 内容类型： text/plain
	response.writeHead(200, {"Content-Type": "text/plain"});
	
	// 发送响应的数据
	response.end("Hello World.\n");
}).listen(1234);

// 终端打印，判断服务是否启动
console.log("Server running at http://127.0.0.1:1234/");