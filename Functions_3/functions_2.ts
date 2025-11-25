/**=====================================================
 **    ☠️☠️  FUNCTION TYPE - PARAMETERS ☠️☠️
 **    ☠️☠️  FUNCTION TYPE - DEFAULT PARAMETERS ☠️☠️
 **    ☠️☠️  FUNCTION TYPE - OPTIONAL PARAMETERS ☠️☠️
 *======================================================**/

//? Extra references
//? Operator '+' cannot be applied to types 'string | number' and 'string | number'.
//? https://github.com/microsoft/TypeScript/issues/49661

//* simple parameters *****************************************************************************

//write a function which will take 2nd & 3rd parameter as number and 3rd as string

let calculator = (a: number, b: number, c: string) => {
  if (c === "add") {
    console.log(a + b);
  } else if (c === "sub") {
    console.log(a - b);
  } else if (c === "multiply") {
    console.log(a * b);
  } else {
    console.log("Please enter a valid operation !!!");
  }
};

//calculator(22,'add'); //invalid: Expected 3 arguments, but got 2.
//calculator(22,33,'add','somedata'); //invalid: Expected 3 arguments, but got 4.
//calculator(22,null 'add'); //invalid : Argument of type 'null' is not assignable to parameter of type 'number'.
//calculator(undefined, 22, 'sub'); //invalid :Argument of type 'undefined' is not assignable to parameter of type 'number'.
//calculator(22, 11, null); //invalid : Argument of type 'null' is not assignable to parameter of type 'string'.

calculator(22, 11, "add");
calculator(22, 11, "sub");
calculator(22, 11, "multiply");

//* union type parameters ***********************************************************************************

type firstTwoParamType = number | string;

export let adder = function (
  a: firstTwoParamType,
  b: firstTwoParamType,
  isNumber: boolean
) {
  if (isNumber) {
    console.log("Adding two numbers" + (Number(a) + Number(b)));
  } else {
    console.log(
      "concatinating strings :" + (a.toString() + "---" + b.toString())
    );
  }
};

//adder(true,55,77);//invalid : Argument of type 'boolean' is not assignable to parameter of type 'firstTwoParamType'.
//adder(); //invalid : Expected 3 arguments, but got 0.
adder(22, 33, true);
adder("abc", "def", false);
adder("abc", "def", true);
adder(22, 55, false);

//!  🧟🧟🧟🧟 CONCEPT WHILE FUNCTION CALL For normal parameters & for union param 🧟🧟🧟🧟

//! ## CONCEPT : In TypeScript, the compiler checks every FUNCTION CALL and issues an error in the following cases:

//! a) The number of arguments is different(more/less) from the number of parameters specified in the function.
//! b) Or the types of arguments are not compatible with the types of function parameters.

//* DEFAULT PARAMETERS With/without type expressions ************************************************************************

//🔆🔆 Example 1 : without function type expressions🔆🔆

//define a default value of param, if the caller of function does not explicitly provides values.
//In below example, provide default id as 55, in case user does not explictly provides while calling.

//! default parameters are defined by giving default values for parameters in func.

let greet = (name: string, school: string, id: number = 55) => {
  console.log(
    `Welcome to course on coughing in public ${name} , your id is: ${id}`
  );
};

//! 💡💡💡 CONCEPT : default parameters are also optional when type expression is not used.
//!         It means that you can omit the default parameters when calling the function.

greet("Binod", "IPS"); //this is fine as if default param is provided, TS does not count default while counting args.
//Welcome to course on coughing in public Binod , your id is: 55
greet("Money", "DPS", 999); //with all params.
//Welcome to course on coughing in public Money , your id is: 999
greet("Jamuni","KV", undefined); //valid

//! 💡💡💡 CONCEPT : default parameters don’t need to appear after the required parameters. BUT
//! When a default parameter appears before a required parameter, you need to explicitly pass undefined to get the default initialized value.

let greetAgain = (name: string = "Binod", school: string, id: number) => {
  console.log(`You shameless man ${name} , your back again with id as: ${id}`);
};

greetAgain(undefined, "DAV", 777); //You shameless man Binod , your back again with id as: 777
//greetAgain(undefined,'DAV');  //invalid : Expected 3 arguments, but got 2.
//greetAgain(null,'DAV',888); //invalid : Argument of type 'null' is not assignable to parameter of type 'string | undefined'.

//🔆🔆 Example 2 : with function type expression🔆🔆

//! 💡💡💡 CONCEPT : Default values can only be assigned in the actual function implementation, not in the type definition.

//Below gives error:

