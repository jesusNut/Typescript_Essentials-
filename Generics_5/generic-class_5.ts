/**====================================================
 **    ☠️☠️ GENERICS in Classes ☠️☠️
 *=====================================================**/

//* Defining a class with generics which can take any kind of clothing item.(these clothing items can be Type /Interface).

export class Drawer<T> {
  tempArray: T[] = [];

  createArray(data: T) {
    this.tempArray.push(data);
    return this.tempArray;
  }
}

//1st item type (declared using interface)
interface socks {
  brand: string;
  price: number;
}

//2nd item type
type pajama = {
  size: number;
  print: string;
  color: string;
};

//using class with different types.

const socksObj = new Drawer<socks>();
socksObj.createArray({ brand: "zara", price: 500 });
socksObj.createArray({ brand: "H&M", price: 800 });
console.log(socksObj.createArray({ brand: "Kothari", price: 900 }));

// const pajamaObj = new Drawer<pajama>();
// pajamaObj.createArray({brand:'Gheuda',price: 500});
// pajamaObj.createArray({brand:'Lauki',price: 800});
// pajamaObj.log(socksObj.createArray({brand:'Baingan',price: 900}));
