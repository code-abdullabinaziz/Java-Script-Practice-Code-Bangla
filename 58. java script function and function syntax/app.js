জাভাস্ক্রিপ্টে (JavaScript) function হলো কোডের একটি নির্দিষ্ট ব্লক, যা কোনো নির্দিষ্ট কাজ বা হিসাব সম্পন্ন করার জন্য তৈরি করা হয়। সহজ কথায়, 
একটি নির্দিষ্ট কাজের নিয়ম লিখে রেখে সেটি একটি নাম (Function Name)
দিয়ে সংরক্ষণ করে রাখা হয় এবং প্রয়োজন অনুযায়ী যেকোনো সময় শুধু সেই নামের সাহায্যে বারবার কোডটি ব্যবহার করা যায়।

কেন Function ব্যবহার করা হয়?
কোড পুনঃব্যবহারযোগ্যতা (Reusability): একটি কোড বারবার না লিখে, একটি Function তৈরি করে তা বারবার কল বা ব্যবহার করা যায়।

সহজ রক্ষণাবেক্ষণ (Maintainability): কোডে কোনো পরিবর্তন করতে হলে বারবার না লিখে শুধু Function-টির ভেতরের অংশ পরিবর্তন করলেই সব জায়গায় আপডেট হয়ে যায়।


ফাংশন বলতে কী বোঝায়?
ফাংশন হলো নির্দিষ্ট কাজের জন্য ডিজাইন করা পুনঃব্যবহারযোগ্য কোড ব্লক।
ফাংশনগুলো যখন কল বা ইনভোক করা হয়, তখন সেগুলো এক্সিকিউট হয়।
সকল প্রোগ্রামিং ভাষায় ফাংশন মৌলিক বিষয়।



//Syntax:
function functionName (Function parameters) {   ------functionName name
  // Function body
}

👉ফাংশন তৈরি করার সময় নামের পাশে বন্ধনীর () ভেতরে যা, তাকেই Parameter (প্যারামিটার) বলা হয়।

প্যারামিটার হলো একটি ভেরিয়েবলের মতো, যা বাইরে থেকে তথ্য গ্রহণ করে ফাংশনের ভেতরে ব্যবহার করতে সাহায্য করে।




function functionName(parameters) {
    // কোড ব্লক
    return value; // অপশনাল
}



// ফাংশন ডিক্লারেশন
function greet() {
    console.log("Hello World!");
}

// ফাংশন কল
greet(); // Output: Hello World!

ফাংশন তৈরি (define) করার সময় এবং ফাংশন কল (call) করার সময় দুটি ভিন্ন শব্দ ব্যবহার করা হয়:

Parameter (প্যারামিটার): ফাংশন তৈরি করার সময় বন্ধনীর () ভেতরে যে ভেরিয়েবলের নাম লেখা হয়।

Argument (আর্গুমেন্ট): ফাংশন কল করার সময় greet(...)-এর ভেতরে যে আসল মান বা ভ্যালু বসিয়ে দেওয়া হয়।

// ১. ফাংশন তৈরি করার সময় ব্র্যাকেটে যা থাকে তা হলো Parameter
function greet(name) { 
  console.log("Hello " + name);
}

// ২. ফাংশন কল করার সময় ব্র্যাকেটে যা পাঠানো হয় তা হলো Argument
greet("Aziz");

name হলো Parameter (এটি শুধু মান গ্রহণ করার জন্য একটি খালি পাত্র বা ভেরিয়েবলের মতো কাজ করে)।

"Aziz" হলো Argument (এটি আসল ডেটা বা মান, যা ফাংশনের ভেতরে ঢুকছে)।


১. greet এটি হলো Function Name (ফাংশনের নাম)।
২. function greet() { ... }  এটি হলো Function Declaration বা ফাংশন তৈরি করা। ব্র্যাকেট {} এর ভেতরের অংশটুকু হলো ফাংশনের Block।
৩. greet() ব্লকের বাইরে বা শেষে নিচে যখন আমরা নাম ধরে বন্ধনী দিই, তাকে বলা হয় Function Call বা Function Invocation (ফাংশন চালু করা)।





console.log() ভেতরে রাখার মূল কারণ: (vvi)

console.log() ভেতরে রাখার মূল কারণ হলো ফাংশনের কাজ কী তা নির্ধারণ করা এবং ফাংশন কোডকে বারবার ব্যবহারের উপযোগী করা।

সহজ কথায় ৩টি কারণে console.log() ভেতরে রাখা হয়:

১. ফাংশনটিকে একটা "বোতাম"-এর মতো বানানো 

আপনি চান greet() কল করলেই যেন সরাসরি স্ক্রিনে প্রিন্ট হয়ে যায়।

ভিতরে রাখলে: আপনি যখনই greet() লিখবেন, ফাংশনটি নিজে থেকেই প্রিন্ট করার কাজটা করে ফেলবে। আপনাকে বাইরে আর কষ্ট করে console.log() লিখতে হবে না।

বাইরে রাখলে: আপনাকে প্রতিবার লিখতে হতো console.log(greet()) — যা বাড়তি কোড এবং ঝামেলা।

২. বারবার ব্যবহারের সুবিধা (Reusability)
ফাংশন বানানোর মূল উদ্দেশ্য হলো এক কোড বারবার না লিখে সংক্ষেপে ব্যবহার করা।

function greet() {
  console.log("Hello Programmer");
}

// এখন ৩ বার প্রিন্ট করতে চাইলে শুধু ৩ লাইন লিখলেই হবে:
greet();
greet();
greet();



