/*******
* Objects and properties
* have different data tyes, even arrays
*/

var john = {

	firstName:'john',
	lastName:'Smith',
	birthYear:1999,
	family: ['Jane','Mark','Bob','Emily'],
	job:'teacher',
	isMarried: false

}

console.log(john.firstName) // using dot notation to access to different properties in john
console.log(john['lastName'])//use bracket

var x = 'birthYear'

//the properties in john object is mutable
john.job = 'designer'
john['isMarried'] = true


//Another way to declare a new object, using dot or parenthesis 
var jane = new Object()
jane.name = 'Jane'
jane.birthYear = 1999
jane['lastName'] = 'Smith'

console.log(jane)


// Add a method in an object
// This is important

var anna = {

	firstName:'Anna',
	lastName:'Tang',
	birthYear:1995,
	family: ['Jane','Mark','Bob','Emily'],
	job:'teacher',
	isMarried: false,
	calcAge: function(){
		this.age = 2018 - this.birthYear       // this indicates 1999
	}

}


console.log(anna)
