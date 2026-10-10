📌 Return Statement কী?
    
Return Statement ব্যবহার করা হয় ফাংশন থেকে কোনো মান আউটপুট বা ফেরত দেওয়ার জন্য। যখন ফাংশন কল করা হয়, 
তখন এটি একটি মান রিটার্ন করে এবং ফাংশনের এক্সিকিউশন সেখানেই থেমে যায়।

return মূলত দুটি প্রধান কাজ করে:

ফাংশন থেকে একটি নির্দিষ্ট মান (Value) বাইরে পাঠানো: ফাংশনের ভেতরের কোনো হিসাব-নিকাশের ফলাফল বাইরে অন্য কোথাও ব্যবহার করার জন্য।

ফাংশনের এক্সিকিউশন বন্ধ করা: কোড যখনই return লাইনে পৌঁছাবে, ফাংশনটি সাথে সাথে সেখানেই থেমে যাবে। এর নিচে আর কোনো কোড রান করবে না।


সহজ কথায়: জাভাস্ক্রিপ্টে কোনো ফাংশন থেকে যদি কোনো মান বাইরে এনে অন্য কাজে খাটাতে চাওয়া হয়, তবে  return ব্যবহার করতেই হবে!





function userName() {
    console.log(`Hello Abdullah`);
    
} 

let myFunction = userName();

console.log(myFunction);


🔍 লাইন ১-৩: প্রথমে বর্তমান কোডটির লাইন বাই লাইন
function userName() {
    console.log(`Hello Abdullah`);
}

userName নামে একটি ফাংশন তৈরি (Define) করেছ। এই ফাংশনের দায়িত্ব হলো—তাকে যখনই ডাকা (Call করা) হবে,
সে স্ক্রিনে Hello Abdullah লেখাটি প্রিন্ট করবে। ব্যস, এটুকুই। সে কিন্তু বাইরে কোনো কিছু ফেরত (Return) পাঠাচ্ছে না।

লাইন ৫: let myFunction = userName();

এই একটা লাইনে আসলে দুটি বড় কাজ একসাথে ঘটছে। কম্পিউটার যখন এই লাইনে আসে, সে ডান দিক থেকে বাম দিকে কাজ করে:

প্রথম কাজ (ফাংশন কল): কম্পিউটার ডান পাশে দেখলো userName()। সে সাথে সাথে লাফ দিয়ে ওপরের ফাংশনটির ভেতরে ঢুকে গেল এবং ভেতরের কোড অনুযায়ী কনসোলে প্রিন্ট করে দিল: Hello Abdullah।

দ্বিতীয় কাজ (মান অ্যাসাইন করা): ফাংশনের কাজ শেষ হওয়ার পর কম্পিউটার ওই ফাংশন থেকে কোনো মান (Value) নিয়ে এসে myFunction ভেরিয়েবলের ভেতর রাখতে চায়।
কিন্তু তোমার ফাংশনের ভেতর কোনো return লেখা নেই! জাভাস্ক্রিপ্টের নিয়ম হলো—যদি কোনো ফাংশন থেকে কিছু return না করা হয়, তবে সেটার মান মনে মনে undefined ধরে নেওয়া হয়।
তাই কম্পিউটার myFunction ভেরিয়েবলের ভেতর undefined জমা করে রাখলো।


লাইন ৭: console.log(myFunction);

💻 এই কোডের ফাইনাল আউটপুট (Output):
Hello Abdullah
undefined


যদি চাওয়া হয় যে myFunction ভেরিয়েবলের ভেতরে undefined না এসে সত্যি সত্যি কোনো মান জমা হোক, তবে ফাংশনের ভেতর return ব্যবহার করতে হবে।

function userName() {
    // console.log এর বদলে আমরা টেক্সটটা বাইরে ফেরত পাঠাচ্ছি
    return `Hello Abdullah`; 
} 

// এখন ফাংশনটি রান হয়ে তার ফেরত দেওয়া মানটি 'myFunction'-এর ভেতর জমা রাখবে
let myFunction = userName();

// এবার প্রিন্ট করলে আর undefined আসবে না, আসল মান আসবে
console.log(myFunction);

Hello Abdullah

🎯 এবার পর্দার আড়ালে কী ঘটলো?
১. let myFunction = userName(); লাইনে যখন ফাংশনটি কল হলো, ফাংশনটি ভেতর থেকে বলল—"এই নাও আমার রেজাল্ট: Hello Abdullah"।
২. জাভাস্ক্রিপ্ট ওই লেখাটা এনে যত্নে myFunction ভেরিয়েবলের ভেতর রেখে দিল। (ফাংশন কলের সময় কিন্তু স্ক্রিনে সরাসরি কিছু প্রিন্ট হলো না)।
৩. সবার শেষ লাইনে যখন  console.log(myFunction) করা হল, তখন স্ক্রিনে সুন্দরভাবে Hello Abdullah প্রিন্ট হয়ে গেল!






function jogKoro(a, b) {
    let result = a + b;
    return result; // এখানে ফাংশনটি তার ফলাফল বাইরে পাঠিয়ে দিচ্ছে
}

// ফাংশনটি কল করে তার রিটার্ন করা মান একটি ভ্যারিয়েবলে রাখা হলো
let sum = jogKoro(5, 10); 

console.log(sum); // আউটপুট দেখাবে: 15
নোট: যদি ফাংশনে return ব্যবহার না করা হত, তাহলে sum ভ্যারিয়েবলের মান হতো undefined। কারণ জাভাস্ক্রিপ্ট ফাংশন নিজে থেকে কিছু রিটার্ন না করলে ডিফল্টভাবে undefined রিটার্ন করে।




function addNumbers(a, b) {
    let result = a + b;
    return result; // এখানে রেজাল্টটা বাইরে ফেরত পাঠানো হচ্ছে
}

// ফাংশন কল করে ফেরত আসা মানটি 'total' নামের ভেরিয়েবলে জমা রাখলাম
let total = addNumbers(10, 20); 

// এখন এই total ভেরিয়েবলটা আমরা যেকোনো জায়গায় ব্যবহার করতে পারবো
console.log(`আমাদের মোট হিসাব হলো: ${total}`); // আউটপুট: আমাদের মোট হিসাব হলো: 30






function justTest() {
   return "Welcome"; // এখানে মানটি ফেরতি পাঠানো হসছে
}

function userName(firstName, lastName = justTest()) {
    console.log(`Hello ${firstName} ${lastName}`);
} 

userName("Abdullah");






বেসিক সিনট্যাক্স

function functionName(parameters) {
    // ফাংশনের কাজ
    return value;  // ফাংশন থেকে value রিটার্ন করে
}

// ফাংশন কল করলে রিটার্ন ভ্যালু পাবেন
let result = functionName(arguments);





function addNumbers(a, b) {
    let result = a + b;
    return result; // এখানে রেজাল্টটা বাইরে ফেরত পাঠানো হচ্ছে
}

// ফাংশন কল করে ফেরত আসা মানটি 'total' নামের ভেরিয়েবলে জমা রাখলাম
let total = addNumbers(10, 20); 

// এখন এই total ভেরিয়েবলটা আমরা যেকোনো জায়গায় ব্যবহার করতে পারবো
console.log(`আমাদের মোট হিসাব হলো: ${total}`); // আউটপুট: আমাদের মোট হিসাব হলো: 30




function getTitle() {
    return "Developer"; // এই টেক্সটটা বাইরে ফেরত যাবে
}

function showProfile(name, title = getTitle()) {
    console.log(`${name} is a ${title}`);
}

showProfile("Abdullah"); 
// আউটপুট: Abdullah is a Developer








