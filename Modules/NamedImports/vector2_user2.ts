// Here we will be using the memebrs from vector2.ts

/**================================================================================================
 *?   Importing for named export - IMPORTING INDIVIDUAL ITEMS AS ALIAS
 *================================================================================================**/

//!  1. The path of the file must NOT be appended with .ts extension.

//! 2. Name of the exported items and imported items must be same.

//todo::  When importing named exports, you can also use a different alias,
//todo::  which can be helpful to avoid naming collisions inside a file.

import { Vector2 as TwoDVector, vectorInfo as TwoDVectorInfo } from "./vector2";

console.log(TwoDVectorInfo);

let firstVector: TwoDVector = new TwoDVector(66, 77);

let resultantVector: TwoDVector = firstVector.add(new TwoDVector(11, 11));
resultantVector.getDetails();
