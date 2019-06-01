var Sequelize = require('sequelize');

module.exports=class orm{

	constructor(option){

		if(option.type=="mysql"){
			this.sequelize = new Sequelize(option.dbName,option.username,option.password,{
				dialect:'mysql',
				host:option.host,
				port:option.port
			});
		}
		else if(option.type=="sqlite"){
			this.sequelize = new Sequelize(option.dbName,"","",{
				dialect:'sqlite',
				storage:option.dbFile
			});
		}

	}
	query(query_code){
		var cont=this;
		return new Promise(function(resolve){
			cont.sequelize.query(query_code,{type:cont.sequelize.QueryTypes.SELECT}).then(function(res,metadata){
				resolve(res);
			});
		});
	}
};