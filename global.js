/**
	__filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，
	且和命令行参数所指定的文件名不一定相同。
	
	__dirname 表示当前正在执行的脚本所在的目录。
	
	setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
	
	clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 
	参数 t 是通过 setTimeout() 函数创建的定时器。
	
	setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
	返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
	setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
	
**/
console.log(__filename);
console.log(__dirname);
