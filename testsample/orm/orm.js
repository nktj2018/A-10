var mysql = require("mysql");

module.exports=class orm{

	constructor(option){

		if(option.type=="mysql"){
			this.mysql=mysql.createConnection({
				host:option.host,
				user:option.username,
				password:option.password,
				database:option.dbName,
				port:option.port,
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
			cont.mysql.query(query_code,function(err,res,fields){
				if(err){
					console.log(err);
					resolve(null);
				}
				else
				{
					resolve(res);
				}
			});
		});
	}
	where(name,value){


	}
};