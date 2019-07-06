var mysql=require('mysql')

var connection = mysql.createConnection({
 host:'localhost',
 user:'root',
 password:'',
 database:'Googlemap'
})

connection.connect(function(err){
 if(err)
 	console.log('Error in connection---',err)
 else
 	console.log('Connection done....')
})

module.exports = connection;