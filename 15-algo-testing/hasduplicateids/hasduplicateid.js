function hasDuplicateIds(root, idSet = new Set()) {
    if (!root) return false;

    if (idSet.has(root.id)) return true;

    root.id && idSet.add(root.id);

    if (root.hasChildNodes()) {
        for (let child of root.children) {
            const res = hasDuplicateIds(child, idSet);
            if (res) return true;
        }
    }
    return false;
}

module.exports = hasDuplicateIds;