class Light{
	constructor(light){
		this.light = light
	}
}

class greenLight extends Light {
	constructor(){
		super('green')
	}
	sign(){
		return 'GO!'
	}	
}
class yellowLigh extends Light {
	constructor(){
		super('yellow')
	}
	sign(){
		return `WAIT!`
	}
}
class redLight extends Light {
	constructor(){
		super('red')
	}
	sign(){
		return `STOP!`
	}	
}

class TrafficLight{
	constructor(){
		this.states=[
			new redLight(),
			new yellowLigh(),
			new greenLight()
		],
		this.current = this.states[0]
	}
	change(){
		const total = this.states.length
		let index = this.states.findIndex(light=>light === this.current)
		if(index+1<total){
			this.current = this.states[index + 1]
		} else this.current = this.states[0]
	}
	sign() {
		return this.current.sign() 
	}
}

const traffic = new TrafficLight()
traffic.change()
traffic.change()
console.log(traffic.sign())