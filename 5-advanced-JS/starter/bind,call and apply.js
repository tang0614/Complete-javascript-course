//////////////////////////////////
//Lecture: bind, call and apply
var john = {
	name: 'john',
	age: 26,
	job: 'teacher',
	presentation: function(style, timeOfDay){
		if (style === 'formal'){
			console.log('Good ' + timeOfDay + ' my name is ' +this.name)

		} else if (style === 'friendly'){
			console.log('Good ' + timeOfDay + ' my name is ' +this.name +
				'have a nice ' + timeOfDay)
		}
	}

}


//call this 
emily = {
	name: 'emily',
	age: 23,
	job: 'designer'
}
//call argument used to set this variable, method borrowing 
//john.presentation.call(emily,'friendly','afternoon')


//bind allows us to pre-set the argument
var johnFriendly = john.presentation.bind(john,'friendly')
johnFriendly('morning')
johnFriendly('night')

var emilyFormal = john.presentation.bind(emily,'formal')
emilyFormal('afternoon')













