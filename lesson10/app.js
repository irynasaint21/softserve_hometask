/*Є такий код:
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [/* Ваш код ] = arr;*/
/*console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]
Допишіть код використовуючи деструктурування, щоб в 
консолі браузера з'явилися рядки, які написані в коментарях.

*/
// TASK1
let arr = ['Tom', 'Sam', 'Ray', 'Bob'];
const [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

//TASK2

let data = {
  names: ['Sam', 'Tom', 'Ray', 'Bob'],
  ages: [20, 24, 22, 26],
};

let {
  names: [name1, name2, name3, name4],
  ages: [age1, age2, age3, age4],
} = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

//TASK3
function mul(...arguments) {
  let result = 0;

  for (let arg of arguments) {
    if (arg === Number.parseFloat(arg)) {
      parseFloat(arg);
      result += arg;
    }
  }
  return result;
}
console.log(mul(1, 'str', 2, 3, true));
console.log(mul(null, 'str', false, true));

//TASK5


function mapBuilder(keysArray, valuesArray) {
  let map = new Map();

  for (let i = 0; i < keysArray.length; i++) {
    let key = keysArray[i];
    let value = valuesArray[i];
    map.set(key, value);
  }

  return map;
}
let keys = [1, 2, 7, 4];
let values = ['div', 'span', 'b', 'k'];
let map1 = mapBuilder(keys, values);
console.log(map1);


//task4

/*Змініть код використовуючи стрілочні функції, щоб в коді не використовувалися методи bind().*/

let server = {
  data: 0,
  convertToString: function (callback) {
      callback(() => this.data + "")
  }
};
let client = {
  server: server,
  result: "",
  calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
  },
  notification: function () {
      return (callback => {
          this.result = callback()
      })
  }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"