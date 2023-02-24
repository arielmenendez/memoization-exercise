
function recursiveFibo(n: number): number {
  console.log('calculando fibo', n);
  if (n <= 1) {
    return n;
  } else {
    return recursiveFibo(n -1) + recursiveFibo(n - 2);
  }
}

// console.log(recursiveFibo(50));

let memo: number[] = [];
function memoizedFibo(n: number, memo: number[]): number {
  // console.log(memo);
  if (memo[n] !== undefined) return memo[n];
  if (n <= 1) {
    memo[n] = n;
    return n;
  } else {
    let result = memoizedFibo(n - 1, memo) + memoizedFibo(n - 2, memo);
    memo[n] = result;
    return result;
  }
}

// console.log(memoizedFibo(10000, memo));

function linearFibo(n: number): number {
  let memo = [0, 1];
  for(let actual = 2; actual <= n; ++actual) {
    memo[actual] = memo[actual - 2] + memo[actual - 1];
  }
  return memo[n];
}

console.log(linearFibo(10000));