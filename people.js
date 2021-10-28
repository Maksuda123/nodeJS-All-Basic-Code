//module wrapper function
(function(export, require. module, __filename, __dirname){
//jaja likhi amra .js file a
module.exports = {
    people,
    a,
    test,
}
})



//varible
console.log('Hello World');

var fullName = 'Mili Akter';
console.log(fullName);
var age = 10;
var phone = true;
console.log(phone);
var job;


//Array
const car = [one, two, three];
const car = [
    'one',
    'two'
]

let x = car[0];



// //Array Literal
const cars = ['Mango', 'Apple', 'Banana'];
console.log(cars[1]);

// // //Using keyword new
const cars = new Array('Mango', 'Apple', 'Banana');
console.log(cars);

// // //Array Properties and Methods
cars.length
cars.sort()

// //property Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
Total = fruits.length;  // Returns 4
console.log(Total);

// //Looping Array Elements
const fruits = ['Banana', 'Apple', 'Orange'];
let fLen = fruits.length;

let text = '<ul>';
for (let i = 0; i < fLen; i++) {
    text += '<li>' + fruits[i] + '</li>';
}
text += '</ul>';

document.getElementById("demo").innerHTML = text;








//Var, Let, Const

if(true){
    var varVariable = "This is Var";
    var varVariable = "This is Apple";
    console.log(varVariable);
}



if(true){
    let letVariable = "Tis is let";
    letVariable = "Tis is Mango";
    console.log(letVariable);
}

if(true){
    const constVariable = "This is const";
    const constVariable = "This is const";
    console.log(constVariable);
}




//variable type coercion or conversion
var firstName = 'Joly';
var age = 30;
console.log(firstName, age);

//variable mutation
var firstName = 'Joly';
 var firstName = 100;

  console.log(firstName);

//js operator precedince
var now = 2021;
var yearJoly = 1990;
var fullAge = 30;

var isFullAge = (now - yearJoly) > fullAge;// 31>30
console.log(typeof now);

console.log('A' > 'a');









// comparison Operator
// Arithmetic operator
// Assignment Operator
// Logical operator

// comparison Operator ==, ===, !=, <,>
var x = 5;
var result = (x > 10);
console.log(result);

// Arithmetic operator +, -, *, /
var x = 5;
console.log(y = x+2);

// Assignment Operator
var x = 15;
var y = 20;
console.log(x+=y);

// Logical operator
var x =20;
var y = 30;
var result = (x<y || x==y);
console.log(result);


// let theNumber = Number(prompt('Pick a number'));
// console.log('Your number is the square root of ' + theNumber * theNumber);

let sentence = 'Sectary birds speciaize in stompin';
let word = sentence.split( " ");
console.log(word);

console.log(word.join(' '));
