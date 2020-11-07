const car = {
	wheel: 4,
	drive() {
		console.log(`My car has ${this.wheel} wheels and ${this.owner} is owner`)
	}
}

const Mycar = Object.create(car, {
	owner: {
		value:'Me'
	}
})
console.log(Mycar.__proto__ === car)
Mycar.drive()