const form = document.getElementById('item-form');

function onSubmit(e) {
    e.preventDefault();
    // console.log('submit');

    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;
    console.log(item, priority);
    if (item === '' || priority === '0') {
        alert('please fill the fields')
        return
    }
}

function onSubmit2(e) {
    e.preventDefault();
    const formData = new FormData(form);

    const item = formData.get('item');
    const priority = formData.get('priority');
    const entries = formData.entries();
    for (const entry of entries) {
        console.log(entry[0], entry[1])
    }
    console.log(item, priority)

}
form.addEventListener('submit', onSubmit)