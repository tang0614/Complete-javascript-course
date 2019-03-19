// lectre: scoping
//each new function creates a scope

var a = 'Hello'   //global scope
first()

function first() {     // this local scope has no access to var c
	var b = 'hi'

	second();

	function second(){       //another local scope， this local scope is inside first()
		var c = 'hey'
		console.log(a + b + c) //a and b are not from lcoal scope but parent scope
	}

}