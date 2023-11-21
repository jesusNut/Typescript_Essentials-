/**============================================
 **    ☠️☠️ CLASS- getters and setters ☠️☠️
 *=============================================**/

//? https://www.tektutorialshub.com/typescript/getters-and-setters-in-typescript/

//! The Getters and Setters are known as Accessor Properties in TypeScript.

class GSclass {
  private _fname: string;
  private _age: number;

  //! WRITING GETTERS AND SETTERS

  //write getter and setters to access private variable.
  //use 'get' & 'set' to write getters and setters. Use them like properties and not methods.

  get fname() {
    return this._fname;
  }

  get age() {
    return this._age;
  }

  set fname(tempName: string) {
    this._fname = tempName;
  }

  set age(tempAge: number) {
    this._age = tempAge;
  }
}


const GSobj1 = new GSclass();

//getting using getters
console.log(GSobj1.fname); //undefined
console.log(GSobj1.age); //undefined

//setting using setters
GSobj1.fname= 'Abhishek';
GSobj1.age= 99;

//getting using getters again
console.log(GSobj1.fname); //Abhishek
console.log(GSobj1.age); //99

//================================================================================

//! Getters and setters can be used with Objects as well.
// See the reference link