function userName(firstName, lastName) {

    let fullName = (`Hello ${firstName} ${lastName}`);
    return fullName;
    
} 
console.log(userName("Abdullah", "Aziz"));

let newUser = userName("Abdullah", "Aziz");
console.log(newUser);










মনে রাখার মতো কিছু গুরুত্বপূর্ণ বিষয় ⚠️

শুধু return লেখা: যদি কোনো মান না লিখে শুধু return; লিখা হয়, 
তবে ফাংশনটি সেখানেই থেমে যাবে এবং undefined রিটার্ন করবে। এটি সাধারণত কোনো শর্তে ফাংশন মাঝপথে থামানোর জন্য ব্যবহৃত হয়।

নতুন লাইনের ফাঁদ (ASI - Automatic Semicolon Insertion): return লেখার ঠিক পরের লাইনে কখনো রিটার্ন করার মানটি লিখবেন না। যেমন:

// এটি ভুল পদ্ধতি ❌
return 
a + b; // এটি কাজ করবে না, undefined রিটার্ন করবে।

// এটি সঠিক পদ্ধতি  
return a + b;

যদি বড় কোনো অবজেক্ট বা কোড নিচের লাইনে লিখতেই হয়, তবে প্রথম বন্ধনী () ব্যবহার করতে হবে:

return (
   a + b
);





Return Statement-এর মৌলিক ব্যবহার

function add(a, b) {
    return a + b;  // a + b রিটার্ন করে
}

const result = add(5, 3);
console.log(result); // 8




// Return ছাড়া
function addWithoutReturn(a, b) {
    const sum = a + b;
    // কোন রিটার্ন নেই - undefined রিটার্ন করে
}

const result2 = addWithoutReturn(5, 3);
console.log(result2); // undefined





function addNumber(num1, num2) {
    let total = num1 + num2;
    return total;
  
}
const result = addNumber(5, 10);
console.log("The sum is: " + result);

const result = addNumber(5, 10); অবশ্যই লিখতে হবে এমন নয়। এটা লেখা হয় ফাংশন যে মান return করেছে, সেটা পরে ব্যবহার করার জন্য।
---
function addNumber(num1, num2) {
    return num1 + num2;
}

const result = addNumber(5, 10);
console.log(result);

result-এ 15 সংরক্ষণ হয়েছে। পরে চাইলে আবার ব্যবহার করা যাবে
console.log(result * 2); // 30


Variable ছাড়াই

function addNumber(num1, num2) {
    return num1 + num2;
}

console.log(addNumber(5, 10));

এটাও ঠিক। এখানে 15 সরাসরি console.log()-এ চলে গেছে, আলাদা variable লাগেনি।

একই return value বারবার ব্যবহার করতে হলে

const result = addNumber(5, 10);

console.log(result);
console.log(result + 20);
console.log(result * 3);
এভাবে একবার ফাংশন কল করেই একই মান অনেক জায়গায় ব্যবহার করা যায়।


তাহলে const result = addNumber(5, 10); কেন লেখা হয়?

কারণ addNumber(5, 10) একটি value (15) return করে। সেই value-টা যদি পরে আবার ব্যবহার করতে চাইলে, তাহলে variable-এ রাখতে হবে।





function addNumber(num1, num2) {
    let total = num1 + num2;
    return total;
    console.log("This line will also never be executed because it is after the return statement.");
}
const result = addNumber(5, 10);
console.log("The sum is: " + result);

return স্টেটমেন্ট যেই মুহূর্তে execute হয়, সাথে সাথে ফাংশনটা বন্ধ হয়ে যায় এবং কন্ট্রোল ফাংশনের বাইরে চলে যায়। 
এর পরে ওই ফাংশনের ভেতরে থাকা আর কোনো কোড রান হয় না — সেটা console.log হোক বা অন্য কিছু।

function addNumber(num1, num2) {
    let total = num1 + num2;
    return total;   // এখানেই ফাংশন শেষ, value রিটার্ন হয়ে গেল
    console.log("এই লাইনটা কখনো রান হবে না"); // dead code / unreachable
}

JavaScript ইঞ্জিন কোড লাইন বাই লাইন পড়ে, আর return পেলেই বুঝে নেয় যে এই ফাংশনের কাজ শেষ — 
তাই এর পরের লাইনগুলো সে স্কিপ করে দেয় (এমনকি চেক পর্যন্ত করে না)।
অনেক এডিটর/লিন্টার (যেমন VS Code, ESLint) এই ধরনের কোডকে "unreachable code" বলে ধূসর (grayed out) দেখায় বা ওয়ার্নিং দেয়।


যদি return-এর আগে বা পরে console.log চালাতে হয়

function addNumber(num1, num2) {
    let total = num1 + num2;
    console.log("Total calculated: " + total); // return এর আগে রাখো
    return total;
}

অথবা ফাংশন কল করার পর বাইরে থেকে 

const result = addNumber(5, 10);
console.log("The sum is: " + result); // এটা ঠিকভাবে কাজ করবে






function prize(money) {
    let eggPrize = 10;
    let quantity = money * eggPrize; 
    return(
        quantity
    ) ;

    //return quantity, Hello;
}

let result = prize(5);
console.log("The total prize is: " + result);


let result = prize(5);
console.log("The total prize is: " + result);

ফাংশন ডিফাইন করা হচ্ছে 

function prize(money) {
    let eggPrize = 10;
    let quantity = money * eggPrize; 
    return quantity;
}

এখানে prize নামে একটা ফাংশন বানানো হয়েছে যেটা money নামে একটা প্যারামিটার নেয়। 
এই লাইনে এখনো ফাংশন রান হয়নি — শুধু ডিফাইন হয়েছে (blueprint তৈরি হয়েছে)।

ফাংশন কল করা হচ্ছে

let result = prize(5);
এখন ফাংশনটা কল হচ্ছে, আর money প্যারামিটারে 5 পাঠানো হচ্ছে। এবার ফাংশনের ভেতরের কোড লাইন বাই লাইন রান হবে:

let eggPrize = 10; → একটা ডিমের দাম ধরা হচ্ছে ১০ টাকা
let quantity = money * eggPrize; → হিসাব হচ্ছে 5 * 10 = 50
return quantity; → 50 ফেরত (return) পাঠানো হচ্ছে

তারপর result ভ্যারিয়েবলে সেই রিটার্ন হওয়া মান, অর্থাৎ 50, জমা হয়ে যাচ্ছে।

let result = 50; // এভাবে 

প্রিন্ট করা হচ্ছে

console.log("The total prize is: " + result);

এখানে string আর number যোগ (+) করা হচ্ছে। JavaScript নাম্বারটাকে
অটোমেটিক্যালি string-এ কনভার্ট করে জোড়া লাগিয়ে দেয় (একে বলে string concatenation)।





function funName() {
    return "My name is \"Abdullah Aziz\"";
}

let name = funName();
console.log(name);


function funName(name1, name2) {
    return "My name is \"Abdullah Aziz\"";
}

let name = funName("Mohammad", "Arman");
console.log(name);

এখানে প্যারামিটার অনুযায়ী আর্গুমেন্ট না যাওয়ার মূল কারণ হলো— ফাংশনের ভেতরে প্যারামিটার দুটি (name1, name2) কোথাও ব্যবহারই করা হয়নি।

বাইরে থেকে "Mohammad" এবং "Arman" আর্গুমেন্ট হিসেবে ঠিকই পাঠিয়েছে। 

কিন্তু ফাংশনের ভেতর থেকে একটা নির্দিষ্ট টেক্সট বা Hardcoded String রিটার্ন করে দেওয়া হয়েছে,
    
যা হলো "My name is \"Abdullah Aziz\""।

