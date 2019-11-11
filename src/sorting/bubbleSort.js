/**
 * Bubble Sort O(n ** 2)
 * @param {Int[]} arr
 */
export default function bubbleSort(arr) {
  const sorted = [...arr];
  const arrLength = arr.length;
  let tmp;
  for (let i = arrLength - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
        if (sorted[i] < sorted[j]) {
          tmp = sorted[i];
          sorted[i] = sorted[j];
          sorted[j] = tmp;
        }
    }
  }
  return sorted;
}
