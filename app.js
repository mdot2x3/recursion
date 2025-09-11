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

// console.log(fibs(8));

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

// console.log(fibsRec(8));
