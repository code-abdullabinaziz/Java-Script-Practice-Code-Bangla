JavaScript-এ Function Declaration এবং Function Expression এর মূল পার্থক্য হলো এদের লেখার ধরন (Syntax) 

📄 ১. Syntax (লেখার নিয়ম)

ক. Function Declaration (ফাংশন ডিক্লেয়ারেশন)

এটি হলো ফাংশন লেখার একদম ঐতিহ্যবাহী বা সাধারণ নিয়ম। এখানে সরাসরি function কিওয়ার্ড দিয়ে শুরু করা হয় এবং ফাংশনের একটি নির্দিষ্ট নাম থাকে।

function showMyName() {
    console.log("Abdullah Aziz");
}

showMyName();


// সিনট্যাক্স:
function sayHello() {
    return "হ্যালো, আমি ডিক্লেয়ারেশন!";
}

// কল করার নিয়ম:
sayHello();




খ. Function Expression (ফাংশন এক্সপ্রেশন)

এখানে একটি ফাংশন তৈরি করে সেটিকে একটি ভেরিয়েবলের (const বা let) ভেতর অ্যাসাইন বা জমা করে রাখা হয়। 
সাধারণত এক্ষেত্রে ডানপাশের ফাংশনটির কোনো নাম থাকে না (Anonymous Function)।

Function Expression:
let showMyName = function() {
    console.log("Abdullah Aziz");
}

showMyName();


// সিনট্যাক্স:
const sayHelloExpression = function() {
    return "হ্যালো, আমি এক্সপ্রেশন!";
}; //এক্সপ্রেশনের শেষে সেমিকোলন (;) দেওয়া ভালো প্র্যাকটিস

// কল করার নিয়ম (ভেরিয়েবলের নাম ধরে কল করতে হয়):
sayHelloExpression();



⚔️ ২. মূল পার্থক্য (প্রধান ৩টি পয়েন্ট)

বৈশিষ্ট্য     Hoisting (হয়েস্টিং)	 

Function Declaration	                                    Function Expression

এটি Hoisted হয়। অর্থাৎ, ফাংশনটি কোডের নিচে
তৈরি করলেও সেটিকে উপরে কল করা যায়।                      এটি Hoisted হয় না। ফাংশনটি তৈরি করার লাইনের আগে 
                                                          একে কল করলে এরর (ReferenceError) দেবে।


এর সবসময় একটি নির্দিষ্ট নাম থাকে।	                         এর নিজস্ব নাম থাকে না বললেই চলে (ভেরিয়েবলের নামটাই এর পরিচয়)।

ব্রাউজার কোড রান করার আগেই পুরো ফাইল স্ক্র্যান করে 
এই ফাংশনগুলোকে মেমরিতে লোড করে নেয়।                   জাভাস্ক্রিপ্ট রান হতে হতে যখন ঠিক ওই লাইনে পৌঁছায়, তখন ফাংশনটি তৈরি হয়।





Declaration-এর ক্ষেত্রে ():

printMessage(); // ফাংশন তৈরির আগেই কল!

function printMessage() {
    console.log("আমি রান হবো, কোনো সমস্যা নেই!");
}
// আউটপুট: আমি রান হবো, কোনো সমস্যা নেই!

(কারণ: জাভাস্ক্রিপ্ট ব্যাকগ্রাউন্ডে এই ডিক্লেয়ারেশনটাকে টেনে সবার উপরে তুলে দেয়)
এমন কোনো গ্লোবাল ফাংশন লাগবে যা কোডের যেকোনো জায়গা থেকে কল করা প্রয়োজন, তখন Function Declaration ব্যবহার করতে হয়।



console.log("------1------");
console.log("------2------");

showMyName();

console.log("------3------");

 function showMyName() {
    console.log("Abdullah Aziz");
}

showMyName();

console.log("------4------");
console.log("------5------");
console.log("------6------");

showMyName();










Expression-এর ক্ষেত্রে (এরর দেবে):

printMessage(); // এরর দেবে! (Cannot access 'printMessage' before initialization)

