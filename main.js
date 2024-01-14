console.log("hatem is my name ") ;


// Number week 4 .. 



/* 
 Number
  - Double Precision
  - Syntactic Sugar "_"
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/ 

console.log(1000000); 
console.log(1_000_000);  // _ مهملة ما بين الأرقام بنحطها للتنظيم بس 
console.log(1e6);  // واحد وجنبه 6 أصفار 
console.log(10 ** 6 ) ;  
console.log(10*10*10*10*10*10) ; 
console.log(1000000.00); 
console.log(Number.MAX_SAFE_INTEGER);  // أعلي رقم ممكن أستخدمه في الجافا اسكريبت وهيدي نتايج أمنة 
console.log(Number.MAX_VALUE);//أعلي رقم في الجافا اسكريبت ولا يمكن جمع عليه أي شئ 
console.log(Number.MAX_VALUE+555555555) ;  // هيدينا أعلي رقم بردوه 


/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/

console.log((100).toString());   // هيحول لنص 
console.log(100..toString()); 
console.log(100.10.toString());  

// tostring() >> بتحول الرقم لنص 

console.log(100.554555.toFixed(2));
// بتحول الرقم الي نص وبتجيب الرقم الي بعد العلامة علي حسب انا مديها كام يعنب لو ادتها 2 هتجيب الرقم ورقمين بعد العلامة 


console.log(Number("100 Osama")); //Nan 
console.log(+"100 Osama"); // Nan 
console.log(parseInt("100 Osama")); // 100 
console.log(parseInt("Osama 100 Osama")); // Nan 
console.log(parseInt("100.500 Osama")); // 100
console.log(parseFloat("100.500 Osama")); //100.5

console.log(Number.isInteger("100")); //false 
console.log(Number.isInteger(100.500)); //false 
console.log(Number.isInteger(100)); // true
console.log(Number.isNaN("Osama" / 20)); // true  


console.log("hatem") ; 
/*
  Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]
*/

console.log(Math.round(99.2));
console.log(Math.round(99.5));
// بتشوف الرقم الي بعد العلامة لو اكبر من النص هتقربه ل 1 لو اقل من النص هينزل للصفر والرقم الصحيح يفضل زي ما هو 
console.log(Math.ceil(99.2));

// سقف  يعني اعلي رقم بعيدا عن الرقم الي بعد العلامة 
console.log(Math.floor(99.9));
// أرض  يعني اقل رقم بعيدا عن الرقم الي بعد العلامة 
console.log(Math.min(10, 20, 100, -100, 90)); 

// بيجيب اقل رقم في مجموعة الارقام 
console.log(Math.max(10, 20, 100, -100, 90));
// بيجيب اعلي رقم في مجموعة الارقام 
console.log(Math.pow(2, 4)); // 2 ** 4 
console.log(Math.random()); // بيجيب رقم عشوائي 
console.log(Math.trunc(99.5)); // بتشيل الرقم العشري خالص  


console.log("HAtem") ; 


/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5; //200.5
let c = 1e2; //100
let d = 2.4; 

// Find Smallest Number In All Variables And Return Integer      
console.log(Math.trunc(Math.min(a,b,c,d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a,Math.floor(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));

// Use Variables b + d To Get This Valus
console.log((Math.floor(b)/Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(Math.floor(b)/Math.ceil(d))); // 67 => Number



console.log("Hatem") ; 