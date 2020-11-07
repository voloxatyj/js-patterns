class Travel {
	travel(){
		return this.timeTaken
	}
}
class Bus extends Travel{
	constructor(){
		super()
		this.timeTaken = 10
	}
}
class Bicecl extends Travel{
	constructor(){
		super()
		this.timeTaken = 5
	}
}
class Car extends Travel{
	constructor(){
		super()
		this.timeTaken = 3
	}
}

class Commute {
	travel(transport){
		return transport.travel()
	}
}
const commute= new Commute()

console.log(commute.travel(new Car))
console.log(commute.travel(new Bus))