const name = 'Stas'
const age = 28

function getAge() {
	return age
}

const output = `Hello! My name is ${name} and I'm ${getAge()} years old`
console.log(output)

console.log(`I'm ${getAge() > 18 ? 'adult' : 'juvenile'}`)

console.log(`<div>This is div</div>
<p>This is paragraph</p>`)

console.log(name.toUpperCase())
console.log('the name is ' + name.length + ' symbols length')

const name2 = 'Max'
const age2 = -5

function logPerson(s, name, age) {
	if (age < 0) {
		age = 'not born yet'
	}
	return `${s[0]}${name}${s[1]}${age}${s[2]}` // Name: Stas, Age: 28!
}

const outputString = logPerson`Name: ${name}, Age: ${age}!`
const outputString2 = logPerson`Name: ${name2}, Age: ${age2}!`

console.log(outputString)
console.log(outputString2)