const printMessage = function() {
    console.log("আমি রান হতে পারবো না।");
};



console.log("------1------");
console.log("------2------");

showMyName();

console.log("------3------");

let showMyName = function() {
    console.log("Abdullah Aziz");
}

showMyName();

console.log("------4------");
console.log("------5------");
console.log("------6------");

showMyName();






Function Declaration কি global variable:

একদম সহজ উত্তর হলো: হ্যাঁ, তবে এর পেছনে একটি শর্ত বা ‘বাট’ (But) আছে।

যদি একটি Function Declaration-কে কোনো ব্লকের (যেমন: if-else বা loop) বাইরে একদম নরমাল স্ক্রিপ্টের মূল লাইনে লিখা হয়, তবে সেটি Global Scope বা গ্লোবাল হয়ে যায়। 
অর্থাৎ, কোডের যেকোনো ফাইল বা যেকোনো ফাংশনের ভেতর থেকে তাকে অ্যাক্সেস করা যায়।

কিন্তু যদি ওটাকে অন্য কোনো ফাংশনের ভেতরেো লিখা হয়, তখন কিন্তু সে আর গ্লোবাল থাকে না; লোকাল

১. যখন এটি গ্লোবাল (Global Scope)

// এটি গ্লোবাল ডিক্লেয়ারেশন
function sayHello() {
    console.log("হ্যালো!");
}

function testFunction() {
    sayHello(); // অন্য ফাংশনের ভেতর থেকেও একে কল করা যাচ্ছে!
}

sayHello(); // বাইরে থেকেও কল করা যাচ্ছে

ব্রাউজারের ক্ষেত্রে, এই গ্লোবাল ফাংশনগুলো সরাসরি ব্রাউজারের মূল অবজেক্ট window-এর অংশ হয়ে যায় (যেমন: window.sayHello()).


২. যখন এটি গ্লোবাল থাকে না (Local/Function Scope)

যদি একটি Function Declaration-কে আরেকটি ফাংশনের ভেতরে তৈরি করা হয়,
তবে তার পাওয়ার বা স্কোপ শুধু ওই ভেতরের ফাংশনটুকুর মধ্যেই সীমাবদ্ধ থাকে। বাইরে বের হলেই সে আর কাজ করবে না।

function parentFunction() {
    // এটি লোকাল ডিক্লেয়ারেশন
    function childFunction() {
        console.log("আমি শুধু ভেতরেই কাজ করব!");
    }
    
    childFunction(); // এটি কাজ করবে (ভেতরে আছে)
}

childFunction(); // ❌ এরর দেবে! (childFunction is not defined)



৩. ব্লক স্কোপ এবং মডার্ন জাভাস্ক্রিপ্ট (if বা loop এর ভেতর)

মডার্ন জাভাস্ক্রিপ্টে (ES6 এর পর)  যদি কোনো Function Declaration-কে কোনো ব্লকের (যেমন if ব্লকের) ভেতর লিখা হয়, 
তবে সেটি Block Scope হয়ে যায়। অর্থাৎ ওই কার্লি ব্রেস {} এর বাইরে তাকে আর পাওয়া যায় না।

if (true) {
    function blockFunction() {
        console.log("আমি ব্লকের ভেতর!");
    }
}
// blockFunction(); ❌ আধুনিক ব্রাউজারে এটি ব্লকের বাইরে এরর দিতে পারে।


Function Declaration গ্লোবাল হতে পারে, যদি তাকে সবার বাইরে (Root Level) লেখা হয়।

কিন্তু তাকে যদি অন্য কোনো ফাংশন বা ব্লকের ভেতরে লেখা হয়, সে তার গ্লোবাল পাওয়ার হারিয়ে লোকাল হয়ে যায়।





কিন্তু আধুনিক জাভাস্ক্রিপ্টে এটি একটি ব্যাড প্র্যাকটিস (সব ব্রাউজারে এক নয়)