সহজ কথায়, ফাংশনকে বলা হয়েছে: "আমি তোমাকে যে নামই দিই না কেন, তুমি সবসময় 'Abdullah Aziz' নামটাই ফেরত দেবে।"

কোডটি যেভাবে কাজ করছে (লাইন বাই লাইন):

let name = funName("Mohammad", "Arman"); -> এখানে "Mohammad" গিয়ে জমা হচ্ছে name1 এর ভেতর, আর "Arman" জমা হচ্ছে name2 এর ভেতর।

ফাংশনের ভেতরে ঢোকার পর, ফাংশনটি name1 বা name2 এর দিকে তাকাচ্ছেই না। সে সরাসরি "My name is \"Abdullah Aziz\"" লেখাটি রিটার্ন করে দিচ্ছে।

ফলে console.log(name) করার পর আউটপুট আসছে: My name is "Abdullah Aziz".


function funName(name1, name2) {
    return "My name is \"" + name1 + " " + name2 + "\"";
}

let name = funName("Mohammad", "Arman");
console.log(name); 
// আউটপুট আসবে: My name is "Mohammad Arman"


function funName(name1, name2) {
    return `My name is "${name1} ${name2}"`;
}

let name = funName("Mohammad", "Arman");
console.log(name); 
// আউটপুট আসবে: My name is "Mohammad Arman"







function funName(firstName, lastName) {
    let name = firstName + " " + lastName;
    console.log(name);
    return name;
}
    
let fullName = funName('Mohammad', 'Arman');
console.log("Full name is: " + fullName);

১: ফাংশন কল ও আর্গুমেন্ট পাঠানো
let fullName = funName('Mohammad', 'Arman');

এখানে funName ফাংশনটিকে ডাকা হল (Call করা)।

সাথে দুটি ডেটা: 'Mohammad' এবং 'Arman'।

ফাংশনের ভেতরে গিয়ে 'Mohammad' বসে গেল firstName প্যারামিটারে, আর 'Arman' বসে গেল lastName প্যারামিটারে।


২: নাম দুটি জোড়া লাগানো 

let name = firstName + " " + lastName;

ফাংশনের ভেতরে ঢুকে কম্পিউটার দেখল firstName এর মান 'Mohammad' এবং lastName এর মান 'Arman'.

মাঝখানে একটি স্পেস (" ") দিয়ে প্লাস চিহ্ন দিয়ে দুটিকে জোড়া লাগানো হলো।

ফলে তৈরি হলো "Mohammad Arman" এবং সেটি name নামক ভেরিয়েবলে জমা হলো।


৩: প্রথম আউটপুট (ফাংশনের ভেতর থেকে)

console.log(name); এই লাইনের কারণে স্ক্রিনে প্রথম আউটপুট দেখাবে: Mohammad Arman।

৪: মান ফেরত পাঠানো (Return)

return name;

ফাংশনটি তার ভেতরের "Mohammad Arman" লেখাটিকে পকেটে নিয়ে ফাংশনের বাইরে চলে আসলো এবং
বাইরে থাকা fullName ভেরিয়েবলের হাতে সঁপে দিল। এখন fullName এর মান হলো "Mohammad Arman"।

৫: দ্বিতীয় আউটপুট (ফাংশনের বাইরে থেকে)

console.log("Full name is: " + fullName); 
এবার কম্পিউটার স্ক্রিনে দেখাবে "Full name is: " এবং তার সাথে fullName-এর ভেতর থাকা মানটি (Mohammad Arman) জোড়া লাগিয়ে দেবে।

Mohammad Arman
Full name is: Mohammad Arman






function checkAge(age) {
    if (age < 18) {
        return "তুমি এখনো ছোট।"; // বয়স ১৮ কম হলে ফাংশন এখানেই শেষ
    }
    
    // যদি বয়স ১৮ বা তার বেশি হয়, তবেই কেবল নিচের কোডটি রান করবে
    return "তুমি বড় হয়েছ!"; 
}

console.log(checkAge(15)); // আউটপুট: তুমি এখনো ছোট।
console.log(checkAge(22)); // আউটপুট: তুমি বড় হয়েছ!






জাভাস্ক্রিপ্টে কোনো ফাংশন কাজ করতে করতে যখনই একটা return শব্দের দেখা পায়,
সে সাথে সাথে কাজ থামিয়ে দেয় এবং ওই ফাংশন থেকে পুরোপুরি বেরিয়ে আসে (Exit)।

এর মানে হলো, return-এর ঠিক নিচে  যদি আরও হাজার লাইন কোড লিখা থাকে, জাভাস্ক্রিপ্ট সেগুলোর দিকে ফিরেও তাকাবে না। 
প্রোগ্রামিংয়ের ভাষায় এই নিচের লাইনগুলোকে বলা হয় Unreachable Code (যেখানে পৌঁছানো যায় না)।

function testExit() {
    console.log("লাইন ১: আমি রান হবো, কারণ আমি return-এর ওপরে আছি।");

    return "আমি মান নিয়ে বেরিয়ে গেলাম!"; // এখানে ফাংশন পুরোপুরি স্টপ!

    console.log("লাইন ২: আমি জীবনেও রান হবো না!"); 
    console.log("লাইন ৩: আমাকে কেউ দামই দিল না!");
}

let result = testExit();
console.log(result);

লাইন ১: আমি রান হবো, কারণ আমি return-এর ওপরে আছি।
আমি মান নিয়ে বেরিয়ে গেলাম!







যদি ফাংশনে শুধু return লেখো কিন্তু তার পাশে কোনো মান বা ভেরিয়েবল না দেওয়া হয়, তবে জাভাস্ক্রিপ্ট অটোমেটিক সেখান থেকে undefined ফেরত পাঠায়।
খালি return লেখা আর কোনো return না লেখার ফলাফল একদম এক—দুটি ক্ষেত্রেই ভেরিয়েবলে undefined জমা হয়।

💻 উদাহরণ ১: শুধু খালি return দিলে কী হয়?

function giveMeSomething() {
    let message = "Hello";
    
    return; // আমরা শুধু return লিখেছি, পাশে কিছু দিইনি!
}

let result = giveMeSomething();

console.log(result); 
// আউটপুট আসবে: undefined

জাভাস্ক্রিপ্ট যখন return লাইনে আসলো, সে দেখল তাকে ফাংশন থেকে বের হয়ে যেতে বলছ, কিন্তু সাথে করে বাইরে নিয়ে যাওয়ার জন্য কোনো মান দেওয়া হয়নি
তাই সে খালি হাতে বাইরে এসে result ভেরিয়েবলের ভেতর undefined বসিয়ে দিল।

💡 বাস্তব প্রজেক্টে এই খালি return আমরা কেন ব্যবহার করি? (Guard Clause)
    
মনে একটা প্রশ্ন আসতেই পারে— যদি undefined-ই ফেরত যায়, তাহলে শুধু শুধু খালি return লেখার দরকার কী?"

বাস্তব কোডিংয়ে খালি return ব্যবহার করি ফাংশনের কাজ মাঝপথে জোড়পূর্বক থামিয়ে দেওয়ার জন্য (যাকে প্রোগ্রামিংয়ের ভাষায় বলা হয় Early Exit বা Guard Clause)।

একটা ফাংশন বানানো হসছে যা শুধু পজিটিভ (প্লাস) সংখ্যা যোগ করবে। কেউ যদি ভুলে মাইনাস সংখ্যা দেয়, তবে ফাংশনটি আর সামনের দিকে এগোবে না, সেখানেই স্টপ হয়ে যাবে:

