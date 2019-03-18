///////////////////////////////////////
// codes go to the Parser then convert to the machine code(all these happen in the code engine)
// codes run in the exexution context, the default is the globel execution context
// when we call multiple functions, they become stack in execution context until the function returns
// Hoisting: variables(set to undefined, only defined in the execution phase)
// Hoisting: variables(set during the function delaration, but not function expression)


// Lecture: Hoisting

calculateAge(1965) // this is working 

function calculateAge(year) {  //this is not working because it is not function declaration 
    console.log(2016 - year)
}



retirement(1990)    //this time it is not working 

var retirement = function(year){     //function expression not function declaration 
    console.log(65 - (2016-year))
}

//variable 
//console.log(age)  this is undefined, becaues of hoisting, 
var age = 23
console.log(age)










///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









