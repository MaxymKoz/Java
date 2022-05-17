// Унарный плюс приводит операнд к числу
console.log("+17:", + 17);
console.log("+77:", + 77);

// Бинарный плюс складывает строки или прибавляет числа
console.log("10 + '5" , 10 + '5');
console.log( "'some' + 'text', 'some'+ 'text'");

// Математические операции с undefined возвращают NaN
console.log("undefined + 1:", undefined + 1);
console.log("null + 8", null + 8);
console.log("undefined + '5'", undefined + '5');
console.log("7- null",7 - null);
console.log("5 - undefined", 5 - undefined);
console.log("'text' + null", 'text' + null);      

// Постфиксная и префиксная форма записи
let num = 17;
console.log( "++num",++num);//17
console.log("num++",num++);//18 after 17

// математические операторы приводят операнды к числам
const a = 17;// vars
const b = -a;//vars-

console.log(" '24' /4", '24' /4);//6 because of numbers

console.log("18* '3'", 18* '3');//18*3=54 numbers

console.log(" '9' - '3'", '9' - '3');//9-3=6 numbers

console.log(" 'seventeen' / 3", 'seventeen' / 3);// Nan ''+ numbers

console.log(" 4* 'four'", 4*'four');//Nan numbers

console.log("17 / 0", 17/0);// inf numbers

console.log("10+ 'seven'", 10+ 'seven');//Nan numbers

console.log("undefined +1", undefined +1); //Nan numbers

console.log("null + 8", null + 8);//8 numbers

console.log("undefined + '5'", undefined+ '5');//string ''// //undefined5

console("'text' + 'null'", 'text' + 'null');//textnull because its string data''