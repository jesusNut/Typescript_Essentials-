
/**======================================
 **    ☠️☠️ Spread operator ☠️☠️
 *=======================================**/

//! The main objective of the spread operator is to spread the elements
//! of an array or object. 

//* usecase 1 : clone an array

let ogArray : number[] = [1,2,3,4,5];

let copyArray = ogArray;
let copyArray1 = [...ogArray];

console.log(copyArray);
console.log(copyArray1);


//* usecase2 : Merge or compose multiple Arrays

export const fruits = ["apple", "mango", "grapes", "banana"];
export const veggies = ["carrot", "tomato", "pumpkin", "karela"];

//create an array having elements of both arrays

const newArray = [...fruits, ...veggies];
console.log(newArray);

//create an array having elements of both arrays but 100 at begininng and 200 at end.

const newArray1 = [100, ...fruits, ...veggies, 200];
console.log(newArray1);

//* usecase4 : Merge two objects

let someObj1 = {
    myname: "abhishek",
    myAge: 99,
  };
  
  let someObj2 = {
    mylastname: "bhardwaj",
    myNetWorth: 0,
  };
  
  let mergedObj = {
    ...someObj1,
    ...someObj2,
  };
  
  console.log(mergedObj);
  

  //? https://pandey-sunil1987.medium.com/spread-operator-and-destructing-in-typescript-806bf8e3d5e6
  //? https://plusreturn.com/blog/6-awesome-tricks-with-the-spread-and-rest-operators-in-typescript-and-javascript-objects/
  //? https://bobbyhadz.com/blog/typescript-type-object-must-have-symbol-iterator-method