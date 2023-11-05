//keyboard events

const itemInput = document.getElementById('item-input');
const onKeyPress = e => {
    // console.log('key pressed')

    //key
    console.log(e.key)
    e.key === 'Enter' && alert('u pressed enter')

    //keyCode-->every key on keyboard has a code
    e.keyCode === 13 && alert('u pressed enter havnig code 13')

    //code
    console.log(e.code)
}
const onKeyUp = e => console.log('key up')
const onKeyDown = e => {
    console.log('key down')

    e.repeat && console.log('u are holding down' + e.key)

    console.log('Shift :' + e.shiftKey)
    console.log('Ctrl :' + e.ctrlKey)
    console.log('Alt :' + e.altKey)

}

//keyboard events
// itemInput.addEventListener('keypress', onKeyPress)
// itemInput.addEventListener('keyup', onKeyUp)
itemInput.addEventListener('keydown', onKeyDown)