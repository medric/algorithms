/**
  Binary Indexed Tree

  Insights

  * Input array :  [0,...,n]
    -> Find the sum of the first i elements
    -> Change value of a specified  element of the array arr[i] = x  / i € [0, n-1]
  * Quite good Space complexity + Time complexity (O(logn))
  * Each node of Binary Indexed Tree stores sum of some elements of the given array
    => partial sum tree
  * Size of BI tree == n == size of input array
  * x & (-x) gives the last set bit in a number x => -x <=> 2's complement of x
  * Each integer can be represented as sum of powers of 2

  * Steps:
    1. init BITree (size = 1+n) with 0's
    2. call update() operation for each element of given array
**/

function d() {
  console.log.apply(console, arguments);
}

function initializeBITree(inputArray = [], BITree = []) {
  let i = -1;
  while(i++ < inputArray.length) {d(i); BITree[i] = 0};
  i = -1;
  while(i++ < inputArray.length) update(BITree, i, inputArray[i]);
}

function update(BITree, index, val) {
  index = index + 1;
  while(index < BITree.length) {
    BITree[index] += val;
    index += (index & (-index));
  }
}

function getSum(index = 0) {
  let sum = 0;

  index = index + 1;
  while(index > 0) {
    sum += BITree[index];
    index -= (index & (-index));
  }

  return sum;
}

// Main
const inputArray = [0, 1, 2, 3, 4, 5, 6]; BITree = [];

initializeBITree(inputArray, BITree);
d(BITree);
d(getSum(6));
