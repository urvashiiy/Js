// // //for loop
// // // for(let no=1; no <= 5; no++){
// // //     console.log("Urvashi is a great learner");
// // // }


// // // sum = 0;
// // // let n = 100;
// // // for(let no=1; no <= n; no++){
// // //     sum = sum + no;
// // // }
// // // console.log("sum =",sum);


// // // for(let no=1; no <= 5; no++){
// // //     console.log("no =", no);
// // //      }

// // //while loop
// //  let i = 1;
// //  while(i <= 5) {
// //     console.log("Urvashi is a great learner");
// //     i++;
// //  }

// //  //do while
// //  let j = 1;
// //  do{
// //     console.log("Urvashi is a great learner");
// //     j++;
// //     }while(j <= 10);


// // //for of loop
// // let fruits = "apple banana cherry";
// // len = 0;
// // for (let fruit of fruits) { // iterators -> characters
// //     console.log("fruits =",fruit);
// //     len++;
// // }
// // console.log("len of this",len);




// // let str = "Urvashi learns";
// // size = 0;
// // for (let char of str) {
// //     console.log("char =",char);
// //     size++;
// // }
// // console.log("size of this",size);

// //for in
// let obj = {
//     name: "Urvashi",
//     age: 22,
//     city: "Pune",
//     country: "India"
// }
// let keys = Object.keys(obj);
// console.log(keys);
// for (let key in obj) {
//     console.log("key =", key, "value =", obj[key]);
// }

// //Practice ques 
// //Print all even nos 1 to 100

// let i = 1;

// while(i <= 100) {
//     if(i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// }

// //Print all odd nos 1 to 100
// for (let d = 1; d <= 100; d++) {
//     if (d % 2 != 0) {
//         console.log(d);
//     }
// }
// //practise ques 2 
// //guess the number
// let num = 10;
// guess = prompt("Guess the number:");
// while(guess != num) {
//         guess = prompt("You Enter Wrong no, Guess Again:");
// }
//         console.log("wuhooo You Won The game. The Guess Is right");
