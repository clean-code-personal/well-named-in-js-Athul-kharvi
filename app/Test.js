const { ColorCoder } = require('./ColorCoder');
const { getColorFromPairNumber, getPairNumberFromColor } = require('./ColorMapping');
const { generateReferenceManual } = require('./ReferenceManual');
const { runTests } = require('./testReferenceManual'); 


function test() {
    let pairNumber = 4;
    let testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In] Pair Number: ${pairNumber}, [Out] Colors: ${testPair1}`);
    console.assert(testPair1.majorColor === "WHITE");
    console.assert(testPair1.minorColor === "BROWN");

    pairNumber = 5;
    testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In] Pair Number: ${pairNumber}, [Out] Colors: ${testPair1}`);
    console.assert(testPair1.majorColor === "WHITE");
    console.assert(testPair1.minorColor === "SLATE");

    pairNumber = 23;
    testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In] Pair Number: ${pairNumber}, [Out] Colors: ${testPair1}`);
    console.assert(testPair1.majorColor === "RED");
    console.assert(testPair1.minorColor === "GREEN");

    let testPair2 = new ColorCoder();
    testPair2.majorColor = "YELLOW";
    testPair2.minorColor = "GREEN";
    pairNumber = getPairNumberFromColor(testPair2);
    console.log(`[In] Colors: ${testPair2}, [Out] Pair Number: ${pairNumber}`);
    console.assert(pairNumber === 18);

    testPair2 = new ColorCoder();
    testPair2.majorColor = "RED";
    testPair2.minorColor = "BLUE";
    pairNumber = getPairNumberFromColor(testPair2);
    console.log(`[In] Colors: ${testPair2}, [Out] Pair Number: ${pairNumber}`);
    console.assert(pairNumber === 6);

    console.log("\nGenerating Reference Manual:\n");
    const manual = generateReferenceManual();
    console.log(manual);
}

test();
runTests();

