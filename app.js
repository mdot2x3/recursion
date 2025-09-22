// Fibonacci Sequence using iteration
function fibs(fibNum) {
  const fibArray = [0, 1];
  let i = 0;
  while (i < fibNum - 2) {
    let value = fibArray[i] + fibArray[i + 1];
    fibArray.push(value);
    i++;
  }
  return fibArray;
}

console.log(fibs(8));

// Fibonacci Sequence using recursion
function fibsRec(fibNum) {
  console.log("This was printed recursively");
  if (fibNum === 1) return [0];
  if (fibNum === 2) return [0, 1];
  else {
    const prior = fibsRec(fibNum - 1);
    const next = prior[prior.length - 1] + prior[prior.length - 2];
    return [...prior, next]; //alternatively prior.concat(next);
  }
}

console.log(fibsRec(8));

//----------------------------------------------

// merge sort
function mergeSort(array) {
  if (array.length <= 1) return array;
  else {
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    // run recursion on arrays until they reduce to 1 element
    let recLeft = mergeSort(left);
    let recRight = mergeSort(right);
    // after both reach their base case, values are inserted into merge()
    return merge(recLeft, recRight);
  }

  function merge(left, right) {
    let mergedArray = [];
    // while both arrays have elements
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        mergedArray.push(left.shift());
      } else {
        mergedArray.push(right.shift());
      }
    }
    // when one array is empty, concatenate the remainder of the other array
    return mergedArray.concat(left, right);
  }
}

console.log(mergeSort([105, 79, 100, 110]));

//----------------------------------------------

// alternate merge sort (sorts in-place, memory efficient)
var mergeSort = function (array, p, r) {
  if (p >= r) {
    return;
  }

  var q = Math.floor((p + r) / 2);
  mergeSort(array, p, q);
  mergeSort(array, q + 1, r);
  merge(array, p, q, r);
};

// takes in an array that has two sorted subarrays,
// from [p..q] and [q+1..r], and merges the array
var merge = function (array, p, q, r) {
  var lowHalf = [];
  var highHalf = [];

  var k = p;
  var i;
  var j;
  for (i = 0; k <= q; i++, k++) {
    lowHalf[i] = array[k];
  }
  for (j = 0; k <= r; j++, k++) {
    highHalf[j] = array[k];
  }

  k = p;
  i = 0;
  j = 0;

  // repeatedly compare the lowest untaken element in
  // lowHalf with the lowest untaken element in highHalf
  // and copy the lower of the two back into array
  while (i < lowHalf.length && j < highHalf.length) {
    if (lowHalf[i] <= highHalf[j]) {
      array[k] = lowHalf[i];
      i++;
    } else {
      array[k] = highHalf[j];
      j++;
    }
    k++;
  }
  // once one of lowHalf and highHalf has been fully copied
  // back into array, copy the remaining elements from the
  // other temporary array back into the array
  while (i < lowHalf.length) {
    array[k] = lowHalf[i];
    i++;
    k++;
  }

  while (j < highHalf.length) {
    array[k] = highHalf[j];
    j++;
    k++;
  }
};

var array = [14, 7, 3, 12, 9, 11, 6, 2];
mergeSort(array, 0, array.length - 1);
console.log("Array after sorting: " + array);
