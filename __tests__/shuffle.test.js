const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  const { shuffleArray } = require('./utils');

  describe("shuffle should...", () => {
    let testArr;
  
    beforeEach(() => {
      testArr = ["a", "b", "c", "d"];
    });
  
    describe('shuffleArray should', () => {
      test('should return length of argument', () => {
        let results = shuffleArray(testArr);
        expect(testArr.length).toEqual(results.length);
      });
  
      test('should return same as passed array', () => {
        expect(shuffleArray(testArr)).toEqual(expect.arrayContaining(testArr));
      });
    });
  });
});

