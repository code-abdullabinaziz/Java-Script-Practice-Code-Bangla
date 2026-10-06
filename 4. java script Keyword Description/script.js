জাভাস্ক্রিপ্টে (JavaScript) কি-ওয়ার্ড (Keyword) হলো কিছু সংরক্ষিত শব্দ (Reserved words), 
যেগুলোর নির্দিষ্ট অর্থ ও কাজ রয়েছে। এগুলো ভ্যারিয়েবল ডিক্লেয়ার, লজিক নিয়ন্ত্রণ এবং ফাংশন তৈরিতে ব্যবহৃত হয়।
এই শব্দগুলোর একটা নির্দিষ্ট অর্থ এবং কাজ জাভাস্ক্রিপ্ট ল্যাঙ্গুয়েজের ভেতরে ফিক্সড করা আছে। 
চাইলে এই শব্দগুলোকে নিজের ইচ্ছামতো ভেরিয়েবলের নাম, ফাংশনের নাম বা কোনো আইডেন্টিফায়ার হিসেবে ব্যবহার করা যাবে না।

যেমন: চাইলে let let = 10; বা let if = "Abdullah"; লিখা যাবে না , কারণ let এবং if হলো সংরক্ষিত কীওয়ার্ড।

জাভাস্ক্রিপ্টে প্রায় ৬০টিরও বেশি কীওয়ার্ড আছে। আপনি যখন কোড এডিটর বা IDE (যেমন: VS Code) ব্যবহার করা হবে,
তখন এই কীওয়ার্ডগুলো লেখার সাথে সাথেই কোডের টেক্সটের রঙ বদলে নীল বা বেগুনি হয়ে যাবে।

রঙ বদলে যাওয়া দেখেই বুজা যাবে একটি সংরক্ষিত শব্দ বা কীওয়ার্ড। 
সি এবং সি++ ল্যাঙ্গুয়েজেও কিন্তু ঠিক একইভাবে int, float, if, for, return শব্দগুলো কীওয়ার্ড হিসেবে কাজ করে।

কীওয়ার্ড (Keyword)	                      সহজ বাংলায় কাজ (Description)	                  ছোট উদাহরণ (Example)

let	                                   ব্লক-স্কোপড ভেরিয়েবল তৈরি বা 
                                       ঘোষণা করার জন্য ব্যবহৃত হয়। (আধুনিক নিয়ম)	       let age = 30;

const	                                 এমন ভেরিয়েবল তৈরি করে যার মান কখনো 
                                       পরিবর্তন বা আপডেট করা যায় না (Constant)।	         const pi = 3.1416;

var	                                   পুরোনো নিয়মে ভেরিয়েবল ঘোষণা করার 
                                       জন্য ব্যবহৃত হতো (গ্লোবাল বা ফাংশন স্কোপড)।          var name = "Mohammad";

if	                                  কোনো শর্ত বা কন্ডিশন চেক করার ব্লক 
                                      শুরু করতে ব্যবহৃত হয়।	                             if (x > 5) { ... }

else	if                              এর শর্ত মিথ্যা হলে বিকল্প কোন কাজটি হবে, 
                                      তা নির্ধারণ করে।	                                     else { ... }

for	                                একটি নির্দিষ্ট সংখ্যক বার কোনো কোড 
                                    লুপ বা বারবার চালানোর জন্য ব্যবহৃত হয়।	                 for(let i=0; i<5; i++)

while	                              নির্দিষ্ট কোনো শর্ত সত্য থাকা পর্যন্ত লুপ 
                                    চালিয়ে যাওয়ার জন্য ব্যবহৃত হয়।	                         while (x < 10)

this	                              বর্তমান যে অবজেক্ট বা কনটেক্সটে কোড রান হচ্ছে, 
                                    তাকে নির্দেশ করে।                                    	this.name = name;

try / catch                         কোডের ভেতর কোনো ভুল বা এরর (Error) 
                                    আসলে তা হ্যান্ডেল বা কন্ট্রোল করার জন্য।                 try { ... } catch(err)

new	                                অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিংয়ে কোনো ক্লাসের নতুন 
                                    একটি অবজেক্ট তৈরি করতে।	                          let car = new Car();

switch	                            একটি ভেরিয়েবলের অনেকগুলো সম্ভাব্য মানের মধ্যে 
                                    থেকে সঠিকটি বেছে নেওয়ার জন্য।	                      switch(color) { ... }


case	                            switch ব্লকের ভেতরে একেকটি নির্দিষ্ট 
                                  অপশন বা মান চেক করার জন্য।	                        case "red":


var	- Declares a variable

let	- Declares a block variable

const -	Declares a block constant

if - Marks a block of statements to be executed on a condition

switch - Marks a block of statements to be executed in different cases
for	Marks a block of statements to be executed in a loop

function - Declares a function



return - Exits a function

