export default function insertionSort(arr) {
  const arrLen = arr.length;
  const sorted = arrLen > 0 ? [arr[0]] : [];
  for (let i = 1; i < arrLen; i++) {
    let insertionIndes = i;
    while (insertionIndes > 0 && sorted[insertionIndes - 1] > arr[i]) {
      sorted[insertionIndes] = sorted[insertionIndes - 1];
      insertionIndes--;
    }
    sorted[insertionIndes] = arr[i];
  }
  return sorted;
}
