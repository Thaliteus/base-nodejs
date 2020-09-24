var mysql = require('../node_modules/mysql');


var connMysql = function(){
  //console.log('Conexão com bd foi estabelecida');
  return mysql.createConnection({
    
    host      : '127.0.0.1',
    user      : 'root',
    password  : '',
    database  : ''
  })
}

module.exports = function(){
 // console.log('Função preparada pelo autoload');
  return connMysql;
}
