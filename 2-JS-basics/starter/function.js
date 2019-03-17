/**
* Functions declaration
*/

function calculateAge(birthYear){
	return 2018 -birthYear
}

var john = calculateAge(1990)
var mike = calculateAge(1995)

console.log(john,mike)

function yearUntilRetirement(year, firstName) {
	var age = calculateAge(year)
	var retire = 65 - age
	console.log(firstName +' retire in ' + retire + ' years.')
}

yearUntilRetirement(1990,'mike')

// Function expression
var whatDoYouDo = function(job, firstName) {
	switch(job){
		case 'teacher':
			return firstName + ' teaches kids how to code'  //return function also finishe the switch, no need to break
		case 'driver':
			return firstName + ' drives a cab in lisbon'
		case 'designer':
			return firstName + ' design beautiful websites'
		default:
			return firstName + ' does something else'

	}
}

console.log(whatDoYouDo('teacher', 'john'))