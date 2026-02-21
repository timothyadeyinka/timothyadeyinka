// Top fixed button's dynamic functionality
window.addEventListener('scroll', function () {
  var top = document.querySelector('.back-to-top')
  if (window.scrollY > 1500) {
    top.classList.add('show')
  } else {
    top.classList.remove('show')
  }
})

document.querySelector('.back-to-top').innerHTML = `
    <a class="angle" title="angle" href="#main-nav"><i class="fas fa-angle-up fa-2x"></i></a>`
