/**==========================================================
 **    ☠️☠️ TYPE ANNOTATIONS- Literal Type ☠️☠️
 *===========================================================**/

//* If we want to restrict a variable to have a specific literal
//* or a set of literals ONLY.

//! string-literals******************************************************************

//example 1:

let ldata: number | string = "999";
ldata = 999;
ldata = 777;

//in the abobe example, user can assign any nuber or string to variable ldata.

//* I want to create a variable which should hold either a number 999
//*  or a string '999' ONLY.

let ldata2: 999 | "999";
ldata2 = 999;
ldata2 = "999";
// ldata2 = '777'; //not-allowed: Type '"777"' is not assignable to type '"999" | 999'.
// ldata2 = 777; //not-allowed : Type '777' is not assignable to type '"999" | 999'.
// ldata2 = null;  //not-allowed : Type 'null' is not assignable to type '"999" | 999'.
// ldata2 = undefined;  //not-allowed : TType 'undefined' is not assignable to type '"999" | 999'.

//! Real time usecase of string literal.********************************************

//implementation without literal type

function predictor(a: number | string, b : number | string){

    if (typeof(a)==='number' && typeof(b)==='number'){
        console.log("The passed parameters are numbers");
    }

    else if (typeof(a)==='string' && typeof(b)==='string'){
        console.log("The passed parameters are strings");
    }
    else{
        console.log("You idiot...you need to drink coffee i guess...");
    }

}


// predictor(11,22);
// predictor('11','22');
// predictor('11',22);

//implementation with literal type

function predictorWithLietrals(a: number | string, b : number | string, mode : 'as-number'|'as-string'){

    if (mode === 'as-number'){
        console.log("The passed parameters are numbers");
    }

    else if (mode === 'as-string'){
        console.log("The passed parameters are strings");
    }
    else{
        console.log("You idiot...you need to drink coffee i guess...");
    }

}

predictor(11,22);
predictor('11','22');
predictor('11',22);


//! TypeScript also supports boolean and number literal types, e.g.:
type OneToFive = 1 | 2 | 3 | 4 | 5;
type Bools = true | false;