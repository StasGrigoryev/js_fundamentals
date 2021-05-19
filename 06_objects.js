//Objects

const person = {
	name: 'Vasily',
	age: 25,
	isProgrammer: false,
	languages: ['ru','tat','fr'],
	'complex key': 'Complex Value',
	['key_' + (1 + 3)]: 'Computed Key', //key_4
	greet() {
		console.log('greetings from Vasily')
	}
}

console.log(person.name)
console.log(person['complex key'])
console.log(person['key_4'])

//convenient way to obtain object values
const {name, age: personAge = 21, languages} = person
console.log(name, personAge, languages)

//output to console all person keys and values
// for (let key in person) {
// 	if (person.hasOwnProperty()) {
// 		console.log('key:', key)
// 		console.log('value:', person[key])
// 	}
// }

const keys = Object.keys(person)
keys.forEach( key => {
	console.log('key:', key)
	console.log('value:', person[key])
})

//Context

 const logger = {
 	keys() {
 		console.log('Object keys: ', Object.keys(this))
 	},

 	keysAndValues() {
 		Object.keys(this).forEach( key => {
 			console.log('key: ', key)
 			console.log('value: ', this[key])
 		})
 	},

 	withParams(top, between, bottom) {
 		if (top) {
 			console.log('--------Start--------')
 		}
 		Object.keys(this).forEach( (key, index, array) => {
 			console.log('key: ', key)
 			console.log('value: ', this[key])
 			if (between && index !== array.length - 1) {
 			console.log('-------Between-------')
 		}
 		})
 		if (bottom) {
 			console.log('--------Bottom--------')
 		}
 	}
 }

const bound = logger.keys.bind(person)
logger.keysAndValues.call(person)

// logger.withParams.call(logger, true,true,true)
logger.withParams.apply(logger, [true,true,true])

















