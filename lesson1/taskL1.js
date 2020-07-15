//task2
let lastName = 'Svyata';
console.log(lastName);

// task 3
let data1 = 21;
let data2 = 12;
console.log('The value of data1 is ' + data1);
console.log('The value of data2 is ' + data2);

let additionalData3 = data1;
data1 = data2;
data2 = additionalData3;

console.log('New value of data1 is ' + data1);
console.log('New value of data2 is ' + data2);

//task 4

let student = {
  login: "iryna",
  age: 25,
  hasAccess: true,
  certificates: null,
  // finalResult:   how to add undefined property?

};
console.log(student);
console.log('Undefined property with undefined value, because finalResult is not defined in the object = ' + student.finalResult);


//task 5

let isAdult = confirm('Could you please verify that you are of legal age to visit our webpage?');
console.log(isAdult);


//task6

let name = 'Iryna';
let surname = 'Svyata';
let educGroup = 'SoftServe 22';
let yearOfBirth = 1994;
let isMarried = false;

console.log(typeof yearOfBirth);
console.log(typeof isMarried);
console.log(typeof educGroup);
console.log(typeof name);
console.log(typeof surname);


let emailAddress;
let examResult = null;
console.log(typeof emailAddress);
console.log(typeof examResult);


//task 7
let userLogin = prompt('Please input your login details');
let userEmail = prompt(userLogin + ', please input your email');
let userPassword = prompt(userLogin + ', please put your password');
let userGreet = alert('Dear ' + userLogin + ', your email is '+ userEmail + ', your password is ' + userPassword);


//task 8
let sec = 60;
let minute = 60;
let hour = 60;
let day = 24;
let year = 365;

let secPerHour = sec * minute;
let secPerDay = secPerHour * day;
let secPerYear = secPerDay * year;

console.log(secPerHour);
console.log(secPerDay);
console.log(secPerYear);
