const MajorColorNames = ["WHITE", "RED", "BLACK", "YELLOW", "VIOLET"];
const MinorColorNames = ["BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"];

function ColorCoder() {
    this.majorColor = null;
    this.minorColor = null;
}

ColorCoder.prototype.toString = function () {
    return `MajorColor:${this.majorColor}, MinorColor:${this.minorColor}`;
};

module.exports = { ColorCoder, MajorColorNames, MinorColorNames };
