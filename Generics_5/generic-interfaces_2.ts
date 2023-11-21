/**=====================================
 **    ☠️☠️ GENERICS interfaces ☠️☠️
 *======================================**/

//---------------------------------------------------------------------------------

//! writing a generic interface:

interface IProcessor<T> {
  result: T;
  process: (a: T, b: T) => T;
}

//! creating object as per generic interface as type

const intel: IProcessor<string> = {
  result: "best",
  process: function (a, b) {
    return a + b;
  },
};

const amd: IProcessor<number> = {
  result: 99,
  process: function (a, b) {
    return a + b;
  },
};

console.log(intel.process('Multicore','---8 threads'));
console.log(amd.process(800,900));
