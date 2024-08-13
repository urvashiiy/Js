//for loop
// for(let no=1; no <= 5; no++){
//     console.log("Urvashi is a great learner");
// }


// sum = 0;
// let n = 100;
// for(let no=1; no <= n; no++){
//     sum = sum + no;
// }
// console.log("sum =",sum);


// for(let no=1; no <= 5; no++){
//     console.log("no =", no);
//      }

//while loop
 let i = 1;
 while(i <= 5) {
    console.log("Urvashi is a great learner");
    i++;
 }

 //do while
 let j = 1;
 do{
    console.log("Urvashi is a great learner");
    j++;
    }while(j <= 10);


//for of loop
let fruits = "apple banana cherry";
len = 0;
for (let fruit of fruits) { // iterators -> characters
    console.log("fruits =",fruit);
    len++;
}
console.log("len of this",len);
 



let str = "Urvashi learns";
size = 0;
for (let char of str) {
    console.log("char =",char);
    size++;
}
console.log("size of this",size);