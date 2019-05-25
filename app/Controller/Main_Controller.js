// Main Controller
module.exports=class Main_Controller extends Controller{

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
/*
		return "<p>LOGIC AFTER MAIN</p>";
*/
	}

	//index...

	index(){

		return new Promise(function(resolve){




			resolve("HELLOW NODE.JS!\n");




		});
	}

	//aaaa...

	aaaa(){
		return "<style>body{ background:#444;color:#fff; }</style>AAA DESUYO.";

	}
}
