// task1

let elements = [2, 3, 4, 5];
let multiplication = 1;
for (let i = 0; i < elements.length; i++) {
  multiplication = multiplication * elements[i];
}
console.log(multiplication);

//while
let elements = [2, 3, 4, 5];
let multiplication = 1;
let i = 0;
while (i < elements.length) {
  multiplication = multiplication * elements[i];
  i++;
}
console.log(multiplication);

//task 2

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + ' is even');
  } else {
    console.log(i + ' is odd');
  }
}

//task 3

function randArray(k) {
  let randomNum = [];
  for (let i = 0; i < k; i++) {
    let num = Math.random();
    num = Math.floor(num * 500) + 1;
    randomNum.push(num);
  }
  return randomNum;
}
randArray(5);

//task4

function power(x, n) {
  let result1 = 1;
  if (n < 0) {
    n = n * -1;
  }
  for (let i = 0; i < n; i++) {
    result1 = result1 * x;
  }

  return result1;
}

function raiseToDegree(a, b) {
  a = parseInt(prompt('Please insert the base number a = '));
  b = parseInt(prompt('Please insert the power b = '));
  let result;
  if (b === 0 && a !== 0) {
    result = 1;
  } else if (b < 0) {
    result = 1 / power(a, b);
    result = parseFloat(result.toFixed(5));
  } else if (b === 1) {
    result = a;
  } else if (b > 0) {
    result = power(a, b);
  }
  return result;
}

raiseToDegree();

//task 5

function findMin() {
  let minEl = arguments[0];
  let minIndex = 0;
  let k = arguments.length;

  for (let i = 0; i < k; i++) {
    if (arguments[i + 1] < minEl) {
      minEl = arguments[i + 1];
      minIndex = i + 1;
    }
  }
  return minEl;
}
findMin(4, 2, 1, 0, -2, 6);

//task 6

function findUnique(a) {
  let aUnique = true;

  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] == a[j]) {
        aUnique = false;
      }
    }
  }

  return aUnique;
}

findUnique([1, 2, 3, 5, 3]);

//task 7

function lastElem(arr, x) {
  let len = arr.length;
  let newArr = [];
  let addEl;

  if (x === undefined) {
    return arr[arr.length - 1];
  } else if (x > len) {
    return arr;
  } else {
    for (let i = len - x; i < len; i++) {
      addEl = arr[i];
      newArr.push(addEl);
    }
  }

  return newArr;
}

lastElem([3, 4, 10, -5]);
