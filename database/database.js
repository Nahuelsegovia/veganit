var mysql = require('mysql');

var pool = mysql.createConnection(
    'mysql://root:root@localhost:8889/tiendas?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700'
    );

module.exports = pool;