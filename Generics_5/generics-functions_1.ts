/**=========================================
 **    ☠️☠️ GENERICS usage in Functions ☠️☠️
 *==========================================**/

 //? https://www.youtube.com/watch?v=XpJ9BOzOy6g&list=PLMZdod-kiMhJgphghyTOX42FFfOtD0Cxz&index=13

//* Generics in typescript allows us to create reusable componenets
//* that can be used with multiple data types.

//! We create a generic method using the syntax :

//! function funcName<T>(arg: T): T OR
// const arrowFunction = <GenericType>(arg: GenericType): ReturnType => {
// Function body
//  };

//!---------------------- GENERIC ARRAYS & GENERIC FUNCTIONS -----------------------------------------------------------

//create a function which will fetch the last value in any type of array.

function retriever<T>(data: Array<T>): T {
  return data[data.length - 1];
}

//using the function:

//WAY 1:  Specify the type of T while invoking the function.
//This will restrict other types to be used in array.
//Means, number type array cannot take any other type of array while calling function.

console.log(retriever<string>(["abhishek", "ankush", "jesusnut", "Gunda"]));
console.log(retriever<number>([22, 33, 44, 55, 11])); //can't put string data in this array

//WAY 2:  NO NEED TO Specify the type of T while invoking the function.
//This will NOT restrict other types to be used in array.
//Means, number type array CAN take any other type of array while calling function.

console.log(retriever(["abhishek", "ankush", "jesusnut", "Gunda"]));
console.log(retriever([22, 33, 44, 55, 11, 'abc'])); //notice string used among numbers in array without any issues.

interface emp {
  fname: string;
  level: string;
}

const abhishek: emp = {
  fname: "Abhi",
  level: "Manager",
};

const bharat: emp = {
  fname: "India",
  level: "Vishwaguru",
};

const rajasthan: emp = {
  fname: "Padharo Mahre Desh",
  level: "awesome",
};

console.log(retriever<emp>([bharat, rajasthan, abhishek]));

//!---------------------- FUNCTIONS WITH MULTIPLE GENERICS/MULTIPLE TYPE VARIABLES  ------------------------------------

//######## code without generics

// function getEmployee(id: number, code: string): string {
//     return `${id} - ${code}`
// }

// getEmployee(1, "CD01")
// getEmployee("CD01", "CD01")

//######## implementation with generics

function getEmployee<T, U>(id: T, code: U): string {
  return `${id} - ${code}`;
}

console.log(getEmployee("101", "manager"));
console.log(getEmployee(true, false));
console.log(getEmployee(101, 555));

//!---------------------- Generic along with Non-generic Type ---------------------------------------------------------------

//generic type function parameters can be clubbed with non-generic types

function concatenator<T>(a: T, b: string): string {
  return a + b;
}

console.log(concatenator(12, "abhishek"));
console.log(concatenator("Mahesh ", "Abhishek"));

//!---------------------- Methods and Properties available to Generic Type --------------------------------------------------------

//!When using type variables to create generic components, TypeScript does not allow us to use methods or properties.

function displayType<T, U>(id: T, name: U): void {
  // id.toString(); //Property 'toString' does not exist on type 'T'.
  // name.toString(); // Property 'toString' does not exist on type 'T'.

  // id.toFixed();  // Compiler Error: Property 'toFixed' does not exist on type 'T'.
  // name.toUpperCase(); // Compiler Error: Property 'toUpperCase' does not exist on type 'U'.

  console.log(typeof id + ", " + typeof name);
}

//! We have to explicity tell about the generic types to use methods & properties avaialable for those types.

// example 1: tofixed() is present with number type and toUpperCase() is present with string type.
// and toString() is present with both types.

function gdisplayType<T extends number, U extends string>(
  id: T,
  name: U
): void {
  id.toString();
  name.toString();

  id.toFixed();
  name.toUpperCase();

  console.log(typeof id + ", " + typeof name);
}

// example 2: id and role are present with student type.
// and dept and studcount with university interface.

type student = { id: string; role: number };

interface university {
  dept: string;
  studcount: number;
}

function display<T extends student, U extends university>(a: T, b: U) {
  console.log(a.id);
  console.log(a.role);
  console.log(b.dept);
  console.log(b.studcount);
}

display({ id: "101", role: 999 }, { dept: "ECE", studcount: 1000 });

// example 3:  length property present with array

let secondArray = <T>(a: Array<T>) => {
  console.log(a.length);
};

secondArray([101, 202, 303, 404, 888, 111, 555]);
secondArray(["abhi", "new", "disco", "sharat", "Meena"]);


//!---------------------- Generic Constraints --------------------------------------------------------

//! The generic type allows any data type. However, we can restrict it to certain types using constraints. 

class Person {
    firstName: string;
    lastName: string;

    constructor(fname:string,  lname:string) { 
        this.firstName = fname;
        this.lastName = lname;
    }
}

function displayer<T extends Person>(per: T): void {
    console.log(`${ per.firstName} ${per.lastName}` );
}
var per = new Person("Bill", "Gates");
displayer(per); //Output: Bill Gates

//displayer("Bill Gates"); //! Error

// In the above example, the displayer function is a generic function with constraints.
// A constraint is specified after the generic type in the angle brackets.
// The constraint <T extends Person> specifies that the generic type T must extend the class Person.
// So, the Person class or any other class that extends the Person class can be set as generic type
// while calling the display function, otherwise the compiler will give an error.


//!---------------------- Duck typing concept in Generics --------------------------------------------------------

type employee = { id: string; role: number };

function printEmployee<T extends employee>(emp : T){

  console.log(emp.id +"---"+emp.role);

}

//!  duck typing :

printEmployee({id:'101', role : 999}) //perfect employee type object passed as param
printEmployee({id:'1001', role : 9999, data : 111}) //OK
printEmployee({id:'10001', role : 99999, data : 111, rich : true}) //OK
//printEmployee({ role : 999, data : 111, rich : true}) //ERROR as 'id' is missing



export {}