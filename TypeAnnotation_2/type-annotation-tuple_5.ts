

/**================================================================================================
 **                ☠️☠️  Tuple type  ☠️☠️     
 *================================================================================================**/


//problem statement:

//1. Create an array which should take first element as string ALWAYS and 
//second element as number ALWAYS.

let role : (string | number)[] = ['admin', 1]; //array  OR
//let role = ['admin', 1]; //TS infers role as '(string | number)[]'

//The problem with above approach is that somebody can change the sequence, and
//we will never get any error.

role = [1, 'admin']
role[0]= 999;

//Thats why we use tuples.

//! Tuples allow FIXED NUMBER OF ELEMENTS with FIXED TYPES AT EACH INDEX
//! They can be access with index as arrays.

let tupledrole : [string, number]  = ['admin', 1]; 

 //let tupledrole : [string, number]  = ['admin', 1, true]; //error 

 //Type '[string, number, boolean]' is not assignable to type '[string, number]'.
 // Source has 3 element(s) but target allows only 2.ts(2322)

//tupledrole = [1, 'admin'] ; //error
tupledrole[0] = 'manager';
//tupledrole[0] = 999; //not allowed : Type 'number' is not assignable to type 'string'.

console.log("🚀 ~ tupledrole:", tupledrole)


/**================================================================================================
 *! BUT ANY DEFINED TYPE OF DATA CAN BE PUSHED TO TUPLE BREAKING IT BEING FIXED   
 *================================================================================================**/

let myRole : [number, string] = [404, 'Page not found'] ;

//push - all below are allowed which will break the fixed nature of tuple.

//!Here only number and string can be pushed as only those two are defined while defining tuple.

myRole.push(200);
myRole.push('OK');
myRole.push(201, 'created');
myRole.push('deleted', 204);
myRole.push('blah', 'blah', 'blah');
myRole.push(1,2,3,4,5);

// myRole.push(true) //not allowed 
// myRole.push(undefined) //not allowed
// myRole.push(null) //not allowed

console.log(myRole);







 
