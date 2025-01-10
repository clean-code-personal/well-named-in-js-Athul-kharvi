const { ColorCoder, MajorColorNames, MinorColorNames } = require('./ColorCoder');
const { getColorFromPairNumber } = require('./ColorMapping');

function generateReferenceManual() {
    const totalPairs = MajorColorNames.length * MinorColorNames.length;
    let manual = "Color Code Reference Manual:\n";

    for (let i = 1; i <= totalPairs; i++) {
        const pair = getColorFromPairNumber(i);
        manual += `Pair ${i}: ${pair.toString()}\n`;
    }

    return manual;
}

module.exports = { generateReferenceManual };
