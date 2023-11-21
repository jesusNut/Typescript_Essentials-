

/**================================================
 **  ☠️☠️ Type Annotation for BigInt data types ☠️☠️
 *================================================**/

 //! A bigInt is created by appending n to the end of an integer literal

 let num1 = 22; //type inferred as number

 let num2 = 22n; //type inffered as bigint

 let num3: bigint = 288660869n; //type annotated as bigint

 //! real world applications

 //* The bigint can handle the large values and not limited as 
 //* the Number datatype, which has (Number.MAX_SAFE_INTEGER).

 //? https://www.tektutorialshub.com/typescript/typescript-bigint/

 export {}