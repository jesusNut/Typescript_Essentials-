/**=========================================================
 **    ☠️☠️ CLASS- static members☠️☠️
 *=========================================================*/

//! The static keyword defines a static method or variable for a class,
//! or a static initialization block.
//! Static methods are often utility functions.
//! Static properties are any data you don't need to be replicated across instances.
//! Static members (variables and methods) can be private or public or protected.

//* Accessing static members outside of the class.

export class ClassWithStaticFields {
  static baseStaticField = "base static field";

  static baseStaticMethod() {
    return "base static method output";
  }
}

const myObject = new ClassWithStaticFields();
//console.log("🚀 ~ myObject.baseStaticField;:", myObject.baseStaticField) //! ERROR
//Property 'baseStaticField' does not exist on type 'ClassWithStaticFields'.
// Did you mean to access the static member 'ClassWithStaticFields.baseStaticField' instead?

//console.log(myObject.baseStaticMethod()); //! ERROR
//Property 'baseStaticMethod' does not exist on type 'ClassWithStaticFields'.
// Did you mean to access the static member 'ClassWithStaticFields.baseStaticMethod' instead?

//! OUTSIDE THE CLASS, STATIC MEMBERS CAN BE ACCESSED ONLY USING CLASSNAME.

console.log(ClassWithStaticFields.baseStaticField);
console.log(ClassWithStaticFields.baseStaticMethod());

//* Accessing static members (variables and methods) inside instance methods.

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static#calling_static_members_from_a_class_constructor_and_other_methods

class ClassWithStaticField {
  static baseStaticField = "base static field";

  static baseStaticMethod() {
    return "base static method output";
  }

  staticPrinter() {
    //! STATIC MEMBERS ARE NOT DIRECTLY ACCESSIBLE USING THE THIS KEYWORD FROM NON-STATIC (INSTANCE) METHODS.

    //console.log(this.baseStaticField); //! ERROR
    // Property 'baseStaticField' does not exist on type 'ClassWithStaticField'.
    //Did you mean to access the static member 'ClassWithStaticField.baseStaticField' instead?

    //console.log(this.baseStaticMethod()); //! ERROR
    //Property 'baseStaticMethod' does not exist on type 'ClassWithStaticField'.
    // Did you mean to access the static member 'ClassWithStaticField.baseStaticMethod' instead?

    console.log(ClassWithStaticFields.baseStaticField); //*correct way
    console.log(ClassWithStaticFields.baseStaticMethod()); //*correct way
  }
}

const myObj = new ClassWithStaticFields();

//myObj.staticPrinter();

//* Accessing static members (variables and methods) inside static methods.

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static#calling_static_members_from_another_static_method


//* WAY 1: 😵😵 USING this keyword.😵😵


class StaticMethodCall {
  static staticProperty = "static property";
  age: number = 22;

  //! USE this Keyword  to call a static method or static property within another static method of the same class.

  //! this refers to CLASS itself when used inside a static method. [not like JAVA where usage of this and super is not allowed in static context]
  //! this refers to the - object calling the instance method in case of instance methods. [same like java]

  static staticMethod() {
    return `Static method and ${this.staticProperty} has been called.`;
  }
  static anotherStaticMethod() {
    return `${this.staticMethod()} from another static method`;
  }

  greet() {
    console.log("abc");
  }
}

console.log(StaticMethodCall.staticMethod());
// 'Static method and static property has been called'

console.log(StaticMethodCall.anotherStaticMethod());
// 'Static method and static property has been called from another static method'



//* WAY 2: 🤩🤩 USING Classname🤩🤩


class StaticMethodCall1 {
  static staticProperty = "static property uno";
  age: number = 22;

  //! USE the world famous concept of using CLASSNAMES with static memebers 
  //! to call a static method or property within another static method of the same class.

  private static staticMethod() {
    return `Static method and ${StaticMethodCall1.staticProperty} has been called.`;
  }
  static anotherStaticMethod() {
    return `${StaticMethodCall1.staticMethod()} from another static method @@@@`;
  }

  greet() {
    console.log("abc");
  }
}


console.log(StaticMethodCall1.anotherStaticMethod());
// 'Static method and static property has been called from another static method'


//! A STATIC METHOD CANNOT ACCESS A CLASS’S INSTANCE VARIABLES AND INSTANCE METHODS !!
