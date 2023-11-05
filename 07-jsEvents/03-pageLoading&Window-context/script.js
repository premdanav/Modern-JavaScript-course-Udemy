window.onload = function () {

    document.querySelector('h1').textContent = 'Hello'
}

window.addEventListener('load', () => {
    console.log('page loaded');
})
window.addEventListener('DOMContentLoaded', () => {
    console.log('dom loaded')
})

console.log('run me')

window.addEventListener('resize', () => {
    document.querySelector('h1').innerText = `resied to ${window.innerWidth} x ${window.innerHeight}`;
})

window.addEventListener('scroll', () => {
    console.log(`scrolled: ${window.scrollX} x ${window.scrollY}`)

    if (window.scrollY > 70) {
        document.body.style.backgroundColor = 'red';
    }
})