var john = ['john','smith',1990,'designer','false','blue']

for(var i = 0; i<john.length; i++){
	console.log(john[i])
}

//while loop
var i = 0

while(i<john.length){
	console.log(john[i])
	i++
}

//use continue and break 

for(var i = 0; i < john.length; i++){
	if(typeof john[i] !== 'string'){
		continue
	}
	console.log(john[i])
}


for(var i = 0; i < 5; i++){
	if(typeof john[i] !== 'string'){
		break
	}
	console.log('exist')
}


//looping backward
for(var i = john.length - 1; i>=0; i--){
	console.log(john[i])
}