function checkAndLog(number) {
    // সংখ্যাটি যদি ০ বা তার চেয়ে ছোট হয়, তবে আমরা আর সামনে যাব না
    if (number <= 0) {
        console.log("ভুল সংখ্যা! আমি এখানেই কাজ থামাচ্ছি।");
        return; // ফাংশনটি এখানেই শেষ, নিচের লাইনে সে আর নামবেই না!
    }
    
    // সংখ্যা সঠিক হলে কেবল নিচের এই লাইনটি রান হবে
    console.log(`চমৎকার! আপনার সংখ্যাটি হলো: ${number}`);
}

checkAndLog(-5); 
/* 
আউটপুট আসবে: 
ভুল সংখ্যা! আমি এখানেই কাজ থামাচ্ছি।
*/

এখানে number <= 0 সত্য হওয়ার কারণে কম্পিউটার return লাইনে এসে ধাক্কা খেয়ে ফাংশন থেকে বের হয়ে গেছে। 
সে নিচের console.log পর্যন্ত যাওয়ার সুযোগই পায়নি।
🏆 সারসংক্ষেপ:
১. return এর পাশে কিছু না দিলে সব সময় undefined ফেরত যায়।
২. খালি return এর মূল পাওয়ার হলো—কোডের কোনো লাইনে কোনো সমস্যা দেখা দিলে ফাংশনটিকে পরের লাইনে যেতে না দিয়ে তৎক্ষণাৎ থামিয়ে দেওয়া।


function userName(firstName, lastName) {

    let fullName = (`Hello ${firstName} ${lastName}`);
    return;
    
} 
console.log(userName("Abdullah", "Aziz"));

let newUser = userName("Abdullah", "Aziz");
console.log(newUser);



Return 2 ভাবে হয়

কিছু নিয়ে বেরিয়ে যাওয়া: যখন ফাংশনের কাজ হলো কোনো হিসাব-নিকাশ করে 
একটা ফলাফল তৈরি করা এবং সেই ফলাফলটা মেইন কোডে ফেরত পাঠানো।

কিছু না নিয়ে বেরিয়ে যাওয়া: যখন ফাংশনের মূল উদ্দেশ্য কোনো মান ফেরত দেওয়া নয়, 
বরং কোনো একটা শর্ত না মিললে বা ভুল হলে কোডটাকে মাঝপথে তালা মেরে বন্ধ করে দেওয়া।


১. কিছু নিয়ে বেরিয়ে যাওয়া (Return with Value)

function calculateDiscount(price) {
    let discount = price * 0.1; // ১০% ডিসকাউন্ট
    return discount; // ডিসকাউন্টের টাকাটা নিয়ে বের হয়ে গেল
}

let myDiscount = calculateDiscount(1000); 
console.log(`আমি ছাড় পেয়েছি: ${myDiscount} টাকা`); 
// আউটপুট: আমি ছাড় পেয়েছি: 100 টাকা


২. কিছু না নিয়ে বেরিয়ে যাওয়া (Return with Nothing / Empty Return)

এখানে ফাংশনটি কোনো গিফট বাইরে পাঠায় না। সে খালি হাতেই বের হয়ে যায়। 
এর একমাত্র উদ্দেশ্য হলো—"নিচের কোডগুলো যেন আর রান না হয়, এখনই ফাংশন থেকে পালাও!"। 
বাইরে দাঁড়িয়ে থাকা ভেরিয়েবলটি তখন খালি বা undefined পায়।

বাস্তব উদাহরণ: সিস্টেমে লগইন করার সময় পাসওয়ার্ড চেক করা। পাসওয়ার্ড ভুল হলে আমরা সাথে সাথে ইউজারকে আটকে দেব, সামনে যেতেই দেব না।

function loginUser(password) {
    if (password !== "1234") {
        console.log("ভুল পাসওয়ার্ড! অ্যাক্সেস ডিনাইড।");
        return; // খালি হাতেই বের হয়ে গেল, নিচের লাইনগুলো আর রান হবে না!
    }
    
    // পাসওয়ার্ড সঠিক হলেই কেবল নিচের লাইনগুলো রান হওয়ার সুযোগ পাবে
    console.log("স্বাগতম! আপনি ড্যাশবোর্ডে প্রবেশ করেছেন।");
    console.log("আপনার প্রোফাইল লোড হচ্ছে...");
}

loginUser("9999"); 







function userName(firstName, lastName) {

    let fullName = (`Hello ${firstName} ${lastName}`);
    return "Test";
    
} 
console.log(userName("Abdullah", "Aziz"));

let newUser = userName("Abdullah", "Aziz");
console.log(newUser);

এখানে খুব সহজ একটা নিয়ম মনে রাখা লাগবে ফাংশনের বডির ভেতরে কী হিসাব ্করা কয়েছে (যেমন fullName), 
জাভাস্ক্রিপ্টের কাছে তার চেয়ে কোটি গুণ বেশি দামী হলো return-এর পাশে কী লিখা হয়েছে।
ফাংশনটি কল করার পর সে ভেতর থেকে শুধু সেই জিনিসটাই বাইরে ছুড়ে মারবে যা return-এর ডানে থাকবে। বাকি সব ফাংশনের ভেতরেই হাওয়া হয়ে যাবে।

❓ ১. এখানে "Test" কেন দেখাবে?
যখন userName("Abdullah", "Aziz") কল করা হয়, তখন জাভাস্ক্রিপ্ট ফাংশনের ভেতরে ঢুকে এই কাজগুলো করে:

প্রথমে সে fullName নামে একটা ভেরিয়েবল বানায় এবং তার ভেতর "Hello Abdullah Aziz" লেখাটা রাখে। কিন্তু, এই ভেরিয়েবলটাকে return করা হয়নি!

এর ঠিক পরের লাইনেই সে দেখে লেখা আছে: return "Test";

ব্যস! জাভাস্ক্রিপ্ট তখন fullName-এর কথা ভুলে যায়। সে তার Emergency Exit দরজা দিয়ে বের হওয়ার সময় পকেটে করে "Test" স্ট্রিংটা নিয়ে বের হয়ে আসে।

যেহেতু ফাংশনটি বাইরে "Test" ফেরত পাঠিয়েছে, তাই:

console.log(userName("Abdullah", "Aziz")); সরাসরি Test প্রিন্ট করে।


📦 ২. রিটার্নের "Test" স্ট্রিংটি কোথায় স্টোর (Store) হবে?
 প্রথম লাইনে এটি কোথাও স্থায়ীভাবে স্টোর হয়নি, সরাসরি কনসোলে প্রিন্ট হয়ে গেছে। কিন্তু  কোডের দ্বিতীয় অংশে নিজেই এটাকে স্টোর করা হয়েছে!

let newUser = userName("Abdullah", "Aziz");

এখানে ঠিক এই ম্যাজিকটা ঘটে:

ডান পাশের userName("Abdullah", "Aziz") অংশটি রান হয়।

ফাংশনটি ভেতর থেকে "Test" লেখাটি ছুড়ে মারে।

বাম পাশে ওত পেতে বসে থাকা newUser ভেরিয়েবলটি সেই ছুটে আসা "Test" লেখাটিকে লুফে নেয় এবং নিজের ভেতর স্টোর (জমা) করে ফেলে।

তাই এর পরের লাইনে যখন  console.log(newUser); লিখা হল, তখন কম্পিউটার newUser-এর পেট থেকে বের করে আবার Test লেখাটিই দেখায়।







১. যোগ করার উদাহরণ (Addition)

function jogKoro(num1, num2) {
    let result = num1 + num2;
    return result; // যোগফল বাইরে ফেরত পাঠানো হলো
}

// ফাংশন কল করে ফেরত আসা মানটি 'jogfol' ভেরিয়েবলে রাখলাম
let jogfol = jogKoro(40, 20); 

console.log(`যোগফল এসেছে: ${jogfol}`); // আউটপুট: যোগফল এসেছে: 60



