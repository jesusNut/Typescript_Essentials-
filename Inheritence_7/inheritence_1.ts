/**=====================================
 **    ☠️☠️ Inheritence ☠️☠️
 *======================================**/


 //? https://www.tektutorialshub.com/typescript/inheritance-in-typescript/

//! Inheritence using ES6 classes is done using 'extends' keyword.

class parentMobile {
  phoneno: number = 9988776655; //instance variable
  static ram = "4GB"; //static variable

  //instance var -1
  makecall() {
    console.log(`calling on ${this.phoneno}`);
  }

  //instance var -2
  makeSMS() {
    console.log(`sending SMS on ${this.phoneno}`);
  }

  //static variable
  static getRamDetails() {
    console.log("Ram in this mobile contains.." + this.ram);
  }
}

//* child class extending super class
class chottaMobile extends parentMobile{}

//* accessing properties and methods

//! 🤓 We can use the Class as a Type.
//! 🤓 If a child class doesn’t have its own constructor, we can use parent class constructor with child class.

let cm1 : parentMobile = new chottaMobile(); //OK
let cm2 : chottaMobile = new chottaMobile(); //OK
//let cm3 : chottaMobile = new String();  //! ERROR: Type 'String' is missing the following properties from type 'parentMobile': phoneno, makecall, makeSMS


//! INSTANCE MEMBERS OF BASE CLASS CAN BE ACCESSED BY CHILD CLASS USING CHILD CLASS OBJECTS.
console.log(cm1.phoneno);
cm1.makecall();
cm1.makeSMS();

//! STATIC MEMBERS of BASE CLASS CAN BE ACCESSED USING CHILD CLASSNAME [Not by child class objects].
console.log(chottaMobile.ram);
chottaMobile.getRamDetails();

//==================================================================================

//! Multiple Inheritence is not possible in TS.

class A{

}

class B {

}

// class AB extends A,B{ //! ERROR: Classes can only extend a single class.

// }

//==================================================================================

//! Multilevel Inheritence is  possible in TS.

class X extends A {

}

class Y extends X{


}