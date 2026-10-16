Number Data Type:

জাভাস্ক্রিপ্টে Number ডাটা টাইপ হলো সবচেয়ে ব্যবহৃত ডাটা টাইপগুলোর মধ্যে একটি। অন্যান্য অনেক 
প্রোগ্রামিং ল্যাঙ্গুয়েজে পূর্ণসংখ্যা (Integer) এবং দশমিক সংখ্যার (Float) জন্য আলাদা আলাদা টাইপ থাকলেও, 
জাভাস্ক্রিপ্টে সব ধরণের সংখ্যার জন্য কেবল একটিই টাইপ থাকে, তা হলো Number টাইপ।

জাভাস্ক্রিপ্টে পূর্ণসংখ্যা দশমিক, সবই "Number" ডেটা টাইপ।

let age = 30;       // Integer (পূর্ণসংখ্যা)
let price = 99.50;  // Floating point (দশমিক সংখ্যা)

console.log(typeof age);   // "number"
console.log(typeof price); // "number"

let a = 10;      // integer
let b = 3.14;    // decimal
let c = -5;      // negative





Number টাইপের মধ্যে ৩টি বিশেষ মান থাকতে পারে যা কোডিং করার সময় সামনে আসবে:

Infinity: কোনো সংখ্যাকে 0 দিয়ে ভাগ করলে বা খুব বড় সংখ্যা হলে এটি আসে।
let result = 50 / 0;
console.log(result);        // আউটপুট: Infinity
console.log(typeof result);  // আউটপুট: number

-Infinity: ঋণাত্মক দিকে অসীম সংখ্যা।
console.log(1 / 0);  // Infinity
console.log(-1 / 0); // -Infinity

শুধু 0 / 0 করলে আউটপুট NaN আসে।



NaN (Not a Number): এটি সবচেয়ে গুরুত্বপূর্ণ। যখন কোনো গাণিতিক কাজ করতে গিয়ে ভুল হয় যেমন: একটি স্ট্রিংয়ের সাথে একটি সংখ্যা বিয়োগ করা), তখন এটি আসে।
let result = "abc" * 5;
console.log(result); // NaN

console.log(10 / 0);       // Infinity
console.log("Hello" - 5);  // NaN (কারণ টেক্সট থেকে সংখ্যা বিয়োগ হয় না)

জাভাস্ক্রিপ্টে একটি নির্দিষ্ট সীমা পর্যন্ত বড় সংখ্যা নিয়ে কাজ করা যায়। সেই সীমার বাইরে 
চলে গেলে জাভাস্ক্রিপ্ট সেটিকে আর সংখ্যা হিসেবে না দেখিয়ে সরাসরি Infinity বলে দেয়।

let bigNumber = 1e308; // ১ এর পরে ৩০৮টি শূন্য
console.log(bigNumber); // এটি একটি বড় সংখ্যা দেখাবে

let tooBig = 1e309;    // আরও বড় সংখ্যা
console.log(tooBig);    // আউটপুট: Infinity




যদি Infinity-র সাথে অন্য কোনো সংখ্যা যোগ বা বিয়োগ করা হয় , তবে ফলাফলও Infinity-ই থাকবে।

console.log(Infinity + 100);      // Infinity
console.log(Infinity * 2);        // Infinity
console.log(100 / Infinity);      // 0 (কোনো বড় সংখ্যা দিয়ে ভাগ করলে ০ এর কাছাকাছি মান আসে)

যদি  Infinity থেকে Infinity বিয়োগ করা হয় 
console.log(Infinity - Infinity); // আউটপুট: NaN (Not a Number)
কারণ অসীম থেকে অসীম বাদ দিলে কত থাকে, তা গণিতেও অনিশ্চিত, তাই জাভাস্ক্রিপ্ট একে NaN বলে দেয়।




জাভাস্ক্রিপ্টে toFixed() এবং toPrecision()—এই মেথডগুলো সব সময় String রিটার্ন করে।

