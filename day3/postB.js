var http = require('http');
var url = require('url');
var querystring = require('querystring');
 
var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

// 判断createServer 是否会重复执行  
var i = 0;
 
http.createServer(function (req, res) { 
	var body = "";
	var pathname = url.parse(req.url).pathname;
	
	// 拦截 /favicon.ico
	if(pathname != "/favicon.ico"){
		i=i+1;
	}
  
	req.on('data', function (chunk) {
		body += chunk;
	});
	req.on('end', function () {
		// 解析参数
		body = querystring.parse(body);
		// 设置响应头部信息及编码
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

		if(body.name && body.url) { // 输出提交的数据
			res.write("网站名：" + body.name);
			res.write("<br>");
			res.write("网站 URL：" + body.url);
		} else {  // 输出表单
			res.write(postHTML);
		}

		res.write("\n i="+i);
		res.end();
	});
}).listen(1234);
