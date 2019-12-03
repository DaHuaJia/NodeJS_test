var mysql = require('mysql');

// 连接数据所需要的信息
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'test'
});
// 建立连接
connection.connect();
 
// 执行sql 查询
connection.query('SELECT * from websites ', function (error, results, fields) {
	if (error) throw error;
	console.log("=====select=====");
	console.log('The solution is: ', results[0].name);
	console.log('The solution is: ', results);
});

// 插入
var  addSql = 'INSERT INTO websites(name,url,alexa,country) VALUES(?,?,?,?)';
var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
connection.query(addSql,addSqlParams,function (err, result) {
	if(err){
		console.log('[INSERT ERROR] - ',err.message);
		return;
	}
	console.log("\n=====insert=====");
    console.log('INSERT ID:',result.insertId);     
    console.log('INSERT ID:',result);
});

// 修改
var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
connection.query(modSql,modSqlParams,function (err, result) {
    if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
    }
  console.log('\n=====UPDATE======');
  console.log('UPDATE result: ',result);
});
 
 
// 删除
var delSql = 'DELETE FROM websites where id=6';
connection.query(delSql,function (err, result) {
	if(err){
	  console.log('[DELETE ERROR] - ',err.message);
	  return;
	}        
   console.log('\n======DELETE======');
   // 可以获取具体信息 比如：result.affectedRows
   console.log('DELETE result', result);
});

// 关闭连接
connection.end();
