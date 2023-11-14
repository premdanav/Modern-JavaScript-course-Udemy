function anagram(str1, str2) {
    const aCharMap = buildCharMAp(str1);
    const bCharMap = buildCharMAp(str2);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true;

}


function buildCharMAp(str) {
    const charMap = {};
    for (let char of str.toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap;
}


module.exports = anagram;