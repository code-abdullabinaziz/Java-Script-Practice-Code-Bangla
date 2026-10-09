📌 Default Parameter কী?
    
Default Parameter হলো ফাংশনের প্যারামিটারের জন্য ডিফল্ট মান নির্ধারণ করার একটি উপায়। যখন ফাংশন কল করার সময় কোনো আর্গুমেন্ট পাস করা হয় না বা undefined পাস করা হয়, 
তখন এই ডিফল্ট মান ব্যবহার করা হয়। এটি ES6 (2015) সংস্করণে যুক্ত করা হয়েছে।

🧐 ডিফল্ট প্যারামিটার কী এবং কেন লাগবে?
    
সহজ কথায়, একটি ফাংশন যখন তৈরি করা হয়, তখন তার ভেতরে কিছু ডেটা পাস করার জন্য Parameter ব্যবহার করা হয়।
কিন্তু কোনো কারণে ফাংশনটি কল করার সময় যদি সেই ডেটা বা Argument দিতে ভুলে যাই বা না দিই, তখন জাভাস্ক্রিপ্ট ডিফল্টভাবে সেখানে undefined বসিয়ে দেয়। 
আর এই undefined-এর কারণে কোডে অনেক বড় বড় ভুল বা এরর (Error) চলে আসে।

এই সমস্যা সমাধানের জন্যই জন্ম হয়েছে Default Parameter-এর। এর কাজ হলো—"যদি ইউজার ফাংশন ডাকার সময় কোনো মান (Value) না দেয়, 
তবে ফাংশন নিজে থেকে একটি ধরে নেওয়া মান ব্যবহার করবে।"


বেসিক সিনট্যাক্স 

function functionName(parameter = defaultValue) {
    // code
}



function functionName(param1 = defaultValue1, param2 = defaultValue2) {
    // ফাংশন বডি
}





ডিফল্ট প্যারামিটার ছাড়া সমস্যা (পুরাতন নিয়ম):

function welcomeMessage(name) {
    console.log("স্বাগতম, " + name + "!");
}

welcomeMessage("আব্দুল্লাহ"); // আউটপুট: স্বাগতম, আব্দুল্লাহ!
welcomeMessage();            // আউটপুট: স্বাগতম, undefined! (এখানেই সমস্যা!)

ইউজার যখন নাম দিতে ভুলে গেল, তখন স্ক্রিনে দেখাল undefined—যা দেখতে খুবই বাজে লাগে।



ডিফল্ট প্যারামিটার সহ সমাধান (আধুনিক নিয়ম):
এখানে প্যারামিটারের ভেতরেই = চিহ্ন দিয়ে একটি ডিফল্ট মান বসিয়ে দেব।


function welcomeMessage(name = "মেহমান") {
    console.log("স্বাগতম, " + name + "!");
}

welcomeMessage("আব্দুল্লাহ"); // আউটপুট: স্বাগতম, আব্দুল্লাহ! (নিজের নাম নিয়েছে)
welcomeMessage();            // আউটপুট: স্বাগতম, মেহমান! (কিছু না দেওয়ায় ডিফল্ট মান নিয়েছে)





❌ পুরনো পদ্ধতি (ES6 এর আগে):

function greet(name) {
    // ম্যানুয়ালি চেক করতে হতো
    if (name === undefined) {
        name = "Guest";
    }
    // অথবা
    name = name || "Guest";
    console.log(`Hello ${name}`);
}

✅ নতুন পদ্ধতি (ES6 - Default Parameter):

function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}
// অনেক ক্লিন এবং সহজ!





পুরোনো নিয়ম (ডিফল্ট প্যারামিটার ছাড়া):

function makeTea(sugar) {
   // ইউজার যদি চিনি (sugar) না দেয়, তবে চিনি হয়ে যাবে undefined
   if (sugar === undefined) {
       sugar = 1; // নিজে থেকে ১ চামচ ধরে নিলাম
   }
   console.log(`আপনার চা তৈরি, চিনি দেওয়া হয়েছে ${sugar} চামচ।`);
}

