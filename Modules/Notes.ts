
//* Using Modules:

// Make two ts files in a project and use the same variable name in both.
// We will get error - "Cannot redeclare block-scoped variable 'XXX'.", why??? 
// because if something is not specified as a module in TS Or 
// if something is not inside a module in TS,
// it is considered to be in global scope. Thats why we use modules.

// A module is a way to create a group of related variables, classes, interfaces, functions, etc. 

// A module is created by using the 'export' keyword and can be used in other modules by using the 'import' keyword.

// A module executes within its own scope, not in the global scope. 
// It means that when you declare variables, functions, classes, interfaces, etc., in a module, 
// they are not visible outside the module unless you explicitly export them using export statement.

// On the other hand, if you want to access variables, functions, classes, etc., from a module,
// you need to import them using the import statement.


// https://www.digitalocean.com/community/tutorials/how-to-use-modules-in-typescript [BEST]
// https://www.scaler.com/topics/typescript/modules-in-typescript/
// https://www.typescripttutorial.net/typescript-tutorial/typescript-modules/

//! TypeScript shares the same module concept with the ES6 module in JS.

//* Only difference is that with JS we need to use file extension in relative path with import statement WHILE
//* its not required in TS.

/**================================================================
 **    ☠️☠️ Usage of 'module' option in tsconfig.js file☠️☠️
 *=================================================================**/

//? https://www.youtube.com/watch?v=TXcFnsY5aqQ [VVI]

//! module = commonJS/es2015/es2020/ESNext only impacts the compiled js code.
//! While writing the TS code, only 'import' and 'export' keywords should be used.


/**================================================================
**   ☠️☠️ Named Import vs default import (Same concept as JS)☠️☠️
*================================================================**/


/**================================================================
**   ☠️☠️ Concept of using an index file (used in Playwright)☠️☠️
*================================================================**/

//? https://medium.com/@bobjunior542/maximize-typescript-productivity-use-the-index-file-now-cac2f4f4d1ed

/**================================================================
**   ☠️☠️ When to use {} while importing and when not to use ☠️☠️
*================================================================**/

//? https://www.geeksforgeeks.org/when-should-we-use-curly-braces-for-es6-import/
//? https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import