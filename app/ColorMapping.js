const { ColorCoder, MajorColorNames, MinorColorNames } = require('./ColorCoder');

function getColorFromPairNumber(pairNumber) {
    const minorSize = MajorColorNames.length;
    const majorSize = MinorColorNames.length;

    if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
        throw `Argument PairNumber:${pairNumber} is outside the allowed range`;
    }

    const zeroBasedPairNumber = pairNumber - 1;
    const majorIndex = parseInt(zeroBasedPairNumber / minorSize);
    const minorIndex = parseInt(zeroBasedPairNumber % minorSize);

    const pair = new ColorCoder();
    pair.majorColor = MajorColorNames[majorIndex];
    pair.minorColor = MinorColorNames[minorIndex];
    return pair;
}

function getPairNumberFromColor(pair) {
    const majorIndex = MajorColorNames.indexOf(pair.majorColor);
    const minorIndex = MinorColorNames.indexOf(pair.minorColor);

    if (majorIndex === -1 || minorIndex === -1) {
        throw `Unknown Colors: ${pair.toString()}`;
    }

    return (majorIndex * MinorColorNames.length) + (minorIndex + 1);
}

module.exports = { getColorFromPairNumber, getPairNumberFromColor };