এই কোডটি রান হচ্ছে কারণ ব্রাউজার বর্তমানে নন-স্ট্রিক্ট মোডে (Sloppy Mode) কোডটি চালাচ্ছে। কিন্তু মডার্ন জাভাস্ক্রিপ্টের অফিশিয়াল নিয়ম (ES6) অনুযায়ী, 
কোনো ব্লকের (if, else, loop) ভেতরে Function Declaration লিখলে সেটি সেই ব্লকের বাইরে কাজ করার কথা নয়।

যদি কোডের একদম উপরে "use strict"; (স্ট্রিক্ট মোড) লিখে দেওয়া হয় , তবে দেখবে এই একই কোড আর রান হবে না, এরর দেবে!

if(true) {
  function showMyName() {
    console.log("Abdullah");
  }
showMyName();
} else{
  function showMyName2() {
    console.log("Aziz");
  }
}

showMyName();



'use strict'

if(true) {
  function showMyName() {
    console.log("Abdullah");
  }

} else{
  function showMyName2() {
    console.log("Aziz");
  }
}
showMyName();

💡 এই সমস্যা এড়াতে প্রফেশনালরা কী করেন?
    
বাস্তব জীবনে বা কোনো প্রজেক্টে কন্ডিশনের ওপর ভিত্তি করে ফাংশন তৈরি করতে হলে প্রফেশনালরা কখনই Function Declaration ব্যবহার করেন না। 
তারা ব্যবহার করেন Function Expression (let বা const দিয়ে)।

let greet; // প্রথমে একটি ফাঁকা ভেরিয়েবল নিলাম

if (true) {
  greet = function() {
    console.log("Abdullah");
  };
} else {
  greet = function() {
    console.log("Aziz");
  };
}

greet(); // এটি সব ব্রাউজারে এবং সব মোডেই ১০০% সেফ এবং পারফেক্ট নিয়ম!




let showMyName;

if (true) {
  showMyName = function () {
    console.log("Abdullah");
  };
} else {
  showMyName = function () {
    console.log("Aziz");
  };
}

showMyName(); // Abdullah



কেন এটি ভালো 

showMyName একটি variable, তাই if এর বাইরেও থাকে
শুধু একটি শর্ত সত্য হওয়া branch এর function assign হয়
আচরণ strict ও non-strict দুই mode এই একই থাকে 

আরও সংক্ষিপ্ত উপায় (Arrow function)

const condition = true;

const showMyName = condition
  ? () => console.log("Abdullah")
  : () => console.log("Aziz");

showMyName(); // Abdullah




if(true) {
  showMyName();

} else{
 showMyName();
}

function showMyName() {
  console.log("Aziz");
}









Block -------------

১. ব্লক (Block) আসলে কী?
  
জাভাস্ক্রিপ্টে একজোড়া কার্লি ব্রেস বা দ্বিতীয় বন্ধনী { } দিয়ে যা কিছু ঘেরা থাকে, তাকেই একটি ব্লক (Block) বলা হয়।
আর এই { } ঘরের ভেতরে যদি তুমি let বা const দিয়ে কোনো ভেরিয়েবল বা আধুনিক নিয়মে কোনো ফাংশন তৈরিো করা হয়, তবে সেটার সীমানা বা পাওয়ার ওই ঘরের ভেতরেই আটকে যায়। 
ঘরের বাইরে বের হলে জাভাস্ক্রিপ্ট তাকে আর চিনতে পারে না। একেই বলে Block Scope।

{
    // এটি একটি ব্লক (কার্লি ব্রেসের দেয়াল)
    let secretCode = "12345";
    console.log(secretCode); // ✓ ঘরের ভেতর প্রিন্ট দিলে কাজ করবে (আউটপুট: 12345)
}

// এখন দেয়ালের বাইরে চলে এসেছি
console.log(secretCode); // ❌ এরর দেবে! (ReferenceError: secretCode is not defined)

if (true) { ... } -> এটি একটি ব্লক।

for (let i=0; i<5; i++) { ... } -> এটি একটি ব্লক।

এমনকি চাইলে কোনো শর্ত ছাড়াই শুধু { ... } লিখে একটা ফাঁকা ব্লক বানিয়ে ফেলা যায়!


