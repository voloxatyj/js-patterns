class User {
	constructor(name){
		this.name = name
		this.room = null
	}
	send(message, to){
		this.room.send(message, this, to)
	}
	recive(message, from){
		console.log(`${from.name} => ${this.name}: ${message}`)
	}
}

class ChatRoom{
	constructor(){
		this.users = {}
	}
	register(user){
		this.users[user.name] = user
		user.room = this
	}
	send(message, from, to){
		if(to){
			to.recive(message,from)
		} else {
			Object.keys(this.users).forEach(item=>{
				if(this.users[item] !== from){
					this.users[item].recive(message, from)
				}
			})
		}
	}
}
const Ostik = new User('Ostik')
const Orchyk = new User('Orchyk')
const Yurchyk = new User('Yurchyk')

const room = new ChatRoom()

room.register(Ostik)
room.register(Orchyk)
room.register(Yurchyk)

Ostik.send('Hello!', Yurchyk)