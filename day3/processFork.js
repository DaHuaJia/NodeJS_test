var fs = require("fs");
var child_process = require("child_process");

// fork 创建线程

// 循环启动线程
for(var i=0; i<3; i++) {
   var worker_process = child_process.fork("processB.js", [i]);    
 
   worker_process.on('close', function (code) {
      console.log('子进程已退出，退出码 ' + code);
   });
   
}