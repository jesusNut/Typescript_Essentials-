

/**======================================================
 **  ☠️☠️ Difference between Interface and Union ☠️☠️
 *=======================================================**/


 //? https://stackoverflow.com/questions/61370779/typescript-understanding-union-and-intersection-types


 //! All members of all the types are required in the object of an intersection type.

 //! VS

//! If 2 object types are in union, we can have
//! 1. All properties of both types.
//! 2. All properties of either type.
//! 3. All properties of either type + any property of remaining type.

//! BUT CANNOT HAVE : some property of either type.