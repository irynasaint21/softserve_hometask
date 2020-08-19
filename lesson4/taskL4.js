//task1

function testThrow(exception) {
  try {
    throw exception;
  } catch (error) {
    console.log('Caught: ' + error);
  }
}

testThrow(5);

//task2

function calcRectangleArea(width, height) {
  let rectArea = width * height;
  if (isNaN(width) || isNaN(height)) {
    throw 'Parameter is not a number!';
  }
  return rectArea;
}

try {
  calcRectangleArea();
  console.log(rectAngle);
} catch (exception) {
  console.log(exception.message);
}

calcRectangleArea(2, 4);

//task3

function checkAge() {
  let userAge = prompt('Please enter your age: ');
  if (userAge.trim() === '') {
    alert('You did not enter any data');
    throw new Error('User provided empty string');
  } else if (userAge < 14) {
    alert('You are underaged, you cannot visit webpage');
    throw new Error('User has less than 14 years old');
  } else if (isNaN(userAge)) {
    alert('Please enter number');
    throw new Error('User provided not valid character');
  } else {
    alert('Congratulation! Enjoy our webpage');
    return userAge;
  }
}c
try {
  let userInputOfAge = checkAge();
  console.log(userInputOfAge);
} catch (error) {
  console.log('Your message is ' + error.message);
  console.log(error.name);
  console.log(error.stack);
}

//task4 - classes - will be done later

class MonthException {
  constructor(message) {
    this.message = message;
    this.name = 'MonthException';
  }
}

function showMonthName(month) {
  month = month - 1; 
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'];
  if (months[month]) {
    return months[month];
  } else {
    throw new MonthException('Incorrect month number');
  }
}

try { 
  showMonthName(19); 
}
catch (e) {
  console.log(e.message +' ' + e.name) 
}


//task5

function showUser(id) {
  let newObj = {
    id: id,
  };
  if (id < 0) {
    throw new Error('Id must not be negative ' + id);
  }
  return newObj;
}

function showUsers(ids) {
  let idsLength = ids.length;
  let result;
  let newArray = [];
  for (let i = 0; i < idsLength; i++) {
    try {
      result = showUser(ids[i]);
      newArray.push(result);
    } catch (error) {
      console.log(error.message);
      console.log('Catch block');
    }
  }

  return newArray;
}

showUsers([7, 12, 44, 22, -18, 9, 10, -16]);
