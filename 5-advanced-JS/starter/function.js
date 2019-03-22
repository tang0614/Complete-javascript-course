// function is an instance of the object
// function behaves like any other object
// we can store function in a variable
// we can pass a function as an argument to another function

/////Lecture: Passing function as argument

var years = [1999,1965,1937,2005,1998]

function arrayCalc(arr, fn){
	var arrRes = []

	for (var i = 0 ; i < arr.length; i++) {
		arrRes.push(fn(arr[i]))
	}
	return arrRes
}


function calculateAge(el){
	return 2016 - el
}


function isFullAge(el){
	return el >= 18
}
var ages = arrayCalc(years,calculateAge)

console.log(ages)

var fullage = arrayCalc(years,isFullAge)
console.log(fullage)


//function return function

function interviewQuestion(job){
	if (job === 'designer'){
		return function(name){       //return a anonymous function
			console.log(name + ' can you please explain what UX design is')
		}
	} else if (job === 'teacher'){
		return function(name){
			console.log('what subject do you teach ' + name +"?") 
		}
	} else {
		return function(name) {
			console.log('hello' + name + 'what do you do?')
		}
	}
}

var teacherQ = interviewQuestion('teacher')
var designerQ = interviewQuestion('designer')
teacherQ('john')


//Another way to do it 
interviewQuestion('teacher')('Mark')
