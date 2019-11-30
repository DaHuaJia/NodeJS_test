// 引入events模块
var events = require("events");

// 创建EventEmitter对象
var eventEmitter = new events.EventEmitter();

function connected(){
	console.log("连接成功。");
	// 方法内部，触发 data_received事件
	eventEmitter.emit("data_received");
}
// 使用函数绑定connection事件
eventEmitter.on("connection", connected);

// 使用匿名函数绑定 data_received事件
eventEmitter.on("data_received"   , function(){
	console.log("数据接收成功。");
});

// 触发 connection事件
eventEmitter.emit("connection");

console.log("程序执行完毕。");