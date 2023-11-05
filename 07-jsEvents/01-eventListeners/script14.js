//event bubbling
/*

event is captured and handled by innermost element and moved to uppermost element in dom 

*/

const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.getElementById('item-form');

window.addEventListener('click', () => {
    alert('window was clicked');
})
form.addEventListener('click', (e) => {
    alert('form was clicked');
    e.stopPropagation();
})
button.addEventListener('click', (e) => {
    alert('button was clicked');
    // e.stopPropagation();
})

div.addEventListener('click', () => {
    alert('div was clicked')
})