
def mergeSort(arr):

    if len(arr) < 2:
        return arr

    middle = int(len(arr) / 2)
    left = arr[:middle]
    right = arr[middle:]

    sortedLeft = mergeSort(left)
    sortedRight = mergeSort(right)

    return stitch(sortedLeft, sortedRight)


def stitch(arr1, arr2):

    sorted = []

    while len(arr1) and len(arr2):

        if arr1[0] < arr2[0]:
            sorted.append(arr1.pop(0))
        else:
            sorted.append(arr2.pop(0))

    return sorted + arr1 + arr2


sample = [4, 3, 77, 4, 5, 90, 43]
result = mergeSort(sample)
assert result == [3, 4, 4, 5, 43, 77, 90], "The array was sorted incorrectly"
print("Unsorted:", sample)
print("Sorted:", result)
