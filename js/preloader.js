document.addEventListener('DOMContentLoaded', function () {
  const preloader = document.getElementById('preloader')
  const progressBar = document.querySelector('.progress')
  const progressText = document.querySelector('.progress-text')
  const loadingText = document.querySelector('.loading-text')
  let progress = 0
  let dots = 0

  function updateProgress() {
    if (progress < 100) {
      progress += Math.random() * 10
      progress = Math.min(progress, 100)
      progressBar.style.width = `${progress}%`
      progressText.textContent = `${Math.round(progress)}%`

      dots = (dots + 1) % 4
      loadingText.textContent = `Loading${'.'.repeat(dots)}`

      setTimeout(updateProgress, 200)
    } else {
      preloader.style.opacity = '0'
      setTimeout(() => {
        preloader.style.display = 'none'
      }, 500)
    }
  }

  updateProgress()
})
