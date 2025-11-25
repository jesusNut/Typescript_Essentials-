/**======================================
 **    ☠️☠️ INTERFACES ☠️☠️
 *======================================**/

//? https://www.youtube.com/watch?v=Xhpuzy1abb8&list=PLMZdod-kiMhJgphghyTOX42FFfOtD0Cxz&index=12
//? https://www.youtube.com/watch?v=xUxospw8RXo&t=7066s

//! An interface is a syntactical contract (blueprint) that an entity should adhere to.

//! 😆😆😆 Interfaces can be used to define blueprints of OBJECTS & FUNCTIONS ONLY. 😆😆😆
//! 😆😆😆 Interfaces in TypeScript cannot be used for primitive types like string, number, or boolean.😆😆😆

//Interfaces define properties & methods which are the members of the interface.
//Interfaces contain only the declaration of the members. It is the responsibility of the
//deriving class to define the members. It often helps in providing a standard structure that the deriving classes would follow.

//* 😁😁😁 Defining an interface having properties and methods :

// synatx :
// interface interface_name {
// }

interface Iperson {
  fname: string;
  lname: string;
  age: number;
  salary: string | number;
  getBasicDetails: (greetings: string) => string; //this is function call signature - way 1
  coronaSalary(percentage: number): number; //this is function call signature - way 2
}

//* 😁😁😁 Creating an object that will adhere to Interface named 'Iperson'

let myObject: Iperson = {
  fname: "Abhishek",
  lname: "Bhardwaj",
  age: 99,
  salary: "6000",
  getBasicDetails: function (greetings): string {
    return `${greetings} ${this.fname} , I don't know how you are so smart !!`;
  },
  coronaSalary: function (percentage): number {
    if (typeof this.salary === "number") {
      return this.salary * percentage;
    }
    return parseFloat(this.salary) * percentage;
  },
};

//accessing it

console.log(myObject.fname);
console.log(myObject.lname);
console.log(myObject.age);
console.log(myObject.salary);
console.log(myObject.getBasicDetails("Hi cutie.."));
console.log(
  `From now onwards your salary in corona will be ${myObject.coronaSalary(0.5)}`
);

//* 😁😁😁 Defining a function 'f11' which will adhere to interface F11

interface F11 {
  (greet: string): string;
}

let f11: F11 = (greet) => {
  return `${greet} your majesty !!!`;
};

console.log(f11("Hello"));

//* 😁😁😁 Defining an interface having optional properties and methods :

interface IEmployee {
  fname: string;
  lname: string;
  age?: number;
  salary: string | number;
  getBasicDetails?: (greetings: string) => string; //optional (whenever want to make a function optional,
  // use way 1 for function call signtaure )
  coronaSalary(multiplier: number): number; // optional cannot be declared in way 2
}

//* 😁😁😁 Creating an object that will adhere to Interface named 'IEmployee' with only optional properties.

const abhishek: IEmployee = {
  lname: "bhardwaj",
  fname: "abhishek",
  salary: "9000",
  coronaSalary: function (multiplier): number {
    if (typeof this.salary === "number") {
      return this.salary * multiplier;
    }
    return parseFloat(this.salary) * multiplier;
  },
};

console.log(abhishek.age); //undefined
console.log(abhishek.fname); //abhishek
console.log(abhishek.coronaSalary(2));

//* 😁😁😁 Using interface as a type for function parameters & return type.

function generateProperName(employee: IEmployee): IEmployee {
  employee.fname = "Mr.Abhishek"; //updated value of fname
  return employee;
}

console.log(generateProperName(abhishek).fname); //Mr. Abhishek

//* 😁😁😁 Using readonly properties in Interfaces

//! Readonly properties cannot be changed once defined in an object.

interface IPlaneList {
  fname: string;
  readonly headquarters: string; //! defining a property as readonly
  fleetsize: number;
}

const delta: IPlaneList = {
  fname: "delta_Airlines",
  headquarters: "Indiana",
  fleetsize: 100,
};

function changeValues(data: IPlaneList): IPlaneList {
  console.log(data.fname);
  console.log(data.headquarters); //*we can read the readonly marked properties.
  console.log(data.fleetsize);
  data.fname = "Pakistan"; //possible to re-assign value as it is not readonly
  //data.headquarters = 'China'; //! invalid : Cannot assign to 'headquarters' because it is a read-only property.
  data.fleetsize = 999;
  return data;
}

let planeHolder: IPlaneList = changeValues(delta);
console.log("🚀 ~ planeHolder:", planeHolder);

//* 😁😁😁 Defining an interface for Array of objects

interface ITankList {
  tankname: string;
  country: string;
  fleetsize: number;
}

const tankData: ITankList[] = [
  {
    tankname: "Muzzle 550",
    country: "Sweden",
    fleetsize: 80,
  },
  { tankname: "Stinger 990", country: "Afghanistan", fleetsize: 70 },
];

console.log(tankData.length);

/**================================================================================================
 * ?    SUMMARY (Just like Type alias with objects)
 * ?-------------------------------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 *
 * ! 1. All the properties should be present in the object as per the Interface defined.
 * ! 2. All the properties should have exact name & type as defined in Interface.
 * ! 3. Cannot add a new property which is not already defined in Interface.
 * ! 4. Cannot delete a property externally which is not optional.
 * ! 5. Order of proprties does not matter until all properties are defined
 * !    as per the Interface with correct data types.
 *================================================================================================**/