২. স্কোপ (Scope) মানে কী?
  
স্কোপ মানে হলো "এলাকা" বা "সীমানা"। অর্থাৎ, কোডের কোনো একটা লাইনে একটা ভেরিয়েবল বা ফাংশন তৈরি করলে, 
সেটিকে কোডের কতদূর পর্যন্ত দেখা যাবে বা ব্যবহার করা যাবে, সেটাই হলো তার স্কোপ।

জাভাস্ক্রিপ্টে মূলত ৩ ধরনের স্কোপ বা সীমানা আছে:

Global Scope: পুরো ফাইলের যেকোনো জায়গা থেকে একে দেখা যায়।

Function Scope: কোনো একটা ফাংশনের ভেতরের এলাকা (ফাংশনের বাইরে থেকে ভেতরের জিনিস দেখা যায় না)।

Block Scope: যেকোনো { } ব্র্যাকেটের ভেতরের এলাকা।

🕒 ইতিহাস: আগে কী ছিল আর ES6-এ কী বদলালো?
  
যখন শুরুতে if-else শিখান হয়,  যে জাভাস্ক্রিপ্টে আগে (২০১৫ সালের ES6 আপডেটের আগে) ব্লক স্কোপ বলতে কিচ্ছু ছিল না!

আগে জাভাস্ক্রিপ্ট শুধু Function Scope চিনতো। অর্থাৎ, কোনো { } ব্লকের ভেতর var দিয়ে ভেরিয়েবল বা ফাংশন লিখলে, জাভাস্ক্রিপ্ট সেই ব্লকের সীমানাকে পাত্তাই দিত না।
সে ওগুলোকে দেয়াল ভেঙে বাইরে নিয়ে আসতো (যেটাকে একটু আগে হয়েস্টিং হিসেবে দেখলাম)।

কিন্তু ২০১৫ সালে জাভাস্ক্রিপ্টকে যখন আধুনিক করা হলো (ES6), তখন যুক্ত করা হলো let এবং const। আর তখনই নিয়ম করা হলো: 
"আজ থেকে যেকোনো { } ব্লকের ভেতর let, const বা স্ট্রিক্ট মোডে কোনো ফাংশন লিখলে, সে ওই ব্লকের জেলের ভেতর বন্দী হয়ে যাবে। বাইরে কেউ তাকে পাওয়া যাবে না।"


if (true) {
    var name1 = "Abdullah"; // var ব্লক স্কোপ মানে না (প্রাচীন নিয়ম)
    let name2 = "Aziz";     // let ব্লক স্কোপ মানে (আধুনিক নিয়ম)
}

console.log(name1); // আউটপুট: Abdullah (কারণ var ব্লক ভেঙে বাইরে চলে এসেছে)
console.log(name2); // ❌ এরর দেবে! (ReferenceError: name2 is not defined)




Global Scope:
বাইরের জিনিস ঘরের ভেতরে পাওয়া যায়

let myName = "Abdullah"; // এটি বাইরে তৈরি হয়েছে (গ্লোবাল বা সবার জন্য)

{
    // আমরা এখন ব্লকের ভেতর ঢুকলাম
    console.log(myName); // ✓ ঘরের ভেতর থেকেও একে দেখা যাবে! (আউটপুট: Abdullah)
}




if-else ব্লকের আসল খেলা
if-else , সেটার ব্র্যাকেটও কিন্তু এক একটা ঘর।

if (true) {
    let job = "Developer"; // এই ঘরের ভেতর তৈরি হলো
} else {
    let job = "Designer";
}

console.log(job); // ❌ এরর দেবে!

জাভাস্ক্রিপ্টে { } ব্র্যাকেটের ভেতরের অংশটুকুই হলো একটা ব্লক (Block)।

এই ব্লকের ভেতরে let বা const দিয়ে যা-ই বানানো হবে, তা বাইরের দুনিয়া থেকে সম্পূর্ণ লুকিয়ে থাকবে।

