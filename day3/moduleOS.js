var os = require("os");

console.log("操作系统的默认临时文件夹："+os.tmpdir());
console.log("CPU的字节序 BE/LE ："+os.endianness());
console.log("操作系统主机名："+os.hostname());
console.log("操作系统名称："+os.type());
console.log("编译时的操作系统名："+os.platform());
console.log("操作系统架构："+os.arch());
console.log("操作系统的发行版本："+os.release());
console.log("操作系统的运行时间："+os.uptime());
console.log("返回一个包含1、5、15分钟平均负载的数组："+os.loadavg());
console.log("系统内存总量（字节）："+os.totalmem());
console.log("系统空闲内存量（字节）："+os.freemem());
console.log("返回一个数组，包含所安装的每个CPU/内核信息（型号，速度MHZ，时间）："+os.cpus());
console.log("系统网络接口列表："+os.networkInterfaces());
