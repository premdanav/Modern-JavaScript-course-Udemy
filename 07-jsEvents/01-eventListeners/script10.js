const logo = document.querySelector('.image')

const onClick = (e) => {
    // console.log(e.target)
    // console.log(e.currentTarget)
    e.target.style.backgroundColor = 'black';
    console.log(e.type)
    console.log(e.timeStamp)
    console.log(e.clientX)
    console.log(e.clientY)
    console.log(e.offsetX)
    console.log(e.offsetY)
    console.log(e.pageX)
    console.log(e.pageY)
    console.log(e.screenX)
    console.log(e.screenY)
}
//The Event Object

logo.addEventListener('click', onClick)

// document.body.addEventListener('click', (e) => {
//     console.log(e.target);
//     console.log(e.currentTarget)

// })

document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();//prevents the defaults action of event
    console.log('link was clicked ')
})

logo.addEventListener('drag', (e) => {
    document.querySelector('h1').innerText = `X-${e.clientX} Y-${e.clientY}`;
})