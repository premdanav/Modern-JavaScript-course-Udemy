function getElementByTag(root, tagName) {
    if (!root) return [];
    if (!tagName) return [root];

    let res = [];

    //if res is a tag we are looking for
    if (root.tagName.toLowerCase() === tagName.toLowerCase()) {
        res.push(root);
    }

    if (root.hasChildNodes()) {
        for (let child of root.children) {
            res = res.concat(getElementByTag(child, tagName))
        }
    }
    return res;
}

module.exports = getElementByTag;