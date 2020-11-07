class Employee{
	constructor(name,salary){
		this.name = name
		this.salary = salary
	}
	responsibility(){}
	work(){
		return `${this.name} working with ${this.responsibility()}`
	}
	getPaid(){
		return `${this.name} get salary ${this.salary}`
	}
}

class Developer extends Employee{
	constructor(name,salary){
		super(name,salary)
	}
	responsibility(){
		return `work with programs`
	}
}

class Tester extends Employee{
	constructor(name,salary){
		super(name,salary)
	}
	responsibility(){
		return `test programs`
	}
}

const ostik = new Developer('Ostik', 150000)
console.log(ostik.work())
console.log(ostik.getPaid())