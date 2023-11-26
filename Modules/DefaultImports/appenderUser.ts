

/**================================================================================================
*?    Importing for default exports
*================================================================================================**/

//! 1. The path of the file must NOT be appended with .ts extension.

//! 2.  Name of the exported items and imported items CAN BE DIFFERENT in case of DEFAULT EXPORTS.

import blahblah from './appender'; //* default import
import {appenderInfo} from './appender' //* named import

let appendedString: string = blahblah('Abhishek');
console.log("🚀 ~ appendedString:", appendedString)

console.log(appenderInfo);