makeTea(); // আমরা ব্র্যাকেটে কোনো মান দিইনি
// আউটপুট: আপনার চা তৈরি, চিনি দেওয়া হয়েছে 1 চামচ।

আধুনিক নিয়ম (Default Parameter দিয়ে):
এখন আর ওই if কন্ডিশন লেখার দরকার নেই। ফাংশন তৈরি করার সময়ই ব্র্যাকেটের ভেতর সরাসরি মান বসিয়ে দেওয়া যায়:


// এখানে sugar = 1 লিখে আমরা ডিফল্ট মান সেট করে দিলাম
function makeTea(sugar = 1) {
   console.log(`আপনার চা তৈরি, চিনি দেওয়া হয়েছে ${sugar} চামচ।`);
}

// কেস ১: কোনো মান দিলে না
makeTea(); 
// আউটপুট: আপনার চা তৈরি, চিনি দেওয়া হয়েছে 1 চামচ। (ডিফল্ট মান কাজ করেছে)

// কেস ২: তুমি নিজের মতো মান দিলে
makeTea(3); 
// আউটপুট: আপনার চা তৈরি, চিনি দেওয়া হয়েছে 3 চামচ। (এখন আর ডিফল্ট মান কাজ করবে না, তোমার দেওয়া ৩ কাজ করবে)




🏆 সিস্টেম ডিজাইনে এটা কেন এত দরকারি?
ধরো, ইউজার রেজিস্ট্রেশনের একটা ফাংশন বানাচ্ছ। এখন কোনো ইউজার যদি প্রোফাইল খোলার সময় তার দেশের নাম না দেয়,
তবে তুমি ডিফল্ট প্যারামিটার ব্যবহার করে অটোমেটিক "Bangladesh" সেট করে দিতে পারো:

function createUser(name, country = "Bangladesh") {
    console.log(`ইউজার: ${name}, দেশ: ${country}`);
}

createUser("Abdullah"); 
// আউটপুট: ইউজার: Abdullah, দেশ: Bangladesh


এক লাইনে মনে রাখার উপায়:

ফাংশন কল করার সময় মান দিলে সেই মানটাই কাজ করবে, আর মান দিতে ভুলে গেলে বা না দিলে ব্র্যাকেটের ভেতরের ডিফল্ট মানটি ব্যাকআপ হিসেবে কাজ করবে!

function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();
greet("Aziz");


Hello Guest
Hello Aziz
greet() → argument দেওয়া হয়নি, তাই "Guest" ব্যবহৃত হয়েছে।
greet("Aziz") → "Aziz" default value-কে replace করেছে।  




Number Default

function multiply(a, b = 2) {
    return a * b;
}

console.log(multiply(5));     // 10 (5 * 2)
console.log(multiply(5, 3));  // 15 (5 * 3)



Boolean Default

function toggle(active = true) {
    console.log(`Status: ${active}`);
}

toggle();       // Status: true
toggle(false);  // Status: false



Array Default

function getItems(items = []) {
    console.log(items);
}

getItems();           // []
getItems([1, 2, 3]); // [1, 2, 3]



Object Default

function createUser(config = {}) {
    console.log(config);
}

createUser();                    // {}
createUser({ name: "John" });    // { name: "John" }




 Previous Parameters ব্যবহার

function createUser(name = "Guest", age = 18, city = name + "'s City") {
    console.log(`${name}, ${age}, from ${city}`);
}

createUser();              // Guest, 18, from Guest's City
createUser("Abdullah");        // Abdullah, 18, from John's City
createUser("Abdullah", 25);    // Abdullah, 25, from John's City





