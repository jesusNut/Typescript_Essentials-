/**==========================================
 **   ☠️☠️ Array destructuring ☠️☠️
 *===========================================**/

// example 1:

let book = ["Abhishek the great tester", 500, "$999.99"];

//traditional way of accessing elements of an array

let bookName = book[0];
let pages = book[1];
let priced = book[2];

//* The above code can now be accomplished using ARRAY DESTRUCTURING:

let [bookCalled, noOfPages, Money] = book;

//! Here we can use any name of the variable in destructuring array

console.log(`${bookCalled}---${noOfPages}---${Money}`);

//example 2: Ignore certain elements an only accessing whatever is needed.


//get me the book name [0th index].
let [mybookname] = book;
console.log("🚀 ~ mybookname IS:", mybookname)

//get me the price [2nd index] only.
let [,,theprice] = book;
console.log("🚀 ~ theprice IS:", theprice)


//example 3: extra unmapped variables gives undefined.

let guns: string[] = ["Ak", "Beretta", "Mp5", "Desert Eagle"];

let [a1, a2, a3, a4, a5] = guns;

console.log(`${a1}---${a2}---${a3}---${a4}---${a5}`); //Ak---Beretta---Mp5---Desert Eagle---undefined

//example - 4 : usage with rest operator

let [bestgun, ...restAll] = guns;

console.log(bestgun); //Ak
console.log(restAll); //[ 'Beretta', 'Mp5', 'Desert Eagle' ]

//example - 5 : with nested Arrays

let magazine = [
  "Abhishek the great tester",
  500,
  "$999.99",
  ["saras-salil publications", "Bihar"],
];

//let [thename, panna, daam, [pubname, state]] = magazine; //! error here [but possible in JS]
let [thename, panna, daam, innerData] = magazine; //* easy way

console.log(thename);
console.log(innerData); //[ 'saras-salil publications', 'Bihar' ]
console.log(innerData[0]);
console.log(innerData[1]);


//? https://budiirawan.com/typescript-destructuring-array/


