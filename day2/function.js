// 函数作为参数

function say(word){
	console.log(word);
}

function execute(fun, value){
	fun(value);
}

// 传入一个函数，和参数
execute(say, "hello world.");

// 匿名函数
execute(function(word){ 
	console.log(word);
}, "hello NodeJS.");