//type MyFunc = (a: string = "hello") => void;  // ❌ Error :A parameter initializer is only allowed in a function or constructor implementation.

//Correct code:

type f1 = (a: number, b: number) => number[];

let myfunc: f1 = function (a: number, b: number = 55) {
  //✅ Allowed here
  let temparr: number[] = [];
  temparr.push(a);
  temparr.push(b);
  return temparr;
};

//! 💡💡💡 CONCEPT : A function type expression fixes the exact parameter list,
//!  so TypeScript always expects all parameters — even if the implementation provides default values.

myfunc(22, 22); //valid
// myfunc(22); //invalid
//myfunc(22,undefined); //invalid : Argument of type 'undefined' is not assignable to parameter of type 'number'.

//* OPTIONAL parameters ************************************************************************

//! Use the parameter [?:] type syntax to make a parameter optional.

//! ## Concept : The optional parameters must appear after the required parameters in the parameter list.
//! If done, TS gives error : A required parameter cannot follow an optional parameter.

//! ## Concept: In real time, the optional param can be undefined while calling.
//!  So while defining function, always write condition to check undefined or we will get error.
//! ERROR: '<optional param>' is possibly 'undefined'.

function wrong_multiply(a: number, b: number, c?: number) {
  //return a*b*c; //! error: 'c' is possibly 'undefined'.
}

function correct_multiply(a: number, b: number, c?: number) {
  if (c) {
    return a * b * c;
  }
  return a * b;
}

console.log(correct_multiply(22, 22, 22));
console.log(correct_multiply(22, 22)); //this is fine
correct_multiply(22, 22, undefined); //valid : as we can explicity send undefined as optional param.
//correct_multiply(22,22,null); //invalid : Argument of type 'null' is not assignable to parameter of type 'number'.

//? https://www.youtube.com/watch?v=9dw2ik9N8wo&list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b&index=3&t=1431s

//! ## Concept: An optional param can't have default value at the same time of function implementation.
//! Otherwise,  we will get error : Parameter cannot have question mark and initializer.

// function greeto(name?: string = "Guest") {  // ❌ ERROR
//   console.log("Hello " + name);
// }

//==============================================================================================================================

// | Feature                      | Type Alias/expression   | Function Implementation |
// | ---------------------------- | --------------------    | ----------------------- |
// | Define parameter types       | ✅ Yes                 | Yes                     |
// | Set default parameter values | ❌ No                  | ✅ Yes                   |
// | Set optional parameters      | ✅ Yes (`b?: string`)  | Yes                     |

//Summary of how to write default values of parameters and optional parameters when using type expression.

// Step 1: Define a function type expression
type Calculate = (
  a: number, // required
  b: number, // required
  c?: number // optional
) => number;

// Step 2: Implement the function (defaults allowed ONLY here)
const calc: Calculate = (a, b = 10, c = 5) => {
  return a + b + c; // NO error :  'c' is possibly 'undefined' as we have provided default value of c as 5.(Remove c =5 and verify the error)
};

// Step 3: Valid calls
console.log(calc(1, 2, 3)); // OK → 6
console.log(calc(1, 2)); // OK → uses c = 5
//console.log(calc(1));        // ❌ ERROR (b is required in type)

//===============================================================================================================

/// 💲💲💲 Summary when type expression is used 💲💲💲

// A function type expression defines the exact expected parameter list and return type.

// The function implementation may provide equal or fewer parameters than defined in the type (because unused parameters are allowed).

// The function implementation cannot have more parameters than the type defines.

// When calling the function, TypeScript strictly enforces the full parameter list defined in the type expression.

// Default parameters inside the implementation do not change the required parameter count defined in the type expression.

// Optional parameters must be explicitly marked as optional (?) inside the type expression — implementation cannot make a parameter optional on its own.

// Type expressions do not allow specifying default values; defaults can only exist in the implementation.

// The call site must always pass all non-optional parameters as defined by the type expression, regardless of defaults in the implementation.

// The return type in implementation must match what the type expression declares.

/// 💲💲💲 Summary when type expression is NOT used and direct function impl are written💲💲💲

// When you write a normal function directly (without a function type expression), TypeScript uses the function’s own parameter list as the contract.

// All parameters that are not optional (?) and do not have default values are considered required.

// At the call site, TypeScript enforces that all required parameters must be passed.

// Default parameters make an argument optional at the call site, because a missing argument is replaced automatically.

// Optional parameters (?) make the argument optional and its type becomes T | undefined inside the function.

// Parameters that are neither optional nor default-valued must always be supplied by the caller.

//===============================================================================================================
