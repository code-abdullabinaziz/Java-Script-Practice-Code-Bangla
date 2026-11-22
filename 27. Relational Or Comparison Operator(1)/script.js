JavaScript-এ Comparison (তুলনা করার অপারেটর) হলো কন্ডিশন (if / else) বা ফিল্টারিংয়ের মূল ভিত্তি।


Strict Equality বনাম Loose Equality (=== vs ==)
  
JavaScript-এ সমতা যাচাই করার সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো Strict (===, !==) এবং Loose (==, !=) এর পার্থক্য।

ক) Strict Equality (===) ও Strict Inequality (!==)

কোনো Type Conversion (টাইপ বদল) না করেই মান এবং ডেটা টাইপ—দুটোই মিলছে কি না তা চেক করে।

যেমন: 5 === "5" হলো false (কারণ একটা Number, আরেকটা String)।

খ) Loose Equality (==) ও Loose Inequality (!=)

ডেটা টাইপ ভিন্ন হলে JavaScript নিজে থেকেই এক টাইপকে আরেক টাইপে রূপান্তর করে (Type Coercion) তারপর তুলনা করে।

এতে অনেক সময় অপ্রত্যাশিত রেজাল্ট আসে—তাই বাস্তব কোডে === ও !== ব্যবহার করাই সবচেয়ে নিরাপদ।


console.log(5 === 5);      // true
console.log(5 === "5");    // false (টাইপ ভিন্ন)
console.log(5 == "5");     // true  ("5" কে 5 বানিয়ে তুলনা করল)

console.log(0 === false);  // false
console.log(0 == false);   // true

console.log(null === undefined); // false
console.log(null == undefined);  // true  (শুধু এই দুটোই == এ true দেয়)

console.log("" === false); // false
console.log("" == false);  // true




২. Relational Operators (>, <, >=, <=)
  
সংখ্যা বা স্ট্রিংয়ের ক্রম (কোনটা বড়, ছোট, বা সমান) যাচাই করতে এগুলো ব্যবহৃত হয়:

a > b : a, b-এর চেয়ে বড় কি না

a < b : a, b-এর চেয়ে ছোট কি না

a >= b : a, b-এর চেয়ে বড় অথবা সমান কি না

a <= b : a, b-এর চেয়ে ছোট অথবা সমান কি না


let score = 80;

console.log(score >= 80); // true  (80 বা তার বেশি)

console.log(score > 80);  // false (80 এর চেয়ে বড় না)

console.log(10 <= 20);    // true


৩. Comparison-এর ভেতরে Type Coercion-এর কিছু কমন ফাঁদ

তুলনা করার সময় JavaScript কীভাবে মান বদলায়, সেটা জানা থাকলে বাগ (bug) ধরা সহজ হয়:

String vs Number:

"10" > 2    "10" সংখ্যা হয়ে 2-এর চেয়ে বড় ধরা হয় (true)।

"abc" > 5   "abc" সংখ্যায় রূপান্তর হলে NaN হয়, আর NaN-এর সাথে <, <=, >, >= যেকোনো তুলনাই false দেয়।






String vs String (Lexicographical / Character Code Order):

দুটোই স্ট্রিং হলে অক্ষরের Unicode / ASCII মান অনুযায়ী তুলনা হয়, সংখ্যার মান অনুযায়ী না!

যেমন "10" < "2" হলো true, কারণ প্রথম অক্ষর "1"-এর কোড "2"-এর চেয়ে কম (অভিধানের মতো বা ASCII অনুযায়ী)।

বড় হাতের অক্ষর ("A" = 65) ছোট হাতের অক্ষর ("a" = 97)-এর চেয়ে ছোট, তাই "Apple" < "banana" হলো true।




let cityOne = "Rangpur";
let cityTwo = "Rangpur";
let cityThree = "rangpur";

console.log(cityOne === cityTwo);   // true (দুটোই একদম একই)
console.log(cityOne === cityThree); // false (বড় হাতের 'R' আর ছোট হাতের 'r' এক না)
console.log(cityOne !== cityThree); // true






NaN এর অদ্ভুত নিয়ম:

NaN নিজের সাথেও সমান নয়! NaN === NaN হলো false। কোনো মান NaN কি না তা বোঝার জন্য Number.isNaN(...) ব্যবহার করতে হয়।


