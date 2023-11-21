/**======================================================
 **    ☠️☠️ CLASS- instance variables and methods☠️☠️
 *=======================================================**/


class Majdoor {
  //define instance variables
  wages: number = 500;
  work: string;

  //constructors
  constructor(wages: number, work: string) {
    this.wages = wages;
    this.work = work;
  }

  //instance method-1
  getDetails(nameOfMajdoor: string) {
    //using instance method inside another instance method
    //!  MANDATORY TO USE 'this' keyword to access instance methods [Not like java] inside class.

    const nameInUppercase = this.getNameOfMajdoor(nameOfMajdoor);

    //using instance variables inside instance methods
    //!  MANDATORY TO USE 'this' keyword to access instance variables [Not like java] inside class.

    return `${nameInUppercase} is on wages : ${this.wages} who works ${this.work}`;
  }

  //instance method-2
  getNameOfMajdoor(fname: string): string {
    console.log("Fetching name of labour...");
    return fname.toUpperCase();
  }
}

//accessing methods

let majdoor1 = new Majdoor(650,'Gardening');
console.log(majdoor1.getDetails('Ishq'));

let majdoor2 = new Majdoor(700,'Painting');
console.log(majdoor2.getDetails('Love'));