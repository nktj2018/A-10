var fs=require("fs");
module.exports=class PostEJS{

	constructor(filePath,setData=null){

		var sample=fs.readFileSync(filePath,"utf-8");

		var splits=sample.split("<%=");
		var splength=splits.length;
		var restr=splits[0];
		this.buff_string="";

		this.setData={};
		if(setData){
			var setDataColum=Object.keys(setData);
			for(var n1=0;n1<setDataColum.length;n1++){
				this.setData[setDataColum[n1]]=setData[setDataColum[n1]];
			}
		}
		for(var n1=1;n1<splength;n1++){
			var splits2=splits[n1].split("%>");

			this.buff_string="";

			this.evals(splits2[0]);

			restr+=(this.buff_string+splits2[1]);
		}

		this.output=restr;
	}
	out(){
		return this.output;
	}
	evals(code){

		//internal method

		var cont=this;

		// echo
		function echo(string){
			cont.buff_string+=string;
		}
		// out (=echo)
		function out(string){
			cont.buff_string+=string;
		}
		// print (=echo)
		function print(string){
			cont.buff_string+=string;
		}
		// get data
		function get(name){
			return cont.setData[name];
		}
		// debug
		function debug(value,number=null){
			var str='<pre><code>';
			if(number){
				str+="<strong>Number:"+number+"</strong><br>";
			}
			str+=JSON.stringify(value,null,"\t");
			str+='</code></pre>';
			cont.buff_string+=str;
		}
		function include(filePath){
			var view=new PostEJS(filePath,cont.setData);
			cont.buff_string+=view.out();
		}
		function set(name,value){
			cont.setData[name]=value;
		}

		try{
			eval(code);
		}catch(err){
			this.buff_string+="ERROR:"+err;
		}

	}
};