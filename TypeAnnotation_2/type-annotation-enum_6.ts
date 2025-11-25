/**================================================================================================
 **                ☠️☠️  Enum type  ☠️☠️
 *================================================================================================**/

//! Enums define collection of related values as named constants.

//! use keyword 'enum' and its identifier should be pascal case -e.g. 'WeekDaysOfMonth'

//! THREE types of enums : numerals, Strings, Heterogenous

//* 1. Numeric enums : defining a numeric enum

enum DaysOfWeek {
  MONDAY , //0 {enum auto starts with 0 if not initialized explicitly}
  TUESDAY, //1
  WEDNESDAY, //2
  THURSDAY, //3
  FRIDAY, //4
  SATURDAY, //5
  SUNDAY, //6
  "NOT-FOUND", //7
}

//* Ways to access all types of enums (DOT notation and ARRAY notation)

console.log(DaysOfWeek.MONDAY); //0
console.log(DaysOfWeek["MONDAY"]); //0
console.log(DaysOfWeek["NOT-FOUND"]); //7

//----------------------------------------------------------------------------

//defining a numeric enum with explicit numbering - example 1

enum DaysOfHoliday {
  HOLI = 1,
  DIWALI, //2
  CHATTAH, //3
  CHRITSMAS, //4
  GURUNANAK_JAYANTI, //5
}

console.log(DaysOfHoliday.HOLI); //1
console.log(DaysOfHoliday.GURUNANAK_JAYANTI); //5

//----------------------------------------------------------------------------

//defining a numeric enum with explicit numbering - example 2

enum ListOfGrocery {
  CABBAGE = 10,
  LIGHTS = 20,
  LAMP = 30,
  CANDLES = 40,
  KITES, //41
}

console.log(ListOfGrocery.CABBAGE); //10
console.log(ListOfGrocery.CANDLES); //40
console.log(ListOfGrocery.KITES); //41

//-----------------------------------------------------------------------------

//! concept of lookup and reverse lookup in numeric enums

console.log(DaysOfWeek["MONDAY"]); //0 [Look-up]
console.log(DaysOfWeek["NOT-FOUND"]); //7 [Look-up]
console.log(DaysOfWeek[0]); //'MONDAY'  [Reverse-lookup]
console.log(DaysOfWeek[7]); //'NOT-FOUND'  [Reverse-lookup]

//-----------------------------------------------------------------------------

//! CREATING ENUM TYPE FOR VARIABLES and accessing enum values

let today: DaysOfWeek = DaysOfWeek.MONDAY;
console.log(today); //0
today = DaysOfWeek.SUNDAY; //allowed
console.log(today); //6

//😏 Allowed but illogical to use in real world :
today = 2; //allowed to use directly number (only those present in Enum)
console.log(today); //2

//💀 Error in case of revrese look up as revrese look up will give string (and not Enum Type).
//today = DaysOfWeek[0]; //Error- Type 'string' is not assignable to type 'DaysOfWeek'.

//-----------------------------------------------------------------------------

//* 2. String enums

enum Powers {
  ultra = "CEO",
  pro = "Manager",
  great = "Team-lead",
  "little litle" = "Peon",
}

//! CREATING ENUM TYPE FOR VARIABLES

let mypower: Powers = Powers.ultra;
console.log("🚀 ~ mypower:", mypower)
mypower = Powers["little litle"];
console.log("🚀 ~ mypower(updated):", mypower)
//ypower = 1; //not allowed : Type '1' is not assignable to type 'Powers'.

//! Keep in mind that string enum members do not get a reverse lookup generated at all.
console.log(Powers["ultra"]); //lookup concept
console.log(Powers["Peon"]); //reverse-lookup concept : not allowed : undefined

//--------------------------------------------------------------------------------

//* 3. Heterogeneous enums

enum LoginType {
  github = 1,
  google = "two",
  emailPassword = 99,
}

let userLoginType: LoginType = LoginType.github;
console.log("🚀 ~ userLoginType:", userLoginType); //1
userLoginType = 99;
console.log("🚀 ~ userLoginType:", userLoginType); //99
userLoginType = LoginType.google;
console.log("🚀 ~ userLoginType:", userLoginType); //two

/**================================================================================================
 **   INTERVIEW QUESTION : Why we should not use Enums in professional development?
 *================================================================================================**/

//? https://www.youtube.com/watch?v=3aUHskjF7pc
