
def quickSort(arr):

    if len(arr) <= 1:
        return arr

    pivotIndex = len(arr) - 1
    lesser = []
    greater = []

    for index in range(len(arr)):
        if index == pivotIndex:
            continue

        if arr[index] < arr[pivotIndex]:
            lesser.append(arr[index])
        else:
            greater.append(arr[index])

    return quickSort(lesser) + [arr[pivotIndex]] + quickSort(greater)


sample = [5, 2, 9, 3, 8, 1, 66]
sorted = quickSort(sample)
assert sorted == [1, 2, 3, 5, 8, 9, 66]
print("Unsorted:", sample)
print("Sorted:", sorted)
