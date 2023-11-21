/**=========================================================
 **    ☠️☠️ CLASS can implement interfaces☠️☠️
 *=========================================================*/

//! Difference between interfaces and abstract classes?

//todo          😈 1. WE CANNOT USE 'instanceof' type-guard with interfaces.
//todo          😈 2. A class can extend only one class/abstract class and
//todo                 can implement any number of the interfaces.

interface Lamp {
  bulb: number;
  lumen: string | number;
  turnOn: () => string;
}

interface IStore {
  Read: () => void;
  Write: () => void;
}

class TableLamp implements Lamp, IStore {
  //implementing 2 interfaces
  bulb: number;
  lumen: string | number;
  constructor(bulb: number, lumen: string | number) {
    this.bulb = bulb;
    this.lumen = lumen;
  }
  Read(): void {
    console.log("Reading now.....");
  }
  Write(): void {
    console.log("Writing now......");
  }
  turnOn() {
    return "Plug me and put your fingers in the socket please.";
  }
}

const tl1 = new TableLamp(5, 800);

console.log(tl1.turnOn());
tl1.Read();
tl1.Write();