এর কারণ হলো, যখন দশমিকের ঘর নির্দিষ্ট করে দেন (যেমন: ২ ঘর), 
তখন জাভাস্ক্রিপ্ট সেটিকে একটি নির্দিষ্ট ফরম্যাটে দেখানোর জন্য টেক্সট বা স্ট্রিংয়ে রূপান্তর করে ফেলে।

toFixed() Method:
এটি দশমিকের পর কয়টি ঘর দেখতে চাওয়া হসছে তা নির্ধারণ করে এবং ফলাফলটি String হিসেবে দেয়।

let num = 3.456;
let result = num.toFixed(2); 
console.log(result);        
console.log(typeof result);  // "string"

toPrecision()ঃ
এটি দশমিকের আগে এবং পরে মিলিয়ে মোট কয়টি সংখ্যা (Significant digits) থাকবে তা নির্ধারণ করে। এটিও String রিটার্ন করে।

toString(): সংখ্যাকে সরাসরি স্ট্রিংয়ে রূপান্তর করে।

let n = 20;
console.log(typeof n.toString()); // "string"

toExponential(): সংখ্যাকে সায়েন্টিফিক নোটেশনে (যেমন: 1.2e+2) রূপান্তর করে এবং এটিও স্ট্রিং দেয়।

let n = 100;
console.log(n.toExponential());   // "1.0e+2"
console.log(typeof n.toExponential()); // "string"

let num = 3.456;
let result = num.toPrecision(2); 
console.log(result);        
console.log(typeof result);  // "string"

এই স্ট্রিং রেজাল্টটি নিয়ে পুনরায় যোগ-বিয়োগ করার প্রয়োজন হয়, তবে  Number() বা parseFloat() ব্যবহার করে সেটিকে সংখ্যায় ফিরিয়ে নিতে হবে:

let num = 3.456;
let formattedStr = num.toFixed(2); // "3.46" (String)

let backToNum = Number(formattedStr); 
console.log(typeof backToNum); // "number"

toPrecision()

let num = 3.456;
let precisionStr = num.toPrecision(2); // "3.5" (এটি একটি String)

// পুনরায় সংখ্যায় রূপান্তর
let backToNum = Number(precisionStr); 

console.log(backToNum);        // 3.5
console.log(typeof backToNum); // "number"




parseFloat():

let y = "3.14abc";
console.log(parseFloat(y)); // 3.14

parseFloat() ফাংশনটি  এটি কোনো স্ট্রিংয়ের শুরু থেকে সংখ্যা খোঁজা শুরু করে এবং যতক্ষণ পর্যন্ত বৈধ সংখ্যা পায়, ততক্ষণ সেটিকে নিতে থাকে।
parseFloat() যখন স্ট্রিংটিকে পড়া শুরু করে, সে দেখে শুরুতে 3 আছে, তারপর দশমিক . আছে, তারপর 14 আছে। এগুলো সবই বৈধ সংখ্যা, তাই সে এগুলোকে গ্রহণ করে।

যখনই সে a অক্ষরটি পায়, সে বুঝতে পারে এটি আর কোনো সংখ্যা নয়। জাভাস্ক্রিপ্টের নিয়ম অনুযায়ী, parseFloat() কোনো অবৈধ ক্যারেক্টার (যেমন অক্ষর বা চিহ্ন) 
পাওয়া মাত্রই পড়া বন্ধ করে দেয় এবং তার আগে পর্যন্ত যতটুকু সংখ্যা পেয়েছে সেটুকুই রিটার্ন করে।

parseFloat("3.14abc")	3.14	শুরুতে সংখ্যা পেয়েছে, a দেখে থেমে গেছে।
parseFloat("abc3.14")	NaN	শুরুতেই অক্ষর পেয়েছে, তাই কোনো সংখ্যাই খুঁজে পায়নি।
parseFloat("10 20 30")	10	প্রথম সংখ্যা নেওয়ার পর স্পেস পেয়েছে, তাই থেমে গেছে।

