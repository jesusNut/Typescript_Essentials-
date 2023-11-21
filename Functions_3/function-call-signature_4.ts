/**==============================================
 **    ☠️☠️ FUNCTIONS CALL SIGNATURE ☠️☠️
 *===============================================**/

//* The function call signature refers to the declaration/definition of a function, which includes
//* the function's name, parameters and return types. It defines the structure and return-type of a function
//* without including function's implementation or body.

//! 🤩🤩🤩 VERY VERY IMPORTANT POINT 🤩🤩🤩 :
//! Function call signatures are typically used inside object type notations
//! i.e. for object methods to define the structure and return type of functions within objects (called Object Methods in JS)

//defining type of an object ******************************************
type studentDetails = {
  fname: string;
  lname: string;
  age: number;
  gender?: string;
  greet: (message: string) => string; //! Way 1: Function call signature for Object method [BEST WAY]
  fee(recommendation: boolean): number; //! Way 2: Function call signature for Object method
};

//writing an object of 'studentDetails' type *****************************
let abhishek: studentDetails = {
  fname: "Abhishek",
  lname: "Dixit",
  age: 99,
  gender: "male",
  greet(message) {
    //* definition of object method -1
    //return true; //invalid : Type '(message: string) => boolean' is not assignable to type '(message: string) => string'.
    //return null; //invalid : Type '(message: string) => null' is not assignable to type '(message: string) => string'.
    return `Hello ${this.fname} ${this.lname} aged ${this.age}. "${message}"`;
  },
  fee(recommendation) {
    //* definition of object method -2
    const NORMALFEE = 50000;
    if (recommendation) {
      return 0.2 * NORMALFEE;
    }
    return NORMALFEE;
  },
};

//calling the object method *********************

//console.log(abhishek.greet(123));
//invalid : Argument of type 'number' is not assignable to parameter of type 'string'.
//console.log(abhishek.greet(undefined));
//invalid : Argument of type 'undefined' is not assignable to parameter of type 'string'.
console.log(abhishek.greet("Please give fee !"));
console.log(`Please pay : Rs. ${abhishek.fee(true)}`);
console.log(`Please pay : Rs. ${abhishek.fee(false)}`);

//! *** 🦉🦉 MOST CONFUSING 3rd WAY of writing Call signtaures 🦉🦉***

//? https://www.youtube.com/watch?v=cA7Pqw72LAQ&list=PLwGdqUZWnOp0xfHQFmlL52b_6-QZ0mnk_&index=15

export {};