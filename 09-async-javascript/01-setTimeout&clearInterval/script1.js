// const intervalId = setInterval(myCallBack, 1000, 'Hello')

// function myCallBack(a) {
//     console.log(a + " " + Date.now())
// }

let intervalId;

function startChange() {
    if (!intervalId) {
        // intervalId = setInterval(chagneColor, 1000)
        intervalId = setInterval(changeRandomColor, 1000);
    }
}

// function chagneColor() {
//     let color = document.querySelector('h1').style.backgroundColor;
//     if (color !== 'blue') {
//         document.querySelector('h1').style.backgroundColor = 'blue';
//     } else {
//         document.querySelector('h1').style.backgroundColor = 'white';
//     }
// }

function changeRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector('body').style.background = `#${randomColor}`;
}

function stopChange() {
    clearInterval(intervalId);
}
document.querySelector('.stop-color-change').addEventListener('click', stopChange)
document.querySelector('.start-color-change').addEventListener('click', startChange)