//! Differences between let ,var , const

//! let and const added in JS as part of ES6(2015).

//* Scope *************************************************************

//Var is function scoped

var i: string = "ABHISHEK";

function printer() {
  var k: number = 12345; //function scoped variable
  console.log(i);
  console.log(k);
}

console.log(i);
//console.log(k); //error

//let is block scoped

let lname: string = "ABHISHEK";

function letprinter() {
  if (true) {
    let lnum: number = 12345; //block scoped variable
  }

  console.log(lname);
  // console.log(lnum); //error
}

console.log(lname);
//console.log(lnum); //error

//const is block scoped

const cname = "ABHISHEK";

function constprinter() {
  if (true) {
    const cnum: number = 12345; //block scoped variable
    console.log(cnum); //can be accessed
  }

  console.log(cname);
  //console.log(cnum); //error
}

console.log(cname);
//console.log(cnum); //error

//* Hoisting ******************************************************

//var allows hoisting.

vhname = "abc";
console.log("🚀 ~ vhname:", vhname);

var vhname: string; //declartion

//let and const does not allow hoisting.

//console.log("🚀 ~ letgame:", letgame) //error
let letgame: string = "abc";

//console.log("🚀 ~ constgame:", constgame) //error
let constgame: string = "football";

//* Redeclaration*************************************************

//var  allows redeclaration, but let & const does not

var revarmoney: string = "50$";
console.log("🚀 ~ 1.revarmoney:", revarmoney);

var revarmoney: string = "500$"; //redeclared
console.log("🚀 ~ 2.revarmoney:", revarmoney);

let reletmoney: number = 500;
console.log("🚀 ~ 1.revarmoney:", revarmoney);

//let reletmoney : number = 700; //redeclared - error
console.log("🚀 ~ 2.revarmoney:", revarmoney);

const constmoney: boolean = true;
console.log("🚀 ~ constmoney:", constmoney);

//const constmoney : boolean = true;
console.log("🚀 ~ 2.revarmoney:", revarmoney);


//* Reassignment *************************************

// var and let allows re-assignment but const does not

var foot:boolean = true;
console.log("🚀 ~ foot:", foot)

foot = false;
console.log("🚀 ~ foot:", foot)

let legs:boolean = true;
console.log("🚀 ~ legs:", legs)

legs = false;
console.log("🚀 ~ legs:", legs)

const neck: boolean = true;
console.log("🚀 ~ neck:", neck)

//neck = false; //error


//* Const must be assigned during declaration

//const back:string ; //error: const declartions must be initialized
