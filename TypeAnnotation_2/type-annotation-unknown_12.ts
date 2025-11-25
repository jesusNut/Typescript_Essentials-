

/**==============================================
 **    ☠️☠️ UNKNOWN TYPE ☠️☠️
 *===============================================**/

 //* unknown type is a safer alternative to 'any' type 
 //! Always recommended to use 'unknown' instead of 'any'.

// 👢👢👢 When a variable is typed as unknown, TypeScript is telling you:
// “You can assign anything to this variable,but you cannot use it until you prove its type.”

//! Every time you want to use an unknown value, you must first apply a type guard.



 //! problems with any type **********************************************************************

 let master:any = 'abc';
 
 //lets assign the above in string variable. Notice there is not type safety while assigning.

 let stringVar:string = master; //possible- no type safety
 let numVar:number = master; //possible -no type safety
 let booleanVar:boolean = master; //possible - no type safety
 let nullVar:null = master; //possible - no type safety
 let undefinedVar:undefined = master; //possible - no type safety
 let arrayVar:number[] = master; //possible - no type safety
 let objectVar:{} = master; //possible - no type safety

//! usage of Unknown typ 1************************************************************************

let umaster:unknown = 'abc';

let ustringVar:string = "";
//ustringVar = umaster; //! 🤯 not-possible : Type 'unknown' is not assignable to type 'string'.

//* the above line is invalid as TS knows umaster is of unknown type & ustringVar as string type.
//! so to use unknown type variables, type safety (using conditions) is necessary.

if(typeof umaster ==='string'){

    ustringVar = umaster; //! 😆 possible

}

//! usage of Unknown type 2 ************************************************************************

let jemini: unknown = "abc";


function upperCased(a: string) {
  return a.toUpperCase();
}

if (typeof jemini === "string") {
  console.log(upperCased(jemini));
}

/**============================================================
 *?    other examples
 *-------------------------------------------------------------

 //?  https://dmitripavlutin.com/typescript-unknown-vs-any/
 *=============================================================**/


 /**============================================
  //? How strict can be a unknown type? OR
  //? How to handle an unknown object?  
  
  //? https://www.totaltypescript.com/concepts/object-is-of-type-unknown
  //? https://www.tektutorialshub.com/typescript/typescript-unknown-type/
  *=============================================**/


let data : unknown = {
    abc : 'abc',
    def : 'def'
}

if(typeof data === 'object' && data && 'abc' in data && typeof data.abc==='string'){

        console.log(data.abc);
      // console.log(data.def); //gives error, as no check is written for this

}

