

/**==============================================
 **    ☠️☠️ TYPE ANNOTATIONS- UNION TYPE ☠️☠️
 *===============================================**/


 //*** create a variable which can accept either boolean or string or number

 let udata1 : boolean | number | string ;

 udata1 = 10;
 udata1 = '10';
 udata1 = false;
 //udata1 = null; //not-allowed : Type 'null' is not assignable to type 'string | number | boolean'
 //udata1 = undefined; //not-allowed : Type 'undefined' is not assignable to type 'string | number | boolean'.

 //*** create a variable which can accept either null, undefined or string.

 let udata2 : null | undefined | string;

 udata2 = 'abhishek';
 udata2 = null;
 udata2 = undefined;
 //udata2 = true; //not-allowed : Type 'boolean' is not assignable to type 'string'
