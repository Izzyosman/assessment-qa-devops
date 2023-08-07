const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  describe("shuffle should...", () => {
    let testArr;
  
    beforeEach(() => {
      testArr = ["a", "b", "c", "d"];
    });
  
    describe('shuffleArray should', () => {
      test('should return length of argument', () => {
        let results = shuffle(testArr);
        expect(testArr.length).toEqual(results.length);
      });
  
      test('should return same as passed array', () => {
        expect(shuffle(testArr)).toEqual(expect.arrayContaining(testArr));
      });
    });
  });
});

