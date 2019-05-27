var http=require("http");
var PostEJS=require("./postejs.js");

http.createServer(function(request, response){

	var view=new PostEJS("sample.view",{
		aaaa:"aaaaの値",
		cccc:"ddd",
		eeee:{
			fff:"ggg",
			hhh:true,
		}
	});

	response.writeHead(200,{
		"Content-Type":"text/html",
		"charset":"utf-8",
	});
	response.write(view.out());
	response.end();
}).listen(955);

//console.log(view.out());
