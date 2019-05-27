var http=require("http");
http.createServer(function(request, response){

	var bfm=process.memoryUsage();

	var cccc={
		aaaa:"bbbb",
		cccc:"dddd",
		eeee:"192909234",
	};

	delete cccc;

	response.end();
	delete response;
	delete request;
	var afm=process.memoryUsage();

//	console.log(afm);
//	console.log(afm);

	console.log({
		rss:afm.rss-bfm.rss,
		heapTotal:afm.heapTotal-bfm.heapTotal,
		heapUsed:afm.heapUsed-bfm.heapUsed,
		external:afm.external-bfm.external,
	});

}).listen(5051);