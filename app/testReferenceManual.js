const { generateReferenceManual } = require('./ReferenceManual');

function testReferenceManualPairs() {
    const manual = generateReferenceManual();
    const lines = manual.split("\n");

    const testCases = [
        { pairNumber: 1, expectedLine: "1\t\tWHITE\t\tBLUE" },
        { pairNumber: 12, expectedLine: "12\t\tRED\t\tBROWN" },
        { pairNumber: 25, expectedLine: "25\t\tVIOLET\t\tSLATE" },
    ];

    testCases.forEach(({ pairNumber, expectedLine }) => {
        const manualLineIndex = pairNumber + 2; 
        const manualLine = lines[manualLineIndex]?.trim();
        console.assert(
            manualLine === expectedLine,
            `Test failed for pair number ${pairNumber}: Expected "${expectedLine}" but got "${manualLine}".`
        );
    });

    console.log("Test passed for reference manual pairs.");
}

function runTests() {
    console.log("Running tests for reference manual...");
    testReferenceManualPairs();
    console.log("All tests for reference manual passed.");
}

runTests();
