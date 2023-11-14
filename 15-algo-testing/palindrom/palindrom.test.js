const palindrome = require('./palindrome')

describe('Palindrome', () => {
    it('should be type of function', () => {
        expect(typeof palindrome).toEqual('function');
    });

    it('should be type of boolean', () => {
        expect(typeof palindrome('hello')).toEqual('boolean');
    });

    it('should be return true if it is palindrome', () => {
        expect(palindrome('kayak')).toBeTruthy();
        expect(palindrome('madam')).toBeTruthy();
        expect(palindrome('oyo')).toBeTruthy();
    });

    it('should be return true if it is palindrome', () => {
        expect(palindrome('kayaka')).toBeFalsy();
        expect(palindrome('madama')).toBeFalsy();
        expect(palindrome('oyoa')).toBeFalsy();
    });
    it('should be return false if it contains the space', () => {
        expect(palindrome(' kayaka')).toBeFalsy();
    });
});