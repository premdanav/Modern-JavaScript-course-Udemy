function fizzBuzz(number) {
    if (number % 3 === 0) {
        return 'Fizz';
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else {
        return 'FizzBuzz';
    }
    return 'not found';
}

module.exports = fizzBuzz;