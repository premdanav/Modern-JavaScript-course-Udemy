const reverseString = require('./reversestring')

describe('reverser String', () => {
    it('should be function', () => {
        expect(typeof reverseString).toEqual('function');
    });

    it('should return a reverse String', () => {
        expect(reverseString('prem')).toEqual('merp');
    });
})