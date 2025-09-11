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
