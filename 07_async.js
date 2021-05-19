//Asynchrony
//Event Loop

//calling setTimeout func to log message with delay
 const timeout = setTimeout(() => {
 	console.log('After timeout')
 }, 2000)

 clearTimeout(timeout)

//calling setInterval func to log message every sec
 const interval = setInterval(() => {
 	console.log('Log every second')
 }, 1000)

 clearInterval(interval)

//creating our own delay function, but with help of setTimeout
 // const delay = (callback, wait = 1) => {
 // 	setTimeout(callback, wait)
 // } 

 // delay(() => {
 // 	console.log('hello with delay')
 // }, 1500)

//returns promise
 const delay = (wait = 1000) => {
 	const promise = new Promise((resolve, reject) => {
 		setTimeout(() => {
 			// resolve()
 			reject('Something went wrong. Please try again')
 		}, wait) 
 	})
 	return promise
 }

delay(2000)
	.then(() => {
		console.log('message with delay')
	})
	.catch(err => console.error('Error:', err))
	.finally(() => console.log('finally'))

//another promise example
const getData = () => new Promise(resolve => resolve([1,1,2,3,5,8,13]))

getData()
	.then(data => console.log(data))

//new way how to use promises instead of chaining .then.catch... we use async-await 
async function asyncExample() {
	try {
		await delay(2000)
		const data = await getData()
		console.log('Data:', data)
	} catch (e) {
		console.log(e)
	} finally {
		console.log('Finally')
	}
}

asyncExample()

















