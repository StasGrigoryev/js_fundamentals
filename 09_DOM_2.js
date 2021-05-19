//DOM part 2
const heading = document.querySelector('#heading')
const heading2 = document.querySelector('h2')
const link = heading2.nextElementSibling.querySelector('a')

//change style when h1 clicked
heading.onclick = () => {
	if (heading.style.color === 'red') {
		heading.style.color = '#000'
		heading.style.backgroundColor = '#fff'
	} else {
		heading.style.color = 'red'
		heading.style.backgroundColor = '#000'
	}
}

console.log(heading2.style.color)

heading2.addEventListener('dblclick', () => {
	if (heading2.style.color == 'yellow') {
		heading2.style.color = 'pink'
		heading2.style.backgroundColor = '#6990cf'
	} else {
		heading2.style.color = 'yellow'
		heading2.style.backgroundColor = '#000'
	}
})

link.addEventListener('click', (event) => {
	//prevent following link e.g. submitting a form 
	event.preventDefault()
	console.log('Click on link', event.target.getAttribute('href'))
	//following link from JS
	const url = event.target.getAttribute('href')
	window.location = url
})

setTimeout(() => {
	heading.style.color = 'red'
	heading.style.backgroundColor = 'black'
}, 1000)

setTimeout(() => {
	heading2.style.color = 'yellow'
	heading2.style.backgroundColor = '#000'
}, 1500)

setTimeout(() => {
	link.style.color = 'blue'
	link.style.backgroundColor = '#000'
}, 1500)




























