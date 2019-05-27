module.exports={
	pages:[
		["/","main@index"],
		["/aaa/bbbb","main@aabb"],
		["/aaa","main@aaaa"],
		["/bbb","main@bbbb"],
		["/bbb2","main@bbbb2"],
		["/bbb3","main@bbbb3"],
		["/bbb4/{:id?}","main@bbbb4"],
		["/bbb5/{:id}/{:id2?}","main@bbbb5"],
		["/bbb6","Main/bbb6-view"],
		["/ccc/{:id?}",{controller:"aaa",action:"ccc"}],
		["/ddd/{:id}/{:id2?}",{controller:"aaa",action:"ddd"}],
		["/eee/{:id}/ggg/{:id2?}",{controller:"aaa",action:"eee"}],
		["/fff",function(){
			return "fff OK!";
		}],
		["/ggg/{:number}",function(number){
			return "ggg is "+number;
		}],

	],
	error:{
		404:"notfound404",
	}
};