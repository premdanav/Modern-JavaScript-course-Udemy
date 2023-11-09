//fetching a json file
fetch('./movies.json')
    .then(response => response.json())
    .then(data => console.log(data))

//fetching a text file
fetch('./test.txt')
    .then(response => response.text())
    .then(data => console.log(data))    