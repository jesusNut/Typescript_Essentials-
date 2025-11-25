/**====================================================
 **    ☠️☠️ Optional chaining operator (?.) ☠️☠️
 *====================================================**/

//! The question mark dot (?.) syntax is called optional chaining in TypeScript and is like using
//! dot notation to access a nested property of an object, but instead of causing an error
//! if the reference is nullish, it short-circuits RETURNING UNDEFINED instead of throwing an error.

export type Person = {
  address?: {
    country?: string;
  };

  name?: {
    first?: string;
  };
};

const male: Person = {
  address: {
    country: "Chile",
  },
};

console.log(male.address?.country); //Chile
//console.log(male.name.first); //! error: Cannot read properties of undefined
console.log(male.name?.first); //undefined

//* Using optional chaining to access array indexes

type Hooman = {
    numbers?: {
      low?: number[];
    };
  };

  const boy: Hooman = {};

  console.log(boy.numbers);
  console.log(boy.numbers?.low);
  console.log(boy.numbers?.low?.[0]);

  const girl: Hooman = {
    numbers: {
      low: [1, 2, 3],
    },
  };

  console.log(girl.numbers);
  console.log(girl.numbers?.low);
  console.log(girl.numbers?.low?.[0]);