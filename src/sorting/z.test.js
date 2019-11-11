import bucketSort from './bucketSort';
import bubbleSort from './bubbleSort';
import selectionSort from './selectionSort';
import insertionSort from './insertionSort';

const testCasesAscending = [
  [[], []],
  [[7], [7]],
  [[3, 1, 2], [1, 2, 3]],
  [[-1, 1, -2, 0, -3], [-3, -2, -1, 0 , 1]],
  [[10000000, -10000000, 1], [-10000000, 1, 10000000]],
  [[1, -1, 1], [-1, 1, 1]],
];

for (let numberOfRandomTestCases = 10; numberOfRandomTestCases >= 0; numberOfRandomTestCases--) {
  const lengthOfArray = parseInt(Math.random() * 30000);
  const unsortedArray = [];
  for (let i = 0; i < lengthOfArray; i++) {
    unsortedArray.push(parseInt(Math.random() * 1000000));
  }
  const sortedArray = unsortedArray.concat([]).sort((a, b) => a - b);
  testCasesAscending.push([unsortedArray, sortedArray]);
}

testCasesAscending.sort((a, b) => a[0].length - b[0].length);

describe('bucket sort:', () => {
  testCasesAscending.forEach((testCase, i) => {
    test(`running array No. ${i} with length ${testCase[0].length}`, () => {
      expect(bucketSort(testCase[0])).toEqual(testCase[1]);
    });
  });
  test(`expect to throw error when index limit is reached`, () => {
    expect(() => bucketSort([4294967295, 0])).toThrow();
  });
})

describe('bubble sort:', () => {
  testCasesAscending.forEach((testCase, i) => {
    test(`running array No. ${i} with length ${testCase[0].length}`, () => {
      expect(bubbleSort(testCase[0])).toEqual(testCase[1]);
    });
  });
})

describe('selection sort:', () => {
  testCasesAscending.forEach((testCase, i) => {
    test(`running array No. ${i} with length ${testCase[0].length}`, () => {
      expect(selectionSort(testCase[0])).toEqual(testCase[1]);
    });
  });
})

describe('insertion sort:', () => {
  testCasesAscending.forEach((testCase, i) => {
    test(`running array No. ${i} with length ${testCase[0].length}`, () => {
      expect(insertionSort(testCase[0])).toEqual(testCase[1]);
    });
  });
})

describe('build in Array.prototype.sort:', () => {
  testCasesAscending.forEach((testCase, i) => {
    test(`running array No. ${i} with length ${testCase[0].length}`, () => {
      expect(testCase[0].sort((a, b) => a - b)).toEqual(testCase[1]);
    });
  });
})
