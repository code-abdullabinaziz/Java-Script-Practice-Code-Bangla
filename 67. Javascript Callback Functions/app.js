   Callback Function কি?

একটি ফাংশনের ভেতরে যখন অন্য একটি ফাংশনকে আর্গুমেন্ট হিসেবে পাঠানো হয় এবং প্রথম ফাংশনের কাজ শেষে বা ভেতরে দ্বিতীয় ফাংশনটিকে ডেকে (Call করে) চালানো হয়, 
তখন সেই দ্বিতীয় ফাংশনটিকে Callback Function বলে।

🧠 কেন CallBack Function প্রয়োজন?
  
জাভাস্ক্রিপ্ট হলো একটি Synchronous এবং Single-threaded ল্যাঙ্গুয়েজ। এর মানে হলো জাভাস্ক্রিপ্ট ওপর থেকে নিচে এক লাইন এক লাইন করে কোড রান করে।

কিন্তু রিয়েল-লাইফে কিছু কাজ শেষ হতে সময় লাগে—যেমন:

সার্ভার থেকে ডেটা ফেচ (Fetch) করা

ফাইল রিড করা

কোনো টাইমার বা ইউজার ক্লিক ইভেন্টের জন্য অপেক্ষা করা

এসব কাজ যদি জাভাস্ক্রিপ্ট থামিয়ে রেখে অপেক্ষা করতে যায়, তবে পুরো ওয়েবসাইট ফ্রিজ হয়ে যাবে। এই Asynchronous (অ্যাসিঙ্ক্রোনাস) বা অপেক্ষার কাজগুলো হ্যান্ডেল করার জন্যই কলব্যাক ফাংশনের জন্ম।

Simple Syntex;

function getMyName (myName) {
    myName();
}

let details = function() {
    console.log("Abdullah Aziz");
};

getMyName(details);





function getMyName (myName) {
   myName();
}

let details = function() {
   let name = "Abdullah";
   let age = 30;
   console.log(`${name} ${age}`);
};

getMyName(details);


সবার নিচে getMyName(details); লাইনটা চলল। অর্থাৎ getMyName ফাংশনকে ডাকা হলো, আর আর্গুমেন্ট হিসেবে পাঠানো হলো details ফাংশনটাকে।

প্রোগ্রাম getMyName (myName)-এর ভেতরে ঢুকল। এখানে myName নামের প্যারামিটারের ভেতরে গিয়ে জমা হলো details ফাংশনটা।

পরের লাইনে myName(); চলল। যেহেতু myName মানেই এখন details, তাই আসলে details() ফাংশনটা কল হলো।

প্রোগ্রাম তখন details ফাংশনের ভেতরে গিয়ে name রাখল "Abdullah", age রাখল 30, আর প্রিন্ট করল: Abdullah 30।

details-এর কাজ শেষ হলে আবার getMyName-এর ভেতরে ফিরে এসে getMyName-এর কাজও শেষ হলো।

এখানে কে কী?
   
Callback Function: details (কারণ এটাকে আর্গুমেন্ট হিসেবে getMyName-এর ভেতরে পাঠানো হয়েছে, আর ভেতর থেকে myName() দিয়ে ডাকা হচ্ছে)।

Higher-Order Function: getMyName (কারণ এটা প্যারামিটার হিসেবে আরেকটা ফাংশন details-কে নিচ্ছে এবং কল করছে)।








function myIntro(result){
  console.log(`Result is: ${result}`);
}

let details = (a, b, call) => {
  let sum = a + b;
  call(sum);
}

details(5, 5, myIntro);

myIntro ফাংশনটা আর্গুমেন্ট হয়ে call প্যারামিটারে এসে বসেছে—তাই এখন call নিজেই হলো myIntro ফাংশনটা।

তাই ভেতরে call(sum) লেখা মানেই হলো myIntro(10) লেখা—অর্থাৎ myIntro ফাংশনটাকে সরাসরি ডাকা হচ্ছে, 
আর সাথে করে sum-এর মান 10 ঢুকিয়ে দেওয়া হচ্ছে myIntro-এর result প্যারামিটারে।



মূল কথা (এক নজরে)

যখন details(5, 5, myIntro) কল করা হয়, তখন myIntro আর্গুমেন্টটা details-এর call প্যারামিটারে গিয়ে বসে।

তাই ওই মুহূর্তে call মানেই হলো myIntro ফাংশনটা।

এরপর ভেতরে যখন call(sum) চলে, তখন আসলে ওই myIntro ফাংশনটাকেই ডাকা হয়—এবং sum ভেরিয়েবলের মান 10-টাকে 

