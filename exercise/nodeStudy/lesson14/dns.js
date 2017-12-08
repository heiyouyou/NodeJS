var dns = require('dns');
dns.lookup('www.github.com',function(err,address,family){
	console.log(family);//4
	console.log('解析后的ip地址：'+address);
	dns.reverse(address,function(err,hostnames){
		if(err){
			console.log(err.stack);
		};
		console.log('反向解析：'+address+':'+JSON.stringify(hostnames));
	});
});