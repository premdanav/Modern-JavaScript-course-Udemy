let res;

//get child elements from parents
const parent = document.querySelector('.parent');
res = parent.children[1].innerText
res = parent.children[1].className

res = parent.children
Array.from(res).forEach(element => {
    console.log(element.innerText)
});


parent.firstElementChild.innerText = "child one";
parent.lastElementChild.innerText = "child three";

//get parent elements from child
const child = document.querySelector('.child');
res = child.parentElement.innerText;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

//sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');
res = secondItem.innerText;
res = secondItem.nextElementSibling.innerText;

console.log(res)