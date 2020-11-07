function proxyServer(url) {
	return `https://${url} get from server` 
}

const hash = new Set()
const proxied = new Proxy(proxyServer, {
	apply(target, thisArgs, args) {
		const url = args[0]
		if(hash.has(url)){
			return `https://${url} get from hash` 
		} else {
			hash.add(url)
			return Reflect.apply(target, thisArgs, args)
		}
	}
})
console.log(proxied('android.io'))
console.log(proxied('react.io'))
console.log(proxied('android.io'))