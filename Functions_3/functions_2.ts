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
//calculator(22,null 'add'); //invalid : Argument of type 'null' is not assignable to parameter of type 'number'.
//calculator(undefined, 22, 'sub'); //invalid :Argument of type 'undefined' is not assignable to parameter of type 'number'.
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

//! a) The number of arguments is different from the number of parameters specified in the function.
//! b) Or the types of arguments are not compatible with the types of function parameters.

//* DEFAULT PARAMETERS ************************************************************************

//define a default value of param, if the caller of function does not
//explicitly provides values.
//In below example, provide default id as 55, in case user does not explictly provides while calling.

//! default parameters are defined by giving default values for parameters in func.

let greet = (name: string, school: string, id: number = 55) => {
  console.log(
    `Welcome to course on coughing in public ${name} , your id is: ${id}`
  );
};

//! ## CONCEPT : default parameters are also optional. It means that you can omit the default parameters when calling the function.

greet("Binod", "IPS"); //this is fine as if default param is provided, TS does not count default while counting args.
//Welcome to course on coughing in public Binod , your id is: 55
greet("Money", "DPS", 999); //with all params.
//Welcome to course on coughing in public Money , your id is: 999

//! ## CONCEPT : default parameters don’t need to appear after the required parameters. BUT
//! When a default parameter appears before a required parameter, you need to explicitly pass undefined to get the default initialized value.

let greetAgain = (name: string = "Binod", school: string, id: number) => {
  console.log(`You shameless man ${name} , your back again with id as: ${id}`);
};

greetAgain(undefined, "DAV", 777); //You shameless man Binod , your back again with id as: 777
//greetAgain(undefined,'DAV');  //invalid : Expected 3 arguments, but got 2.
//greetAgain(null,'DAV',888); //invalid : Argument of type 'null' is not assignable to parameter of type 'string | undefined'.

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


console.log(correct_multiply(22,22,22));
console.log(correct_multiply(22,22)); //this is fine
//correct_multiply(22,undefined); //invalid : as we cannot explicity send undefined as optional param
//error: Argument of type 'undefined' is not assignable to parameter of type 'number'.
//correct_multiply(22,null); //invalid : Argument of type 'null' is not assignable to parameter of type 'number'.

//? https://www.youtube.com/watch?v=9dw2ik9N8wo&list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b&index=3&t=1431s

//! ## Concept: An optional param can't have default value at the same time.
//! Otherwise,  we will get error : Parameter cannot have question mark and initializer.

