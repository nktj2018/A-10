var mysql = require("mysql");
var sqlite=require("sqlite3");

module.exports=class orm{

	constructor(option){

		this.type=option.type;

		if(option.type=="mysql"){
			this.dba=mysql.createConnection({
				host:option.host,
				user:option.username,
				password:option.password,
				database:option.dbName,
				port:option.port,
			});

		}
		else if(option.type=="sqlite"){
			this.dba =new sqlite.Database(option.dbName);
		}

	}
	query(query_code){
		var cont=this;
		return new Promise(function(resolve){
			if(cont.type=="mysql"){
				cont.dba.query(query_code,function(err,res,fields){
					if(err){
						console.log(err);
						resolve(null);
					}
					else
					{
						resolve(res);
					}
				});
			}
			else if(cont.type=="sqlite"){
				cont.dba.all(query_code, (err, row) => {
    				if(err){
						return reject(err);
					}
					else
					{
						var result=[];
			            row.forEach(row => {
            				result.push(row)
						});
						resolve(result);
					}
				});
			}
		});
	}
	where(name,value){


	}
};