➖ ২. বিয়োগ করার উদাহরণ (Subtraction)
এই ফাংশনটি প্রথম সংখ্যা থেকে দ্বিতীয় সংখ্যাটি বিয়োগ করে ফলাফল ফেরত দেবে।


function biyogKoro(num1, num2) {
    let result = num1 - num2;
    return result; // বিয়োগফল বাইরে ফেরত পাঠানো হলো
}

// ফাংশন কল করে ফেরত আসা মানটি 'biyogfol' ভেরিয়েবলে রাখলাম
let biyogfol = biyogKoro(40, 20); 

console.log(`বিয়োগফল এসেছে: ${biyogfol}`); // আউটপুট: বিয়োগফল এসেছে: 20



✖️ ৩. গুণ করার উদাহরণ (Multiplication)
এই ফাংশনটি দুটি সংখ্যা গুণ করে গুণফলটি বাইরে ফেরত পাঠাবে।


function gunKoro(num1, num2) {
    let result = num1 * num2;
    return result; // গুণফল বাইরে ফেরত পাঠানো হলো
}

// ফাংশn কল করে ফেরত আসা মানটি 'gunfol' ভেরিয়েবলে রাখলাম
let gunfol = gunKoro(40, 20); 

console.log(`গুণফল এসেছে: ${gunfol}`); // আউটপুট: গুণফল এসেছে: 800



➗ ৪. ভাগ করার উদাহরণ (Division)
এই ফাংশনটি প্রথম সংখ্যাকে দ্বিতীয় সংখ্যা দিয়ে ভাগ করে ভাগফলটি বাইরে ফেরত পাঠাবে।

function vagKoro(num1, num2) {
    let result = num1 / num2;
    return result; // ভাগফল বাইরে ফেরত পাঠানো হলো
}

// ফাংশন কল করে ফেরত আসা মানটি 'vagfol' ভেরিয়েবলে রাখলাম
let vagfol = vagKoro(40, 20); 

console.log(`ভাগফল এসেছে: ${vagfol}`); // আউটপুট: ভাগফল এসেছে: 2





জাভাস্ক্রিপ্টে যখন ফাংশনে return ব্যবহার করা হয়, তখন একটি ফাংশন কিন্তু শুধু নিজে নিজে কাজ করেই থেমে থাকে না, 
সে অন্য একটি ফাংশনের সাথে হাত মিলিয়ে জটিল সব হিসাব পানির মতো সহজ করে ফেলতে পারে।

একটা অনলাইন শপের জন্য বিলিং সিস্টেম বানানো হসছে। সেখানে তিনটি কাজ করতে হবে:

পণ্যের মোট দাম হিসাব করা (গুণ করে)

সেই দামের ওপর ডিসকাউন্ট বা ছাড় হিসাব করা (বিয়োগ করে)

কুরিয়ার খরচ যোগ করে ফাইনাল বিল বানানো (যোগ করে)

কীভাবে একটি ফাংশনের return করা মান সরাসরি অন্য ফাংশনে চলে যায়:

🛒 অনলাইন শপের রিয়েল-লাইফ প্রো-লেভেল উদাহরণ------



// ১. পণ্যের মোট দাম বের করার ফাংশন (দাম × পরিমাণ)
function calculateTotal(price, quantity) {
    return price * quantity; 
}

// ২. ডিসকাউন্ট বাদ দেওয়ার ফাংশন 
function applyDiscount(totalAmount, discount) {
    return totalAmount - discount;
}

// ৩. ডেলিভারি চার্জ যোগ করে ফাইনাল বিল বানানোর ফাংশন
function addDeliveryCharge(amountAfterDiscount, deliveryFee) {
    return amountAfterDiscount + deliveryFee;
}

১২০০ টাকা দামের একটা টি-শার্ট ৩টি  কেনা হল। দোকানদার ২০০ টাকা ছাড় দিল, আর হোম ডেলিভারি চার্জ হলো ৮০ টাকা।

// ধাপ ১: টি-শার্টের মোট দাম বের করি (১২০০ × ৩ = ৩৬০০ টাকা ফেরত আসবে)
let rawTotal = calculateTotal(1200, 3);

// ধাপ ২: ৩৬০০ টাকার ওপর ২০০ টাকা ডিসকাউন্ট অ্যাপ্লাই করি (৩৪০০ টাকা ফেরত আসবে)
let discountedTotal = applyDiscount(rawTotal, 200);

// ধাপ ৩: ৩৪০০ টাকার সাথে ৮০ টাকা ডেলিভারি চার্জ যোগ করি (৩৪৮০ টাকা ফেরত আসবে)
let finalBill = addDeliveryCharge(discountedTotal, 80);

// এবার কাস্টমারকে ফাইনাল রসিদ প্রিন্ট করে দেখাই
console.log(`আপনার ফাইনাল বিল হয়েছে: ${finalBill} টাকা।`);
// আউটপুট: আপনার ফাইনাল বিল হয়েছে: 3480 টাকা।

calculateTotal ফাংশন যে মানটা return করেছিল (rawTotal), সেটা পকেটে ভরে নিয়ে সরাসরি ঢুকিয়ে দেওয়া হল applyDiscount ফাংশনের পেটে! 
আবার সেখান থেকে যা return হয়ে বের হলো, সেটাকে পাঠিয়ে দেওয়া হল addDeliveryCharge ফাংশনে।

যদি ফাংশনগুলোর ভেতর return না লিখে console.log() লিখা হত, 
তবে প্রথম লাইনের পর কোড সেখানেই অচল হয়ে যেত। পরের ফাংশনগুলো খালি হাতে বসে থাকত আর এরর (Error) দিত।

প্রোগ্রামিংয়ের ভাষায় একেই বলে কোড রিইউজেবিলিটি (Code Reusability)—একটি ছোট ছোট ফাংশন বানিয়ে 
সেগুলোকে বারবার মিক্স অ্যান্ড ম্যাচ করে বড় বড় প্রজেক্ট তৈরি করা।


---------------------------------------------------------------------------------------------------------------------------------------------------




function funName(firstName) {
    return "Abdullah";
}
    
let result = funName();

console.log(result);

return হওয়া  "Abdullah" firstName জমা হয় নাকি function নাম funName জমা হয়

সরাসরি উত্তর হলো: রিটার্ন হওয়া "Abdullah" লেখাটি firstName ভেরিয়েবলেও জমা হয় না, আবার ফাংশনের নাম funName-এও জমা হয় না।
এটি সরাসরি বাইরে এসে তৈরি করা result ভেরিয়েবলের ভেতর জমা হয়।


🔍 মেমরির ভেতরের আসল নাটক (ধাপে ধাপে):

১. ফাংশন কল করার মুহূর্ত: let result = funName();
যখন funName() লিখে ফাংশনটিকেে ডাকা হল, কম্পিউটার ফাংশনের ভেতরে ঢুকল। যেহেতু ব্র্যাকেটের ভেতর কোনো আর্গুমেন্ট দেওয়া হয়নি, 
তাই মেমরিতে firstName নামের প্যারামিটারটি একদম খালি বা undefined হয়ে বসে রইল।

২. রিটার্ন করার মুহূর্ত: return "Abdullah";
ফাংশনের শেষ লাইনে এসে যখন কম্পিউটার দেখল return "Abdullah";, 
তখন জাভাস্ক্রিপ্ট ফাংশনের দরজাটা খুলে এই "Abdullah" স্ট্রিং বা লেখাটিকে সরাসরি বাইরে ছুড়ে মারল।


