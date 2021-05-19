 var name = 'Stas'
const lastName = 'Fitzgherald'
let age = 28

console.log('I know one great guy. His name is ' + name + ' ' + lastName + 
	'. You can trust him. He is about ' + age + ' years old now.')

function calculateAge(year) {
	return 2021 - year 
}

const birthYear = prompt('enter your birth year please')
const yourAge = calculateAge(birthYear)

alert('you are ' + yourAge)

function getPersonInfo(name, birthYear) {
	const humanAge = calculateAge(birthYear)

	if ((humanAge) > 0) {
		console.log('The person with the name ' + name + ' now is ' + humanAge + ' years old.' )
	} else {
		console.log("I'm not sure but isn't the age always supposed to be a positive number?")
	}

}

getPersonInfo(name, birthYear)


const cars = ['Mazda', 'Toyota', 'Ford']
cars[cars.length] = 'Jaguar'
console.log(cars)

console.log('------- regular for loop ------')
for (let i = 0; i < cars.length; i++) {
	const car = cars[i]
	console.log(car)
}

console.log('------- for-of loop ------')

for (let car of cars) {
	console.log(car)
}















