var fs = require("fs");
var data = "Hello World. fs.writeFile() ";
console.log("准备写入文件...");

fs.writeFile("input.txt", data, function(err){
	if(err){
		return console.error(err);
	}
	console.log("数据写入成功！");
	console.log("======/n 开始读取写入的数据");
	
	fs.readFile("input.txt", function(err, data){
		if(err){
			return console.error(err);
		}
		console.log("异步读取的数据为："+data.toString());
	});
});