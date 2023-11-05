const itemInput = document.getElementById('item-input');

const priorityInput = document.getElementById('priority-input');

const checkbox = document.getElementById('checkbox')

const heading = document.querySelector('h1');

function onInput(e) {
    if (e.target === itemInput) {
        heading.textContent = e.target.value;
    } else if (e.target === priorityInput) {
        console.log(e.target.options);
        console.log(e.target.selectedIndex);

        const selectedPriority = e.target.options[e.target.selectedIndex].text;
        heading.textContent = selectedPriority;
    } else if (e.target === checkbox) {
        console.log(e.target.checked)
    }
}

function onFocus() {
    console.log('input is focused')
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'red';
}

function onBlur() {
    console.log('input is not focused')
    itemInput.style.outlineStyle = 'none';
}
itemInput.addEventListener('input', onInput)
itemInput.addEventListener('focus', onFocus)
itemInput.addEventListener('blur', onBlur)
priorityInput.addEventListener('input', onInput)
checkbox.addEventListener('change', onInput)