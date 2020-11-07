class Car {
	constructor(model,price){
		this.model = model,
		this.price = price
	}
}

class FactoryCar {
	constructor(){
		this.cars=[]
	}
	create(model,price){
		const newcar = this.getCar(model)
		if(newcar){
			return newcar
		}
		const car = new Car(model,price)
		this.cars.push(car)
		return car
	}
	getCar(model){
		return this.cars.find(car=>car.model === model)
	}
}

const factory = new FactoryCar()
const bmwx3 = factory.create('bmw', 15000)
const bmwx6 = factory.create('bmw', 12000)
console.log('OUTPUT: bmw', bmwx3,bmwx6)