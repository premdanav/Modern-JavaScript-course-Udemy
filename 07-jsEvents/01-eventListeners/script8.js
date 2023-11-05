//addeventListener
const clearBtn = document.querySelector('#clear');

function onClear() {
    alert('clear item');
}
//add event listener to the button
//event listener takes two parameters one type of event and callback function
clearBtn.addEventListener('click', function () {
    console.log("button clicked");
});
//onClick event handler
// clearBtn.addEventListener('click', onClear);

//remove event listener for 5 sec 
// setTimeout(() => { clearBtn.removeEventListener('click', onClear) }, 5000)

function onClearItems() {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelector('li');

    // itemList.innerHTML = '';

    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

clearBtn.addEventListener('click', onClearItems);