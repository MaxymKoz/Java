//code should be finished ;)

console.log("17 to string is  " +  String (17)) ;
console.log("-17.17 to string is " + String(-17.77));
console.log("false to string is "+ String (false));
console.log("null to string is " + String (null));
console.log("undefined to string is "+ String (undefined));
console.log("0 to string is " + String (0));

//all string is text so in condsole it will see string ' '

/* === */

console.log("'17' to number is "+ Number(17));
console.log("true to number is "+ Number(true));//1(true is always 1)
console.log("false to number is " + Number(false));//0(false is always 0)
console.log("null to number is " + Number(null));//null = 0
console.log("undefined to number is " + Number(undefined));//Nan 
console.log("'   20   ' to number is "+ Number('20'));//String to number 20
console.log("'      ' to number is "+ Number(''));// prompt'' will always be 0
console.log("'   30d   ' to number is "+ Number('30d'));//Nan

//all what have numbers will producing to number

/* == */
console.log("null to boolean is "+ Boolean(null));// false
console.log("undefined to boolean is "+ Boolean(undefined));//true
console.log("0 to boolean is "+ Boolean(0));//false
console.log("-0 to boolean is "+ Boolean(-0));//false
console.log("NaN to boolean is "+ Boolean(NaN));//false
console.log("'' to boolean is "+ Boolean(''));//false
console.log("' ' to boolean is "+ Boolean(' '));//true prompt is 0 but in boolean its true
console.log("17 to boolean is "+ Boolean(17));//true
console.log("'Hello' to boolean is "+ Boolean('Hello'));//true

//all this IS or have something its true