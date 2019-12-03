/**
	一个模块中，不能同时定义两种接口。
	exports.xxx 通过接口向外暴露一个方法或属性
	module.exports = xxx 通过接口向外暴露一个对象，包含多个方法或属性
**/

// 定义一个world方法接口
/**
exports.world = function(){
	console.log("Hello World. exports \n");
}
exports.world2 = function(){
	console.log("Hello World2. exports \n");
}
**/


// 定义一个对象接口
function Hello(){
	var name;
	this.setName = function(thyName){
		name = thyName;
	}
	this.sayHello = function(){
		console.log("Hello "+name);
	}
}
module.exports = Hello;
