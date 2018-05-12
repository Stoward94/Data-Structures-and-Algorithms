/*
 * Divide and conquer algorithm
 * This type of algorithm is recursive
 * Commonly used, particularly in JS Array.prototype.sort
 *
 * The basic gist of merge sort is that you're going to take your big list,
 * and first divide down in two half size lists and recursively call merge
 * sort on those smaller list, which in turn will do the same. The base case
 * is when you have a list of one, at which point you will return that sorted
 * list of one. On the way up the recursive calls, you will merge those sorted
 * lists together that walks through both lists simultaneously and inserts the
 * smaller value first, effectively creating a bigger sorted list.
 */

/**
 * @param {Number[]} nums unsorted number array
 * @return {Number[]} Sorted number array
 */
function mergeSort(nums) {

    if (nums.length < 2) {
        return nums;
    }

    const length = nums.length;
    const middle = Math.floor(length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return stitch(sortedLeft, sortedRight);
}

/**
 * @description Stitches two unsorted arrays into a single sorted array
 * @param {Number[]} arr1
 * @param {Number[]} arr2
 * @return {Number[]} Stitched sorted array
 */
function stitch(arr1, arr2) {

    const sorted = [];

    while (arr1.length !== 0 && arr2.length !== 0) {
        if (arr1[0] < arr2[0]) {
            sorted.push(arr1.shift());
        } else {
            sorted.push(arr2.shift());
        }
    }

    sorted.push(...arr1, ...arr2);
    return sorted;
};


const sample = [9, 10, 33, 9, 8, 1, 3, 2, 45, 232, 76, 7, 4, 74, 2, 77, 98];
console.log('Unsorted: ' + sample);
console.log('Sorted: ' + mergeSort(sample));
