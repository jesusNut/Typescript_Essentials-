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


//example 2:

async function doSomething(url: string): Promise<Response> {
    return await fetch(url, { method: "Get" });
  }
  
  (async () => {
    let data = await doSomething(
      "https://run.mocky.io/v3/7ce5071d-5332-47a2-8ada-c9ca12971fc0"
    );
    let responseInJSOn = await data.json();
    console.log(`The spouse of this guy is : ${responseInJSOn.spouse ?? 'Single man happy man'}`);
  })(); //IIFE

  //! output will be : The spouse of this guy is : Elon Musk if response is :

//  {
//   "name": "John Doe",
//   "age": 30,
//   "occupation": "Software Engineer",
//   "address": {
//     "street": "123 Main St",
//     "city": "Bengaluru",
//     "country": "India",
//     "zipcode": null
//   },
//   "hobbies": ["reading", "hiking", "coding"],
//   "isEmployed": true,
//   "spouse": "Elon Musk",
//   "children": []
// }

 //! output will be : The spouse of this guy is : Single man happy man if response is :

//  {
//     "name": "John Doe",
//     "age": 30,
//     "occupation": "Software Engineer",
//     "address": {
//       "street": "123 Main St",
//       "city": "Bengaluru",
//       "country": "India",
//       "zipcode": null
//     },
//     "hobbies": ["reading", "hiking", "coding"],
//     "isEmployed": true,
//     "spouse": null,
//     "children": []
//   }