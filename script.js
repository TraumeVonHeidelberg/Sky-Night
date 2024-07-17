const body = document.body
const darkModeSwitch = document.querySelector('.switch')

function getRandomPosition() {
	const top = Math.random() * 100
	const left = Math.random() * 100

	// Ensure stars do not appear in the center (30%-70% of both top and left)
	if (top > 30 && top < 70 && left > 40 && left < 60) {
		return getRandomPosition()
	}

	return { top, left }
}

function createStars() {
	// Remove existing stars
	const existingStars = document.querySelectorAll('.star')
	existingStars.forEach(star => star.remove())

	// Create new stars
	for (let i = 0; i < 80; i++) {
		const star = document.createElement('div')
		star.classList.add('star')
		const { top, left } = getRandomPosition()
		star.style.top = `${top}vh`
		star.style.left = `${left}vw`
		body.appendChild(star)
	}
}

createStars() // Initial creation of stars

const stars = () => document.querySelectorAll('.star')

darkModeSwitch.addEventListener('click', () => {
	if (darkModeSwitch.style.justifyContent == 'start') {
		body.style.backgroundColor = '#111e36'
		darkModeSwitch.style.justifyContent = 'end'
		createStars() // Create new stars on switch to dark mode
		stars().forEach(star => {
			star.style.display = 'inline-block'
		})
	} else {
		body.style.backgroundColor = '#fff'
		darkModeSwitch.style.justifyContent = 'start'
		stars().forEach(star => {
			star.style.display = 'none'
		})
	}
})
