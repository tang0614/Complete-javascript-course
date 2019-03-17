/**********
*Array
*/

var names = ['john','mark','jane'] // index starts from zero
var years = new Array(1990,1995,1964)

console.log(names[0])
console.log(names.length) // how many elements in the array

names[1] = 'Ben'
console.log(names)

//arrays can contain different types of data
var john = ['john',1999,'teacher']
john.pop()
console.log(john)

john.push('tonight')
console.log(john)


john.unshift('add at the front')
console.log(john)


john.shift('remove at the front')
console.log(john)

console.log(john.indexOf(1999))

function tipCalculator(bill){
	var percentage

	if(bill < 50){
		percentage = 0.2
	} else if (bill  >= 50 && bill <200){
		percentage = 0.15
	} else {
		percentage = 0.1
	}
    
    return percentage * bill

}

var bills = [124,48,268]

var tip = [tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])]
console.log(tip)