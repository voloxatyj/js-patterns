class Complaints {
	constructor(){
		this.complaints=[]
	}
	reply(complaint){}
	add(complaint){
		this.complaints.push(complaint)
		return this.reply(complaint)
	}
}

class ProductComplaint extends Complaints{
	reply({id, type, text}){
		return `we have ${type} complaint with ${id} that contains ${text}`
	}
}

class ServiceComplaint extends Complaints{
	reply({id, type, text}){
		return `we have ${type} complaint with ${id} that contains ${text}`
	}
}

class RegistryComplaints {
	registr(type, text){
		const id = Date.now()
		let complaint 
		if(type==='service'){
			complaint = new ServiceComplaint()
		} else { complaint = new ProductComplaint() }
		return complaint.add({id, type, text})
	}
}

const complaint = new RegistryComplaints()
console.log('OUTPUT: complaint', complaint.registr('service', 'something go wrong'))
console.log('OUTPUT: complaint', complaint.registr('product', 'its not good'))
