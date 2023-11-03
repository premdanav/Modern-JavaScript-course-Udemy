(function () {
    const user = 'pitt';
    console.log(user);
    const hello = () => console.log(`hello from ${user}`)
    hello();
})();

(function (name) {
    console.log(`hello ` + name);
})('shawn');