কিন্তু প্রাচীন var দিয়ে কিছু বানালে সে এই দেয়াল বা ব্লক মানে না (সে দেয়াল ভেঙে বাইরে চলে আসে,
যা কোডে বাগ বা এরর তৈরি করে। এই কারণেই আধুনিক জাভাস্ক্রিপ্টে var ব্যবহার করা নিষেধ)।






যেকোনো ব্লকের (if-else, loop, বা ফাঁকা {}) ভেতরে সবসময় Function Expression ব্যবহার করব।
কেন ডিক্লেয়ারেশন বাদ দিয়ে এক্সপ্রেশন ব্যবহার করব এবং সেখানে let নাকি const নেব:

🚫 ১. ব্লকের ভেতর Function Declaration কেন ব্যবহার করবে না?

ব্লকের ভেতর Function Declaration লিখলে প্রাচীন ব্রাউজার বা নন-স্ট্রিক্ট মোডে সেটি দেয়াল ভেঙে বাইরে চলে যায় (হয়েস্টিং হয়), যা কোডে উল্টাপাল্টা বাগ তৈরি করে। 
যেহেতু আমরা চাই আমাদের ফাংশনটি যেন ব্লকের দেয়াল মেনে চলে, তাই ব্লকের ভেতর ডিক্লেয়ারেশন লেখা পুরোপুরি নিষিদ্ধ।

🛡️ ২. ব্লকের ভেতর Function Expression: let নাকি const?

নিয়ম ক: ১০০% ক্ষেত্রে প্রথম পছন্দ হবে const
বাস্তব জীবনে আমরা যখন কোনো ফাংশন বানাই, আমরা চাই না যে নিচে গিয়ে ভুল করে সেই ফাংশনটাকে কেউ মুছে দিয়ে অন্য কিছু লিখে ফেলুক।
const দিয়ে ফাংশন লিখলে সেটি ওই ব্লকের ভেতর লক হয়ে যায় এবং সুরক্ষিত থাকে।

if (true) {
    // const ব্যবহার করায় এই ফাংশনটি ব্লকের ভেতর সুরক্ষিত এবং ব্লক স্কোপড
    const showMessage = function() {
        console.log("আমি ব্লকের ভেতর সুরক্ষিত!");
    };

    showMessage(); // ✓ কাজ করবে
}
// showMessage(); ❌ এরর দেবে (ব্লকের বাইরে পাওয়া যাবে না - পারফেক্ট ব্লক স্কোপ!)


নিয়ম খ: let কখন ব্যবহার করবে? (খুব রেয়ার বা বিরল কেস)
যদি এমন কোনো দরকার হয় যেখানে কন্ডিশনের ওপর ভিত্তি করে একই ফাংশনের ভেতরের চেহারা বা লজিক বারবার বদলে ফেলতে হবে (Re-assign করতে হবে), কেবল তখনই let ব্যবহার করা লাগবে ।

let playMusic; // ১. বাইরে ফাঁকা ভেরিয়েবল রাখলাম

if (isRainyDay) {
    // ২. বৃষ্টির দিনে এক রকম গান
    playMusic = function() { console.log("বৃষ্টির গান বাজছে..."); };
} else {
    // ৩. অন্য দিনে অন্য গান
    playMusic = function() { console.log("রোদখচিত গান বাজছে..."); };
}

playMusic(); // ✓ যেখানেই কন্ডিশন মিলবে, সেই অনুযায়ী রান হবে

গ্লোবাল লেভেলে (ব্লকের বাইরে): চাইলে Function Declaration ব্যবহার করা যাবে (যেমন: function myFunc() {})। এটা একদম সেফ।

ব্লকের ভেতরে (if-else/loop): চোখ বন্ধ করে const দিয়ে Function Expression লিখবে। (যেমন: const myFunc = function() {})।

আধুনিক জাভাস্ক্রিপ্টে: প্রফেশনালরা ব্লকের ভেতরে এক্সপ্রেশন লেখার সময় নরমাল অ্যানোনিমাস ফাংশনের বদলে Arrow Function ব্যবহার করেন



