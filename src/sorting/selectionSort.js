/**
 * Selection sort O(n ** 2)
 * @param {Int[]} arr
 */
export default function selectionSort(arr) {
  const arrLen = arr.length;
  const sorted = [...arr];
  let tmp;
  for (let i = 0; i < arrLen - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arrLen; j++) {
      if (sorted[j] < sorted[minIndex]) {
        minIndex = j;
      }
    }
    tmp = sorted[i];
    sorted[i] = sorted[minIndex];
    sorted[minIndex] = tmp;
  }
  return sorted;
}
