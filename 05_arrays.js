//Arrays

const numbers = [1, 2, 3, 5, 8, 13, 21]

const cars = ['Ford', 'Mercedes', 'Mazda', 'Toyota']
console.log(cars)

const people = [
{name: 'Anton', age: 35, budget: 1000000},
{name: 'Sveta', age: 21, budget: 10000},
{name: 'Sam', age: 28, budget: 20000}
]

// add to end
cars.push('Honda')
console.log(cars)

//add at beginning
cars.unshift('Reno')
console.log(cars)

//delete from beginning
cars.shift()
console.log(cars)

//delete from end
cars.pop()
console.log(cars)

//exersize 1: reverse a string
const text = 'I love JavaScript'
const textArray = text.split(' ')
console.log(textArray)
const reversedText = textArray.reverse().join(' ')
console.log(reversedText)

//using predicate functions with object arrays
const foundPerson = people.find(person => person.budget === 10000)
console.log(foundPerson)

const upperCaseCars = cars.map(car => car.toUpperCase())
console.log(upperCaseCars)

//store functions in variables for future usage
const pow2 = num => num ** 2
const sqrt = num => Math.sqrt(num)

//using functions declared above in map filters
console.log(numbers.map(pow2))
console.log(numbers.map(pow2).map(sqrt))
console.log(numbers.map(pow2).map(Math.sqrt)) //you can use Math method

//to collect all values in one use reduce method
const totalBudget = people
	.filter(person => person.budget > 15000)
	.reduce((acc, person) => {
		acc += person.budget
		return acc
	}, 0)

console.log(totalBudget)















