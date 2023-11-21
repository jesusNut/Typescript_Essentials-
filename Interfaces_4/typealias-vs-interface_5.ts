/**================================================
 **    ☠️☠️ Type vs Interface ☠️☠️
 *================================================**/

//*-----------------------------------------------------------------------------------------------------

//! Difference 1: ^^^^^^^^^^^^^^^ WHERE TO USE? ^^^^^^^^^^^^^^^^^^^^^

//! Interfaces can be used TO DEFINE OBJECTS ONLY,
//! WHILE Type/Type Alias can be used to define- primitives, union, intersection, object etc.

interface day {
  weekday: string;
  dayOfWeek: number;
  work: string[];
}

//WHILE

type params1 = number;
type params2 = number | string[][];
type param3 = {};

//*-----------------------------------------------------------------------------------------------------

//! Difference-2:  ^^^^^^^^^^^^^ IMPLEMENTS KEYWORD ^^^^^^^^^^^^^^^^^
//! A class can implement an interface or multiple interfaces.
//! A class can implement an OBJECT TYPE BUT NOT UNION TYPES OR ANY OTHER TYPES e.g. primitive

interface PersonInterface {
  name: string;
  age: number;
}

class John implements PersonInterface {
  name = "John";
  age = 26;
}

//-------------------------------------------------

type PersonType = {
  name: string;
  age: number;
};

class Ann implements PersonType {
  name = "Ann";
  age = 26;
}

//---------Implementing UNION TYPE-----------------

type UnionType = { name: string } | { age: number };

//! Gives an error : A class can only implement an object type or intersection of object types with statically known members.
// class Joel implements UnionType {
//   name = "Joel";
//   age = 2;
// }

//---------Implementing PRIMITIVE TYPE-----------------

//! Gives an error : A class can only implement an object type or intersection of object types with statically known members.
// class Joey implements params1 {
//   name = "Joel";
//   age = 2;
// }

//*-----------------------------------------------------------------------------------------------------

//! Difference 3: ^^^^^^^^^^^^ UNIONS AND INTERSECTION ^^^^^^^^^^^^^^^^^^^^^^^^^^^

//! Unions and intersections can be created out of interfaces OR types,
//! BUT can be stored in types only.

//*-----------------------------------------------------------------------------------------------------

//! Difference-4: ^^^^^^^^^^^^^^ DECLARATION MERGING ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//! When two interfaces with same name are declared, they will get merged.
//! When two types with same name are declared, it will be an ERROR.

interface abc {
  name: string;
}

const alphabets: abc = {
  name: "abc",
  count: 3,
};

interface abc {
  count: number;
}

//------------------------------------------------------

//! ERROR : Duplicate identifier 'def'.
// type def = {}
// type def = {}

//*-----------------------------------------------------------------------------------------------------

//? https://blog.logrocket.com/types-vs-interfaces-typescript/

//* WHEN TO USE INTERFACES AND WHEN TO USE TYPE?

//todo ## When working with objects use Interfaces, for all other requirement use Types.
