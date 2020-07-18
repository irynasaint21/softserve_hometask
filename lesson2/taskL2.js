// task 1

let x = 1;
let y = 2;

let res1 = String(x) + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + String(y); // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x + y); // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseFloat(isNaN(x)); // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4);

// task2
let input = prompt('Please input a number');
if (input > 0 && input % 2 == 0 && input % 7 == 0) {
  console.log(input);
} else {
  console.log(' Your number has not passed our criteria');
}

//task3

let newArr = [];
newArr[0] = 21;
newArr[1] = 'birthday';
newArr[2] = true;
newArr[3] = null;

console.log(newArr.length);
console.log(newArr); // to check the elements
newArr[4] = parseInt(prompt('Please input number'));
console.log(newArr[4]);
console.log(newArr); // to check if the element from user input was added to array

newArr.shift();
console.log(newArr);

//task4

let cities = ['Rome', 'Lviv', 'Warsaw'];
console.log(cities.join('*')); // The join() method returns the array as a string. array.join(separator), if not indicated, coma will be used as default

//task5

let isAdult = prompt('Будь ласка, введіть свій вік');
if (isAdult >= 18) {
  alert('Ви досягли повнолітнього віку');
} else {
  alert('Ви ще занадто молоді');
}
console.log(isAdult);

//task 6
// a) визначити площу трикутника за трьома сторонами - теорема ГеронаA = \sqrt{s(s-a)(s-b)(s-c)},

let a = parseInt(prompt('Введіть додатнє значення для сторони трикутника a')); // ParseInt - to return a number instead of string( prompt result)
let b = parseInt(prompt('Введіть додатнє значення для сторони трикутника b'));
let c = parseInt(prompt('Введіть додатнє значення для сторони трикутника c'));
let rightTriangle = false;

if (a > 0 && b > 0 && c > 0) {
  let semiPerimeter = (a + b + c) / 2;
  let area =
    ((semiPerimeter - a) *
      (semiPerimeter - b) *
      (semiPerimeter - c) *
      semiPerimeter) **
    (1 / 2);
  let areaResult = parseFloat(area.toFixed(3)); /* toFixed method rounds number to indicated decimal 
                                                and returns a string as result, parsefloat - returns a number instead */
  console.log('Площа трикутиника = ' + areaResult);

  //part b nested if-statement - перевірити чи трикутник є прямокутний
  if ((a ** 2 + b ** 2) ** (1 / 2) === c) {
    rightTriangle = true;
    console.log('Трикутник прямокутний');
  } else {
    console.log('Трикутник непрямокутний');
  }
} else {
  console.log('Incorrect data, not positive number');
}
//part b, чи трикутник прямокутний, Трикутник прямокутний, якшо квадрат катетів = квадрату гіпотенузи


// task 7


let date = new Date();
let currentHour = date.getHours();
let currentTime = currentHour + ":" + date.getMinutes() + ":" + date.getSeconds();

if(currentHour >= 23 && currentHour < 5){
  console.log('Доброї ночі, зараз у вас ' + currentTime);
} else if (currentHour >= 5 && currentHour < 11){
  console.log('Добрий ранок, зараз у вас ' + currentTime);
} else if (currentHour >= 11 && currentHour < 17){
  console.log('Добрий день, зараз у вас' + currentTime);
} else {
  console.log ('Добрий вечір, зараз у вас ' + currentTime);
}

