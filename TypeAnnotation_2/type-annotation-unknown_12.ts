

/**==============================================
 **    ☠️☠️ UNKNOWN TYPE ☠️☠️
 *===============================================**/

 //* unknown type is a safer alternative to 'any' type 
 //* because unknown type enforces type checking and type-safety ALWAYS.
 //! Always recommended to use 'unknown' instead of 'any'.

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

//! usage of Unknown type************************************************************************

let umaster:unknown = 'abc';

let ustringVar:string = "";
//ustringVar = umaster; //! 🤯 not-possible : Type 'unknown' is not assignable to type 'string'.

//* the above line is invalid as TS knows umaster is of unknown type & ustringVar as string type.
//! so to use unknown type variables, type safety (using conditions) is necessary.

if(typeof umaster ==='string'){

    ustringVar = umaster; //! 😆 possible

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