console.log("10" < "2");         // true  (স্ট্রিং হিসেবে তুলনা)
console.log("10" < 2);           // false ("10" -> 10, 10 < 2 false)
console.log(NaN === NaN);        // false
console.log(Number.isNaN(NaN));  // true



// আগে 5 + 5 = 10, তারপর 10 === 10 -> true
console.log(5 + 5 === 10);

// আগে 10 > 5 (true) এবং 3 < 2 (false), তারপর true && false -> false
console.log(10 > 5 && 3 < 2);


ভালো অভ্যাস (Best Practices)

সবসময় === এবং !== ব্যবহার করা লাগবে, যেন অপ্রত্যাশিত টাইপ রূপান্তরের কারণে ভুল কন্ডিশন না চলে।

ইনপুট বা ভেরিয়েবল তুলনা করার আগে টাইপ পরিষ্কার ্রাখতে হবে (যেমন স্ট্রিং ইনপুটকে Number(...) দিয়ে সংখ্যায় নিয়ে আসা)।

জটিল তুলনায় ব্র্যাকেট (...) ব্যবহার করুন, যেন কোড পড়লেই বোঝা যায় কোন অংশটা আগে কাজ করছে।




Strict বনাম Loose সমতা: সবসময় === এবং !== ব্যবহার করা নিরাপদ, কারণ এগুলো টাইপ বদলায় না। == আর != টাইপ বদলে মিলিয়ে দেখতে গিয়ে অনেক সময় অদ্ভুত ফল দেয় 
  
(যেমন "5" == 5 বা 0 == false সত্য হয়ে যায়)।

বড়-ছোটর তুলনা: >, <, >=, <= দিয়ে সংখ্যা বা ক্রম যাচাই করা হয়।

স্ট্রিং তুলনার ফাঁদ: দুটো স্ট্রিং তুলনা করলে অক্ষরের কোড অনুযায়ী হিসাব হয়, সংখ্যার মান অনুযায়ী নয়। তাই "10" < "2" সত্য হয়, কারণ "1"-এর কোড "2"-এর চেয়ে ছোট।

NaN এর নিয়ম: NaN নিজের সাথেও সমান না, তাই NaN === NaN মিথ্যা হয়। কোনো মান NaN কি না তা দেখতে Number.isNaN(...) ব্যবহার করতে হয়।

কাজের ক্রম: আগে গণিতের হিসাব (*, /, %, তারপর +, -), তারপর তুলনা (>, <, ===, !==), তারপর লজিক্যাল কাজ (!, তারপর &&, তারপর ||) হয়। 

সন্দেহ হলে ব্র্যাকেট দিয়ে আলাদা করে নেওয়াই ভালো।



// let num1 = 20;
// let num2 = 25;
// console.log(num1 > num2); false

// console.log("65" > "65"); false

// let num1 = 20;
// let num2 = 25;
// console.log(num1 < num2); true

// console.log("65" < 65); false


// let num1 = 20;
// let num2 = 25;
// console.log(num1 >= num2); false

// let num1 = 20;
// let num2 = 20;
// console.log(num1 <= num2); true


// console.log(20==20); true
// console.log(20=="20"); true

// console.log(20==40); false
// console.log("20"== 40); false

// console.log(0 == false); true
// console.log(1 == true); true

// console.log(true == true); true
// console.log(false == false); true
// console.log(null == null); true
// console.log("Abdullah" == "Abdullah"); true
// console.log("01" == 1); true
// console.log("Hello" == 123); false


// console.log(20 != "30"); true
// console.log(25 != 20); true
// console.log(25 != 25); false
// console.log(null != null); false
// console.log("Hello" != 123); true


console.log("2" > "12"); 

যখন  দুটি String-এর মধ্যে তুলোনা করা হয়, জাভাস্ক্রিপ্ট সেগুলোকে সংখ্যা হিসেবে দেখে না।

সে দেখে তাদের প্রথম ক্যারেক্টার বা অক্ষরের Unicode (ডিকশনারি অর্ডার) মান।


প্রথম স্ট্রিংয়ের প্রথম অক্ষর: "2"

দ্বিতীয় স্ট্রিংয়ের প্রথম অক্ষর: "1"

