class SimpleFactory {
	constructor(name){
		this.name = name
		this.cost =50
	}
}
class StandartFactory {
	constructor(name){
		this.name = name
		this.cost =150
	}
}
class PerfectFactory {
	constructor(name){
		this.name = name
		this.cost =50
	}
}
class MemberFactory {
	static list = {
		simple: SimpleFactory,
		standart: StandartFactory,
		perfect: PerfectFactory
	}
	create(name, type='simple') {
		const MemberShip = MemberFactory.list[type]
		const member = new MemberShip(name)
		member.type = type
		member.define = function(){
			console.log(`${this.name} (${this.type}:${this.cost})`)
		}
		return member
	}
}

const factory = new MemberFactory()

const members = [
	factory.create('Copper', 'perfect'),
	factory.create('Alice', 'standart'),
	factory.create('Trump', 'perfect')
]
members.forEach(item=>item.define())