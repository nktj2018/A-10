// Sample Controller
module.exports=class Sample_Controller extends Controller{

	// Perform various initial settings in the following method.

	setting(){
		this.layout="default";

	}

	// There are two ways to return each method.
	// One is return method by return normally (asynchronous), and the other is return method synchronously using promise.
	// Always use promise if you are building logic that involves wait states.
	//

	//logic before...

	logic_before(){

		/*
		return new Promise(function(resolve){
			resolve("Header..");
		});
		*/

	}

	//logic after...

	logic_after(){

		/*
		return new Promise(function(resolve){
			resolve("Footer..");
		});
		*/

	}

	// Method for action for each page from here.

	//index
	index(){

		var cont=this;
		return new Promise(function(resolve){
			cont.setData("value001","aabbccdd..");

			resolve();
		});
	}

	//aaaa
	aaaa(){

		return "<style>body{ background:#444;color:#fff; }</style>AAA DESUYO.";

	}
}
