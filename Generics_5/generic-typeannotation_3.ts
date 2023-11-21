/**====================================================
 **    ☠️☠️ GENERICS Type annotation for Objects ☠️☠️
 *=====================================================**/

//! writing a generic type of object:

type dish<T> = {
  fname: T;
  ingredients: T[];
};

//! creating object as per generic type

const halwa: dish<string> = {
  fname: "Gajar ka halwa",
  ingredients: ["ghee", "carrots", "milk", "sugar"],
};

const golgappa: dish<string[]> = {
  fname: ['puchka','panipuri'],
  ingredients: [['lemon','tamarind'],['thela','puris']],
};
