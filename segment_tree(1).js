/**
  Segment Tree

  Insigths

  * Input array :  [0,...,n-1]
  * Find the sum of elements from index l to r where 0 <= l <= r <= n-1
  * Change value of a specified element of the array to a new value x.
  * Time complexity = O(Logn)
  * Representation :
    => Leaf nodes = elements of the input array
    => node = sum of leaves under a node
    => For each node at index i {
        left child: 2*i+1,
        right child: 2*i+2
        parent: (i-1)/2
    }
  * Divide current segment into two halves until segment length = 1
  * Once we have built a segtree we cannot change its structure i.e.,
    its structure is static.
    We can update the values of nodes but we cannot change its structure
**/

function d() {
  console.log.apply(console, arguments);
}

function constructSegmentTree(inputArray, segmentTree, low, high, index) {
  if (low === high) {
    segmentTree[index] = inputArray[low];
    return segmentTree[index];
  }

  // Halves
  let mid = Math.floor((high - low) / 2);
  // Offset (to go to the right side of the array)
  mid+=low;
  // Left side (half) + right side (half)
  segmentTree[index] = constructSegmentTree(inputArray, segmentTree, low, mid, (2*index)+1);
  segmentTree[index] += constructSegmentTree(inputArray, segmentTree, mid + 1, high, (2*index)+ 2);

  return segmentTree[index];
}

function getSum(segmentTree, rangeLow, rangeHigh, low, high, index) {
  let sum = 0;

  // If segment of this node is a part of given range, then return
  // the sum of the segment
  if (rangeLow <= low && rangeHigh >= high) return segmentTree[index];

  // Outside of given range
  if (high < rangeLow || low > rangeHigh) return 0;

  // If a part of this segment overlaps with the given range
  let mid = Math.floor((high - low) / 2);
  mid+=low;
  return getSum(segmentTree, rangeLow, rangeHigh, low, mid, (2*index)+1) +
         getSum(segmentTree, rangeLow, rangeHigh, mid+1, high, (2*index)+2);

  return sum;
}

const inputArray = [0, 1, 2, 3, 4];
// Main
let segmentTree = [];

constructSegmentTree(inputArray, segmentTree, 0, inputArray.length - 1, 0);
d(segmentTree);
d(getSum(segmentTree, 0, inputArray.length - 1, 0, inputArray.length - 1, 0));
d(getSum(segmentTree, 0, 3, 0, inputArray.length - 1, 0));
