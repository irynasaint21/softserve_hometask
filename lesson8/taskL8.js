//Task1
function upperCase(str) {
  let regExp = /[A-Z]/;
  if (regExp.test(str[0])) {
    return `String  starts with uppercase character`;
  } else {
    return `String doesn't start with uppercase character`;
  }
}

upperCase('RegExp');

//task2

function checkEmail(email) {
  let regExp = /\w+@\w+\.\w/;
  if (regExp.test(email)) {
    console.log(`valid mail ${email}`);
  } else {
    console.log(`${email} not valid`);
  }
}

checkEmail('Qmail2@gmail.com');

//task3
let str = 'cdbBdbsbz';
let regExp = /d(b+)(d)/gi;
console.log(regExp.exec(str));

//task 4

let str = 'Java Script';
str.replace(/(java) (script)/i, '$2, $1');

// task 5

function validateCard(str) {
  let regExp = /(^\d{4}-(\d{4})-(\d{4})-(\d{4})$)/;
  if (regExp.test(str)) {
    console.log(`valid card ${str}`);
  } else {
    console.log(`${str} not valid`);
  }
}

validateCard();

//task6

function checkEmail(email) {
  let re = /(^([a-zA-Z]+)((-?)(_?)[a-zA-Z0-9]*))@([a-zA-Z]+)\.[a-zA-Z]+$/;
  if (re.test(email)) {
    console.log(`valid email: ${email}`);
  } else {
    console.log(`not valid email: ${email} `);
  }
}

//TASK7

  function checkLogin(login) {
    let re = /^([a-zA-Z][a-zA-Z0-9\.]{1,9})$/;
    let regex = /([0-9][.][0-9]+)|[0-9]+/gm
      console.log(login.match(regex))
    
    return re.test(login)
    
  }
  checkLogin('ee1.1r4t3')
  