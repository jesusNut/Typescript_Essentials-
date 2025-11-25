/**=======================================
 **   ☠️☠️ Destructuring in TS ☠️☠️
 *========================================**/

//*  TypeScript supports the following forms of Destructuring (literally named after de-structuring i.e. breaking up the structure):
//*  1. Object Destructuring
//*  2. Array Destructuring

//Object Destructuring:

type innerObject = {
  fname: string;
  size: number;
  hasHoles: boolean;
};

let socks: innerObject = {
  fname: "Dmart socks",
  size: 90,
  hasHoles: true,
};

//! destructure it and assign to variable.

// const { hasHoles, size, fname }: innerObject = socks;
// console.log(`Article : ${fname}--${size}--${hasHoles}`);

//todo :: 'name of the variable in destructuring object' SHOULD BE SAME AS 'key in object'

//! destructure and use it in a function as params.

function manipulator({ hasHoles, size, fname }: innerObject) {
  console.log(`Article is : ${fname} and has holes : ${hasHoles}`);
  console.log(`increasing size by 10 meters : ${size + 10}`);
}

manipulator(socks);

//now I want to store the destuctured data in variables with names other than key in objects.
//for example, i want to store fname as 'article_name', hasHoles as 'defects'.

const { hasHoles: defects, size, fname: article_name }: innerObject = socks;
console.log(`Article : ${article_name}--${size}--${defects}`);


//! destructing with nested objects.

//example 1:

let car = {
  carname: "Rolls Royace",
  tyres: 5,
  price: "$9999999",
  company: "Munna Motor Garage",
  dealership: {
    dealerName: "Munna Mechanic",
    dealerAdress: "Bihar",
  },
};

let {
  carname,
  tyres,
  price,
  company,
  dealership: { dealerName, dealerAdress },
} = car;

console.log(carname);
console.log(tyres);
console.log(price);
console.log(company);
//console.log(dealership); //! **** this gives error ****
console.log(dealerName);
console.log(dealerAdress);

//example 2:

var foo = { bar: { bas: 123 } };
var {bar: {bas}} = foo; // Effectively `var bas = foo.bar.bas;`
console.log(bas);
//console.log(bar); //! **** this gives error ****


//! destructing with rest params.

//example 1:

var {w, x, ...remaining} = {w: 1, x: 2, y: 3, z: 4};

console.log(w); //1
console.log(x); //2
console.log(remaining); //{ y: 3, z: 4 }

