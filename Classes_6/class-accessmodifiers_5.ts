/**=====================================
 **    ☠️☠️ CLASS- Access Modifier ☠️☠️
 *======================================**/

 //? https://www.tektutorialshub.com/typescript/private-public-protected-access-modifiers-in-typescript/

//! There are 3 access modifiers in TS on class level detail [AND NOT IN INTERFACES OR TYPE ALIAS]:
//! 1. Public
//! 2. Private
//! 3. Protected


//! DEFAULT access modifier is : public

class Accessor {
  public prop1: string = 'For prop 1';
  private prop2: string= 'For prop 2';
  protected prop3 : string = 'For prop 3';
  display(): string { //by default public method
    this.greeter(); //private members can be accessed inside same class
    this.introducer(); //protcted memebrs can be accessed inside same class
    return `${this.prop1}---${this.prop2}`;  //private members can be accessed inside the class
  }
  private greeter(): void{
    console.log("Hi privately from the class....");
  }

  protected introducer(): void{
    console.log("Hi protected from the class....");
  }
}


const accessObject1 = new Accessor();
console.log(accessObject1.display());

//public memebrs can be accssed outside of the class
accessObject1.prop1 = 'Changed value for prop 1'; 
console.log(accessObject1.display());

//! private members cannot be accssed outside of the class
//accessObject1.prop2 = 'something' //! ERROR - Property 'prop2' is private and only accessible within class 'Accessor'.
//accessObject1.greeter(); //! ERROR - Property 'greeter' is private and only accessible within class 'Accessor'.

//! protected members cannot be accssed outside of the class except in derived classes
//accessObject1.prop3 = 'something'; //! ERROR - Property 'prop3' is protected and only accessible within class 'Accessor' and its subclasses.
//accessObject1.introducer(); //! ERROR - Property 'introducer' is protected and only accessible within class 'Accessor' and its subclasses.

//=============================================================================================================================================

//! example 2: Usage of protected:

class Vehicle {
  protected engineType: string; // Protected property - accessible within Vehicle and subclasses

  constructor(engineType: string) {
    this.engineType = engineType;
  }

  protected startEngine(): void { // Protected method - accessible within Vehicle and subclasses
    console.log(`Starting the ${this.engineType} engine.`);
  }

  public displayEngineInfo(): void {
    this.startEngine(); // Accessible within Vehicle
    console.log(`Engine type: ${this.engineType}`); // Accessible within Vehicle
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(engineType: string, model: string) {
    super(engineType); // Call Vehicle constructor
    this.model = model;
  }

  public displayCarInfo(): void {
    this.startEngine(); // Accessible within Car (subclass)
    console.log(`Car model: ${this.model}`);
    console.log(`Engine type: ${this.engineType}`); // Accessible within Car (subclass) because engineType is protected in Vehicle.
  }
}

// Example usage
const myCar = new Car("gasoline", "Sedan");
myCar.displayCarInfo();
myCar.displayEngineInfo();

// const myVehicle = new Vehicle("electric");
// myVehicle.startEngine(); // Error: startEngine is protected and not accessible outside Vehicle.
// console.log(myVehicle.engineType); // Error: engineType is protected and not accessible outside Vehicle.