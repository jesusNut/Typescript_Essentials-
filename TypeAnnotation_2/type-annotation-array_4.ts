

/**==============================================================================
 **    ☠️☠️ TYPE ANNOTATIONS- Array type [Collection of Single Data Type] ☠️☠️
 *===============================================================================**/


/**======================
 *?    APPROACH - 1
 *========================**/


//* create an array where all data will be string
//! always advisable to use an empty array to initialize

let fruitsArr : string[] = [];
fruitsArr[0] = 'mango';
fruitsArr[1] = 'watermelon';
fruitsArr[2] = 'kiwi';
//fruitsArr[3] = 123; //not allowed : Type 'number' is not assignable to type 'string'.
//fruitsArr[3] = true; //not allowed : Type 'boolean' is not assignable to type 'string'.
// fruitsArr[3] = null; //not-allowed : Type 'null' is not assignable to type 'string'.
// fruitsArr[3] = undefined; //not-allowed : Type 'undefined' is not assignable to type 'string'.


let marksArr : number[] = [1,2,3,4,5,6,7,8,9]
marksArr[0] = 999
marksArr[1] = parseInt('888')
//marksArr[2] = '999' //not-allowed : Type 'string' is not assignable to type 'number'

console.log("🚀 ~ marksArr:", marksArr)


/**======================
 *?    APPROACH - 2
 *========================**/


//* create an array where all data will be string
//! always advisable to use an empty array to initialize


let sportsArr : Array<string> = [];
sportsArr[0] = 'kabbadi';
sportsArr[1] = 'hockey';
sportsArr[2] = 'cricket';
//sportsArr[3] = 999; //not-allowed: Type 'number' is not assignable to type 'string'.

