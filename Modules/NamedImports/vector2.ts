

//! WAY 1 : creating a named module: 

//* To turn your file into a module, you just have to append 'export' before your items.

// export let vectorInfo : string = 'Hi I am the vector class which works with 2 dimensions !!'

// // export .... other items like interfaces etc.

// export class Vector2 {
//     constructor(private x: number, private y: number) {}
  
//     add(otherVector2: Vector2) {
//       return new Vector2(this.x + otherVector2.x, this.y + otherVector2.y);
//     }

//     getDetails(){
//         console.log(`My x coordinate is ${this.x} and my y coordinate is ${this.y}`);
//     }
//   }

  //! WAY 2 : creating a named module: 

  //comment all code from WAY 1.
  
//* To turn your file into a module, We can use the export keyword at the end with all items
//* that needs to be exported.

 let vectorInfo : string = 'Hi I am the vector class which works with 2 dimensions !!'

// export .... other items like interfaces etc.

 class Vector2 {
    constructor(private x: number, private y: number) {}
  
    add(otherVector2: Vector2) {
      return new Vector2(this.x + otherVector2.x, this.y + otherVector2.y);
    }

    getDetails(){
        console.log(`My x coordinate is ${this.x} and my y coordinate is ${this.y}`);
    }
  }

  export {vectorInfo, Vector2};