💻 গ্লোবাল লেভেল বনাম লোকাল লেভেলের বাস্তব চিত্র

// 🌍 এটা হলো একদম খোলা আকাশ, অর্থাৎ GLOBAL LEVEL
// কারণ এই লাইনটি কোনো { } ব্র্যাকেটের ভেতরে নেই।

function myGlobalFunc() {
    // 🏠 এটা হলো এই ফাংশনের নিজস্ব ঘর (LOCAL LEVEL)
    console.log("আমি ঘরের ভেতরে আছি");
} 

if (true) {
    // 🧱 এটা হলো একটা ইটের দেয়াল বা ব্লক (BLOCK LEVEL)
    console.log("আমি ব্লকের ভেতর বন্দী");
}

// 🌍 আবার খোলা আকাশ, অর্থাৎ GLOBAL LEVEL
const username = "Abdullah";


💡 কেন গ্লোবাল লেভেলে Function Declaration একদম সেফ?

  // 🌍 গ্লোবাল লেভেল: ফাংশনটি তৈরি করার আগেই ডাকলাম
sayHello(); 

// 🌍 গ্লোবাল লেভেল: ফাংশনটি ডিক্লেয়ার করলাম
function sayHello() {
    console.log("হ্যালো! আমি গ্লোবাল লেভেলে আছি, তাই আমি ১০০% সেফ।");
}












"কখন সাধারণ ফাংশন (Function Declaration) ব্যবহার করব আর কখন ফাংশন এক্সপ্রেশন (Function Expression) ব্যবহার করব?"

📌 ১. Function Declaration (সাধারণ ফাংশন)

function add(a, b) {
    return a + b;
}

💡 কখন ব্যবহার করা লাগবে?
মেইন বা টপ-লেভেল লজিকের জন্য: পুরো ফাইলের মূল কাজগুলো বা ইউটিলিটি ফাংশনগুলো (যেগুলো বারবার লাগবে) সাধারণ ফাংশন হিসেবে তৈরি করা সেরা।

হয়েস্টিং (Hoisting) সুবিধা নিতে চাইলে: এই ফাংশনগুলোকে কোডের যেকোনো জায়গা থেকে (এমনকি ফাংশন বানানোর ওপর থেকেও) কল করা যায়।


// ফাংশন নিচে লেখা, কিন্তু ওপরে ডাকলেও কাজ করবে (Hoisting-এর কারণে)
sayHello(); 

function sayHello() {
    console.log("Hello!");
}




📌 ২. Function Expression (ফাংশন এক্সপ্রেশন)
যখন কোনো ভেরিয়েবলের ভেতর ফাংশন জমা রাখা হয়:

const add = function(a, b) {
    return a + b;
};

💡 কখন ব্যবহার করা লাগবে?
কোডের গতিবিধি বা ফ্লো নিয়ন্ত্রণ করতে (Hoisting বন্ধ রাখতে): যদি চাওয়া হইয় যে ফাংশনটি কোডের নিচে তৈরি হলে তা 
ওপর থেকে কেউ ভুলবশত কল করতে না পারুক, তবে এটি ব্যবহার করা লাগবে

কলব্যাক ফাংশন (Callback Function) হিসেবে: অন্য কোনো ফাংশনের ভেতর আর্গুমেন্ট হিসেবে 
পাঠাতে চাইলে এটি সবচেয়ে বেশি ব্যবহার হয় (যেমন: setTimeout বা অ্যারের map, filter, forEach-এ)।

কন্ডিশনাল ফাংশন (Conditional Logic): কোনো নির্দিষ্ট শর্ত সাপেক্ষে ফাংশন তৈরি করতে চাইলে।


let greeting;

if (isLoggedIn) {
    greeting = function() { console.log("Welcome back!"); };
} else {
    greeting = function() { console.log("Please log in."); };
}

💡 প্রফেশনাল টিপ: আধুনিক জাভাস্ক্রিপ্টে ডেফিনিট বা টপ-লেভেল গ্লোবাল কাজের জন্য Function Declaration বেশি ব্যবহৃত হয়। 
আর কলব্যাক বা নির্দিষ্ট স্কোপে আটকে রাখার জন্য Function Expression (অথবা এর আধুনিক রূপ Arrow Function) ব্যবহার করা হয়।