যদি console.log() ভেতরে না থাকত, তবে আপনাকে ৩ বার console.log("Hello Programmer") পুরোটা লিখতে হতো!

৩. ফাংশনের ভিতরে বনাম ফাংশনের বাইরে (return কনসেপ্ট)
ফাংশন দুটি উপায়ে কাজ করতে পারে:

উপায়-১: সরাসরি প্রিন্ট করা (আপনার কোড)
ফাংশনটি নিজেই প্রিন্ট করার দায়িত্ব নেয়, তাই ভেতরেই console.log() দেওয়া হয়।



function greet() {
  console.log("Hello Programmer"); // নিজেই প্রিন্ট করে দেয়
}

greet(); // আউটপুট: Hello Programmer



উপায়-২: মান ফেরত দেওয়া (return করা)
যদি আপনি চান ফাংশনটি প্রিন্ট করবে না, শুধু একটি লেখা তৈরি করে বাইরে পাঠাবে, তখন ভেতরে return ব্যবহার করতে হয় এবং প্রিন্ট করতে হয় বাইরে থেকে:

function greet() {
  return "Hello Programmer"; // মানটি বাইরে পাঠিয়ে দিল
}

// এখন প্রিন্ট করতে হলে বাইরে console.log দিতে হবে:
console.log(greet()); // আউটপুট: Hello Programmer

যদি চান ফাংশন ডাকলেই কাজ (প্রিন্ট) হয়ে যাক, তবে console.log() ভেতরে। 
আর যদি চান ফাংশন কোনো হিসাব বা টেক্সট তৈরি করে ফেরত দেক (যা পরে অন্য কাজে লাগাবেন), 
তবে ভেতরে return দিয়ে বাইরে console.log() করবেন।






function myNames (name, country) {
  console.log("My name is" + " " + name + " " + "I'm come from" + " " + country) ------{Function Body}
}

myNames("Abdullah", "Bangladesh");
myNames("Aziz", "Pakistan");
myNames("Mohammad", "Kashmir");


function myNames (name, country) {   // ← name, country হলো প্যারামিটার
  console.log("My name is" + " " + name + " " + "I'm come from" + " " + country)
}

myNames("Abdullah", "Bangladesh");   // ← "Abdullah", "Bangladesh" হলো আর্গুমেন্ট
myNames("Aziz", "Pakistan");         // ← "Aziz", "Pakistan" হলো আর্গুমেন্ট
myNames("Mohammad", "Kashmir");      // ← "Mohammad", "Kashmir" হলো আর্গুমেন্ট


প্যারামিটার (Parameter)	ফাংশন ডিক্লেয়ার করার সময় যে ভেরিয়েবলগুলো লিখা হয়	name, country
আর্গুমেন্ট (Argument)	ফাংশন কল করার সময় যে ভ্যালুগুলো পাঠানো হয়	"Abdullah", "Bangladesh"



// ধাপ ১: ফাংশন তৈরি (প্যারামিটার)
function myNames (name, country) {
    // name আর country হলো প্যারামিটার
    // এগুলো ফাংশনের ভেতরে ভেরিয়েবলের মতো কাজ করে
    console.log("My name is" + " " + name + " " + "I'm come from" + " " + country)
}

// ধাপ ২: ফাংশন কল (আর্গুমেন্ট)
myNames("Abdullah", "Bangladesh");
//        ↑            ↑
//        আর্গুমেন্ট   আর্গুমেন্ট
//        (আসল মান)   (আসল মান)

// যখন এই লাইন রান করে——
// name = "Abdullah" (প্যারামিটার = আর্গুমেন্ট)
// country = "Bangladesh" (প্যারামিটার = আর্গুমেন্ট)


myNames("Abdullah", "Bangladesh");
//↑        ↑            ↑
//|        |            |
//ফাংশনের নাম  আর্গুমেন্ট   আর্গুমেন্ট
//() চিহ্ন = কল করা




function myIntro () {
  console.log("I am Abdullah");
  console.log("My age 28");
  console.log("I live in Bangladesh");
}
myIntro();




সেকেন্ড ব্র্যাকেট বা { } এর ভেতরের পুরো অংশটাকে জাভাস্ক্রিপ্টের ভাষায় Block (ব্লক) বা Block Statement বলা হয়।

{
   console.log("I am Abdullah");
   console.log("My age 28");
   console.log("I live in Bangladesh");
}

এই দ্বিতীয় বন্ধনী বা কার্লি ব্রেসেস {} এর ভেতরে থাকা সবটুকু কোড মিলে তৈরি হয় একটি Block। জাভাস্ক্রিপ্ট এই ভেতরের কোডগুলোকে একটি দল বা গুচ্ছ হিসেবে বিবেচনা করে।




function userDetails() {
   let userName = "Abdullah Aziz";
   let userAge = 30;
   let userCountry = "Bangladesh";
   console.log(`My name is ${userName}, I am ${userAge} years old and 
   I live in ${userCountry}`);
}

userDetails();

১. userDetails: শুধুমাত্র এই নামটুকুকে বলা হয় Function Name (ফাংশনের নাম)।  এই ফাংশনটিকে চেনার জন্য একটি নাম।

২. userDetails(): যখন নামের শেষে এই ফার্স্ট ব্র্যাকেট () যুক্ত করে, তখন পুরো জিনিসটাকে বলা হয় Function Call (ফাংশন কল) বা Function Invocation।