আর্গুমেন্ট হিসেবে সাথে করে myIntro-এর result প্যারামিটারে পাঠিয়ে দেওয়া হয়।


details(5, 5, myIntro): a-তে 5, b-তে 5, আর call প্যারামিটারে myIntro ফাংশন জমা হয়।

let sum = a + b;: 5 + 5 হয়ে sum-এর ভেতর জমা হয় 10।

call(sum);: যেহেতু call মানে myIntro, তাই এটি আসলে myIntro(10)-কে কল করে এবং 10 পাঠিয়ে দেয়।

function myIntro(result): পাঠানো 10 এসে ঢোকে result প্যারামিটারে।

console.log(...): Result is: 10 প্রিন্ট হয়।



function myIntro(result){
  console.log(`Result is: ${result}`);
}

let details = (a, b, call) => {
  let sum = a + b;
  call(sum);
}

details(5, 5, myIntro);


১. আগে myIntro আর্গুমেন্টটা গিয়ে call প্যারামিটারে বসে। আর call প্যারামিটার যেহেতু ভেতরে call(sum) হিসেবে ডাকা হচ্ছে,
   
তাই ওই মুহূর্তে call(sum) আর myIntro(10) একই কথা।

কোনো ফাংশনের নামের পাশে ব্র্যাকেট দিয়ে কোনো মান লেখেন—যেমন myIntro(10)—

তখন জাভাস্ক্রিপ্টের সাধারণ নিয়মেই ব্র্যাকেটের ভেতরের মানটা (10) স্বয়ংক্রিয়ভাবে চলে যায় ওই ফাংশনের প্যারামিটারের ভেতর (result)।

এটা আলাদা কোনো জাদু না, যেকোনো সাধারণ ফাংশনেই এভাবে কাজ করে। যেমন:


function myIntro(result) {
  console.log(`Result is: ${result}`);
}

myIntro(10);

এখানে কী হলো?

myIntro(10) বলে ফাংশনটাকে ডাকা হলো এবং ব্র্যাকেটে 10 দেওয়া হলো।

myIntro-এর মাথায় থাকা (result) হলো সেই খালি জায়গা, যা ওই ব্র্যাকেটের প্রথম জিনিসটাকে ধরে।

তাই 10 গিয়ে সোজা result-এর ভেতর বসে গেল।

আগে যে call(sum) ছিল, সেটাও ঘুরেফিরে myIntro(10)-ই হয়ে গিয়েছিল—তাই নিয়ম একই: ব্র্যাকেটের 10 চলে গেল result-এ।



 

myIntro হলো একটা ফাংশন।

যখন আপনি সেটাকে details(5, 5, myIntro)-এ আর্গুমেন্ট হিসেবে পাথান হল, তখন সেই ফাংশনটা গিয়ে বসল call প্যারামিটারে।

যেহেতু call-এর ভেতরে এখন myIntro ফাংশনটাই আছে, তাই ওই মুহূর্তে call-কেও একটা ফাংশন বলা যায়—

আর সেজন্যই পরের লাইনে  ব্র্যাকেট দিয়ে call(sum) লিখে তাকে কল করতে পেরেছি!


let details = (a, b, call) => {
  let sum = a + b;
  call(sum);
}

details(5, 5, myIntro); call holo myIntro function argument। ভিতরে call(sum) বা myIntro(sum)

একই কথা  myIntro(10); কাজ শেষ বাইরে কেমনে বের হয় result paramiter এ আসে

myIntro(10); বাইরে বের হয়ে যায় না, আর details-এর কাজও তখন শেষ হয় না।

myIntro(10); লাইনটা যখন details-এর ভেতরে চলে, তখন আসলে কী হয়:

details তখনো চলতে থাকে। details-এর ভেতরে call(sum); মানে হলো myIntro(10); ডাকা।

myIntro(10); ডাকা হলে কম্পিউটারের পড়াটা details-এর ভেতর থেকে লাফ দিয়ে ওপরে লেখা myIntro ফাংশনের কাছে চলে যায়।
   
(বাইরে কোথাও যায় না, একই কোডের ভেতরে এক ফাংশন থেকে আরেক ফাংশনে যায়।)

ওপরে গিয়ে function myIntro(result)-এর ভেতরে 10 ঢোকে result প্যারামিটারে।

myIntro তার কাজ সেরে নেয়। তারপর আবার details-এর ভেতরে ফিরে আসে, আর তখন details-এর কাজ শেষ হয়।