কোডের স্ট্রাকচার দেখলে বুঝতে পারবেন কেন if ব্লকের ভেতর Function Expression ব্যবহার করা বেশি প্রেডিক্টেবল ও প্রফেশনাল।

উদাহরণ ১: শপিং কার্টে ডিসকাউন্ট হিসাব করা
❌ Function Declaration দিয়ে (ব্লকের ভেতর লেখা ঝুঁকিপূর্ণ)


const isPremiumUser = true;
let finalPrice;

if (isPremiumUser) {
    // if ব্লকের ভেতরে Function Declaration
    function applyDiscount(price) {
        return price - (price * 0.20);
    }
    finalPrice = applyDiscount(1000);
} else {
    function applyDiscount(price) {
        return price - (price * 0.05);
    }
    finalPrice = applyDiscount(1000);
}

// সমস্যা: 'applyDiscount' ফাংশনটি ব্লক স্কোপের বাইরে থেকে 
// ব্রাউজার বা নোড ইঞ্জিনের ভেদে অদ্ভুত আচরণ বা ভুল রেজাল্ট দিতে পারে।



✅ Function Expression দিয়ে (প্রফেশনাল ও নিরাপদ)

const isPremiumUser = true;
let applyDiscount; // ১. বাইরে ভেরিয়েবল রাখা হলো

if (isPremiumUser) {
    // ২. ভেতরে Arrow/Anonymous Function Expression দিয়ে অ্যাসাইন করা হলো
    applyDiscount = (price) => price - (price * 0.20);
} else {
    applyDiscount = (price) => price - (price * 0.05);
}

// ৩. ব্লকের বাইরে খুব নিরাপদে কল করা যাচ্ছে
const finalPrice = applyDiscount(1000);
console.log(finalPrice); // Output: 800






উদাহরণ ২: লগইন সার্ভিস সিলেক্ট করা
❌ Function Declaration দিয়ে

const loginType = 'FACEBOOK';
let statusMessage;

if (loginType === 'EMAIL') {
    function loginUser(credentials) {
        return `Authenticating ${credentials.email} with Password...`;
    }
    statusMessage = loginUser({ email: 'test@gmail.com' });
} else {
    function loginUser(credentials) {
        return `Authenticating with Facebook Token: ${credentials.token}`;
    }
    statusMessage = loginUser({ token: 'fb_123' });
}


✅ Function Expression দিয়ে

const loginType = 'FACEBOOK';
let loginUser;

if (loginType === 'EMAIL') {
    loginUser = (credentials) => {
        return `Authenticating ${credentials.email} with Password...`;
    };
} else if (loginType === 'FACEBOOK') {
    loginUser = (credentials) => {
        return `Authenticating with Facebook Token: ${credentials.token}`;
    };
} else {
    loginUser = () => "Invalid Login Method!";
}

const statusMessage = loginUser({ token: 'fb_123' });
console.log(statusMessage);



উদাহরণ ৩: নোটিফিকেশন পাঠানোর লজিক
❌ Function Declaration দিয়ে

const userPreference = 'SMS';

if (userPreference === 'SMS') {
    function sendNotification(message) {
        console.log(`Sending SMS: ${message}`);
    }
} else {
    function sendNotification(message) {
        console.log(`Sending Email: ${message}`);
    }
}

// Hoisting-এর কারণে অনেক সময় কন্ডিশন সত্য না হলেও 
// শেষের ডিক্লেয়ার করা ফাংশনটি ভুলবশত রান হয়ে যেতে পারে!
sendNotification("Your OTP is 4821");


✅ Function Expression দিয়ে

const userPreference = 'SMS';
let sendNotification;

if (userPreference === 'SMS') {
    sendNotification = (message) => {
        console.log(`Sending SMS: ${message}`);
    };
} else {
    sendNotification = (message) => {
        console.log(`Sending Email: ${message}`);
    };
}

