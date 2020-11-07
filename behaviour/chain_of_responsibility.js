class SumAdd {
	constructor(initialValue=33){
		this.sum = initialValue
	}
	add(value) {
		this.sum += value
		return this
	}
}

const sum1 = new SumAdd()
console.log(sum1.add(3).add(2).add(1).sum)
const sum2 = new SumAdd(22)
console.log(sum2.add(3).add(2).add(1).sum)