try	- Implements error handling to a block of statements



১. const কী? (Constant Variable)
const এসেছে "Constant" (ধ্রুবক) শব্দ থেকে। আধুনিক জাভাস্ক্রিপ্টে এটিও let-এর মতোই Block-scoped {}।

const-এর মূল বৈশিষ্ট্য হলো ২টি:

Re-assignment সম্ভব নয়: একবার মান বসিয়ে দিলে সেই মান আর পরিবর্তন করা যায় না।

Initialization বাধ্যতামূলক: ডিক্লেয়ার করার সাথে সাথেই মান দিয়ে দিতে হয়।



const PI = 3.1416;
PI = 3.15; // ❌ TypeError: Assignment to constant variable.

const age; // ❌ SyntaxError: Missing initializer in const declaration


বিশেষ দ্রষ্টব্য (Expert Insight): const দিয়ে অ্যারে (Array) বা অবজেক্ট (Object) তৈরি করলে তার রেফারেন্স পরিবর্তন করা যায় না,
কিন্তু ভেতরের ডাটা পরিবর্তন/মিউটেট করা যায়। (যেমন: const arr = [1, 2]; arr.push(3); কাজ করবে)।


let  উদাহরণ ও বৈশিষ্ট্যের মাধ্যমে:

১. let (Modern Variable - Mutable & Block-Scoped)

let আধুনিক জাভাস্ক্রিপ্টে (ES6) এসেছে। এটি Block-scoped {}। এর মান পরবর্তীতে পরিবর্তন বা Re-assign করা যায়।

let-এর ৩টি মূল বৈশিষ্ট্য:

Re-assignment সম্ভব: একবার ডিক্লেয়ার করার পর যেকোনো সময় নতুন মান বসানো যায়।

Re-declaration অসম্ভব: একই স্কোপ বা ব্লকের ভেতরে let দিয়ে দুইবার একই নামের ভ্যারিয়েবল ডিক্লেয়ার করা যায় না (সরাসরি SyntaxError দেবে)।

Initialization বাধ্যতামূলক নয়: ডিক্লেয়ার করার সময় মান না দিলে ডিফল্টভাবে undefined জমা থাকে।


// ১. Initialization ছাড়া ডিক্লেয়ার সম্ভব
let age; 
console.log(age); // Output: undefined

// ২. Re-assignment (মান পরিবর্তন) সম্ভব
age = 25;
age = 30; // মান বদলে ৩০ হলো (কোনো এরর নেই)

// ৩. Re-declaration একই ব্লকে অসম্ভব
let age = 35; // ❌ SyntaxError: Identifier 'age' has already been declared


Block Scope {} উদাহরণ:

if (true) {
  let user = "Abdullah";
  console.log(user); // Output: Abdullah
}

console.log(user); // ❌ ReferenceError: user is not defined 
// (কারণ let ব্র্যাকেটের {} বাইরে আসে না)



Var----

var (Old / Legacy Variable - Function-Scoped)

var হলো পুরনো জাভাস্ক্রিপ্টের (ES5 পর্যন্ত) ভ্যারিয়েবল ডিক্লেয়ারেশন সিস্টেম। এটি Function-scoped (সাধারণ ব্লক {} মানতে চায় না)।

var-এর ৩টি মূল বৈশিষ্ট্য:

Re-assignment ও Re-declaration দুটোই সম্ভব: একই স্কোপে যত খুশি একই নামে var ডিক্লেয়ার করা যায়,
  
যা অনাকাঙ্ক্ষিতভাবে আগের ভ্যালু ওভাররাইট করে ফেলে (ঝুঁকিপূর্ণ)।

Function-Scoped (ব্লক ভেঙে বের হয়ে যায়): if বা for লুপের ভেতরের {} ভেঙে বাইরে চলে আসে, কিন্তু ফাংশনের দেয়াল টপকাতে পারে না।

Hoisting উইথ undefined: ডিক্লেয়ার করার আগেই অ্যাক্সেস করলে কোড ক্র্যাশ না করে undefined রিটার্ন করে।


// ১. Re-declaration সম্ভব (যা কোডে বাগ তৈরি করে)
var name = "Abdullah";
var name = "Aziz"; // ❌ কোনো এরর দেবে না, নাম বদলে "Aziz" হয়ে যাবে!

// ২. Hoisting Behavior
console.log(city); // Output: undefined (Error আসবে না)
var city = "Dhaka";


Function Scope vs Block Scope উদাহরণ:

// ব্লক (if) ভাঙতে পারে:
if (true) {
  var score = 100;
}
console.log(score); // Output: 100 (if ব্র্যাকেটের বাইরে চলে এসেছে!)

// কিন্তু ফাংশন ভাঙতে পারে না:
function myFunc() {
  var secret = "XYZ";
}
console.log(secret); // ❌ ReferenceError: secret is not defined

