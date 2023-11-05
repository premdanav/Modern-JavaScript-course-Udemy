//mouse events
const logo = document.querySelector('.image')
// console.log(logo)

const onClick = () => console.log('logo clicked');

const onDoubleClick = () => {
    document.body.style.backgroundColor = 'purple'
}

const onRightClick = () => console.log('right click event')
const onMouseDown = () => console.log('mouse down event')
const onMouseup = () => console.log('mouse up event')
const onMouseWheel = () => console.log('mouse wheel event')
const onMouseOver = () => console.log('mouse over event')
const onMouseOut = () => console.log('mouse out event')
const onDragStart = () => console.log('drag start event')
const onDrag = () => console.log('drag event')
const onDragEnd = () => console.log('drag end event')
//event listener
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick)
logo.addEventListener('mousedown', onMouseDown)
logo.addEventListener('mouseup', onMouseup)
logo.addEventListener('wheel', onMouseWheel)
logo.addEventListener('mouseover', onMouseOver)
logo.addEventListener('mouseout', onMouseOut)
logo.addEventListener('dragstart', onDragStart)
logo.addEventListener('drag', onDrag)
logo.addEventListener('dragend', onDragEnd)

