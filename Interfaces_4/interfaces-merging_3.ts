/**================================================
 **    ☠️☠️ INTERFACES - Augmenting/Merging ☠️☠️
 *================================================**/

//? https://www.youtube.com/watch?v=xUxospw8RXo&t=7066s

//! Concept 1: We can have two interfaces with the same name.
//! In that case, first interface merges with the other.

interface ILaptop {
  fname: string;
  ram: number;
  price: number;
}

let object: ILaptop = {
  fname: "Lenovo",
  ram: 16,
  price: 70000,
  available: ["Amazon", "Flipkart"], //commenting this line will give error as Ilaptop
  //will also include property named 'available'.
};

interface ILaptop {
  //at compile time, interface with same name gets merged first and
  //then,type checking is done. Thats why no error at line-14
  available: string[];
}

//! Concept 2: When two interfaces merge and
//! if any property overlap, then that property must be having same type.

interface IMobile {
  fname: string;
  camera: number;
  price: number;
}

interface IMobile {
  camera: number; //* works fine.
  // camera: number | string;  //! error : Subsequent property declarations must have the same type.
  //!  Property 'camera' must be of type 'number', but here has type 'string | number'.
  nfc: boolean;
}
