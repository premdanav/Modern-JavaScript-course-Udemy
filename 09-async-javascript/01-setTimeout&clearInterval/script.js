// setTimeout(() => {
//     console.log('Hello inside set timeout');
// }, 2000)

//setTimeout(changeText(), 5000);

function changeText() {
    document.querySelector('h1').innerText = 'changed text';
}

const timerId = setTimeout(changeText, 3000)

document.querySelector('button').addEventListener('click', () => {
    console.log(timerId)
    clearTimeout(timerId);
    console.log('timer cancelled')

})
// console.log('hello outside timeout')