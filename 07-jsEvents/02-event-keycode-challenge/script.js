//method 1
/*
window.addEventListener('keypress', (e) => {
    const insert = document.getElementById('insert')
    insert.innerHTML = `
     <div class="key">
      ${e.key === ' ' ? 'space' : e.key} 
     <small>e.key</small>
    </div >

     <div class="key">
      ${e.keyCode}
     <small>e.keyCode</small>
    </div>

     <div class="key">
      ${e.code}
    <small>e.code</small>
     </div>`;
})

*/

//method2
function showKeyCodes(e) {
    const insert = document.querySelector('#insert')
    insert.innerHTML = ''
    const keyCodes = {
        'e.key': e.key === ' ' ? 'space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code
    };

    for (let key in keyCodes) {
        const div = document.createElement('div');
        div.className = "key";
        const small = document.createElement('small')

        small.textContent = key;
        div.textContent = keyCodes[key];
        div.appendChild(small);
        insert.appendChild(div);
    }

}

window.addEventListener('keydown', showKeyCodes);

