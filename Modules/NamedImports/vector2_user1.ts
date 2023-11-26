
// Here we will be using the memebrs from vector2.ts

//!  1. The path of the file must NOT be appended with .ts extension.

//! 2. Name of the exported items and imported items must be same.


import {Vector2, vectorInfo} from './vector2';

console.log(vectorInfo);

let firstVector : Vector2 = new Vector2(22,33);

let resultantVector : Vector2 = firstVector.add(new Vector2(11,11));
resultantVector.getDetails();






