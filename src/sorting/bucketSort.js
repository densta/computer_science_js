/** Bucket sort O(n)
 * @param {Int[]} arr
 * @param {Int} maxValue
 * @param {Int} minValue
 */
export default function bucketSort(arr, maxValue = null, minValue = null) {
  const bucket = [];
  const result = [];
  const arrLength = arr.length;
  let offset = null;

  if (maxValue === null || minValue === null) {
    for (let i = 0; i < arrLength; i++) {
      if (maxValue === null || arr[i] > maxValue) {
        maxValue = arr[i];
      }
      if (minValue === null || arr[i] < minValue) {
        minValue = arr[i];
      }
    }
  }
  offset = 0 - minValue;
  if (offset + maxValue >= 2 ** 32 - 1) {
    throw new Error('Bucket Sort is unable to handle this array. Numbers in array are out of indexes range');
  }
  for (let i = 0; i < arrLength; i++) {
    if (bucket[arr[i] + offset] === undefined) {
      bucket[arr[i] + offset] = 1;
    } else {
      bucket[arr[i] + offset] += 1;
    }
  }
  for (let i = 0, l = bucket.length; i < l; i++) {
    let c = bucket[i] || 0;
    while(c > 0) {
      result.push(i - offset);;
      c -= 1;
    }
  }
  return result;
}