function userInfo(name = "Unknown", age = 18, city = "Dhaka") {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

userInfo();                          // Name: Unknown, Age: 18, City: Dhaka
userInfo("Sumi");                    // Name: Sumi, Age: 18, City: Dhaka
userInfo("Sumi", 25);                // Name: Sumi, Age: 25, City: Dhaka
userInfo("Sumi", 25, "Chittagong");  // Name: Sumi, Age: 25, City: Chittagong





 Complex Expression

function getFullName(firstName = "John", lastName = "Doe") {
    return `${firstName} ${lastName}`;
}

function greet(name = getFullName("Jane", "Smith")) {
    console.log(`Hello ${name}`);
}

greet();           // Hello Jane Smith
greet("Bob");      // Hello Bob




Real-world Examples


User Registration System-=-

function registerUser(
    username = "anonymous",
    email = "no-email@example.com",
    age = 18,
    isActive = true,
    role = "user"
) {
    return {
        username,
        email,
        age,
        isActive,
        role,
        createdAt: new Date().toISOString()
    };
}

// বিভিন্নভাবে কল করা
console.log(registerUser());  
// {username: "anonymous", email: "no-email@example.com", age: 18, ...}

console.log(registerUser("john_doe"));
// {username: "john_doe", email: "no-email@example.com", age: 18, ...}

console.log(registerUser("john_doe", "john@email.com", 25, true, "admin"));
// সম্পূর্ণ ডেটা সহ




undefined vs null

function test(value = "default") {
    console.log(value);
}

test(undefined);  // "default" (undefined হলে ডিফল্ট নেয়)
test(null);       // null (null হলে ডিফল্ট নেয় না!)
test();           // "default" (কিছু পাস না করলে ডিফল্ট নেয়)




//Javascript function Default Parameter

function printName(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}
printName("Abdullah", "Aziz")



function myIntro(firstName, lastName = "somethings") {
    console.log(`Hlw ${firstName} ${lastName}`)
}
myIntro("Aziz Chowdhory");





function sum(num1, num2 = 3) {
    console.log(num1 + num2);
}
sum(2, 2);





function greet(name = "Mohammad") {
  console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Mohammad!
greet("Aziz"); // Output: Hello, Aziz!





function express(name1, name2 = (1 == 1) {
    console.log(`Hey! ${name1} ${name2}`);
}
express("Ibny");





function justTest() {
   return "Welcome";
}

function userName(firstName, lastName = justTest()) {
    console.log(`Hello ${firstName} ${lastName}`);
    
} 

userName("Abdullah");








undefined বনাম null (খুব ইম্পর্টেন্ট ⚠️)

জাভাস্ক্রিপ্টে undefined এবং null এক জিনিস নয়।

যদি ফাংশনে কোনো মান না দেওয়া হয় বা সরাসরি undefined পাস করা হয়, তবেই কেবল ডিফল্ট প্যারামিটারটি কাজ করবে।

কিন্তু যদি জোর করে null পাস করা হয়, তবে জাভাস্ক্রিপ্ট ডিফল্ট প্যারামিটারকে কাজ করতে দেবে না। সে null-কেই মান হিসেবে ধরে নেবে।


function test(user = "Anonymous") {
    console.log(user);
}

test(undefined); // আউটপুট: Anonymous (ডিফল্ট কাজ করেছে)
test(null);      // আউটপুট: null (ডিফল্ট কাজ করেনি!)




একটি প্যারামিটারকে অন্য প্যারামিটারে ব্যবহার করা
প্রথম প্যারামিটারের মানটি দ্বিতীয় প্যারামিটারের ডিফল্ট ভ্যালু হিসেবে ব্যবহার করা যাবে।

function multiply(x, y = x * 2) {
    console.log(x * y);
}

multiply(5); // x = 5, আর y হবে 5 * 2 = 10। আউটপুট: 50



ডিফল্ট মান হিসেবে ফাংশন ব্যবহার (Dynamic Default)
ডিফল্ট প্যারামিটারে শুধু লেখা বা সংখ্যা নয়,  চাইলে পুরো একটি ফাংশনকেও কল করে দেওয়া যাবে!

function generateId() {
    return Math.floor(Math.random() * 1000);
}

// যদি ইউজার আইডি না দেয়, তবে অটোমেটিক নতুন আইডি জেনারেট হবে
function createUser(name, id = generateId()) {
    console.log(`User: ${name}, ID: ${id}`);
}

createUser("Abdullah"); // আউটপুট: User: Abdullah, ID: 452 (র্যান্ডম আইডি)



🎯 সাইবার সিকিউরিটি এবং ব্যাকএন্ডে এর গুরুত্ব

ব্যাকএন্ড ডেভেলপমেন্ট বা সিকিউরিটির ক্ষেত্রে এই ডিফল্ট প্যারামিটার আপনার কোডকে ক্র্যাশ হওয়া থেকে বাঁচায়।
যেমন: হ্যাকাররা অনেক সময় এপিআই (API) রিকোয়েস্ট পাঠানোর সময় কিছু জরুরি ডেটা (যেমন: User Role বা Limit) ফাঁকা বা undefined পাঠিয়ে দেয়। 
ব্যাকএন্ডে যদি  ডিফল্ট প্যারামিটার সেট করা থাকে (যেমন: role = "user"),
তবে হ্যাকার চাইলেও প্যারামিটার ফাঁকা রেখে সিস্টেমে কোনো এরর তৈরি করতে বা অ্যাডমিন প্রিভিলেজ নিতে পারবে না।


JavaScript-এ ফাংশনে Default Parameter প্রধানত ৩টি নিয়মে (বা উপায়ে) দেওয়া যায়।

১. ES6 Default Parameter Syntax (আধুনিক ও সবচেয়ে জনপ্রিয়)
ES6 (2015) আসার পর থেকে প্যারামিটারের সাথে সরাসরি = চিহ্ন দিয়ে ডিফল্ট ভ্যালু সেট করে দেওয়া যায়। এটি সবচেয়ে ক্লিন এবং স্ট্যান্ডার্ড পদ্ধতি।

// প্যারামিটারের ভেতরেই ডিফল্ট মান সেট করা
function greetUser(name = "Guest", role = "User") {
    console.log(`Hello ${name}, Role: ${role}`);
}

greetUser("Robin", "Admin"); // Output: Hello Robin, Role: Admin
greetUser();                // Output: Hello Guest, Role: User
greetUser("Alex");          // Output: Hello Alex, Role: User



২. Logical OR Operator (||) ব্যবহার করে (Old Method / Fallback)
ES6 আসার আগে JavaScript-এ ডিফল্ট ভ্যালু সেট করার জন্য ফাংশনের ভেতরে || (OR) অপারেটর ব্যবহার করা হতো।

function connectDatabase(port) {
    // port-এর মান undefined বা falsy হলে 5432 সেট হবে
    port = port || 5432; 
    console.log(`Connected on port: ${port}`);
}

connectDatabase(8080); // Output: Connected on port: 8080
connectDatabase();     // Output: Connected on port: 5432


⚠️ সীমাবদ্ধতা (Falsy Issue): যদি আপনি ইনপুট হিসেবে 0, false, বা "" (Empty String) পাঠান, তবে || সেটিকেও মিথ্যা বা খালি ধরে নিয়ে ডিফল্ট ভ্যালু বসিয়ে দেয়।



৩. Ternary Operator বা undefined Check (Strict Control)
প্যারামিটার হিসেবে 0 বা false পাঠালেও যেন সঠিক ইনপুট হিসেবে কাজ করে এবং কোনো সমস্যা না হয়, তার জন্য undefined চেক করা হয়।

function setVolume(level) {
    // ইনপুট যদি নির্দিষ্টভাবে undefined হয়, তবেই ডিফল্ট 50 সেট হবে
    level = (typeof level !== "undefined") ? level : 50;
    console.log(`Volume Level: ${level}`);
}

setVolume(0);  // Output: Volume Level: 0 (এখানে 0 ঠিকমতো কাজ করেছে)
setVolume();   // Output: Volume Level: 50


💡 বোনাস: Nullish Coalescing Operator (??)
ES2020-এ আসা এই নতুন অপারেটরটি ||-এর সীমাবদ্ধতা দূর করে। 
এটি শুধুমাত্র ইনপুট null বা undefined হলেই ডিফল্ট ভ্যালু নেয়, কিন্তু 0 বা false-কে সঠিক মান হিসেবে রাখে।


function setTimeoutValue(seconds) {
    let delay = seconds ?? 30; // seconds খালি/null হলেই ৩০ সেট হবে
    console.log(`Delay set to: ${delay} seconds`);
}

setTimeoutValue(0); // Output: Delay set to: 0 seconds
setTimeoutValue();  # Output: Delay set to: 30 seconds


