var exportsB = require("./exportsB");

// 通过接口名称xxx 调用exportsB 的xxx接口
/**
exportsB.world();
exportsB.world2();
**/

// 类似于构造函数，通过引用的对象名初始化对象
var hello = new exportsB();
hello.setName("DHJ");
hello.sayHello();