import { isPangram } from "../../src/warmup/isPangram";

describe("isPangram.js", () => {
    const tests = [
        {
            sentence: "This is not a pangram",
            expected: false,
        },
        {
            sentence: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
            expected: true,
        },
    ];

    tests.forEach((test, idx) => {
        it(`testCase: ${idx}`, () => {
            expect(isPangram(test.sentence)).toBe(test.expected);
        });
    });
});
