//primitives vs object
//primitives: numbers, strings, boolean, null and undefined
//object: arrays, functions, objects, dates, wrappers

//object orientated programming
//we can create many instances from one constructor(blue print)

//inheritance is when one object properties inherit from another object
//inheritance is because of prototypes in object
//instance created from an object inherit the prototypes 
//The prototype property is not the protoypes of the constructor itself, it's the prototypes of all instance that are created though it

var john = {
	name: 'john',
	yearOfBirth: 1999,
	job:'teacher'
}

var Person  = function(name, yearOfBirth,job) {
	this.name = name,
	this.yearOfBirth = yearOfBirth
	this.job = job
	this.calculateAge = function() {
		console.log(2016 - this.yearOfBirth)
	}
}

/* Another way to add prototype method in Person Object
/
Person.prototype.calculateAge = {
	console.log(2016 - this.yearOfBirth)
}
*/

Person.prototype.lastName = 'Smith'
var john = new Person('john','1995','student') // instance (new object)of the object Person

john.calculateAge()

var jane = new Person('Jane', 1969, 'designer')

var mark = new Person('mark', 1948,'retired')

console.log(john)

// whether john has a property
console.log(john.hasOwnProperty('job'))


