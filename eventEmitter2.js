var events = require("events");
var eventEmitter = new events.EventEmitter();

/**
	允许存在同名同参事件，触发时会同时触发。
	NodeJS 不存在多态，仅判断事件名称，可以多传或少传参数。
	如果不是通过匿名函数绑定事件时，可以通过函数名和事件名区分。
**/

// 匿名函数绑定事件
eventEmitter.on("some_event", function(arg1, arg2){
	console.log("some_event1 事件触发: "+arg1+", "+arg2);
});

eventEmitter.on("some_event", function(arg1, arg2){
	console.log("some_event2 事件触发: "+arg1+", "+arg2);
});

eventEmitter.emit("some_event", "x", "y");