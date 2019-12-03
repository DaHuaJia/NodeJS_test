var fs = require("fs");
var child_process = require("child_process");

// spawn 创建线程

// 循环启动线程
for(var i=0; i<3; i++){
	// 启动一个线程，执行 node 指令
	var workerProcess = child_process.spawn("node",["processB.js", i]);
	
	workerProcess.stdout.on("data", function(data){
		console.log("stdout: "+data);
	});
	
	workerProcess.stderr.on("data", function(data){
		console.log("stderr: "+data);
	});
	
	// 监听线程关闭
	workerProcess.on("exit", function(code){
		console.log("子进程退出。code="+code);
	});
	
}