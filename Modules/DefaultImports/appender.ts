//********** WORKING WITH "DEFAULT EXPORT"

//todo :  1. Default exports are useful when you want to export only one main thing from a file.
//todo       It is like marking that one thing as the most important to share.
//todo    2. When importing a default export in another file, you can give it any name you want during the import,
//todo       and you don't need to use curly braces {}.
//todo    3. A file can have only one default export.

export let appenderInfo: string = "I am the variable for appender bro !!!";

function appendString(data: string) {
  return `You have received a gift card of $ 9000.00 from ${data} Ji...`;
}

// export default appenderInfo; //!ERROR : A module cannot have multiple default exports.

export default appendString;


