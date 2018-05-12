# Merge Sort

Merge sort is a sorting technique based on divide and conquer technique. With worst-case time complexity being Ο(n log n).

Merge sort first divides the array into equal halves and then combines them in a sorted manner.

---

## Step #1

Recursively divide the array into equal halves, until you reach an array with length 1, at which point we stop recursing.

## Step #2

Combine, the left and right halves of the array, sorting the values as we go, returning the combined sorted array back up the stack.


---

## Pseudo Code

```
function mergesort( array )
   if length of array <= 1; return array

   leftSide a[0]...a[length/2]
   rightSide a[legnth/2+1]... a[n]

   l1 = mergesort( l1 )
   l2 = mergesort( l2 )

   return merge( l1, l2 )

function merge( array1, array2 )

   sortedArray new Array

   while ( a and b have elements )
      if ( a[0] < b[0] )
         add a[0] to the end of sortedArray
         remove a[0] from a
      else
         add b[0] to the end of sortedArray
         remove b[0] from b
      end if
   end while

   while ( a has elements )
      add a[0] to the end of sortedArray
      remove a[0] from a
   end while

   while ( b has elements )
      add b[0] to the end of sortedArray
      remove b[0] from b
   end while

   return sortedArray
```