যেহেতু ডিকশনারি বা ইউনিকোড অনুযায়ী "2" এর মান "1" এর চেয়ে বড়, 
তাই জাভাস্ক্রিপ্ট আর পরের অক্ষরগুলো চেকই করে না। সে সরাসরি বলে দেয় এটি true।

console.log("5" > "12"); 

console.log(7 > "12"); ➡️ Result: false

জাভাস্ক্রিপ্টের নিয়ম হলো: যদি একপাশে Number থাকে, তবে সে অন্যপাশের String-টিকেও Number-এ রূপান্তর করার চেষ্টা করে।

console.log("apple" > "banana"); ➡️ Result: false'
  
জাভাস্ক্রিপ্ট যখন দুটি স্ট্রিং তুলনা করে, তখন সে প্রতিটি অক্ষরের পেছনে থাকা একটি নির্দিষ্ট সংখ্যা (Unicode) চেক করে।
ইংরেজী বর্ণমালায় অক্ষরগুলো সিরিয়াল অনুযায়ী তাদের মান পায়।

'a' এর মান হলো 97'
'b' এর মান হলো 98'
'c' এর মান হলো 99 (এভাবেই চলতে থাকে...)
  
console.log("a" > "A"); // রেজাল্ট আসবে true

জাভাস্ক্রিপ্টে প্রতিটি অক্ষরের পেছনে একটি সংখ্যা থাকে, যাকে আমরা Unicode বা ASCII ভ্যালু বলি।

ডিকশনারি বা স্ট্রিংয়ের তুলনা এই সংখ্যার ওপর ভিত্তি করেই হয়।

charCodeAt() এর মাধ্যমে ইউনিকোড মান দেখা

এটি সবচেয়ে কমন উপায়। ব্র্যাকেটের ভেতর 0 মানে হলো আমরা স্ট্রিংয়ের প্রথম অক্ষরের মান দেখতে চাই।

// "2" এবং "1" এর তুলনা কেন এমন হয় দেখুন:
console.log("2 এর ইউনিকোড মান:", "2".charCodeAt(0)); // আউটপুট: 50
console.log("1 এর ইউনিকোড মান:", "1".charCodeAt(0)); // আউটপুট: 49
// যেহেতু ৫০ > ৪৯, তাই "2" > "12" এর রেজাল্ট true আসে।
console.log("2" > "12"); // true

বর্ণমালার (Alphabets) ইউনিকোড মান-----------------
  
console.log("a এর মান:", "a".charCodeAt(0)); // আউটপুট: 97
console.log("b এর মান:", "b".charCodeAt(0)); // আউটপুট: 98
console.log("A এর মান:", "A".charCodeAt(0)); // আউটপুট: 65
console.log("B এর মান:", "B".charCodeAt(0)); // আউটপুট: 66


----------
  
জাভাস্ক্রিপ্টে যেকোনো অক্ষরের পেছনে থাকা আসল সংখ্যা বা Unicode মান দেখার জন্য আমরা charCodeAt() মেথড ব্যবহার করি। 

এটি ব্যবহার করলে পরিষ্কার হয়ে যাবে কেন 'b' বড় আর 'a' ছোট।

let word1 = "apple";
let word2 = "banana";

// প্রথম অক্ষরের ইউনিকোড মান বের করা
console.log("a এর মান:", word1.charCodeAt(0)); // আউটপুট: 97
console.log("b এর মান:", word2.charCodeAt(0)); // আউটপুট: 98
console.log(98 > 97); // true, তাই "banana" বড়



console.log("A এর মান:", "A".charCodeAt(0)); // আউটপুট: 65
console.log("a এর মান:", "a".charCodeAt(0)); // আউটপুট: 97
console.log(97 > 65); // true (তাই ছোট হাতের অক্ষর বড় হাতের চেয়ে বড়)


জাভাস্ক্রিপ্টে ইমোজিও কিন্তু এক একটি ক্যারেক্টার! এদেরও ইউনিকোড মান আছে।
console.log("😊".charCodeAt(0)); // আউটপুট: 55357 (অনেক বড় মান)
console.log("😊" > "a");         // আউটপুট: true


-------
  
সরাসরি ইউনিকোড দিয়ে স্ট্রিং তৈরি করা
console.log(String.fromCharCode(65)); // আউটপুট: "A"
console.log(String.fromCharCode(97)); // আউটপুট: "a"
console.log(String.fromCharCode(50)); // আউটপুট: "2"
