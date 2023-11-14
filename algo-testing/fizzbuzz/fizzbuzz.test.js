const fizzBuzz = require('./fizzbuzz')

describe('it fizzbuzz', () => {
    it('should be a function', () => {
        expect(typeof fizzBuzz).toEqual('function');
    });

    test('if num divisble by 3 or 5 or not', () => {
        expect(fizzBuzz(13)).toEqual('FizzBuzz');
    })
});