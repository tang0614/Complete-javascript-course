var markmass, johnmass, markh, johnh
markmass = 60
johnmass = 70
markh = 1.8
johnh = 1.9

//calculate BMI
mark_bmi = markmass / (markh^2)
john_bmi = johnmass / (johnh^2)

var ishigher = mark_bmi > john_bmi
console.log('is Mark\'s BMI higher than john? ' + ishigher)