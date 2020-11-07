class Iterator {
	constructor(data){
		this.index = 0
		this.data = data
	}
	[Symbol.iterator](){
		return {
			next: () => {
				if(this.index<this.data.length){
					return {
						done: false,
						value: this.data[this.index++]
					}
				} else {
					return {
						done: true,
						value: undefined
					}
				}
			}
		}
	}
}

const obj = new Iterator(['This', 'is', 'iterator'])

for(let item of obj) {
	console.log(`Value:${item}`)
}