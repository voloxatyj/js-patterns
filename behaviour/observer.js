class Subject {
	constructor(){
		this.observers=[]
	}
	subscribes(observer){
		return this.observers.push(observer)
	}
	unsubscribes(observer){
		return this.observers.filter(obj => obj !== observer)
	}
	init(action){
		this.observers.forEach(item=>item.update(action))
	}
}

class Observer {
	constructor(state=2){
		this.state = state
		this.initialState = state
	}
	update(action){
		switch (action.type) {
			case 'INCREMENT':
				this.state = ++this.state
				break;
			case 'DECREMENT':
				this.state = --this.state
				break;
			case 'ADD':
				this.state += action.payload
				break;
			default:
				this.state = this.initialState
		}
	}
}

const subj = new Subject()

const obj1 = new Observer()
const obj2 = new Observer(12)

subj.subscribes(obj1)
subj.subscribes(obj2)

subj.init({type:'INCREMENT'})
subj.init({type:'ADD', payload:10})
console.log(obj1.state)
