const progressBar = document.querySelector('.progress-bar')

// Update progress bar
function updateProgressBar() {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight - windowHeight
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const scrollPercentage = (scrollTop / documentHeight) * 100

  progressBar.style.width = scrollPercentage + '%'
}

// Listen for scroll events
window.addEventListener('scroll', updateProgressBar)
window.addEventListener('resize', updateProgressBar)

// Initial call to set progress bar on page load
updateProgressBar()
