 // Number

  const intNum = 42
  const floatNum = 42.2

  console.log('Number.max safe integer: ' + Number.MAX_SAFE_INTEGER)
  console.log('Number.max value: ' + Number.MAX_VALUE)


  const weirdNumber = 1 / 0
  const otherWeirdNumber = 1 / undefined
  console.log('1 / 0 = ' + weirdNumber) // Infinity
  console.log('1 / undefined = ' + otherWeirdNumber) // NaN
  console.log('1 / 0 is finite: ' + Number.isFinite(weirdNumber))
  console.log('1 / indefined is NaN: ' + Number.isNaN(otherWeirdNumber))

  let stringNumber = '10'
  let anotherStringNumber = '12'
  console.log('the type of "10": ' + typeof stringNumber + '\nthe type of of "12": ' + 
  	typeof anotherStringNumber)
  stringNumber = Number.parseInt(stringNumber)
  console.log('the type of "10" parsed to integer: ' + typeof stringNumber)
  console.log('the type of "+stringVariable": ' + typeof +anotherStringNumber)

  console.log('0.4 + 0.2 = ' + (0.4 + 0.2)) //0.6000000000000001
  console.log('0.4 + 0.2 parsed to Float: ' + parseFloat((0.4 + 0.2).toFixed(2)))

  console.log(typeof 10n) // bigint

  console.log('Math.floor(4.8): ' + Math.floor(4.8)) // round to smaller whole number
  console.log('Math.ceil(4.2): ' + Math.ceil(4.2)) // round to greather whole number
  console.log('Math.round(4.6): ' + Math.round(4.4)) // regular math round

  function getRandomBetween(min, max) {
  	return Math.floor(Math.random() * (max - min + 1) + min)
  }

  console.log(getRandomBetween(3, 10)) 


