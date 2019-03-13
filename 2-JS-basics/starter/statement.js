// && and
// || or
// ! not
age = 30

console.log(!(age < 30))

if(age>10 || age <4){
	console.log('true')
}

//if else

var drink = age >= 18 ? 'beer' :'juice'
console.log(drink)

//switch
var job = 'teacher'
switch(job) {
	case 'teacher':
	case 'instructor':
		console.log('is a teacher') // eithor of teacher and instructor will be executed
		break // avoid to continue evaluate
	case 'driver':
		console.log('is a driver')
		break//avoid to continue evaluate
	default:
		console.log('no job')
		//do not need to break 
}

switch(true){
	case 'teacher':
	case 'instructor':
		console.log('is a teacher') // eithor of teacher and instructor will be executed
		break // avoid to continue evaluate
	case 'driver':
		console.log('is a driver')
		break//avoid to continue evaluate
	default:
		console.log('no job')
		//do not need to break 
}




