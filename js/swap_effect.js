const contents = document.querySelectorAll('.content')
let currentIndex = 0

function swapContents() {
  // Remove active class from current content
  contents[currentIndex].classList.remove('active')

  // Move to next content (or back to first if at end)
  currentIndex = (currentIndex + 1) % contents.length

  // Add active class to new current content
  contents[currentIndex].classList.add('active')

  // Custom color change for icon
  const icon = contents[currentIndex].querySelector('i')
  icon.style.color = getRandomColor()

  // Custom color change for h3
  const h3 = contents[currentIndex].querySelector('h3')
  h3.style.color = getRandomColor()
}

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

// Start swapping contents every 5 seconds
setInterval(swapContents, 5000)
