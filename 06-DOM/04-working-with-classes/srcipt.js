const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelector('li');

function run() {
    // console.log(itemList.className);
    // text.className = 'card dark';

    // console.log(itemList.classList)

    itemList.classList.forEach(c => console.log(c))
}
document.querySelector('button').onclick = run;