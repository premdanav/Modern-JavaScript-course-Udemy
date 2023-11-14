const getElementByTag = require('./getelementsbytag')

describe('Get Element by tag', () => {
    it('should be type of function', () => {
        expect(typeof getElementByTag).toEqual('function');
    });

    it('should return an array', () => {
        expect(Array.isArray(getElementByTag())).toEqual(true);
    });

    it('should return an empty array is no root is passed in', () => {
        expect(getElementByTag()).toEqual([]);
    });

    it('should return an  array with root if no tagname is passed root is passed in', () => {
        const root = document.createElement('div');
        expect(getElementByTag(root)).toEqual([root]);
    });

    it('should return the correct elements', () => {
        const root = document.createElement('div');

        //add some child elements
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const span = document.createElement('span')

        root.appendChild(p1)
        root.appendChild(span)
        span.appendChild(p2)

        expect(getElementByTag(root, 'span')).toEqual([span]);
    });

});