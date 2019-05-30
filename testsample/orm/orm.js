var Sequelize = require('sequelize');

module.exports=class orm{

	constructor(option){

		if(option.type=="mysql"){
			var sequelize = new Sequelize(option.dbName,option.username,option.password,{
				dialect:'mysql',
				host:option.host,
				port:option.port
			});
		}
		else if(option.type=="sqlite"){
			var sequelize = new Sequelize(option.dbName,"","",{
				dialect:'sqlite',
				storage:option.dbFile
			});
		}

		sequelize.query('select * from table01').then(function(rows){

		  console.log(rows);

		});

	}

};