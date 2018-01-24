const numbers = require('sorry-constants').ascii.numbers
const getAscii = require('node-get-ascii')

const hashANumber = (input, salt, size) => {
    const n = Math.abs(Number(input))
    const hashInput = getAscii(n).padEnd(size || numbers.length, salt || numbers)
    const out = hashInput.split('').reduce((hash, curr, i) => hash + curr.charCodeAt(0) * (i + 1), 0)
    return Number(out)
}

module.exports = hashANumber
