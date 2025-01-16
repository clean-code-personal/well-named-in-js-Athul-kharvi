const { ColorCoder } = require('./ColorCoder');
const { getColorFromPairNumber } = require('./ColorMapping');

function formatManualLine(pairNumber, pair) {
    return `${pairNumber}\t\t${pair.majorColor}\t\t${pair.minorColor}\n`;
}

function generateReferenceManual() {
    const totalPairs = ColorCoder.MajorColorNames.length * ColorCoder.MinorColorNames.length;
    let manual = "Color Code Reference Manual:\n";
    manual += "Pair Number\tMajor Color\tMinor Color\n";
    manual += "-------------------------------------\n";

    for (let i = 1; i <= totalPairs; i++) {
        const pair = getColorFromPairNumber(i);
        manual += formatManualLine(i, pair);
    }

    return manual;
}

function printReferenceManual() {
    const manual = generateReferenceManual();
    console.log(manual);
}

module.exports = { generateReferenceManual, printReferenceManual };
