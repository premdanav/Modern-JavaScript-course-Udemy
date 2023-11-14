function chunk(arr, chunkSize) {
    if (!Array.isArray(arr) || chunkSize <= 0) {
        throw new Error('Invalid input. Please provide a valid array and chunk size.');
    }
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
    }

    return result;
}

module.exports = chunk;