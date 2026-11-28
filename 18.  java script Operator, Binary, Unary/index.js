<h3>JavaScript Arithmetic Operators</h3>

let mangoPrice = 40;
let applePrice = 20;
console.log(mangoPrice + applePrice);   addition + operator
console.log(mangoPrice - applePrice);   subtraction - operator
console.log(mangoPrice * applePrice);   multiplication * operator
console.log(mangoPrice / applePrice);   division / operator
console.log(mangoPrice % applePrice);   modulus % operator

++	Increment
--	Decrement
// ** exponent
console.log(5 ** 2);

let num = "100";
console.log(typeof +num); Number 

// Binary operator
let mango = 40;
let apple = 20;
console.log(mango + apple); 
console.log(mango - apple);   
console.log(mango * apple);   
console.log(mango / apple);   
console.log(mango % apple); 

let firstNumber = 8;
let secondNumber = 2;
let result = firstNumber ** secondNumber; // 	Exponentiation operator (ES2016)
console.log(result);

Operand	Operator Operand
100	      +	     50


// unary operator

// console.log(-a);  negation operator
// console.log(a+);  unary + operator

let price1 = 20;
let price2 = -price1;
console.log(price2);

let fNumber = 5;
let sNumber = -fNumber;
console.log(sNumber);

let match = 50;
match = -match;
console.log(match);




JavaScript-এ Operand (অপারেন্ড) কী?
  
যেকোনো গাণিতিক বা যৌক্তিক কাজে অপারেটর যার ওপর কাজ করে, তাকেই Operand বলে।

যেমন: 10 + 5 — এখানে + হলো Operator, আর 10 ও 5 হলো দুটি Operand।





অপারেন্ডের সংখ্যার ভিত্তিতে অপারেটর ২ রকম হয়:

Binary Operator (দুটি অপারেন্ড নেয়): অপারেটরের দুই পাশে দুটি মান থাকে।

উদাহরণ: 10 + 5 (বাম অপারেন্ড 10, ডান অপারেন্ড 5), a * b, 20 / 4।



Unary Operator (একটি অপারেন্ড নেয়): অপারেটরের সাথে একটিমাত্র মান থাকে।

উদাহরণ: -5 (চিহ্ন উল্টানো), +"10" (String-কে Number বানানো), x++ (মান ১ বাড়ানো)।





let secondNumber = -5; 

-5 অংশটিতে - চিহ্নটি একটি Unary Negation Operator হিসেবেই কাজ করছে।


প্রথমে 5 হলো একটি সাধারণ ধনাত্মক সংখ্যা (Operand)।

তার ঠিক বাম পাশে - বসার কারণে এটি Unary Negation Operator হিসেবে কাজ করে 5-কে ঋণাত্মক -5-এ রূপান্তর করে।

এরপর = (Assignment Operator) সেই -5 মানটিকে secondNumber ভ্যারিয়েবলের ভেতরে জমা রাখে।


let secondNumber = -5; — এখানে - হলো Unary Negation Operator (কারণ এর ডান পাশে একটিমাত্র অপারেন্ড 5 আছে; বাম পাশে কোনো সংখ্যা নেই)।

let result = 10 - 5; — এখানে - হলো Binary Subtraction Operator (কারণ এর বাম পাশে 10 এবং ডান পাশে 5—মোট দুটি অপারেন্ড আছে)।


এমনকি:

let a = 5;
let b = -a; // এখানে - হলো Unary Negation Operator, আর b-তে জমা হবে -5


অথবা উল্টোটাও হয়:
let a = -5;
let b = -a; // -(-5) হয়ে b-তে জমা হবে +5




let firstNumber = -5;
let secondNumber = -firstNumber; // -(-5) হয়ে +5 হবে

console.log(secondNumber); // 5

-x (Unary Negation): চিহ্ন উল্টায় (-5 হলে +5 হয়, আর +5 হলে -5 হয়)।

+x (Unary Plus): চিহ্ন বদলায় না; শুধু মানকে Number-এ রূপান্তর করে (যেমন +"10" হলে 10 হয়, আর +-5 বা +"-5" হলে -5-ই থাকে)।


 let firstNumber = 5;
 let secondNumber = -firstNumber;

 console.log(secondNumber);

প্রথমে firstNumber ভ্যারিয়েবলে ধনাত্মক 5 জমা হলো।

পরের লাইনে -firstNumber চালানো হলে - অপারেটরটি 5-এর চিহ্ন উল্টে দিয়ে -5 তৈরি করল।

সেই -5 মানটি গিয়ে জমা হলো secondNumber-এ।

তাই console.log(secondNumber) চালালে আউটপুট আসবে -5।







