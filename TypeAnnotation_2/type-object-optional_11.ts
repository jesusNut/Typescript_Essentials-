/**============================================================
 **    ☠️☠️ TYPE ANNOTATIONS- making properties optional (?) ☠️☠️
 *=============================================================**/

//Observe the below object:

type guitarist = {
  name: string;
  active: boolean;
  age: string | number; // union
  albums: {
    //array of objects type
    year: number;
    names: string[];
  }[];
};

let niviObj: guitarist = {
  name: "Nivedita",
  active: true,
  age: "99", //! removing this gives error
  albums: [
    {
      year: 1999,
      names: ["Heaven death", "poor rich"],
    },
    {
      year: 2013,
      names: ["car bike", "die hoomans"],
    },
  ],
};

//* now the use case is that :
//* since the guitarits can be a-hole sometimes, they dont tell age.
//* in normal cases, if we dont provide age, then we will get error.
//error:
//Property 'age' is missing in type '{ name: string; active: true; albums: { year: number; names: string[]; }[]; }'
//but required in type 'guitarist'.
//* so, lets make the age optional with a painist example.

type pianist = {
  name: string;
  active: boolean;
  age?: string | number; // optional: hover over to see : (property) age?: string | number | undefined
  albums: {
    //array of objects type
    year: number;
    names: string[];
  }[];
};

let rehmanObj: pianist = {
  albums: [
    {
      year: 2009,
      names: ["Oing ping", "Gunda raaz"],
    },
    {
      year: 1992,
      names: ["Maut ka badla", "filth of king"],
    },
  ],
  age: "999", //! removing this DOES NOT give error
  name: "A.R Rehman",
  active: true, //! removing this gives error
};

/**================================================================================================
 * ?  SUMMARY
 * ?-----------------
 *
 * ! 1. Use ? before colons (:) to make the property optional while defining type defn.
 * ! 2. More than 1 property can be marked optional in a type defn defined for an object.
 * ! 3. Mandatory properties are always checked for their existence in the object as per its type defn.
 * ! 4. If an optional property exists in an object, its type is always checked as per type defn.
 *================================================================================================**/
