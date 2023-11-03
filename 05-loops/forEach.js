const items = ['book', 'table', 'kite', 'chair'];

//items.forEach(item => console.log(item));

function logItems(item) {
    // console.log(item);
}
items.forEach(logItems);

items.forEach((item, index, arr) => console.log(`${index}-${item}`, arr))