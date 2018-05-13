# Quick Sort

Quick sort is a divide and conquer algorithm similar to merge sort. It works by selecting a pivot index, typically the last element in the array, and comparing every other value to that pivot value. All of the values less than are placed into and array and all of the values greater than are placed into another array.

This happens recursively, until we have reach length <= 1, upon which we begin reconstucting the array with the less than values on the left, the pivot in the middle and the greater than values on the right.

## Steps

**Step 1:** Select the pivot index (typically length -1)

**Step 2:** Seperate the values "less than" and "greater than" the pivot into a new arrays

**Step 3:** Recurse on both the "less than" and "greater than" arrays

**Step 4:** Return the concatenated array of "less than", pivot and "greater than" arrays


## Pseudo Code

```
function quickSort( array )

    if length of array <= 1, return array

    pivot = length of array - 1

    Array lesser = []
    Array greater = []

    for each item in array

        if item is pivot, ignore

        if item < pivot value
            add item to lesser array
        else
            add item to greater array

    lesserSorted = quickSort(lesser)
    greaterSorted = quickSort(greater)

    return new Array(lesserSorted, pivot, greaterSorted)
```