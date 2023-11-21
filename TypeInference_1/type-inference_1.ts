
/**================================================================================================
 **       TYPE INFERENCE - PRIMITIVE TYPES
 *================================================================================================**/

 //! TS automatically infers the TYPE of a variable based on the values assigned into it.
 
 //******** Hover-over the variables to see type-inference in action *********.

 let personname = 'Abhishek'; //TS automatically infers that variable 'personname' is of string type.

//personname = 22; //error : Type 'number' is not assignable to type 'string'

let personage = 22;
let personPoor = false;


let fruits = ['Apple', 'Mango', 'Banana'] // Array
let mixArray = [1, true, 'Role'] // Array(Union Type)
let person = { name: 'Avi', age: 10 } // Object
let rectArea = (length: number, breadth: number) => length * breadth // Function

/**================================================================================================
 **          INTERVIEW QUESTION- 1
 *================================================================================================**/

 //! What will happen in case of inference, if a variable does not have any value assigned to it?

 let unknowndata; //no value assigned. What would be inference? - ans: ANY

 unknowndata = 123;
 unknowndata = 'abc';
 unknowndata = true;
 unknowndata = undefined;
 unknowndata = null;


/**================================================================================================
 **          INTERVIEW QUESTION- 2
 *================================================================================================**/

 //! What will happen in case of inference, if a variable is declared with const keyword.

 const constdata = 10;//here TS does not infer constdata to be number type, but as number '10' specifically.
 const constbool = false; 
 const conststr = 'abc';


