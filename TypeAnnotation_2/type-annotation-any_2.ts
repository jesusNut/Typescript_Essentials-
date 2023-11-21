

/**====================================
 **    ☠️☠️ TYPE ANNOTATIONS- ANY type ☠️☠️
 *=====================================**/

 //! Any type : denotes literally any Type of values

 //* USECASES:
 //1. While decaring any variable we don't know what would be the type.
 //2. While we explicitly want any variable to hold any type.

 let inferanytype; //any type inferred as per type-inference concept (hover to see)

 let anyvar : any; 

 anyvar = 1;
 console.log("🚀 ~ anyvar:", anyvar)
 anyvar = '1';
 console.log("🚀 ~ anyvar:", anyvar)
 anyvar = true;
 console.log("🚀 ~ anyvar:", anyvar)
 anyvar = null;
 console.log("🚀 ~ anyvar:", anyvar)
 anyvar = undefined;
 console.log("🚀 ~ anyvar:", anyvar)
 anyvar = [];
 console.log("🚀 ~ anyvar:", anyvar)
 anyvar = {}
 console.log("🚀 ~ anyvar:", anyvar)

 //-------------------------------------------------------------

 let anyArr : any[] = [];

 anyArr[0] = 9;
 anyArr[1] = '9';
 anyArr[2] = true;
 anyArr[3] = null;
 anyArr[4] = undefined;

 console.log("🚀 ~ anyArr:", anyArr)


 //anyArr = 22; //error : Type 'number' is not assignable to type 'any[]'
 

let anyobj : {joggers : any; sweating : any}  = {
    joggers : 55,
    sweating : true
}

 anyobj  = {
    joggers : '55', //allowed
    sweating : {} //allowed
}




 

 