যদি এখানে Number(y) ব্যবহার করতেন, তবে রেজাল্ট আসত NaN। কারণ Number() ফাংশনটি পুরো স্ট্রিংটিকে একটি নিখুঁত সংখ্যা হতে হয়।
কিন্তু parseFloat() স্ট্রিংয়ের ভেতর থেকে যতটুকু সম্ভব সংখ্যা বের করে আনার চেষ্টা করে।


let num = "20532";
num = parseFloat(num)
console.log(num);



parseInt():
parseInt() এবং parseFloat() এর কাজ করার ধরন অনেকটা একই রকম—দুজনেই স্ট্রিংয়ের শুরু থেকে সংখ্যা ছেঁকে বের করে আনে।
parseInt() শুধুমাত্র পূর্ণসংখ্যা (Integer) নেয়, দশমিকের পরের অংশ সে ইগনোর করে।

let y = "3.14abc";
console.log(parseInt(y)); // আউটপুট আসবে: 3

console.log(parseInt("abc3.14")); // আউটপুট: NaN
console.log(parseInt("100px"));   // আউটপুট: 100 (শুরুতে সংখ্যা পেয়েছে, তাই কাজ করেছে)

উদাহরণ	  parseInt()	 parseFloat()	    কেন?
"3.14abc" 	3	          3.14	          parseInt দশমিকের পর আর পড়ে না।
"10.50"	    10	        10.5	          parseInt শুধু পূর্ণসংখ্যা নেয়।
"40px"	    40	        40	            দুজনেই শুরুর সংখ্যাটুকু নিতে পারে।
"Hello 10"  NaN         NaN             দুজনেই শুরুতে অক্ষর পেলে হাল ছেড়ে দেয়।





let x1 = 3.14;    // A number with decimals
let y1 = 3;       // A number without decimals

let x2 = 100;         // x is a number

let price = 250;
price = "Hello"; //Dynamic Type Variable  //But Kora Jabe Na
console.log(price)

<h4>Number Type Value</h4>
1. Infinity
2. NaN

let age = 25;
let age2 = 0;
console.log(age / age2);  //Infinity

console.log("hello" / 2); //NaN

<h4>BigInt Type Variable</h4>

let result = 2146574325356474257362547
365n
console.log(result);
console.log(typeof result);




জাভাস্ক্রিপ্টে NaN (Not a Number) হচ্ছে একটা ব্ল্যাকহোল বা ভাইরাসের মতো! এর সাথে যেকোনো গাণিতিক (Mathematical) অপারেশন করতে গেলেই , সে সেটাকেও NaN বানিয়ে দেবে।

সহজ কথায়, NaN এর সাথে যা-ই করা হক না কেন, ঘুরেফিরে উত্তর NaN-ই আসবে।

let virus = NaN;

console.log(virus + 10);  // আউটপুট: NaN (যোগ করলে)
console.log(virus - 5);   // আউটপুট: NaN (বিয়োগ করলে)
console.log(virus * 2);   // আউটপুট: NaN (গুণ করলে)
console.log(virus / 2);   // আউটপুট: NaN (ভাগ করলে)
console.log(virus % 3);   // আউটপুট: NaN (ভাগশেষ বের করলে)

NaN এর সাথে যেকোনো সংখ্যা যোগ, বিয়োগ, গুণ বা ভাগ করলে ফলাফল সবসময় NaN হবে।




জাভাস্ক্রিপ্টের Math অবজেক্ট ব্যবহার করলে
যদি কোনো সংখ্যার বর্গমূল বা পাওয়ার হিসাব করার জন্য জাভাস্ক্রিপ্টের বিল্ট-ইন Math ফাংশনগুলো ব্যবহার করা হয় এবং তাতে NaN পাস করো, তবে রেজাল্ট NaN-ই আসবে।

console.log(Math.sqrt(NaN)); // আউটপুট: NaN (বর্গমূল করতে গেলে)
console.log(Math.abs(NaN));  // আউটপুট: NaN (অ্যাবসোলিউট ভ্যালু)
console.log(Math.max(NaN, 5, 10)); // আউটপুট: NaN (সবচেয়ে বড় সংখ্যা খুঁজতে গেলে)