৩. মেমরি পরিষ্কার করার মুহূর্ত (গার্বেজ কালেকশন):
যেমনই "Abdullah" লেখাটি বাইরে চলে গেল, অমনি ফাংশনের কাজ শেষ! 
জাভাস্ক্রিপ্টের ঝাড়ুদার (Garbage Collector) এসে ফাংশনের ভেতরের সেই firstName ভেরিয়েবলটাকে মেমরি থেকে একদম মুছে দিল।
আর ফাংশনের নাম funName যেমন ছিল, তেমনই ফাঁকা রয়ে গেল (সে শুধু ফাংশনের কোডের ঠিকানাটা মনে রাখে)।


৪. মানটি লুফে নেওয়ার মুহূর্ত:
বাইরে দরজার সামনে হাত বাড়িয়ে দাঁড়িয়ে ছিল কে? let result।
ফাংশন থেকে ছুড়ে মারা "Abdullah" লেখাটি সরাসরি এসে এই result ভেরিয়েবলের বাক্সের ভেতর ঢুকে গেল।

ব্যাকগ্রাউন্ডে লাইনটি তখন দেখতে এমন হয়ে যায়:

let result = "Abdullah";

🏆 একদম সহজ সারসংক্ষেপ:

firstName-এ জমা হয় না: কারণ ওটা ফাংশনের ভেতরের লোকাল জিনিস, কাজ শেষ হতেই ওটা মেমরি থেকে ভ্যানিশ হয়ে গেছে।

funName-এ জমা হয় না: কারণ ওটা জাস্ট একটা মেশিনের নাম বা ঠিকানা, সে কোনো ডাটা বা ভ্যালু স্টোর করে ধরে রাখতে পারে না।

জমা হয় শুধু result-এ: কারণ সে বাইরে বালতি হাতে ওত পেতে দাঁড়িয়ে ছিল ফাংশন থেকে পড়া মানটি ধরে রাখার জন্য।






function funName(firstName, lastName) {
    let add = firstName + lastName;
    console.log(add);
    return "Abdullah";
}
    
let result = funName("Mohammad", " Aziz");

console.log(result);

এখানে  "Mohammad", " Aziz"   এবং return "Abdullah"; দুই টাই দেখায় তাহলে কোন মানটিই ব্যবহার করা যাবে কোডের যে কোন যায়গায়

কোডের যেকোনো জায়গায় শুধু "Abdullah" মানটিই ব্যবহার করা যাবে যা এখন result ভেরিয়েবলের ভেতর জমা আছে।

তাহলে "Mohammad Aziz" কেন দেখা গেল এবং ওটার কী হবে?
Mohammad Aziz  <-- (১ম আউটপুট)
Abdullah       <-- (২য় আউটপুট)



১. প্রথম আউটপুট (Mohammad Aziz):
যখন funName("Mohammad", " Aziz") লিখে ফাংশনটি কল করা হল, তখন ফাংশনের ভেতরে ঢুকে লাইনে লেখা ছিল:
let add = firstName + lastName; // Mohammad +  Aziz = Mohammad Aziz
console.log(add); // এই লাইনের কারণে স্ক্রিনে "Mohammad Aziz" লেখা উঠেছে

গুরুত্বপূর্ণ কথা: এই "Mohammad Aziz" কিন্তু ফাংশন থেকে বাইরে বের হয়নি। 
ফাংশন শুধু তার নিজের ঘরের ভেতরের কনসোলে (console.log) ওটা এক পলক দেখিয়েছে মাত্র।

যেমনই ফাংশনের কাজ শেষ হয়েছে, অমনি জাভাস্ক্রিপ্টের ঝাড়ুদার (Garbage Collector)
এসে ফাংশনের ভেতরের এই add, firstName, lastName সব মেমরি থেকে চিরতরে মুছে ফেলেছে। 
তাই এই "Mohammad Aziz" মানটিকে ফাংশনের বাইরে কোডের আর কোথাও কোনোদিন খুঁজে পাওয়া যাবে না।


২. দ্বিতীয় আউটপুট (Abdullah):
ফাংশনের শেষ লাইনে: return "Abdullah";। এর মানে হলো, ফাংশনটি বন্ধ হওয়ার ঠিক শেষ সেকেন্ডে সে "Abdullah" লেখাটিকে দরজার বাইরে ছুড়ে মেরেছে।

আর বাইরে দরজার সামনে বালতি হাতে দাঁড়িয়ে ছিল কে? let result। সে ওই ছুড়ে মারা "Abdullah" 
মানটিকে খপ করে লুফে নিয়েছে এবং নিজের ভেতর স্টোর বা জমা করে রেখেছে।


🎯 তাহলে পরে কোডের যেকোনো জায়গায় কোনটা ব্যবহার হবে?

যেহেতু "Abdullah" মানটি সফলভাবে বাইরে এসে result ভেরিয়েবলের ভেতর লক হয়ে গেছে, 
তাই কোডের নিচে যেকোনো জায়গায় শুধু এই result ভেরিয়েবলটিকেই ব্যবহার করা যাবে।

যেমন, কোডের নিচে গিয়ে এইরকম হাজারটা কাজ করতেে পারা যাবে:


// ১. শুধু মানটি দেখতে চাইলে:
console.log(result); // আউটপুট দেখাবে: Abdullah

// ২. এর সাথে অন্য কিছু যোগ করতে চাইলে:
let fullName = result + " Bhai"; 
console.log(fullName); // আউটপুট দেখাবে: Abdullah Bhai

// ৩. কোনো মেসেজ বানাতে চাইলে:
console.log(`স্বাগতম, ${result}`); // আউটপুট দেখাবে: স্বাগতম, Abdullah





function funName(firstName, lastName) {
    let add = firstName + lastName;
    console.log(add);
    return(
       "Abdullah", add
    );
}
    
let result = funName("Mohammad", " Aziz");
console.log(result);

এখানে দুইবার  Mohammad Aziz" একবার ও কেন  "Abdullah" আসল না  return করার পর 
এখানে return এর ব্র্যাকেটের ভেতর কমা (,) দিয়ে দুটো জিনিস লিখা হয়েছে: "Abdullah", add। 
জাভাস্ক্রিপ্ট হয়তো দুটোই রিটার্ন করবে বা "Abdullah" রিটার্ন করবে, কিন্তু স্ক্রিনে চলে এসেছে "Mohammad Aziz"।

🚨 জাভাস্ক্রিপ্টের গোপন নিয়ম: "কমা অপারেটর" (Comma Operator)
জাভাস্ক্রিপ্টে যখন বন্ধনী বা ব্র্যাকেটের ভেতর কমা (,) দিয়ে একাধিক জিনিস লিখা হয়, 
তখন জাভাস্ক্রিপ্ট বাম দিক থেকে পড়া শুরু করে এবং একদম শেষে (ডান দিকে) যে থাকে—শুধু তাকেই আসল মান হিসেবে ধরে,
আর বাকি সব কিছুকে সে অবহেলা করে বা বাদ দিয়ে দেয়।

return ( "Abdullah" , add );
//          ↑          ↑
//       ১ম জিনিস    শেষ জিনিস (ডান দিকের)


এখানে কমা থাকার কারণে জাভাস্ক্রিপ্ট ১ম জিনিস "Abdullah"-কে পুরোপুরি ইগনোর (বাতিল) করে দিল। সে শুধু একদম শেষ জিনিস অর্থাৎ add-কে রিটার্ন করল।

তাহলে ব্যাকগ্রাউন্ডে লাইনটি হয়ে গেল: return add;


🔍 স্ক্রিনে দুবার "Mohammad Aziz" কেন আসলো:


১. প্রথমবার আসলো ফাংশনের ভেতরের লাইনের জন্য:

