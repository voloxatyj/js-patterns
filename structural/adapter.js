class oldCalc {
	operations(t1,t2,action){
		switch(action){
			case "add": return t1+t2
			case "sub": return t1-t2
			default: return NaN
		}
	}
}

class newCalc {
	add(t1,t2) {
		return t1+t2
	}
	sub(t1,t2) {
		return t1-t2
	}
}

class adapterCalc {
	constructor(){
		this.calc = new newCalc()
	}
	operations(t1,t2,action){
		switch(action){
			case "add": return this.calc.add(t1,t2)
			case "sub": return this.calc.sub(t1,t2)
			default: return NaN
		}
	}
}

const old_calc = new oldCalc()
console.log('OUTPUT: old_calc', old_calc.operations(15,15,"add"))
const new_calc = new newCalc()
console.log('OUTPUT: new_calc', new_calc.add(15,15))
const adapter = new adapterCalc()
console.log('OUTPUT: adapter', adapter.operations(15,15,"add"))