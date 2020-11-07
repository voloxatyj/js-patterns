function Server(name,ip){
	this.name=name
	this.ip=ip
}

Server.prototype.getUrl = function(){
	return `https://${this.ip}:80`
}

// class Server {
// 	constructor(name,ip){
// 		this.name = name,
// 		this.ip = ip
// 	}
// 	getUrl() {
// 		return `https://${this.ip}:80`
// 	}
// }

let aws = new Server('AWS UA', '12.15.16.18')
console.log(aws.getUrl())
