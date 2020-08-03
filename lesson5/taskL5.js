//task1

function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}

let mentor = {
  course: 'JS fundamental',
  duration: 3,
  direction: 'web-development',
  students: 26
  
};
console.log(`There are ${propsCount(mentor)} properties in the object`);

//task2

let obj = {
  firstName: 'Iryna',
  lastName: 'Svyata',
  age: 25,
  location: 'Warsaw',
  phoneNumber: '555 555 5555',
};

function showProps(targetObj) {
  let valueRes = [];
  let keysValue = Object.keys(targetObj);
  for (const key in targetObj) {
    valueRes.push(targetObj[key]);
  }
  console.log(`Keys of the object: ${keysValue}`);
  console.log(`Values of the object: ${valueRes}`);
}

showProps(obj);

//task3

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullname() {
    return `Hello there ${this.name} ${this.surname}`;
  }
}

const person1 = new Person('Iryna', 'Svyata');
console.log(person1.showFullname());

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);

    this.year = year;
  }
  showFullname(middleName) {
    if (middleName) {
      return `Hello there ${this.name} ${this.surname} ${middleName}`;
    } else {
      return `Hello there ${this.name} ${this.surname} `;
    }
  }

  showCourse() {
    const todayYear = new Date().getFullYear();
    const currentCourse = todayYear - this.year;
    // const courseYear = new Date(diff);
    return `Current course is ${currentCourse}`;
  }
}

const student1 = new Student('Olena', 'Witenko', 2019);
console.log(student1.showFullname('Petrivna'));
console.log(student1.showCourse());

//task4

class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }
  #experience = 1.2;

  showSalary() {
    let salary = this.dayRate * this.workingDays;
    return salary;
  }
  ShowSalaryWithExperience() {
    let salaryWithExp = this.dayRate * this.workingDays * this.#experience;
    return salaryWithExp;
  }

  set experienceValue(value) {
    if (value <= 0) throw new Error('Experience cannot be negative');
    this.#experience = value;
  }
  get experienceValue() {
    return this.#experience;
  }
}

//create first object
const worker1 = new Worker('John Jonson', 100, 21);
console.log(worker1.fullName)
console.log(worker1.showSalary());
worker1.experienceValue = 2;
console.log('John experience is: ' + worker1.experienceValue);
worker1.salaryWithExp = worker1.ShowSalaryWithExperience();
console.log(worker1.ShowSalaryWithExperience());


//create second object
const worker2 = new Worker('Kate Middleton', 120, 22);
console.log(worker2.fullName)
console.log(worker2.showSalary());
worker2.experienceValue = 10;
console.log('Kate experience is: ' + worker2.experienceValue);
worker2.salaryWithExp = worker2.ShowSalaryWithExperience();
console.log(worker2.ShowSalaryWithExperience());

//create third object
const worker3 = new Worker('Adam Levin', 85, 20);
console.log(worker3.fullName)
console.log(worker3.showSalary());
worker3.experienceValue = 1.9;
console.log('Adam experience is: ' + worker3.experienceValue);
worker3.salaryWithExp = worker3.ShowSalaryWithExperience();
console.log(worker3.salaryWithExp);

//Sorting array of workers by salary according to experience
let workers = [];

function compareWorkers(a, b) {
  if (a.salaryWithExp > b.salaryWithExp) return 1;
  if (a.salaryWithExp < b.salaryWithExp) return -1;
  return 0;
}

workers.push(worker1, worker2, worker3);

workers.sort(compareWorkers);

function sortedArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i].fullName} ${arr[i].salaryWithExp}`);
  }
}
sortedArray(workers);

const worker4 = new Worker('Iryna Svyata', 125, 19);
console.log(worker4.fullName);
worker4.showSalary();
worker4.experienceValue = 6;
worker4.salaryWithExp = worker4.ShowSalaryWithExperience();
console.log('Iryna experience is: ' + worker4.experienceValue);
console.log(worker4.salaryWithExp);
workers.push(worker4);

workers.sort(compareWorkers);
sortedArray(workers);

//task5

class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(a, b, c) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea() {
    let triangleArea;
    if (this.a < 0 && this.b < 0 && this.c < 0) {
      throw new Error('Triangle side cannot be negative');
    } else {
      let semiPerimeter = (this.a + this.b + this.c) / 2;
      triangleArea =
        ((semiPerimeter - this.a) *
          (semiPerimeter - this.b) *
          (semiPerimeter - this.c) *
          semiPerimeter) **
        (1 / 2);
    }
    return triangleArea;
  }
}

class Square extends GeometricFigure {
  constructor(squareSide) {
    super();
    this.squareSide = squareSide;
  }
  getArea() {
    return this.squareSide ** 2;
  }
}

class Circle extends GeometricFigure {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const figures = [new Triangle(4, 5, 6), new Square(7), new Circle(5)];
console.log(figures);

function handleFigures(arr) {
  let area;
  let totalArea = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] instanceof GeometricFigure;
    area = arr[i].getArea();
    console.log(`GeometricFigure: ${arr[i]} ${area}`);
    totalArea += area;
  }

  console.log(`Total area ${totalArea}`);
}

handleFigures(figures);


