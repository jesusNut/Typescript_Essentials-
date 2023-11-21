/**====================================================
 **    ☠️☠️ GENERICS - Function Type ☠️☠️
 *=====================================================**/

//! defining function type with generics

type genfuncType<T> = (a: T, b: T) => T[];

//! implementing function type with arrow function

let doAdd: genfuncType<number> = (a, b) => {
  let tempArray: number[] = [];
  tempArray.push(a);
  tempArray.push(b);

  return tempArray;
};

console.log(doAdd(22, 33));
console.log(doAdd(222, 333));

//! implementing function type with normal function

let doAddStrings: genfuncType<string> = function (a, b) {
  let tempArray: string[] = [];
  tempArray.push(a);
  tempArray.push(b);

  return tempArray;
};

console.log(doAddStrings("abc", "def"));
console.log(doAddStrings("ghi", "jkl"));
