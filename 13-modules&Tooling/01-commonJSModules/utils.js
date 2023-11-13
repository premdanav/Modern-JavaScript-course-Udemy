function capitaliseFirstWord(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
}
function capitaliseWords(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substring(1))
        .join(' ');
}

module.exports = {
    capitaliseWords,
    capitaliseFirstWord
}