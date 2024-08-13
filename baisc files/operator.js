// // operators questions
// // let a = 10;
// // let b = 5;
// // console.log("a =",a,"b=",b);
// //console.log("a + b =",a+b);
// //console.log("a - b =",a-b);
// //console.log("a * b =",a*b);
// //console.log("a / b =",a/b);
// //console.log("a ** b =",a**b); // 10^5


// //unary operators
// //a++; //11 
// //b--; //4
// //console.log("a =",a);
// // console.log("b =",b);
// // console.log("++a =",++a); //11

// // console.log("a++ =",a++); //10 this is how works. same for the --
// // console.log("a =",a); //11

// //Assignment operator
// // let a = 8;
// // let b = 5;
// // console.log("a =",a,"b=",b);
// // a **= 2; //add 
// // console.log("a =",a);

// //comparison operator
// // let a = 8;
// // let b = 5;
// // console.log("a =", a, "b=", b);
// // console.log("a === b =", a === b); //true or false 
// // console.log("a !== b =", a !== b); //true or false
// // console.log("a > b =", a > b); //true or false
// // console.log("a < b =", a < b); //true or false and many more 


// // now we learn about logical operator

// let a = 8;
// let b = 5;

// let cond1 = a > b;
// let cond2 = a === 100;
// console.log("cond1 && cond2 =", cond1 && cond2); //false
// console.log("cond1 || cond2 =", cond1 || cond2); //true
// console.log("!(8<5) =", !(a < b)); //true

// // conditional statement
// let child = 18;
// if (child >= 18) {
//     console.log("you are elgible for vote");
// }
// else {
//     console.log("you are not elgible for vote");
// }

// let mode = "dark"
// let color;
// if (mode === "dark") {
//     color = "black";
// }
// if (mode === "light") {
//     color = "white";
// }
// console.log(color);

// let num1 = 5;
// if (num1 % 2 === 0) {
//     console.log("num1 is even");
// }
// else {
//     console.log("num1 is odd");
// }

// let choco = 10;
// if (choco > 10) {
//     console.log("choco is more than 10");
// } else if (choco === 10) {
//     console.log("choco is equal to 10");
// }
// else {
//     console.log("choco is less than 10");
// }

// //ternary
// let age = 8;
// let result = age >= 18 ? "adult" : "not adult"
// console.log(result);


// //alert("hello!"); //one time popup
// // let name = prompt("hey");
// // console.log(name); //returns string value


// // let num = prompt("enter a number");
// // if (num % 5 === 0) {
// //     console.log(num, "is a multiple of 5");
// // }
// // else {
// //     console.log(num, "is not multiple of 5");
// // }

// let score = prompt("Enter Your Scores (0-100)");
// let grade;
// if (score >= 90 && score <= 100) {
//     grade = "A";
// } else if (score >= 70 && score <= 89) {
//     grade = "B ";
// }
// else if (score >= 60 && score <= 69) {
//     grade = "C";
// }
// else if (score >= 50 && score <= 59) {
//     grade = "D";
// } else {
//     grade = "F";
// }
// console.log("This Student score",score,"and got",grade,"grade",);
