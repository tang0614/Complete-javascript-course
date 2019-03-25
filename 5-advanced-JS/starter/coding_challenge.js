function Question(question, answers, correct){
	this.question = question
	this.answers = answers
	this.correct = correct
}



Question.prototype.displayQuestion = function() {

	console.log(this.question)

	for(var i = 0; i < this.answers.length; i++){
		console.log(this.answers[i])
	}

}

Question.prototype.checkAnswer = function(ans){

	if(ans === this.answer){
		console.log('correct answer')
	} else {
		console.log('wrong')
	}
}

var q1 = new Question('Is javascript the coolest one?',['Yes','No'],0)
var q2 = new Question('What\'s the name of this course teacher?',['john','Micheal','jonas'],2)

var questions = [q1,q2]
var n = Math.floor((Math.random() * questions.length))


questions[n].displayQuestion()

var prompt = require('prompt')
    , arr = [];

function getAnother() {
    prompt.get('number', function(err, result) {
        if (err) done();
        else {
            arr.push(parseInt(result.number, 10));
            getAnother();
        }
    })
}

function done() {
    console.log(arr);
}


prompt.start();
getAnother();

//answer = parseInt(prompt('please select answer'))

//questions[n].checkAnswer(answer)
