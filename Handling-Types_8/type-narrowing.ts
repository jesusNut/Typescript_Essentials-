/**==============================================
 **    ☠️☠️ CONDITIONAL TYPE NARROWING☠️☠️
 *===============================================**/

//? https://www.youtube.com/watch?v=xUxospw8RXo&t=7066s

//example 1: using conditions to differentiate between different types.

type magazine = {
  fname: string;
  price: number;
};

//a function which can handle multiple types based on conditions.
function doSomething(data: magazine | magazine[]) {
  //if data is array then print its length,
  // if not print value of its properties.
  if (Array.isArray(data)) {
    console.log(`the length of array is : ${data.length}`);
  } else {
    console.log(data.fname + "---" + data.price);
  }
}

//passing a magazine type
doSomething({ fname: "Saras Salil", price: 15 });
//passing magazine array type
doSomething([
  { fname: "Saras Salil", price: 15 },
  { fname: "Nanahe Samrat", price: 20 },
]);

