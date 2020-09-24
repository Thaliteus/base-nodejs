var MySql = require('sync-mysql');

//const dadosConfig = require('./config');

var connMysqlSync= function(){
  //console.log('Conexão com bd foi estabelecida');
  
    return new MySql({
      
      host      : '127.0.0.1',
      user      : 'root',
      password  : '',
      database  : ''
    })
  
}

module.exports = function(){
  //console.log('Função preparada pelo autoload');
  return connMysqlSync;
}