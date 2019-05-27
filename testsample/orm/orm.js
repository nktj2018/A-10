module.exports=class orm{

	constructor(){
		var Connection = require('tedious').Connection;
		var config = {
		    server:"127.0.0.1",
		    userName:"root",
		    password:"",
		    options:{
				port:3306,
		        database:"a10test",
		        encrypt:false
		    }
		};
		var cont = new Connection(config);
		cont.on('connect', function(err) {
		    if(err){
				console.log('SQL Serer connect error.(' + err + ')');
				process.exit();
		    }
		    console.log('SQL Server connected.');
		    execute();
		});

	}

};