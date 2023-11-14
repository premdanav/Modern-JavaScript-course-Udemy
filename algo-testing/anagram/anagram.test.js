const anagram = require('./anagram')

describe('Anagram', () => {
    it("should return true if the two strings are anagrams", () => {
        expect(typeof anagram).toEqual('function');
    });

    it("should return a boolean", () => {
        expect(typeof anagram('ram', 'arm')).toEqual('boolean');
    });

    it("should return true if anagram else false", () => {
        expect(anagram('ram', 'arm')).toBeTruthy();
        expect(anagram('ram', 'arma')).toBeFalsy();
    });

})