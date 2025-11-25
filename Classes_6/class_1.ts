/**================================================================================================
 * ?  LIST OF CONTENT
 * ----------------------
//* Class
//* Properties/Fields/variables
//* Methods
//* Constructors
 *================================================================================================**/

/**=============================
 **    ☠️☠️ CLASS ☠️☠️
 *=============================**/

//syntax :

//  class Person {
// }

//! class is created using class keyword. It is similar to JS-ES6 concept.
//! class name should start with uppercase.
//! A class declaration can contain the following:

//* Fields: A field (or property) is a variable that we declare in the class. It will contain the data of the class.
//* Functions or Methods: The Operations that the objects can perform. They represent the behavior of the class.
//! In class we can have private and public - instance and static variables.(discussed in other chapter)
//! In class we can have private and public - instance and static methods. (discussed in other chapter)
//* Constructor: is a special function that is invoked every time we create a new object from the class.

//===================================================================================================================

class Mobile {
  //? DECLARING VARIABLES:

  //! while declaring the instance or static variables, no need to write var/let/const.
  //! writing var/let/const with variables will give error.

  phoneModel: string = "Oneplus"; //we can provide initial values for variables, remains same for every object.

  price: number; //If initial value not provided, we might get undefined.

  //? DECLARING CONSTRUCTORS:

  constructor(phoneModel: string, price: number) {
    this.phoneModel = phoneModel;
    this.price = price;
  }

  //? WRITING FUNCTIONS FOR THE CLASS:

  //! Writing 'function' keyword with methods(function) inside of class gives error.

  getDetails(name: string):void {
    console.log(
      `Hi ${name}...phone model you enquired is ${this.phoneModel} with price as :$ ${this.price}`
    );
  }
}

//? CREATING OBJECTS AND ACCESSING CLASS MEMBERS (Variables and methods)

//? we can use Class as TYPE also.

const oppoObject: Mobile = new Mobile("Oppo T1", 999);

console.log(oppoObject.phoneModel);
console.log(oppoObject.price);
oppoObject.getDetails("Abhishek");

//? modify fields/variables from outside class

oppoObject.phoneModel = "Oppo T2";
oppoObject.price = 777;
oppoObject.getDetails("Ankush");

//===================================================================================================================

//! concept 1: It is MANDATORY to declare variables if access modifiers [public, private, protected, readonly]
//! are not provided explicitly in constructor {NOT LIKE JS}

class Mobile1 {
  constructor(screen: string, ram: number, facelock: boolean) {
    //this.screen = screen; //! ERROR : Property 'screen' does not exist on type 'Mobile1'.
    //same code will work fine in JS
  }
}

//===================================================================================================================

//! concept 2: It is NOT MANDATORY to declare variables if access modifiers [public, private, protected, readonly]
//! are provided explicitly in constructor.

class Mobile2 {
  constructor(
    public screen: string,
    private ram: number,
    readonly facelock: boolean
  ) {
    this.screen = screen; //works fine
    this.ram = ram; //works fine
    this.facelock = facelock; //works fine
  }
}

//===================================================================================================================

//! concept 3: IN CASE WE GET BELOW ERROR:

//Property has no initializer and is not definitely assigned in the constructor.

//? https://bobbyhadz.com/blog/typescript-property-has-no-initializer

//===================================================================================================================

//! Concept 4: We can define functions in a class using 3 ways just liek in JS.

class Sharp {
  constructor(public item: string) {
    this.item = item;
  }

  //! 1. ES6 way:

  // sharpObjectCarried  (): string {
  //   return `Hi ...I am having ${this.item} in my bag...hahaha`;
  // };

  //! 2. using arrow functions

  // sharpObjectCarried = (): string => {
  //   return `Hi ...I am having ${this.item} in my bag...hahaha`;
  // };

  //! 3. Uinsg function keyword

  sharpObjectCarried = function (): string {
    return `Hi ...I am having ${this.item} in my bag...hahaha`;
  };


  //! In case of error as ''this' implicitly has type 'any' because it does not have a type annotation'
  //? Make changes in tsconfig.json:
  // {
  //   "compilerOptions": {
  //     "noImplicitThis": false   // turn off just this check
  //   }
  // }


}

const sharpObject1 = new Sharp('Scissor');

console.log(sharpObject1.sharpObjectCarried());

//todo : Arrow Function returns undefined when called from a TS object but
//todo   returns a string when called from a class instance.

//? https://stackoverflow.com/questions/73430164/arrow-function-returns-undefined-when-called-from-an-object-but-returns-a-string