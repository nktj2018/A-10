// Main Controller
module.exports=class Main_Controller extends Controller{

	setting(){
		this.layout="default";

	}
	//logic before...
	logic_before(){
		/*
		return new Promise(function(resolve){
			var str="<!DOCTYPE html><html><body>";
			str+="<p>Header..</p>";
			resolve(str);
		});
		*/
	}
	//logic after...
	logic_after(){
		/* return "<p>LOGIC AFTER MAIN</p>"; */
	}
	//index...
	index(){

		var cont=this;
		return new Promise(function(resolve){
			cont.setData("value001","aabbccdd..");

			resolve();
		});
	}
	//aaaa...
	aaaa(){

		return "<style>body{ background:#444;color:#fff; }</style>AAA DESUYO.";

	}
	bbbb(){
		this.render="bbbb-sub";
	}
	aabb(){
		this.layout=false;

	}
	bbbb2(){
		this.render=false;
		this.setHeader("Content-Type","application/json");
		return "OK BBBB2";

	}
	bbbb3(){
		this.redirect("https://www.yahoo.co.jp/");
	}
}
