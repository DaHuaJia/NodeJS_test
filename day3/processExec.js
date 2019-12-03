var fs = require("fs");
var child_process = require("child_process");

// exec() 创建线程

// 循环启动线程
for(var i=0; i<3; i++){
	// 启动一个线程，执行 node 指令
	var workerProcess = child_process.exec("node processB.js "+i, function(error, stdout, stderr){
		if(error){
			console.log(error.stack);
			console.log("Error code: "+error.code);
			console.log("Signal received "+error.signal);
		}
		console.log("stdout: "+stdout);
		console.log("stderr: "+stderr);
	});
	
	// 监听线程关闭
	workerProcess.on("exit", function(code){
		console.log("子进程退出。code="+code);
	});
	
}