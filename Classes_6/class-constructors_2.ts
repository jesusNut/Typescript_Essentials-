/**================================
 **    ☠️☠️ CLASS- constructors ☠️☠️
 *=================================**/

//? https://www.tektutorialshub.com/typescript/constructor-in-typescript/

//! In order to write constructor, use keyword 'constructor'[Not like java where its equal to classname]
//! Constructors are used to initialize objects.
//! If you don't provide your own constructor,
//! then AN EMPTY DEFAULT CONSTRUCTOR WILL BE SUPPLIED FOR YOU.

class Cow {
  legs: number;
  horns: number;

  giveDetails(name: string): string {
    return `Hi Cow named ${name}, you have ${this.legs} legs and ${this.horns} horns`;
  }
}

//? INITIALIZING THE CLASS WITH DEFAULT CONSTRUCTOR

const rambha = new Cow();
console.log(rambha.giveDetails("Rambha Madhuri"));

//Hi Cow named Rambha Madhuri, you have undefined legs and undefined horns

//===================================================================================================================

//! A class cannot have more than one constructor method.
//todo SO, CONSTRUCTOR OVERLOADING IS NOT POSSIBLE IN JS.[Not like Java]

class Dog {
  legs: number;
  horns: number;

  //constructor

  constructor(legs: number, horns: number) {
    this.legs = legs;
    this.horns = horns;
  }

  //   constructor(legs: number) { //! ERROR : Multiple constructor implementations are not allowed.
  //     this.legs = legs;
  //   }

  giveDetails(name: string): string {
    return `Hi Dog named ${name}, you have ${this.legs} legs and ${this.horns} horns`;
  }
}

let tommy = new Dog(4, 0);
console.log(tommy.giveDetails("Tommy Hilfiger"));

//Hi Dog named Tommy Hilfiger, you have 4 legs and 0 horns


//===================================================================================================================

//! If we have written even a single constructor explicitly in the class,
//! then, the default constructor cannot be used.

class Pig {
    legs: number;
    horns: number;
  
    //explictly written constructor
  
    constructor(legs: number, horns: number) {
      this.legs = legs;
      this.horns = horns;
    }
  
    giveDetails(name: string): string {
      return `Hi Pig named ${name}, you have ${this.legs} legs and ${this.horns} horns`;
    }
  }

  const piggy1 = new Pig(3, -1); //*OK
  //const piggy2 = new Pig(); //! ERROR


