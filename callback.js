var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){
	// 发送 HTTP 请求头
	// HTTP 状态值：200（OK）
	// 内容类型： text/plain
	response.writeHead(200, {"Content-Type": "text/plain"});
	
	/** 
		阻塞式，顺序执行
		var data = fs.readFileSync("input.txt");
		console.log(data.toString());
		console.log("Hello World.");
	**/
	
	/**
		非阻塞式I/O，无需等待文件读取完，大大提高程序性能。
		通过回调函数，执行文件读取完之后要做的操作。
	**/
	fs.readFile("input.txt", function(err, data){
		if(err){
			return console.error(err);
		}
		console.log(data.toString());
	});
	console.log("Hello World.");
	
	// 发送响应的数据
	response.end("Hello World.");
	
}).listen(1234);

// 终端打印，判断服务是否启动
console.log("Server running at http://127.0.0.1:1234/");
