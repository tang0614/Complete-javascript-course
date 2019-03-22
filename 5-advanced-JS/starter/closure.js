////////////////////////////////////////////////////////
// Lecture: Closures : an inner function has always access to the variables and parameters of its outer fucntion, 
//even after the outer function has returned

function retirement(retirementAge) {

	var a = ' years left until'

	return function(yearOfBrith) {
		var age = 2019 - yearOfBrith
		console.log((retirementAge - age) + a)

	}

}

var retireUS = retirement(66)

//execution retirment stack is gone. only global context, but the scope of retirment is still there,scope chain is always there

console.log(retireUS(1995))



