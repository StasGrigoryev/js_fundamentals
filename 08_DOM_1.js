//DOM (Document Object Model)

//old ways to get elements from document(DOM)
//get one element (node) by its id
const heading = document.getElementById('heading')
//get array with all elements by tagname
const heading2byTag = document.getElementsByTagName('h2')
//get pseydo-array with all elements by classname
const heading2byClass = document.getElementsByClassName('heading2-class')

console.log(heading2byTag[0])
console.log(heading2byTag[1])

console.log(heading2byClass)

//new methods to get elements (using CSS selectors)
//query selector always returns one element (first)
const headingTwoByTag = document.querySelector('h2')
const headingTwoByClass = document.querySelector('.heading2-class')
const headingTwoById = document.querySelector('#heading2')

console.log(headingTwoByTag)
console.log(headingTwoByClass)
console.log(headingTwoById)

//to get next element with same tag use nextElementSibling property
//of the first element node
const nextHeadingByTag = headingTwoByTag.nextElementSibling
console.log(nextHeadingByTag)

//to get all elements(nodes) with same tag
const allHeadings2 = document.querySelectorAll('h2')
const allHeadings1 = document.querySelectorAll('h1')

for(let tag of allHeadings2) {
	console.log(tag)
}

setTimeout(() => changeStyleOf(allHeadings1[allHeadings1.length-1],'Hello from JavaScript'), 500)
setTimeout(() => changeStyleOf(headingTwoByTag,'Great to see you here!'), 1500)
setTimeout(() => changeStyleOf(nextHeadingByTag, 'You choose the right\
 programming language'), 2500)
setTimeout(() => {
	setInterval(() => randomColor('mainText'), 500)
}, 3000)

// setTimeout(() => changeNameOf(heading), 2500)

function changeNameOf(node) {
	const name = prompt('Enter your name:')
	//changing text using user's name
	node.textContent = `Hello ${name}!`
}

function changeStyleOf(node, text) {
	//changins text
	node.textContent = text
	//changing color of the text
	node.style.color = '#db6ec0'
	//aligning text with JS
	node.style.textAlign = 'center'
	node.style.backgroundColor = '#ecd8f2'
	node.style.padding = '2rem'
}

//when clicked change color
function changeColor(node, color) {
	const elem = document.getElementById(node)
	elem.style.color = color
}

//when clicked change color to random one
function randomColor(node) {
	const randomColor = Math.floor(Math.random()*16777215).toString(16)
	const elem = document.getElementById(node)
	elem.style.color = '#' + randomColor
}