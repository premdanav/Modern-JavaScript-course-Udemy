const hasDuplicateIds = require('./hasduplicateid')

describe('Dom Tree has Duplicate IDs', () => {
    let root, child1, child2;
    beforeEach(() => {
        //create mock elements
        root = document.createElement('div');
        child1 = document.createElement('div');
        child2 = document.createElement('div');

        root.appendChild(child1);
        root.appendChild(child2);

    });
    afterEach(() => {
        root = null;
    })

    it('should be type of function', () => {
        expect(typeof hasDuplicateIds).toEqual('function');
    });

    it('should return boolean', () => {
        expect(typeof hasDuplicateIds()).toEqual('boolean');
    });

    it('should be false if no root', () => {
        expect(hasDuplicateIds()).toBeFalsy();
    });

    it('should be true if it has duplicate id', () => {

        //add duplicate ids
        root.id = 'root';
        child1.id = 'child';
        child2.id = 'child';

        const res = hasDuplicateIds(root);
        expect(res).toEqual(true);
    });

    it('should be false if it has no duplicate id', () => {
        // //create mock elements
        // const root = document.createElement('div');
        // const child1 = document.createElement('div');
        // const child2 = document.createElement('div');

        // root.appendChild(child1);
        // root.appendChild(child2);

        //add duplicate ids
        root.id = 'root';
        child1.id = 'child1';
        child2.id = 'child2';

        const res = hasDuplicateIds(root);
        expect(res).toEqual(false);
    });

});