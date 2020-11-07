class DataBase {
	constructor(data){
		if(DataBase.exists){
			return DataBase.instanse
		}
		DataBase.instanse = this
		DataBase.exists = true
		this.data = data
	}
	getData() {
		return this.data
	}
}

const MongoDB = new DataBase('MongoDB')
console.log('OUTPUT: MongoDB', MongoDB.getData())
const MySql = new DataBase('MySql')
console.log('OUTPUT: MySql', MySql.getData())