let add = firstName + lastName; // Mohammad +  Aziz = Mohammad Aziz
console.log(add); // এই লাইনের কারণে ১ম বার স্ক্রিনে উঠলো "Mohammad Aziz"

২. দ্বিতীয়বার আসলো বাইরের result এর জন্য:
যেহেতু কমা অপারেটরের নিয়মের কারণে ফাংশনটি শুধু add ভেরিয়েবলের মানটিই ("Mohammad Aziz") বাইরে ছুড়ে মেরেছে,
তাই বাইরে ওত পেতে থাকা result ভেরিয়েবলটি লুফে নিয়েছে সেই "Mohammad Aziz"-কেই!

যার কারণে বাইরের লাইনে যখন নিজেই প্রিন্ট করা হল:

console.log(result); // এই লাইনের কারণে ২য় বার স্ক্রিনে উঠলো "Mohammad Aziz"

এই কারণেই স্ক্রিনে দুবার "Mohammad Aziz" এসেছে এবং "Abdullah" লেখাটি একবারের জন্যও আসার সুযোগ পায়নি।


🛠️ সমাধান:  যদি আসলেই দুটো জিনিসই একসাথে বাইরে পাঠাতে চাওয়া হয়?
জাভাস্ক্রিপ্টে return কিন্তু একসাথে কমা দিয়ে একাধিক আলাদা জিনিস পাঠাতে পারে না (পাঠালে শুধু শেষেরটা যায়)। তুমি যদি দুটো মানই একসাথে বাইরে পাঠাতে চাও, 
তবে একটি Array (অ্যারে) বা থার্ড ব্র্যাকেটের ভেতর পুরে পাঠাতে হবে। যেমন:


function funName(firstName, lastName) {
    let add = firstName + lastName;
    console.log(add); 
    
    // একটি থার্ড ব্র্যাকেট বা অ্যারের ভেতর দুটো মানই একসাথে প্যাক করে পাঠালাম
    return [ "Abdullah", add ]; 
}
    
let result = funName("Mohammad", " Aziz");

console.log(result); 
// আউটপুট দেখাবে: [ 'Abdullah', 'Mohammad Aziz' ]


এবার  "Abdullah" এবং "Mohammad Aziz" দুটো মানই অক্ষত অবস্থায় বাইরে এসে result এর ভেতর জমা হয়েছে!







যখন দুটো মানকে একসাথে প্যাক করে return [ "Abdullah", add ]; করে পাঠিয়েছিলে,
তখন তারা একটা বাক্সের ভেতর সিরিয়াল অনুযায়ী তালাবন্ধ হয়ে result ভেরিয়েবলে জমা হয়েছিল।

জাভাস্ক্রিপ্টে এই বাক্সের ভেতরের জিনিসগুলোকে আলাদা করার জন্য  ব্যবহার করতে হয় ইন্ডেক্স (Index) বা পজিশন নম্বর। জাভাস্ক্রিপ্ট গোনা শুরু করে 0 (শূন্য) থেকে।

📦 মেমরিতে বাক্সটি এখন দেখতে এইরকম:

// result ভেরিয়েবলের ভেতর এখন এই বাক্সটি আছে:
let result = [ "Abdullah", "Mohammad Aziz" ];
//                ↑               ↑
//            ০ নম্বর রুম      ১ নম্বর রুম


🛠️ আলাদা করার প্র্যাক্টিক্যাল উপায়
এখন কোডের যেকোনো জায়গায় যখনই মন চাইবে, জাস্ট রুম নম্বর ([0] বা [1]) ধরে ডাক দিলেই তারা আলাদা হয়ে বের হয়ে আসবে।

function funName(firstName, lastName) {
    let add = firstName + lastName;
    return [ "Abdullah", add ]; // অ্যারে বানিয়ে রিটার্ন 
}
    
let result = funName("Mohammad", " Aziz");

// --- এবার আলাদা করার পালা ---

// ১. যখন শুধু "Abdullah" কে লাগবে (০ নম্বর রুম):
let onlyAbdullah = result[0];
console.log(onlyAbdullah); // আউটপুট: Abdullah

// ২. যখন শুধু "Mohammad Aziz" কে লাগবে (১ নম্বর রুম):
let onlyAziz = result[1];
console.log(onlyAziz); // আউটপুট: Mohammad Aziz

// ৩.  যদি মন চায় দুজনকে একসাথে আলাদা একটা সুন্দর মেসেজে দেখানর:
console.log(`হ্যালো ${result[0]}, আপনার পুরো নাম কি ${result[1]}?`);
// আউটপুট: হ্যালো Abdullah, আপনার পুরো নাম কি Mohammad Aziz?


যদি বারবার result[0], result[1] লিখতে না চাও, তবে জাভাস্ক্রিপ্টে একটা চমৎকার আধুনিক নিয়ম আছে।

// ফাংশন থেকে ২টা মান আসবে, তাই বাম পাশেও ২টা ভেরিয়েবল দিয়ে সরাসরি আলাদা 
let [name1, name2] = funName("Mohammad", " Aziz");

// এখন এরা পুরো আলাদা দুটি স্বাধীন ভেরিয়েবল!
console.log(name1); // আউটপুট: Abdullah
console.log(name2); // আউটপুট: Mohammad Aziz

এখন যখন ইচ্ছা, যাকে ইচ্ছা, যেভাবে খুশি কোডের যেকোনো জায়গায় একদম আলাদা আলাদা ভেরিয়েবল হিসেবে ব্যবহারেক করা যাবে।



    

function getFinalPrice() {
    let price = 500;
    let tax = 75;
    let total = price + tax; // মোট হলো ৫৭৫ টাকা

    return total; // এই ৫৭৫ সংখ্যাটি সে বাইরে ছুড়ে মারবে
}

এখন এই getFinalPrice() ফাংশনটাকে কোডের যত জায়গায় খুশি, যতবার ইচ্ছা কল করা যাবে। 
যতবার কল করা হবে, কোডের ওই জায়গায় getFinalPrice() লেখাটা সাময়িকভাবে উধাও হয়ে গিয়ে সেখানে 575 বসে যাবে।

// ১ নম্বর জায়গায় কল (সরাসরি প্রিন্ট করতে)
console.log( getFinalPrice() ); 
// ব্যাকগ্রাউন্ডে হয়ে যাবে: console.log( 575 ); -> আউটপুট: 575


// ২ নম্বর জায়গায় কল  (আরেকটি হিসাবের ভেতরে)
let doublePrice = getFinalPrice() * 2; 
// ব্যাকগ্রাউন্ডে হয়ে যাবে: let doublePrice = 575 * 2; -> doublePrice এর মান হবে ১১৫০


// ৩ নম্বর জায়গায় কল (ইউজারকে একটা মেসেজ দেখানোর জন্য)
console.log(`আপনার প্রোডাক্টের মোট দাম পড়েছে: ${getFinalPrice()} টাকা`);
// ব্যাকগ্রাউন্ডে হয়ে যাবে: `আপনার প্রোডাক্টের মোট দাম পড়েছে: 575 টাকা`

🧠 মেমরিতে আসলে কী ঘটছে?

কোডে যতবারই getFinalPrice() লিখা হসছে, জাভাস্ক্রিপ্ট কিন্তু মেমরিতে নতুন কোনো ফাংশন বানাচ্ছে না।
ফাংশনটা মেমরির একটা নির্দিষ্ট ঠিকানায় একবারই তৈরি হয়ে বসে আছে।

যখনই নামের পাশে ব্র্যাকেট () দেওয়া হসছে, জাভাস্ক্রিপ্ট মেমরির ওই ঠিকানায় ছুটে যাচ্ছে, ভেতরের কোডটুকু রান করছে, 
আর বের হওয়ার সময় return করা মানটি (575) এনে ওই লাইনে বসিয়ে দিচ্ছে।
কাজ শেষ হওয়া মাত্রই ওই ফাংশনের ভেতরের লোকাল ভেরিয়েবলগুলো (price, tax, total) মেমরি থেকে মুছে যায়




