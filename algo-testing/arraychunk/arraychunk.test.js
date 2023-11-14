const assert = require('assert')
const chunk = require('./arraychunk')

describe('Array Chunking', () => {
    it('should create chunks of specific array size', () => {
        assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
        assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
    });
});