প্রোগ্রাম যখন ওপর থেকে নিচে পড়তে পড়তে details-এর ভেতরে ঢুকে call(sum) (অর্থাৎ myIntro(10)) চালায়, 
   
তখন details-এর ওই কাজটা শেষ হওয়ার মুহূর্তেই 10-টাকে myIntro-এর result প্যারামিটারে পাঠিয়ে দেওয়া হয়।

একদম সহজ করে বললে:

call(sum) চললে myIntro(10) কল হয়।

তখন 10 গিয়ে বসে myIntro(result)-এর result প্যারামিটারে।

তারপর myIntro-এর ভেতরের console.log চলে আর Result is: 10 প্রিন্ট হয়।





myIntro যেহেতু একটা আলাদা ফাংশন, তাই details-এর ভেতরে call(sum) (অর্থাৎ myIntro(10)) চললে প্রোগ্রামটা details-এর কাজ সেরে myIntro ফাংশনের ভেতরে চলে যায়,
   
আর 10-টাকে result প্যারামিটারে বসিয়ে দিয়ে Result is: 10 দেখায়।

যখন details-এর ভেতর call(sum) (অর্থাৎ myIntro(10)) চলে, তখন details তার নিজের ভেতরের sum-এর মান 10-টাকে নিয়ে 

myIntro-এর result প্যারামিটারে পাঠিয়ে দেয়। আর তখনই myIntro-এর ভেতরে result-এর মান হয় 10, এবং Result is: 10 প্রিন্ট হয়।


Callback (কলব্যাক ফাংশন) হলো myIntro। (কারণ এটাকে আরেকটা ফাংশনের ভেতর আর্গুমেন্ট হিসেবে পাঠানো হয়েছে, আর পরের ভেতর থেকে কল করা হচ্ছে।)

Higher-Order Function (হায়ার-অর্ডার ফাংশন) হলো details। (কারণ এটা প্যারামিটার হিসেবে আরেকটা ফাংশন—অর্থাৎ myIntro-কে—নিচ্ছে।)





অ্যারো ফাংশন দিয়ে কোড


function addNumbers(a, b, callback) {
    let sum = a + b;
    callback(sum); 
}

const printResult = (result) => {
    console.log("Result is: " + result);
};

addNumbers(5, 5, printResult);

------
function addNumbers(a, b, callback) {
    let sum = a + b;
    callback(sum); 
}

addNumbers(5, 5, (result) => {
    console.log("Result is: " + result);
});

আগে printResult ছিল, আর এখানে নেই—এর কারণ হলো এই কোডে নাম ছাড়া সরাসরি অ্যারো ফাংশন (Inline Anonymous Arrow Function) ব্যবহার করা হয়েছে।