যদি return হওয়া সেই total ভ্যালুটা নিজের কাছে রেখে দিতে চাওয়া হয় (যাতে পরে যেকোনো জায়গায় ব্যবহার করা যায়),
তবে জাভাস্ক্রিপ্টের নিয়ম হলো—ফাংশন কল করার সময় বাম পাশে একটা ভেরিয়েবল দিয়ে সেই মানটাকে ধরে ফেলা (Store করা)।

function getFinalPrice() {
    let price = 500;
    let tax = 75;
    let total = price + tax; // ৫৭৫

    return total; // ৫৭৫ সংখ্যাটি বাইরে ছুড়ে মারলো
}

// এই যে বাম পাশে একটা ভেরিয়েবল (myTotal) দিয়ে আমরা মানটা লুফে নিলাম!
let myTotal = getFinalPrice();

🧠 এই লাইনে মেমরিতে ঠিক কী ঘটলো?
ডান পাশের getFinalPrice() ফাংশনটি রান হলো।

ফাংশনটি ভেতর থেকে total-এর মান অর্থাৎ 575 সংখ্যাটি বাইরে ছুড়ে দিল।

ঠিক সেই মুহূর্তে কোডের ওই জায়গায় getFinalPrice() লেখাটি ভ্যানিশ হয়ে গিয়ে সেখানে 575 বসে গেল।

লাইনটি তখন দেখতে এমন হয়ে গেল: let myTotal = 575;

জাভাস্ক্রিপ্ট মেমরিতে myTotal নামে একটা নতুন ঘর বানালো এবং তার ভেতর ওই 575 সংখ্যাটিকে আজীবনের জন্য (যতক্ষণ প্রোগ্রাম চলবে) সেভ করে রেখে দিল।


🚀 এখন এই ভ্যালুটা নিজের কাছে রাখার সুবিধা

এখন যেহেতু মানটি myTotal ভেরিয়েবলের ভেতর জমা আছে, আর বারবার ফাংশন কল করতে হবে না।সরাসরি এই ভেরিয়েবলটা দিয়ে হাজারটা কাজ করতেে পারা যাবে:


// ১. শুধু মানটা দেখতে চাইলে:
console.log(myTotal); // আউটপুট: 575

// ২. এর সাথে আরও ১০০ টাকা ডেলিভারি চার্জ যোগ করতে চাইলে:
let grandTotal = myTotal + 100; // ৫৭৫ + ১০০ = ৬৭৫
console.log(grandTotal); // আউটপুট: 675

// ৩. ইউজারকে রসিদ বা মেসেজ দেখাতে চাইলে:
console.log(` বিল হয়েছে ${myTotal} টাকা।`); 
// আউটপুট:  বিল হয়েছে 575 টাকা।





function addNumber(num1, num2){
  console.log(num1 + num2);
}

const result = addNumber(5, 7);

দেওয়া কোডের মতো এই ফাংশনটিকে একটি ভেরিয়েবলে স্টোর করা যাবে, 
তবে যেভাবে লিখেছেন সেভাবে রাখলে ভেরিয়েবলটিতে কোনো মান (value) জমা হবে না; বরং ভেরিয়েবলটি undefined হয়ে থাকবে।

কোডে ফাংশনটি শুধু কনসোলে প্রিন্ট (console.log) করছে, কিন্তু কোনো কিছু return করছে না।


function addNumber(num1, num2){
  console.log(num1 + num2); // এটি শুধু স্ক্রিন দেখাবে, কিন্তু ফাংশনের ভেতর থেকে কিছু পাঠাবে না
}

const result = addNumber(5, 7); 
console.log(result); // আউটপুট আসবে: undefined


কারণ: জাভাস্ক্রিপ্টে কোনো ফাংশন থেকে যদি সুনির্দিষ্টভাবে return কিওয়ার্ড দিয়ে মান ফিরিয়ে না দেওয়া হয়,
তবে সেই ফাংশনটি মনে মনে undefined রিটার্ন করে। তাই result ভেরিয়েবলে 12 সেভ না হয়ে undefined সেভ হবে।


ফাংশন থেকে ভেরিয়েবলে মান স্টোর করার সঠিক নিয়ম (return ব্যবহার করে)
যদি সত্যিই ফাংশনের ফলাফল কোনো ভেরিয়েবলে স্টোর করতে চান, তবে অবশ্যই return ব্যবহার করতে হবে:

function addNumber(num1, num2){
  return num1 + num2; // ফলাফলটি ফাংশনের বাইরে ফেরত পাঠানো হলো
}

const result = addNumber(5, 7); // এখন যোগফল (12) সরাসরি result ভেরিয়েবলে স্টোর হবে

console.log(result); // আউটপুট আসবে: 12





function addNumber(num1, num2){
  let total = num1 + num2;
  return total;
}

const result = addNumber(5, 7);

console.log(result)

প্যারামিটার পাস: addNumber(5, 7) কল করার সাথে সাথে num1-এর মান 5 এবং num2-এর মান 7 ফাংশনের ভেতরে চলে গেছে।

লোকাল ভেরিয়েবল: ফাংশনের ভেতরে let total = num1 + num2; হিসাব করে 12 মানটি total নামের একটি ভেরিয়েবলে জমা করেছে।

রিটার্ন মেকানিজম: return total; দেওয়ার কারণে 12 সংখ্যাটি ফাংশনের বডি থেকে সরাসরি বাইরে বেরিয়ে এসেছে।

ভেরিয়েবলে স্টোরেজ: বাইরে এসে সেই 12 মানটি সরাসরি const result ভেরিয়েবলে গিয়ে সেভ হয়েছে।

কনসোল লগ: সবশেষে console.log(result) প্রিন্ট করার কারণে স্ক্রিনে আউটপুট দেখাবে: 12




result ভেরিয়েবলটি কোনো ফাংশনের বাইরে, একদম সরাসরি মেইন ফাইলের ভেতর তৈরি করেন, তবে সেটিকে গ্লোবাল ভেরিয়েবল বলা হয়।

কোথায় ব্যবহার করা যাবে? এটি ি ওই ফাইলের নিচের দিকে যেকোনো জায়গা থেকে (console.log করতে পারবেন, 
অন্য কোনো ফাংশনের ভেতরে পাঠাতে পারবেন বা অন্য কোনো গণিত করতে পারবেন) ব্যবহার করতে পারবেন।


function addNumber(num1, num2){
  return num1 + num2;
}

// এটি মেইন ফাইলের বাইরে বা গ্লোবাল জায়গায় ডিক্লেয়ার করা হলো
const result = addNumber(5, 7); 

// এখন আপনি এটি যেখানে খুশি ব্যবহার করতে পারবেন:
console.log(result); // আউটপুট: 12

function showOutput() {
  console.log("রিসাল্ট হলো: " + result); // ফাংশনের ভেতর থেকেও এটি এক্সেস করা যাচ্ছে
}
showOutput();




result ভেরিয়েবলটিকে অন্য কোনো ফাংশনের ভেতরে তৈরি করেন, তবে সেটির রাজত্ব কেবল ওই ফাংশনের ভেতরেই সীমাবদ্ধ থাকে।

function calculate() {
  const result = addNumber(5, 7); // এটি একটি লোকাল ভেরিয়েবল
}

calculate();

// ❌ ভুল: ফাংশনের বাইরে থেকে এটি আর পাওয়া যাবে না, এরর দিবে!
console.log(result); // ReferenceError: result is not defined


