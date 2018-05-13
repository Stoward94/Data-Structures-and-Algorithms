/**
 * @param {Number[]} arr unsorted array
 * @return {Number[]} Sorted array
 */
function quickSort(arr) {

    // base case
    if (arr.length <= 1) {
        return arr;
    }

    // Last element in the array
    const pivotIndex = arr.length - 1;
    const lesser = [];
    const greater = [];

    for (let i = 0, l = arr.length; i < l; i++) {

        if (i === pivotIndex) {
            continue;
        }

        if (arr[i] < arr[pivotIndex]) {
            lesser.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    const sortedLesser = quickSort(lesser);
    const sortedGreater = quickSort(greater);
    return [].concat(sortedLesser, arr[pivotIndex], sortedGreater);
}

const sample = [9, 2, 44, 12, 6, 99, 134];
const sorted = quickSort(sample);

console.log('Unsorted: ' + sample);
console.log('Sorted: ' + sorted);
