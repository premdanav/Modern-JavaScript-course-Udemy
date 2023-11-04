let res;

const parent = document.querySelector('.parent');
res = parent.childNodes;
res = parent.childNodes[0].textContent;
res = parent.childNodes[0].nodeName;
res = parent.childNodes[3].textContent;
res = parent.childNodes[3].innerHTML;

console.log(res)