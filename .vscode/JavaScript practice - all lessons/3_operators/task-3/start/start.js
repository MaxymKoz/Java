/* сравнение чисел */

const a = 17;
const b = 5;
console.log("a > b is " , a>b );//true
console.log("a <= b is " , a<=b);//false
console.log("a == b is " , a==b);//false
console.log("a != b is " , a!=b);//true

/* сравнение строк */

console.log("'a' < 'b' is " , 'a'<'b');//true
console.log("'ab' > 'a' is " , 'ab'> 'a');//true
console.log("'ba' > 'b' is ", 'ba'>'b');//true
console.log("'ba' > 'c' is ", 'ba'>'c');//false

/* строгое сравнение */

console.log("17 === 1 is ", + 17 === 1);//false
console.log("17 === 17 is ", + 17 === 17);//true
console.log("17 === true is ", + 17 === true);//false
console.log("'0' === '' is ", + '0' === '');//false
console.log("true === false is ", + true === false );//false
console.log("true === true is ", + true === true );//true //but it say false
null === undefined;
false === 0

/* нестрогое сравнение */

console.log("17 == '17' is " ,+ 17 == '17');//true
console.log(" '0' == '' is ", + '0' == '');//true
console.log(" 0 == '' is ", + 0 == '');//true
console.log("null == undefined is ", + null == undefined);//false because 0 and condition 0
console.log("false == 0 is ",false == 0);//true

/* осторожно c null и undefined */

console.log("undefined == null is " , + undefined == null);//false
console.log("undefined == 0 is ", + undefined == 0 );//false
console.log("null == 0 is", + null == 0);//true
console.log("undefined < 0 is", + undefined < 0);//false
console.log("undefined > 0 is", + undefined > 0);//false
console.log("undefined === 0 is", + undefined == 0);//false
