// this variable
// this points to the global object
// this points to the object 

/*
calculateAge(1985)

function calculateAge(year){
	console.log(2016-year)
	console.log(this)         //point to global object
}

*/

var john = {
	name: ' john',
	yearOfBirth:1999,
	calculateAge: function(){
		console.log(2016-this.yearOfBirth)          // function inside object rather than global object
	}
}

john.calculateAge()


var mike = {
	name: 'Mike',
	yearOfBirth: 1994

}

//method borrowing
mike.calculateAge = john.calculateAge

console.log(mike.calculateAge())    //this only involked when the method is called


