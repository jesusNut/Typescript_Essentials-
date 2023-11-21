/**======================================
 **    ☠️☠️ INTERFACES - INHERITENCE ☠️☠️
 *======================================**/

//! Concept 1: One Interface can extend one or more interfaces using extends keyword.

//* way -1

interface Iuniversity {
  city: string;
  amenities: string[];
}
interface Idepartment extends Iuniversity {
  fname: string;
  expense: number;
}

const amity: Idepartment = {
  fname: "Electronics",
  expense: 50000,
  city: "Noida",
  amenities: ["mall", "looting parents", "golf course", "racing cars"],
};

//* way -2

interface IParent1 {
  num1: number;
}

interface IParent2 {
  num2: number;
}

interface IChild extends IParent1, IParent2 {}

let p5: IChild = {
  num1: 10,
  num2: 20,
};

//! Concept 2: When one interface extends other interface and
//! if any property overlap, then that property must be having same/compatible type.

//example 1:

interface IGrandParent1 {
  salary: number;
  age: number;
}

interface IGrandParent2 extends IGrandParent1 {
  salary: number; //* works fine- salary in both interface has same type i.e. number
  //salary: string //! gives error :
  //   Interface 'IGrandParent2' incorrectly extends interface 'IGrandParent1'.
  //   Types of property 'salary' are incompatible.
  //   Type 'string' is not assignable to type 'number'.
  age: number;
}

//example 2:

interface rich1 {
  money: number;
}

interface rich2 extends rich1 {
  money: any; //* OK : number and any are compatible types
}

// interface rich3 extends rich1, rich2{ //! ERROR
//   fname : string
// }

//! error : Interface 'richierich' cannot simultaneously extend types 'rich1' and 'rich2'.
//! Named property 'money' of types 'rich1' and 'rich2' are not identical.

//? https://www.tektutorialshub.com/typescript/extend-interface-in-typescript/
//? https://www.youtube.com/watch?v=Xhpuzy1abb8&t=788s

//! Concept 3: An interface can extend one or more 'Types'  (with statically known members only) as well.

//example 1 : multiple types extends using extends keyword and commas

type Client = {
  name: string;
};

type Customer = {
  age: number;
};

interface VIPClient extends Client, Customer {
  benefits: string[];
}

const mallika: VIPClient = {
  benefits: ["IIM", "Protshit", "Washroom"],
  age: 99,
  name: "sangathan",
};
console.log("🚀 ~ mallika:", mallika);

//example 2 : with union types [NOT POSSIBLE]

type uniontype = Client | Customer;

//interface uniontaker extends uniontype{} // ! ERROR

//! error message : An interface can only extend an object type or intersection of object types with statically known members.

//example 3 : with INTERSECTION types  [POSSIBLE]

type intertype = Client & Customer;

interface intertaker extends intertype {} //* possible

//! Concept 4: A type alias can extend an interface using intersection.

//example 1:

interface Toffee {
  name: string;
}
type unionToffee = Toffee & { benefits: string[] };

const alpenlibe: unionToffee = {
  name: "alpenlibee",
  benefits: ["sweet", "cheap", "birthday distributions"],
};

//example 2:

interface Ianimal {
  type: string;
}

interface Ibird {
  color: string;
}

type Iall = Ianimal & Ibird;

let someweirdshit: Iall = {
  type: "Reptile",
  color: "Yellow",
};

//! concept 5: a new interface extending multiple interfaces

interface Coffee {
  name: string;
}
interface Tea {
  name: string;
}
interface Book {
  name: string;
}
interface Pen {
  name: string;
}

interface AllOfThem extends Coffee, Tea, Book, Pen {} //extending multiple interfaces


//! Advanced concepts - 

//? https://bobbyhadz.com/blog/typescript-extend-multiple-interfaces
//? https://bobbyhadz.com/blog/typescript-extend-type

//! Discriminated Union Type- 

//TypeScript provides a powerful feature that lets multiple interfaces be combined into a single union type. 

//? https://betterprogramming.pub/advanced-typescript-how-to-use-interface-inheritance-with-discriminated-unions-dddf77cb3836