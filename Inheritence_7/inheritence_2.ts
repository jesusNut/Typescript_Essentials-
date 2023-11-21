/**==========================================================================
 **    ☠️☠️ Inheritence - super() ☠️☠️
 *==========================================================================**/

//? https://www.tektutorialshub.com/typescript/inheritance-in-typescript/

//! 🤓 Concept-1: if a child class doesn’t have its own constructor, we can use
//!    the constructor of the parent class for child class.

//! 🤓 If the child class does not need a constructor, then you can omit to call super method.
//!    The compiler will not flag this as an error.

class A1 {
  a: string;
  b: string;
  constructor(a: string, b: string) {
    this.a = a;
    this.b = b;
  }
  printab(): string {
    return this.a + "-" + this.b;
  }
}

//! JAVASCRIPT DOES NOT REQUIRES THE CHILD CLASS TO CALL SUPER() EXPLICITLY IF IT DOES NOT HAVE A EXPLICTLY WRITTEN CONSTRUCTOR.
class B1 extends A1 {}

//! Typescript automatically creates a constructor method with a super call in the generated JavaScript.

const boneObject = new B1("a", "b");
console.log(boneObject.printab()); //a

//* so write now my derived class in equivalent to :

// class B1 extends A1 {

//     constructor(...args) {
//         super(...args);
//     }
// }

//=============================================================================================================================

//! Concept 2: TS REQUIRES THE CHILD CLASS TO CALL SUPER() EXPLICITLY IF IT HAS A EXPLICITLY WRITTEN CONSTRUCTOR.

class Human {
  name: string;
  age: number;
  hobbies: string[];
  static hands: number = 2;

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  introduce(): string {
    return `Hi I am ${this.name} aged ${
      this.age
    } and I love ${this.hobbies.join(",")} having ${Human.hands} Hands`;
  }
}

class Bacchi extends Human {
  rollno: number;
  static university: string = "Amity";

  //! 🤓 super() : TS REQUIRES THE CHILD CLASS TO CALL SUPER() EXPLICITLY IF IT HAS A EXPLICITLY WRITTEN CONSTRUCTOR.
  //!    ERROR : Constructors for derived classes must contain a 'super' call.

  //! 🤓 super() must be used before using this keyword.
  //!    ERROR : 'super' must be called before accessing 'this' in the constructor of a derived class.

  constructor(name: string, age: number, hobbies: string[], rollno: number) {
    super(name, age, hobbies); //calling parent class constructor explicitly
    this.rollno = rollno;
  }
}

const bacchi1 = new Bacchi("Kewda", 22, ["soccer", "magic"], 999);
console.log(bacchi1.introduce()); //calling parent class method using child class object
console.log(bacchi1.name);
console.log(bacchi1.age);
console.log(bacchi1.hobbies);
console.log(bacchi1.rollno);
console.log(Human.hands); //using parent class name to access static members of parent class
console.log(Bacchi.hands); //using child class name to access static members of parent class
console.log(Bacchi.university); //using child class name to access static members of child class
