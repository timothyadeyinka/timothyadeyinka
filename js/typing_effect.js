class SimpleTypewriter {
  constructor(element, words, waitTime = 3000) {
    this.element = element
    this.words = words
    this.waitTime = parseInt(waitTime, 10) * 4 // Increase the waiting time
    this.currentWord = ''
    this.isDeleting = false
    this.wordIndex = 0
    this.type()
  }

  type() {
    // Get the current word
    const fullWord = this.words[this.wordIndex % this.words.length]

    // Set the text based on whether we're deleting or typing
    if (this.isDeleting) {
      this.currentWord = fullWord.substring(0, this.currentWord.length - 1)
    } else {
      this.currentWord = fullWord.substring(0, this.currentWord.length + 1)
    }

    // Update the element with the current text
    this.element.textContent = this.currentWord

    // Set the typing speed
    let typeSpeed = 100

    if (this.isDeleting) {
      typeSpeed /= 2 // Faster when deleting
    }

    // Check if word is complete
    if (!this.isDeleting && this.currentWord === fullWord) {
      typeSpeed = this.waitTime // Pause at the end of the word
      this.isDeleting = true
    } else if (this.isDeleting && this.currentWord === '') {
      this.isDeleting = false
      this.wordIndex++ // Move to next word
      typeSpeed = 500 // Pause before typing next word
    }

    setTimeout(() => this.type(), typeSpeed)
  }
}

// Initialize the typewriter effect when the DOM is loaded
// Repeated typing effect for each element, targeted by their
// Id attribute.

// Intro
document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro')
  const words = [
    "I'm a passionate and dedicated web developer who specializes in creating engaging and user-friendly interfaces. I have a background in graphic design and user experience design, and I'm always eager to learn and grow.",
    "I'm excited to help you create a stunning and functional website or application.",
    "Let's work together to bring your ideas to life!",
  ]
  new SimpleTypewriter(intro, words, 2000)
})

// Code
document.addEventListener('DOMContentLoaded', () => {
  const code = document.getElementById('code')
  const words = [
    'I can help you develop websites, applications, and APIs for your business.',
    'I have experience with various programming languages and frameworks.',
    'I can guide you through the process of designing and developing your project.',
  ]
  new SimpleTypewriter(code, words, 2000)
})

// Web
document.addEventListener('DOMContentLoaded', () => {
  const web = document.getElementById('web')
  const words = [
    'I can help you develop websites and applications using HTML, CSS, and JavaScript.',
    'I can create responsive and accessible designs that work well on all devices.',
    'I can optimize your website for search engines and improve its performance.',
  ]
  new SimpleTypewriter(web, words, 2000)
})

// API
document.addEventListener('DOMContentLoaded', () => {
  const API = document.getElementById('API')
  const words = [
    'I can help you develop APIs for your website or application.',
    'I can design and implement RESTful APIs using various programming languages.',
    'I can guide you through the process of testing and deploying your APIs.',
  ]
  new SimpleTypewriter(API, words, 2000)
})

// Data
document.addEventListener('DOMContentLoaded', () => {
  const data = document.getElementById('data')
  const words = [
    'I can help you design and manage databases for your website or application.',
    'I can guide you through the process of selecting the right database management system.',
    'I can help you optimize your database performance and ensure data integrity.',
  ]
  new SimpleTypewriter(data, words, 2000)
})
