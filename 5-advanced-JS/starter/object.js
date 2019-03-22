//Object.create
var personProto = {

	calculateAge: function() {
		console.log(2016-this.yarOfBirth);
	}

}


//object create is an altrnative for function constructor
var john = Object.create(personProto)

john.name = 'John'
john.yearOfBirth = 1990
john.job = 'teacher'


//hasOwnProperty method
console.log(john.hasOwnProperty('calculateAge'))


//see what inside an object
console.info(john)


//difference between primitive and object
//primitive hold data
//object does not contrain the object, it contain a reference of pointing to the object

var obj1 = {
	name: 'john',
	age: 26
}

var obj2 = obj1   //creating a new reference pointing to obj
obj1.age = 30 

console.log(obj1.age)
console.log(obj2.age)