// কোডের ফ্লো ক্রিস্টাল ক্লিয়ার
sendNotification("Your OTP is 4821");




Function Expression এবং Function Declaration—দুটিরই নিজস্ব জায়গা ও নির্দিষ্ট ব্যবহারের ক্ষেত্র (Use Cases) রয়েছে। 

প্রফেশনাল কোডিংয়ে কোনটি কোথায় ব্যবহার করা উচিত, তা নিচে স্পষ্ট করে দেওয়া হলো:

১. কখন Function Declaration ব্যবহার করবেন? (Where Declaration is Better)
    
Top-Level Helper/Utility Functions: ফাইলের একদম ওপরের লেভেলে যখন কোনো গ্লোবাল বা হেল্পার ফাংশন লিখবেন (যেমন: ডাটা ফরম্যাট করা,
পাসওয়ার্ড হ্যাশ করা, ডাটাবেজ কানেক্ট করা), তখন Function Declaration ব্যবহার করা ভালো।

কেন ভালো?

Hoisting সুবিধা: ফাইল জুড়ে যেকোনো জায়গা থেকে এটিকে কল করা যায়। ফাংশনটি ফাইলের
নিচে রেখেও ওপরের লাইনে ব্যবহার করতে পারবেন, এতে মূল বিজনেস লজিক ফাইলের ওপরে রাখা সহজ হয়।

Code Readability: সাধারণ পড়ার সুবিধার্থে function doSomething() দেখলে সহজেই বোঝা যায় এটি একটি বিশ্বস্ত বিশ্বজনীন ফাংশন।


// Function Declaration
function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}





ইউটিলিটি ও হেল্পার ফাংশন (Utility & Helper Functions)
অ্যাপ্লিকেশনের বিভিন্ন জায়গায় যে ছোটখাটো ডাটা প্রসেসিং করতে হয় (যেমন: তারিখ ফরম্যাট করা, কারেন্সি পরিবর্তন, ভ্যালিডেশন), সেখানে এটি সেরা।


// ফাইলের নিচে বা আলাদা utils.js ফাইলে রাখা হয়
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('bn-BD', options);
}

// Hoisting-এর সুবিধা থাকায় ফাংশন নিচে ডিফাইন করলেও ওপরে কল করা যায়
const isEmailValid = validateEmail("user@gmail.com");
console.log(formatDate("2026-10-30"));



কনস্ট্রাক্টর ফাংশন বা অবজেক্ট ফ্যাক্টরি (Object Factory & Traditional Constructors)
জাভাস্ক্রিপ্টে অবজেক্ট ব্লুপ্রিন্ট বা কাস্টম অবজেক্ট তৈরি করার জন্য (বিশেষ করে যেখানে নির্দিষ্ট this কনটেক্সট এবং প্রোটোটাইপ দরকার হয়)।



// একটি ইউজার অবজেক্ট তৈরির ব্লুপ্রিন্ট
function CreateUser(name, role) {
    this.name = name;
    this.role = role;
    this.createdAt = new Date();
}

// প্রোটোটাইপে মেথড যোগ করা
CreateUser.prototype.getRole = function() {
    return `${this.name} is an ${this.role}`;
};

const user1 = new CreateUser("Aziz", "Admin");
console.log(user1.getRole());







২. কখন Function Expression / Arrow Function ব্যবহার করবেন? (Where Expression is Better)
ব্লক স্কোপের ভেতরে (if, for, switch): আগের আলোচনার মতো if বা যেকোনো ব্লকের ভেতরে ডাইনামিকালি ফাংশন সেট করতে সবসময় Function Expression ব্যবহার।

Callback Functions: .map(), .filter(), .reduce(), setTimeout বা Event Listener-এর ভেতরে।

Inline Async Operations / Handlers: ব্যাকএন্ড রাউটার (Express/Fastify) বা মিডলওয়্যারে।

JavaScript
// Express.js API Endpoint এ Arrow Function Expression
app.get('/users', async (req, res) => {
    // Controller logic
});
