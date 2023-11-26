

// Here we will be using the memebrs from vector2.ts

/**================================================================================================
 *?    Importing for named export - IMPORTING ALL ITEMS AS NAMESPACE/Single variable
 *================================================================================================**/

//!  1. The path of the file must NOT be appended with .ts extension.

//!  2. Name of the exported items and imported items must be same.


import * as AllData from "./vector2";

console.log(AllData.vectorInfo);

let firstVector: AllData.Vector2 = new AllData.Vector2(101, 201);

let resultantVector: AllData.Vector2 = firstVector.add(new AllData.Vector2(11,11));
resultantVector.getDetails();