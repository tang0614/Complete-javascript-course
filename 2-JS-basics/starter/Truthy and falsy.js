// falsy values will be evalued as False in a if else statement: undefined, null, 0, '',NaN, 
// truthy values: NOT falsy values

var height

height = 0 

if(height){
	console.log('Variable is defined')
} else {
	console.log('Variable has NOT been defined')
}


if(height || height === 0){
	console.log('Variable is defined')
} else {
	console.log('Variable has NOT been defined')
}

//Equality operators
height = 23
if(height == '23') {
	console.log('the == operator does types coercion')
}

if( !(height === '23')) {
	console.log('the === operator does not do types coercion')
}

//exercise
john = 100
mike = 200
anna = 150

if (john > mike && john < anna){
	console.log('john win the game')
}