JavaScript-এর সব Arithmetic Operators (বিস্তারিত)

১) Addition (+) — যোগ (এবং জোড়া লাগানো)

দুটি সংখ্যা যোগ করে। তবে JavaScript-এ + অপারেটরটির একটি বিশেষ আচরণ আছে:

দুটি অপারেন্ডই সংখ্যা হলে: সাধারণ যোগ হয়।

10 + 5 → 15


যেকোনো একটি অপারেন্ড String হলে: JavaScript সংখ্যাটিকেও String বানিয়ে পাশাপাশি জোড়া লাগিয়ে দেয় (Concatenation)।

"10" + 5 → "105"10 + 5 + "5" → "155" (বাম থেকে ডানে চলে: আগে 10 + 5 = 15, তারপর 15 + "5" = "155")



২) Subtraction (-) — বিয়োগ

বাম অপারেন্ড থেকে ডান অপারেন্ড বিয়োগ করে।

10 - 4 → 6

String থাকলে কী হয়? - অপারেটর কখনো জোড়া লাগায় না; সে String-কে সংখ্যা বানানোর চেষ্টা করে।

"10" - 4 → 6"hello" - 4 → NaN ("hello"-কে সংখ্যা বানানো যায় না বলে)




৩) Multiplication (*) — গুণ

দুটি অপারেন্ড গুণ করে।

6 * 3 → 18

"6" * "3" → 18 (String-কে সংখ্যায় রূপান্তর করে গুণ করে)


৪) Division (/) — ভাগ
বাম অপারেন্ডকে ডান অপারেন্ড দিয়ে ভাগ করে।

JavaScript-এ ভাগ করলে সবসময় দশমিকসহ আসল ভাগফল পাওয়া যায়:5 / 2 → 2.510 / 2 → 5

০ (শূন্য) দিয়ে ভাগ করলে কী হয়? অন্য অনেক ভাষায় প্রোগ্রাম ক্র্যাশ বা এরর দেয়, কিন্তু JavaScript এরর না

দিয়ে বিশেষ মান দেয়:10 / 0 → Infinity-10 / 0 → -Infinity0 / 0 → NaN



৫) Remainder / Modulo (%) — ভাগশেষ

ভাগ করার পর যা অবশিষ্ট থাকে, সেটিই দেয়।

10 % 3 → 1 (কারণ ৩ দিয়ে ১০-কে ভাগ করলে ৩ তিরিকে ৯, হাতে থাকে ১)

10 % 2 → 0 (জোড়-বিজোড় বের করতে খুব কাজে লাগে)

চিহ্ন কার ওপর নির্ভর করে? বাম অপারেন্ডের (ভাজ্য) চিহ্ন অনুযায়ী ভাগশেষের চিহ্ন হয়:-10 % 3 → -110 % -3 → 1

দশমিক সংখ্যাতেও কাজ করে: 5.5 % 2 → 1.5



৬) Exponentiation (**) — ঘাত বা পাওয়ারপ্রথম অপারেন্ডের পাওয়ার হিসেবে দ্বিতীয় অপারেন্ডকে বসায় (a ** b মানে a^b)।

2 ** 3 → 8   2 * 2    5 ** 2 → 25




৭) Increment (++) এবং Decrement (--) — ১ বাড়ানো ও ১ কমানো 

এগুলো Unary Operator (একটি ভ্যারিয়েবল অপারেন্ডের ওপর কাজ করে; সরাসরি সংখ্যা যেমন 5++ লিখলে SyntaxError দেবে)।

এখানে দুটি ধরন খুব গুরুত্বপূর্ণ—Postfix এবং Prefix:

Postfix (x++ / x--): আগে বর্তমান মান ব্যবহার করে, পরে ১ বাড়ায় বা কমায়।

let a = 5;
let b = a++; // আগে b-তে 5 বসবে, তারপর a হয়ে যাবে 6
console.log(b); // 5
console.log(a); // 6


prefix (++x / --x): আগে ১ বাড়ায় বা কমায়, তারপর নতুন মান ব্যবহার করে।


let a = 5;
let b = ++a; // আগে a হয়ে যাবে 6, তারপর b-তে 6 বসবে
console.log(b); // 6
console.log(a); // 6



৮) Unary Plus (+x) এবং Unary Negation (-x)

Unary Plus (+x): যেকোনো অপারেন্ডকে দ্রুত Number-এ রূপান্তর করে।
  
+"25" → 25 (এখন এটি সংখ্যা)
  
+true → 1  +false → 0   +null → 0  +undefined → NaN


Unary Negation (-x): সংখ্যায় রূপান্তর করে তার চিহ্ন উল্টে দেয়।
let n = 10; console.log(-n); → -10-"10" → -10
