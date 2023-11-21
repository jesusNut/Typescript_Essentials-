/**================================================================================================
 **       TYPE INFERENCE - ARRAY TYPES & OBJECTS
 *================================================================================================**/

//! Arrays - Collection of Single Data Type(e.g. All String, All Numbers , etc)

let fruitss = ["Apple", "Banana"];
let numbers = [1, 2, 3];

//fruitss = [123,true]; //not allowed : Type 'boolean' is not assignable to type 'string'
fruitss = ["Watermelon", "Kiwi"]; //allowed
//fruitss.push(888); //not allowed : Argument of type 'number' is not assignable to parameter of type 'string'
fruitss.push("Mango"); //allowed
fruitss[0] = "Tomato"; //allowed
//fruitss[0] = false; //not allowed : Type 'boolean' is not assignable to type 'string'.
fruitss = []; //allowed
//fruitss[0] =  false//not allowed : Type 'boolean' is not assignable to type 'string'.

//! Arrays - Collection of Multiple Data Types

let mixedArray = ["Avi", 10]; //type is inferred as UNION of string and number i.e.
// the array mixedArray can contain either string or number.

mixedArray = [100, 'Chommu', 200, 'Monu', 300, 'Sonu']; //allowed
mixedArray = ['Chommu','Monu','Sonu']; //allowed
mixedArray = [100,200,300]; //allowed

mixedArray.push('Oingggg!!!'); //allowed
mixedArray.push(999); //allowed
//mixedArray.push(true); //not-allowed : Argument of type 'boolean' is not assignable to parameter of type 'string | number'
mixedArray[0] = 'hundred';

console.log("🚀 ~ mixedArray:", mixedArray)

mixedArray = []; //allowed
//mixedArray[0] = false; //not allowed- Type 'boolean' is not assignable to type 'string | number'


//! Objects

let gun = {

    model : 'berreta 92',
    price : 200000
}
//type is inferred as follows:
// property model should always be string
// property price should always be number

//updating a property

//gun.price = '30000' //not allowed : Type 'string' is not assignable to type 'number'
//gun.model = true; //not allowed : Type 'boolean' is not assignable to type 'string'
gun.model = 'desert eagle'; //allowed
gun.price = 30000; //allowed


//adding a property

//gun.bullets = 30; //not-allowed : Property 'bullets' does not exist on type '{ model: string; price: number; }'.

//assigning gun variable

//gun = {}; //not-allowed : Type '{}' is missing the following properties from type '{ model: string; price: number; }': model, price

//  gun = {
//     activity : 'fun',
//     phase : 22
//  } 

 //not-allowed:
//  Type '{ activity: string; phase: number; }' is not assignable to type '{ model: string; price: number; }'.
//  Object literal may only specify known properties, and 'activity' does not exist in type '{ model: string; price: number; }'.

 gun = {

    model : 'ak 47 russia made',
    price : 500000,
} 

//! reassigning : allowed with exact property names and types (no more property, no less)

//? https://www.denhox.com/posts/be-mindful-of-typescripts-excess-property-checking/

//todo:: Difference between passing in an object directly and as a reference in TS functions

//? https://stackoverflow.com/questions/67722258/difference-between-passing-in-an-object-directly-and-as-a-reference-in-ts-functi