//task1

// const divElem = document.getElementById('test');
// const divElem = document.querySelector('div')
// divElem.textContent = 'Last';
// console.log(divElem);

//task2

// const imgElem = document.querySelector('.image');
// imgElem.removeAttribute('src');
// imgElem.setAttribute('src', 'cat.jpg')
// alert(imgElem.outerHTML)

//task3

// let divElements = document.querySelectorAll("div > p");
// let context;

// for (let i = 0; i < divElements.length; i++) {
//   context = divElements[i].textContent;
//   console.log(`Selector text ${i}: ${context}`)
// }
// console.log(divElements)

//task4

// const list = document.querySelector('ul#list');

// let listItem = list.children;

// alert(list.firstElementChild.textContent)
// alert(list.lastElementChild.textContent)
// alert(list.children[1].textContent)
// alert(list.children[3].textContent)
// alert(list.children[2].textContent)

//task5

// const heading = document.querySelector('h1');
// heading.style.background = 'green';
// heading.style.width = '500px';
// console.log(heading);

// const myDiv = document.getElementById('myDiv');
// console.log(myDiv);

// let p1 = myDiv.firstElementChild;
// p1.className = 'paragraph-item';
// p1.style.fontWeight = 'bold'
// console.log(p1)

// let p2 = myDiv.children[1];
// p2.style.color = 'red';
// console.log(p2)

// let p3 = myDiv.children[2];
// p3.style.textDecoration = 'underline';

// let p4 = myDiv.lastElementChild;
// p4.style.fontStyle = 'italic';

// let list = document.getElementById('myList');

// let listItem = list.children;
// let newString = '';

// for(let i = 0; i < listItem.length; i++){
//   console.log(listItem[i])
//   newString += listItem[i].textContent;
// }
// console.log(newString);
// list.textContent = newString;

// const spanEl = document.querySelector('span');
// spanEl.style.display = 'none';


// task 6

/* <input type="text" id="input1" value="Hello">
<input type="text" id="input2" value="Text2"></input> */

// let input1 = document.querySelector('#input1');
// console.log(input1)
// input1.textContent = prompt('Please provide text for the input 1');

// let input2 = document.querySelector('#input2');
// input2.textContent = prompt('lease provide text for the input 2');
// console.log(input2);
// let val;
// val = input1.textContent;
// input1.textContent = input2.textContent;
// input2.textContent = val;

//task7
// const body = document.createElement('body');
// document.documentElement.appendChild(body);
// const main = document.createElement('main');
// main.className = 'mainClass check item';
// document.querySelector('body').appendChild(main);

// const div = document.createElement('div');
// div.id = 'myDiv';
// document.querySelector('main.mainClass').appendChild(div);
// const p = document.createElement('p');
// p.textContent = 'First paragraph';
// document.querySelector('div#myDiv').appendChild(p);

// console.log(body);