টাইপ কনভার্সন (ডাটা টাইপ জোর করে বদলাতে গেলে)
কোনো অবৈধ স্ট্রিং বা টেক্সটকে জোর করে সংখ্যায় রূপান্তর করতে গেলে জাভাস্ক্রিপ্ট নিজে থেকেই NaN তৈরি করে।

console.log(Number("Hello"));    // আউটপুট: NaN (টেক্সটকে নাম্বার বানাতে গেলে)
console.log(parseInt("Bhai"));   // আউটপুট: NaN


🚨 একটি চরম ব্যতিক্রম (টুইস্ট): তুলনা বা Comparison করলে!

এখানেই জাভাস্ক্রিপ্টের সবচেয়ে অদ্ভুত নিয়মটি কাজ করে। তুমি যদি NaN এর সাথে কোনো তুলনা করতে গেলে (এমনকি NaN এর সাথে NaN এর নিজের তুলনাও!), 
তবে রেজাল্ট কিন্তু NaN আসবে না, রেজাল্ট আসবে false!

console.log(NaN == NaN);  // আউটপুট: false (জাভাস্ক্রিপ্টে NaN নিজের সমানও না!)
console.log(NaN === NaN); // আউটপুট: false
console.log(NaN > 5);     // আউটপুট: false
console.log(NaN < 10);    // আউটপুট: false

💡 প্রো-টিপ: যেহেতু NaN == NaN সবসময় false দেয়, তাই  কোডে কোনো ভ্যালু আসলেই
  NaN কি না তা পরীক্ষা করার জন্য কখনো if (myValue == NaN) লিখতে যাবে না(ওটা কাজ করবে না)। 
  তার বদলে তোমাকে জাভাস্ক্রিপ্টের স্পেশাল ফাংশন ব্যবহার করতে হবে: isNaN(myValue)।

🏆 এক লাইনে মনে রাখার উপায়:
তুলনা করা ছাড়া, NaN এর সাথে যেকোনো হিসাব-নিকাশ করলেই উত্তর চোখ বন্ধ করে NaN আসবে।





জাভাস্ক্রিপ্টে যোগ (+) অপারেটরটি স্ট্রিংয়ের ক্ষেত্রে স্ট্রিং জোড়া লাগানোর (String Concatenation) কাজ করে। 
কিন্তু গুণ (*), ভাগ (/), এবং বিয়োগ (-) অপারেটরগুলোর কোনো স্ট্রিং ভার্সন নেই—এগুলো শুধুমাত্র গাণিতিক হিসাবের জন্য তৈরি।


জাভাস্ক্রিপ্ট প্রথমে চেষ্টা করবে "abc"-কে জোর করে একটি সংখ্যায় (Number) রূপান্তর করতে।
কিন্তু যেহেতু "abc" কোনো সংখ্যা নয়, তাই এটি হয়ে যাবে NaN (Not a Number)। আর NaN-এর সাথে যেকোনো গাণিতিক হিসাব করার ফলাফলও হবে NaN।


let text = "abc";

console.log(text * 5); // Output: NaN
console.log(text / 5); // Output: NaN
console.log(text - 5); // Output: NaN


ব্যতিক্রম: স্ট্রিংয়ের ভেতরে যদি সংখ্যা থাকে!
তবে স্ট্রিংয়ের ভেতর যদি কোনো আসল সংখ্যা থাকে (যেমন "10"), তখন কিন্তু জাভাস্ক্রিপ্ট নিজেই বুদ্ধি করে
ওটাকে সংখ্যা বানিয়ে গুণ, ভাগ বা বিয়োগ করে ফেলবে! এটাকে বলা হয় Implicit Type Coercion।

let numText = "10";

console.log(numText + 5); // Output: "105" (কারণ '+' স্ট্রিং জোড়া লাগায়)
console.log(numText * 5); // Output: 50    (স্বয়ংক্রিয়ভাবে সংখ্যা ধরে গুণ করেছে)
console.log(numText / 2); // Output: 5     (ভাগ করেছে)
console.log(numText - 3); // Output: 7     (বিয়োগ করেছে)
