const calculator = (num1, num2, operator) => {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '/': {
            if (num2 != 0) return num1 / num2;
            else throw new Error('Cannot divide by zero');
        }
        case '*': return num1 * num2;
        default: throw new Error(`Invalid operator ${operator}`);
    }

}

console.log(calculator(10, 20, '&'));