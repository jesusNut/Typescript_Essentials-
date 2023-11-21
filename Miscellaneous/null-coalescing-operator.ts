/**======================================
 **   ☠️☠️ Null Coalescing operator (??) ☠️☠️
 *======================================**/

 //! The nullish coalescing operator (?? or typescript double question mark)  is a logical operator that takes two arguments.
 //! It returns the right-hand side operand when its left-hand side operand is null or undefined.
 //! otherwise, it returns its left-hand side operand.

function checkData(param:unknown) : any {

const foundData : any = param ?? 'data is null or undefined';
return foundData;

}

//test the function:

let data1 = undefined;
let data2 = null;
let data3 = 'abc.def@somamil.com';
let data4 = {}
let data5 = []

console.log(checkData(data1)) //data is null or undefined
console.log(checkData(data2)) //data is null or undefined
console.log(checkData(data3)) //abc.def@somamil.com
console.log(checkData(data4)) //{}
console.log(checkData(data5)) //[]

//? https://www.tektutorialshub.com/typescript/nullish-coalescing-operator-in-typescript




