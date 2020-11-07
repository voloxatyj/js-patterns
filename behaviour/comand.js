class MyMath {
	constructor(initialValue=2){
		this.sum = initialValue
	}
	square(){
		return this.sum ** 2
	}
	cube(){
		return this.sum ** 3
	}
}

class Command {
	constructor(subject){
		this.subject = subject
		this.commands = []
	}
	comand(action){
		this.commands.push(action)
		return this.subject[action]()
	}
}

const command = new Command(new MyMath())

console.log(command.comand('square'))
console.log(command.comand('cube'))
console.log(command.commands)