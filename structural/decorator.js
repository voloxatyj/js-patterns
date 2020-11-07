class Server {
	constructor(ip,port){
		this.ip = ip
		this.port = port
	}
	get url() {
		return `https://${this.ip}/${this.port}`
	}
}

function amazon(server) {
	server.port +=1325
	return server
}

const s1 = amazon(new Server('12.13.15.16', 8080))
console.log('OUTPUT: s1', s1.url)