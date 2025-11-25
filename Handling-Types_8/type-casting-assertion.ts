/**============================================
 **    ☠️☠️ TYPE ASSERTION aka TYPE CASTING ☠️☠️
 *=============================================**/

//! Type Assertion allows us to override the compiler determined type in our code.
//! Its like telling TS compiler that :

//* चल बाप को मत सिखा भो##के..

//! Type Assertion/Type casting can be achieved using :
//* 1. as keyword
//* 2. <> notation

//example 1:

let totalBill: unknown = 123;

//let othetVar : number = totalBill; //! Error : Type 'unknown' is not assignable to type 'number'

let othetVar: number = totalBill as number; //* works fine- explicity telling TS compiler to consider totalBill as number type.

//example 2:

type responseType = { fname: string; price: string };

let correctResponse: responseType = {
  fname: "BMW",
  price: "90 crores",
};

let incorrectResponse = {
  kind: "Mercedes",
  price: "90 crores",
};

//assume that 'response' is coming from some 3rd party library.

//let's create a custom type guard to check if the response contains 2 defined properties or not.

function isResponse(data: any): data is responseType {
  return !! data && typeof data ==='object' && "fname" in (data as any) && "price" in (data as any);
}

//* 🤭🤭🤭 WHAT IS !! operator?? 🤭🤭🤭

//? https://www.tektutorialshub.com/typescript/logical-operators-in-typescript/#-not

//now lets use the above defined custom type in below function:

function checkResponse(d1: unknown) {

    if (isResponse(d1)) {
      return "I am the real response";
    }
    return "Not correct response";

}

console.log(checkResponse(correctResponse));
console.log(checkResponse(null));
console.log(checkResponse(undefined));
console.log(checkResponse(true));
console.log(checkResponse(incorrectResponse));
console.log(checkResponse({}));
console.log(checkResponse([]));




//todo:: INTERVIEW QUESTION: How to handle unknown response coming from a 3rd party API.

//? https://medium.com/@vinhle95/the-unknown-type-in-typescript-939ec261294b