১. function addNumbers(a, b, callback) {
ব্যাখ্যা: এটি প্রধান ফাংশনের ঘোষণা।

এটি ৩টি প্যারামিটার গ্রহণ করে: a (প্রথম সংখ্যা), b (দ্বিতীয় সংখ্যা), এবং callback (একটি ফাংশন যা পরে রান হবে)।

২. let sum = a + b;
ব্যাখ্যা: a এবং b এর মান যোগ করে sum নামের একটি local variable-এ জমা রাখে।

৩. callback(sum);
ব্যাখ্যা: callback নামের লোকাল ভ্যারিয়েবলে যে ফাংশনটি পাঠানো হয়েছে, তাকে এই লাইনে কল করা হয় এবং আর্গুমেন্ট হিসেবে sum-এর মান পাঠানো হয়।

৪. addNumbers(5, 5, (result) => { ... });
ব্যাখ্যা: এটি ফাংশন কল করার লাইন।

এখানে ১ম মান a = 5, ২য় মান b = 5 এবং ৩য় মান হিসেবে কোনো ফাংশনের নাম না দিয়ে সরাসরি একটি Anonymous Arrow Function ব্র্যাকেটের ভেতর পাস করে দেওয়া হয়েছে।

৫. console.log("Result is: " + result);
ব্যাখ্যা: এটি সরাসরি পাসের মাধ্যমে পাঠানো অ্যারো ফাংশনটির ভেতরের কাজ। যখন callback(sum) কল হয়, তখন sum (১০) মানটি এই result-এ গিয়ে বসে এবং আউটপুট প্রিন্ট করে।
---





  
function sayGoodbye() {
   console.log("2. All tasks completed, goodbye!");
}

function processTask(cb) {
   console.log("1. Main task started...");
    
   cb(); 
}
processTask(sayGoodbye);

  
১. cb এর মধ্যে কী ঢোকে?

processTask(sayGoodbye);

তখন cb এর ভেতরে শুধুমাত্র sayGoodbye ফাংশনটি গিয়ে বসে।

1. Main task started... কিন্তু cb এর ভেতরে যায় না! ওটা processTask ফাংশনের নিজস্ব কোড।

২. তাহলে কীভাবে ১ এবং ২ নম্বর কনসোল রান হলো?
কম্পিউটার যখন processTask(sayGoodbye) চালানো শুরু করে, সে ওপর থেকে নিচে একটার পর একটা লাইন পড়ে:

🔹 ধাপ ১ (১ম কনসোল রান হওয়া):
কম্পিউটার processTask ফাংশনে ঢুকেই প্রথম লাইনটি দেখতে পায়:

console.log("1. Main task started...");

এটি cb এর সাথে যুক্ত নয়, এটি processTask এর নিজস্ব কাজ। তাই এটি সাথে সাথে স্ক্রিনে প্রিন্ট হয়ে যায় ➔ 1. Main task started...


🔹 ধাপ ২ (২য় কনসোলে পৌঁছানো):
এর পরের লাইনে গিয়ে কম্পিউটার দেখে লেখা আছে:

cb();

যেহেতু cb এর ভেতরে sayGoodbye ফাংশনটি বসে ছিল, তাই cb(); লেখার মানে হলো sayGoodbye(); ফাংশনকে রান করা।

🔹 ধাপ ৩ (২য় কনসোল রান হওয়া):
cb(); এর কারণে কম্পিউটার এখন লাফ দিয়ে sayGoodbye() ফাংশনের ভেতরে ঢুকে পড়ে!

আর sayGoodbye() ফাংশনের পেটের ভেতরেই তো বসে আছে ২ নম্বর কনসোলটি:

function sayGoodbye() {
   console.log("2. All tasks completed, goodbye!"); // 👈 এই যে ২ নম্বর কনসোল!
}

তাই কম্পিউটার এই লাইনটি চালিয়ে দেয় এবং স্ক্রিনে প্রিন্ট হয় ➔ 2. All tasks completed, goodbye!

💡 সংক্ষেপে সহজ হিসাব:
processTask শুরু হলো ➔ নিজস্ব ১ম কনসোল প্রিন্ট করল।

cb() কল হলো ➔ মানে sayGoodbye() শুরু হলো।

sayGoodbye() এর ভেতরে থাকা ২য় কনসোল প্রিন্ট হলো।





Callbacks-এর আসল এনাটমি (Anatomy)
  

সহজ কথায়: কলব্যাক হলো একটি ফাংশন যা অন্য একটি ফাংশনের ভেতরে আর্গুমেন্ট (Argument) হিসেবে পাস করা হয় এবং মূল কাজ শেষে তাকে কল (Call) করা হয়।

// ১. মেইন ফাংশন (Higher-Order Function)
function doMath(a, b, callback) {
    let result = a * b;
    callback(result); // এখানে কলব্যাক ফাংশনটিকে ডেকে দেওয়া হলো
}

// ২. কলব্যাক ফাংশন
function printOutput(data) {
    console.log("Calculated Value: " + data);
}

// ৩. পাস করা হলো
doMath(4, 5, printOutput); // Output: Calculated Value: 20




  

কলব্যাক লেখার ৩টি ভিন্ন স্টাইল (Writing Styles)

স্টাইল ১: Named Function (আলাদা নাম দিয়ে)

function greet(name) {
    console.log("Hello " + name);
}

function getUser(callback) {
    let name = "Rahim";
    callback(name);
}

getUser(greet);



স্টাইল ২: Anonymous Function (সরাসরি ভেতরে নাম ছাড়া)

function getUser(callback) {
    let name = "Karim";
    callback(name);
}

getUser(function(name) {
    console.log("Hello " + name);
});


স্টাইল ৩: Arrow Function (আধুনিক ES6 পদ্ধতি)

const getUser = (callback) => {
    let name = "Sakib";
    callback(name);
};

getUser((name) => console.log("Hello " + name));


  

Synchronous vs Asynchronous Callbacks
কলব্যাক প্রধানত দুই ধরনের কাজ করে:

ক. Synchronous Callback (সাথে সাথে রান হয়)
যেসব কলব্যাক সাথে সাথেই এক্সিকিউট হয়। যেমন জাভাস্ক্রিপ্টের built-in array methods:

const numbers = [1, 2, 3, 4, 5];

// forEach-এর ভেতরে থাকা অ্যারো ফাংশনটি একটি Synchronous Callback
numbers.forEach((num) => {
    console.log("Number: " + num);
});


খ. Asynchronous Callback (অপেক্ষা করে পরে রান হয়)
যেসব কাজ শেষ হতে সময় লাগে (যেমন: টাইমার, সার্ভার থেকে ডাটা আনা, ফাইল রিড করা):

console.log("1. Order Placed");

// setTimeout এর ভেতরে থাকা ফাংশনটি ৩ সেকেন্ড পর রান হবে
setTimeout(() => {
    console.log("2. Food is ready!");
}, 3000);

console.log("3. Sitting at the table");



  
একাধিক কলব্যাক পাস করা (Multiple Callbacks)

function checkAge(age, successCallback, errorCallback) {
    if (age >= 18) {
        successCallback("Access Granted!");
    } else {
        errorCallback("Access Denied! You are too young.");
    }
}

const showSuccess = (msg) => console.log("SUCCESS: " + msg);
const showError = (msg) => console.log("ERROR: " + msg);

checkAge(20, showSuccess, showError); // Output: SUCCESS: Access Granted!
checkAge(15, showSuccess, showError); // Output: ERROR: Access Denied! You are too young.


  
Callback-এর সবচেয়ে বড় সমস্যা: Callback Hell

// এটি হলো Callback Hell এর একটি কাল্পনিক দৃশ্য:
getUserData(userId, (user) => {
    getOrders(user.id, (orders) => {
        getOrderDetails(orders[0].id, (details) => {
            getShippingStatus(details.id, (status) => {
                console.log("Status: " + status);
            });
        });
    });
});






  

🎯 Callback-এর চেকলিস্ট (মনে রাখার শেষ ৪টি কথা)
কলব্যাক কী? অন্য ফাংশনের পেটে প্যারামিটার হিসেবে যাওয়া ফাংশন।

ভুল করা যাবে না: পাস করার সময় myFunction() ব্র্যাকেট দেওয়া যাবে না, শুধু নাম myFunction পাঠাতে হবে।

কেন দরকার? একটা কাজ শেষ হওয়ার পর ঠিক তখনই আরেকটা কাজ চালু করার নিশ্চয়তা পাওয়ার জন্য।

পরবর্তী ধাপ: কলব্যাকের জটিলতা কাটানোর জন্য আমরা শিখবো Promises!






function details(cb){
  let name = "Abdullah";
  cb(name); // 💥 ২. এখানে এসেই কোড ভেঙে যাবে!
}

details(); // 👈 ১. আপনি কোনো কলব্যাক ফাংশন না পাঠিয়েই ডাকলেন

ধাপ ১:
যখন details() লিখা হল (ব্র্যাকেট খালি রেখে), তখন details ফাংশনের cb প্যারামিটারের মধ্যে কী গেল?

👉 কিছুই যায়নি! তাই cb হয়ে গেল undefined (ফাঁকা)।

ধাপ ২:

ফাংশনের ১ম লাইন চলল: let name = "Abdullah"; (ঠিক আছে)।

ধাপ ৩ (ক্র্যাশ!):
  
ফাংশনটি ২য় লাইনে এসে পেল: cb(name);

যেহেতু cb এখন undefined, কম্পিউটার এটাকে পড়তে চেষ্টা করে এভাবে: undefined("Abdullah");

এখন বলুন, undefined কি কোনো ফাংশন? না!

তাই জাভাস্ক্রিপ্ট সাথে সাথে লাল রঙের একটি মারাত্মক এরর দিয়ে দেবে:

❌ TypeError: cb is not a function

💡 তাহলে ভুলটা এড়ানোর সঠিক নিয়ম কী?
  
যদি চাওয়া হয় যে  কন না পাঠালেও যেন কোড ক্র্যাশ না করে, তাহলে ২টি উপায় আছে:

উপায় ১: একটা if দিয়ে চেক করে নেওয়া (নিরাপদ উপায়)


function details(cb){
  let name = "Abdullah";
  
  // যদি cb একটা ফাংশন হয়, তবেই রান করো!
  if (typeof cb === "function") {
      cb(name);
  } else {
      console.log("Name is: " + name);
  }
}

details(); // এখন আর এরর দেবে না! Output: Name is: Abdullah



function details(cb){
  let name = "Abdullah";
  cb(name);
}

// সঠিকভাবে কলব্যাক ফাংশন পাস করা হলো
details((data) => {
   console.log("My name is " + data);
}); 
// Output: My name is Abdullah
