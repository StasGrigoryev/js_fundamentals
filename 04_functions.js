//Functions

//Fuction Declaration
function greet(name = 'user') { //default param 'user'
	console.log(`Hello, ${name}!`)
}

const greetVar = function(name) {
	console.log('Hello again,', name)
}

greet() // will greet default person
greetVar('Stas')

//see properties
console.dir(greetVar)

//Using anonymous functions
setTimeout(function(name) {
	console.log(`Hello, ${name} with delay!`)
}, 1000, 'Stas')

//Arrow functions
const arrowFunc = (name) => {
	console.log('Hello, ' + name + ' from arrow function')
}

//you can omit the parentesis and curly braces
const arrowFuncTwo = name => console.log('Hello, ' + name)

arrowFunc('Stas')

const pow2 = num => num ** 2
console.log('the power of 5:', pow2(5))

//rest

function sumAll(...all) {
	result = 0
	for (num of all) {
		result += num
	}
	return result
}

const numbers = [1,2,3,4,5]
console.log(`Sum of ${numbers}: ${sumAll(1,2,3,4,5)}`)

//Closures
function createMember(name) {
	return function(lastName) {
		console.log(name, lastName)
	}
}

const logWithLastName = createMember('Stas')
logWithLastName('Smith')
logWithLastName('Johnson')

























