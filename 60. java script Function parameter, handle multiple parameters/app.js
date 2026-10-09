জাভাস্ক্রিপ্টে একটি ফাংশনকে ডায়নামিক বা রিইউজেবল (বারবার ব্যবহারোপযোগী) করার জন্য Parameters এবং Arguments ব্যবহার করা হয়।

Parameters (প্যারামিটার): ফাংশন তৈরি (Declare) করার সময় ব্র্যাকেটের ভেতর যে ভেরিয়েবলগুলোর নাম দেওয়া হয়, সেগুলোকে প্যারামিটার বলে। এটি একটি Placeholder বা খালি বাক্সের মতো।

Arguments (আর্গুমেন্ট): ফাংশনটি কল (Call/Execute) করার সময় ব্র্যাকেটের ভেতর সত্যি সত্যি যে মানগুলো (Data) পাস করা হয়, সেগুলোকে আর্গুমেন্ট বলে। এটি হলো Actual Value বা আসল মান।



Parameter (প্যারামিটার) = ফাংশন ডিফাইন করার সময় ব্যবহৃত ভেরিয়েবল (placeholder)
Argument (আর্গুমেন্ট) = ফাংশন কল করার সময় পাস করা প্রকৃত মান

Parameter = Placeholder (খালি জায়গা/ভেরিয়েবল)

Argument = Actual Value (আসল ডাটা)

console.log() = আউটপুট দেখানোর জন্য জাভাস্ক্রিপ্টের বিল্ট-ইন ফাংশন




//java script Function parameter, handle multiple parameters
function addNumber(num1, num2) {
  console.log(num1 + num2);
}
addNumber(5, 7);




// ফাংশন ডিক্লেয়ারেশন (এখানে p1, p2 হলো Parameters)
function functionName(p1, p2) {
    // এই ভেতরে p1 এবং p2 লোকাল ভেরিয়েবল হিসেবে কাজ করে
    console.log(p1, p2);
}

// ফাংশন কল (এখানে "Value1", "Value2" হলো Arguments)
functionName("Value1", "Value2");



// ১. ফাংশন তৈরি (name এবং cgpa হলো Parameters)
function displayProfile(name, cgpa) {
    console.log(`Student Name: ${name}`);
    console.log(`Academic CGPA: ${cgpa}`);
}

// ২. ফাংশন কল (আসল মানগুলো হলো Arguments)
displayProfile("Mohammad Abdullah", 3.50); 
displayProfile("Arman Aziz", 3.85); // একই ফাংশন ভিন্ন আর্গুমেন্ট দিয়ে রান





// এখানে name এবং age হলো parameters
function greet(name, age) {
    console.log(`Hello ${name}, you are ${age} years old`);
}

// "Ebny" এবং 30 হলো arguments
greet("Ebny", 30);  // Output: Hello Ebny, you are 30 years old




function myName(name, country) {
  console.log("My name is" + " " + name + "i live in" + " " + country);
}
myName("Abdullah", "Bangladesh");







let myFirstName = "Programmer";
let myLastName = "Aziz";
function printName(firstName, middleName, lastName) {
  console.log(firstName + " " + middleName + " " + lastName);
}
printName("Mohammad", "Abdullah", "Aziz");
printName("Mohammad");
printName(myFirstName, myLastName); //let variable

🔍 প্রথম ২ লাইন: গ্লোবাল ভেরিয়েবল তৈরি

let myFirstName = "Programmer";
let myLastName = "Aziz";

এরা গ্লোবাল ভেরিয়েবল (যেকোনো জায়গায় অ্যাক্সেস আছে)

মেমোরিতে সংরক্ষিত:

myFirstName → "Programmer"

myLastName → "Aziz"


ফাংশন ডিক্লেয়ারেশন

function printName(firstName, middleName, lastName) {
  console.log(firstName + " " + middleName + " " + lastName);
}

প্যারামিটার ৩টা: firstName, middleName, lastName

ফাংশন কিছু রিটার্ন করে না, শুধু কনসোলে প্রিন্ট করে

ফাংশন এখন মেমোরিতে আছে, কিন্তু রান হয়নি

এখন ৩টা ফাংশন কল
printName("Mohammad", "Abdullah", "Aziz");

✅ সব আর্গুমেন্ট দেওয়া আছে
firstName = "Mohammad"

middleName = "Abdullah"

lastName = "Aziz"

➡️ আউটপুট: Mohammad Abdullah Aziz


২য় কল:
printName("Mohammad");

❌ শুধু ১টা আর্গুমেন্ট দেওয়া

firstName = "Mohammad"

middleName = undefined (কেউ দেয়নি)

lastName = undefined (কেউ দেয়নি)

➡️ আউটপুট: Mohammad undefined undefined
এখানেই undefined আসার কারণ → ফাংশন ৩টা প্যারামিটার চায়, কিন্তু দেওয়া হয়েছে ১টা। বাকি ২টা প্যারামিটার অসংজ্ঞায়িত (undefined) থেকে যায়।

৩য় কল:
printName(myFirstName, myLastName);

এখানে আর্গুমেন্ট হিসেবে গ্লোবাল ভেরিয়েবলের মান পাঠানো হয়েছে

myFirstName-এর মান "Programmer" → firstName-এ যাবে

myLastName-এর মান "Aziz" → middleName-এ যাবে

lastName-এর জন্য কোনো আর্গুমেন্ট নেই → undefined
➡️ আউটপুট: Programmer Aziz undefined


গ্লোবাল ভেরিয়েবল নিজে থেকে কখনো লোকাল হয় না। কিন্তু ফাংশনের প্যারামিটার হলো লোকাল ভেরিয়েবল।
printName(myFirstName, myLastName);

১	গ্লোবাল myFirstName-এর মান ("Programmer") পড়া হয়
২	সেটা ফাংশনের লোকাল প্যারামিটার firstName-এ কপি হয়
৩	গ্লোবাল myLastName-এর মান ("Aziz") পড়া হয়
৪	সেটা ফাংশনের লোকাল প্যারামিটার middleName-এ কপি হয়
৫	lastName-এ কিছু আসে না → undefined

💡 গুরুত্বপূর্ণ:
গ্লোবাল ভেরিয়েবলের মান প্যারামিটারে যায়, কিন্তু গ্লোবাল ভেরিয়েবল নিজে লোকাল হয় না। ওরা আলাদা জায়গায় থাকে





যদি গ্লোবাল ভেরিয়েবলের নাম ও প্যারামিটারের নাম এক হয়?

let name = "Global";
function test(name) {
  console.log(name); // এখানে 'name' হলো প্যারামিটার (লোকাল)
}
test("Local"); // "Local"
console.log(name); // "Global" (গ্লোবাল অপরিবর্তিত)
প্যারামিটার = লোকাল, গ্লোবালকে ওভাররাইট করে না

প্যারামিটার কম = undefined

প্যারামিটার বেশি = এক্সট্রা ইগনোর

গ্লোবালের মান প্যারামিটারে কপি হয়, গ্লোবাল লোকাল হয় না

লোকাল আর গ্লোবাল আলাদা জায়গায় থাকে (নাম এক হলেও)



💡 JS-এ এই সমস্যা এড়ানোর মডার্ন নিয়ম (ES6 Standard):

JS-এও যদি পাইথনের মতো ব্যাকগ্রাউন্ড এরর বা ডিফল্ট মান হ্যান্ডেল করতে চাওয়া হয়, তবে Modern JS (ES6)-এ ডিফল্ট প্যারামিটার ব্যবহার করা হয়:


// Modern JS Standard
function printName(firstName, middleName = "", lastName = "") {
    console.log(`${firstName} ${middleName} ${lastName}`.trim());
}

printName("Arman"); 
// Output: Arman (আর undefined লেখা আসবে না)






function sum(sum1, sum2) {
  console.log(sum1 + sum2 );
}
sum(2);  //result NaN

sum1 এবং sum2 হলো Local Variable: ফাংশনের ব্র্যাকেটের ভেতরের এই নামগুলো লোকাল ভ্যারিয়েবল হিসেবে কাজ করে।

Argument ১টি পাঠানোতে: sum(2) কল করায় sum1 পেল 2 আর sum2 হলো undefined (যেহেতু কোনো ২য় মান দেওয়া হয়নি)।

Condition সত্য হওয়াতে: sum2 == undefined সত্য (true) হওয়ায় sum2 এর মান বদলে 0 হয়ে যায় এবং শেষ লাইনে 2 + 0 হিসাব করে স্ক্রিনে 2 প্রিন্ট হয়।

✅ সমাধান ১: ডিফল্ট প্যারামিটার ব্যবহার

function sum(sum1, sum2 = 0) {
  console.log(sum1 + sum2);
}
sum(2);        // 2
sum(2, 3);     // 5


✅ সমাধান ২: চেক করে যোগ করা

function sum(sum1, sum2) {
  if (sum2 === undefined) {
    sum2 = 0;
  }
  console.log(sum1 + sum2);
}
sum(2);  // 2







function printName(first, second, third) {
    console.log(first + " " + third);
    first = "Banner Red";
    console.log(first);

}

let first = "Banner Red";
let second = "Sugar Berry";
let third = "Freedom Sky";

printName("Red", "Green", "Blue");
console.log(first + " " + second + " " + third);


🧠 কোডটির– সারমর্ম:
ফাংশনের ভিতরের first, second, third ফাংশনের নিজস্ব লোকাল ভেরিয়েবল (প্যারামিটার)।

ফাংশনের বাইরের first, second, third গ্লোবাল ভেরিয়েবল।

ফাংশন কল করার সময় পাস করা আর্গুমেন্টগুলো প্যারামিটারে অ্যাসাইন হয়, 
কিন্তু গ্লোবাল ভেরিয়েবলের কোনো পরিবর্তন হয় না (যতক্ষণ না গ্লোবালকে সরাসরি রিঅ্যাসাইন করা হসছে)।


১ ফাংশন ডিক্লেয়ারেশন
function printName(first, second, third) {
    console.log(first + " " + third);
    first = "Banner Red";
    console.log(first);
}
এখানে first, second, third হচ্ছে প্যারামিটার। এরা ফাংশনের লোকাল ভেরিয়েবল।

ফাংশনের ভিতরে first-এর মান পরিবর্তন করলে তা শুধুমাত্র ফাংশনের ভিতরেই প্রভাব ফেলবে।


২ গ্লোবাল ভেরিয়েবল ডিক্লেয়ার

let first = "Banner Red";
let second = "Sugar Berry";
let third = "Freedom Sky";

এগুলো গ্লোবাল ভেরিয়েবল (যেকোনো জায়গা থেকে অ্যাক্সেস করা যায়)।

ফাংশনের প্যারামিটার ও এই গ্লোবাল ভেরিয়েবলগুলো আলাদা। এমনকি নাম এক হলেও এরা ভিন্ন জিনিস।


ধাপ ৩: ফাংশন কল

printName("Red", "Green", "Blue");

এখন ফাংশনের ভিতরে যা হয়—

ফাংশনের ভিতরে (প্যারামিটার হিসেবে):
first = "Red" (আর্গুমেন্ট থেকে আসা)

second = "Green"

third = "Blue"

প্রথম console.log
console.log(first + " " + third);

→ first = "Red", third = "Blue"
→ আউটপুট: "Red Blue"

first-কে রিঅ্যাসাইন করা

first = "Banner Red";

এখন লোকাল first-এর মান "Banner Red" হয়ে গেল।


দ্বিতীয় console.log
console.log(first);
→ আউটপুট: "Banner Red"

তাহলে ফাংশন কলের আউটপুট:

Red Blue
Banner Red

ধাপ ৪: ফাংশনের বাইরে গ্লোবাল ভেরিয়েবল প্রিন্ট

console.log(first + " " + second + " " + third);

ফাংশনের ভিতরে first-এর মান পরিবর্তন হলেও তা গ্লোবাল first-কে প্রভাবিত করে না।

গ্লোবাল ভেরিয়েবলগুলো আগের মতোই আছে:

first = "Banner Red"

second = "Sugar Berry"

third = "Freedom Sky"

Banner Red Sugar Berry Freedom Sky

📊 পুরো আউটপুট (কনসোলে যা):
Red Blue
Banner Red
Banner Red Sugar Berry Freedom Sky

ফাংশন কলের সময় "Red", "Green", "Blue" আর্গুমেন্ট প্যারামিটারে অ্যাসাইন হয়।

ফাংশনের ভিতরে first-এর মান "Banner Red" করা হয় (শুধু লোকালটির)।

ফাংশনের বাইরে গ্লোবাল ভেরিয়েবল অপরিবর্তিত থাকে।

তাই শেষ আউটপুটে গ্লোবাল মানগুলোই প্রিন্ট হয়।


প্যারামিটার	ফাংশনের নিজস্ব লোকাল ভেরিয়েবল। ফাংশন কল করার সময় আর্গুমেন্ট থেকে মান নেয়।
গ্লোবাল ভেরিয়েবল	ফাংশনের বাইরে ডিক্লেয়ার করা হয়। পুরো প্রোগ্রামে অ্যাক্সেসযোগ্য।
একই নামের লোকাল ও গ্লোবাল	এরা আলাদা। ফাংশনের ভিতরে নাম এক হলেও লোকালটাই প্রাধান্য পায়।
লোকাল পরিবর্তন	ফাংশনের ভিতরে লোকাল ভেরিয়েবলের মান বদলালে গ্লোবালের কোনো পরিবর্তন হয় না।









//user Input

function addition(firstNum, secondNum){
  console.log(firstNum + secondNum);
}

let firstNum = prompt("Enter Your First Number: ");
firstNum = Number(firstNum);
let secondNum = prompt("Enter Your Second Number: ")
secondNum = Number(secondNum);
addition(firstNum, secondNum);



অ্যাডভান্সড ও গুরুত্বপূর্ণ কনসেপ্ট

ক) Default Parameters (ডিফল্ট প্যারামিটার)

যদি ফাংশন কল করার সময় কোনো আর্গুমেন্ট পাস করতে ভুলে যাওয়া হয়, তবে জাভাস্ক্রিপ্ট বাই-ডিফল্ট তাকে undefined ধরে নেয়। 
এই বাগ বা এরর এড়াতে প্যারামিটারে আগে থেকেই একটি ব্যাকআপ বা ডিফল্ট মান সেট করে রাখা যায়।

// এখানে status এর ডিফল্ট মান দেওয়া হয়েছে "Active"
function checkUser(userName, status = "Active") {
    console.log(`User: ${userName}, Status: ${status}`);
}

checkUser("Abdullah");          // আউটপুট: User: Abdullah, Status: Active (ডিফল্ট মান নিয়েছে)
checkUser("Aziz", "Inactive"); // আউটপুট: User: Aziz, Status: Inactive (ডিফল্ট মান ওভাররাইট হয়েছে)


function checkUser(name, status = "Active"){
  console.log(`User: ${name}\nStstus: ${status}`)
}

checkUser("Abdullah");
checkUser("Aziz", "Inactive");


User: Abdullah
Ststus: Active
User: Aziz
Ststus: Inactive




খ) Rest Parameters (...variables) — আনলিমিটেড আর্গুমেন্ট

যখন আগে থেকে জানা যায় না যে ইউজার কতগুলো আর্গুমেন্ট পাস করবে (যেমন: ক্যালকুলেটরে ১০টি সংখ্যাও যোগ হতে পারে, আবার ২টি সংখ্যাও হতে পারে), 
তখন সব আর্গুমেন্টকে একটি অ্যারে (Array) বানিয়ে ফেলার জন্য ৩টি ডট ... দিয়ে Rest Parameter ব্যবহার করা হয়।

// ...numbers সব আর্গুমেন্টকে একটি অ্যারেতে প্যাক করে ফেলে
function sumNumbers(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sumNumbers(10, 20));         // আউটপুট: 30
console.log(sumNumbers(5, 15, 25, 35));  // আউটপুট: 80



গ) Pass by Value vs Pass by Reference

Pass by Value (Primitive Data): ফাংশনে আর্গুমেন্ট হিসেবে Number, String, Boolean 
পাস করলে আসল ভেরিয়েবলের কোনো পরিবর্তন হয় না (আলাদা কপি তৈরি হয়)।

Pass by Reference (Non-Primitive Data): আর্গুমেন্ট হিসেবে Array বা Object পাস করলে মেমরির মেইন রেফারেন্স শেয়ার হয়। 
অর্থাৎ ফাংশনের ভেতর অবজেক্টের কোনো মান বদলালে ফাংশনের বাইরের আসল অবজেক্টের মানও বদলে যাবে।


function updateData(obj) {
    obj.cgpa = 4.00; // ফাংশনের ভেতর অবজেক্ট পরিবর্তন করা হলো
}

let student = { name: "Abdullah", cgpa: 3.50 };
updateData(student);

console.log(student.cgpa); // আউটপুট: 4.00 (আসল অবজেক্টের মানই বদলে গেছে!)


বৈশিষ্ট্য                  Parameters (প্যারামিটার)                          Arguments (আর্গুমেন্ট)
অবস্থান	               ফাংশনের স্ট্রাকচার বা ডেফিনিশনে থাকে।	             ফাংশন যেখানে এক্সিকিউট বা কল করা হয় সেখানে থাকে।
ধরণ	                   এটি লোকাল স্কোপড ভেরিয়েবলের মতো কাজ করে।	     এটি সরাসরি ভ্যালু, ভেরিয়েবলের মান বা এক্সপ্রেশন।
মেমরি	                 ফাংশন কল না হওয়া পর্যন্ত মেমরিতে জায়গা নেয় না।	   এক্সিকিউশনের সময় মেমরিতে আসল ডাটা হিসেবে পাস হয়।

-------------------------------------------------------------------------

function myName(firstName, lastName) {
    console.log(firstName + " " + lastName);
    firstName= "Roksana";
    console.log(firstName);
}

let name1 = "Mohammad";
let name2 = "Aziz";


myName(name1, name2);
myName("Abdullah", "Arman");

Roksana ২ বার প্রিন্ট হওয়ার কারণ

function myName(firstName, lastName) {
    console.log(firstName + " " + lastName);  // লাইন ১
    firstName = "Roksana";                     // লাইন ২
    console.log(firstName);                    // লাইন ৩
}

let name1 = "Mohammad";
let name2 = "Aziz";

myName(name1, name2);     // কল ১
myName("Abdullah", "Arman"); // কল ২

📤 আউটপুট কী হবে?

Mohammad Aziz
Roksana
Abdullah Arman
Roksana

কারণটা খুব সহজ: ফাংশনটি ২ বার কল করা হয়েছে!

প্রতিবার ফাংশন কল হলে:

প্রথমে console.log(firstName + " " + lastName) রান করে

তারপর firstName = "Roksana" দিয়ে প্যারামিটারটির মান পরিবর্তন করে

তারপর console.log(firstName) রান করে

যেহেতু ফাংশনটি ২ বার কল করা হয়েছে, সেহেতু প্রতিবারই "Roksana" প্রিন্ট হয়েছে।

📊 ধাপে ধাপে বিশ্লেষণ

🔹 ১ম কল: myName(name1, name2)

// name1 = "Mohammad", name2 = "Aziz"
function myName(firstName, lastName) {
    // Step 1: firstName = "Mohammad", lastName = "Aziz"
    console.log(firstName + " " + lastName);  
    // আউটপুট: "Mohammad Aziz" ✅
    
    // Step 2: firstName এর মান পরিবর্তন
    firstName = "Roksana";  
    // এখন firstName = "Roksana"
    
    // Step 3: নতুন মান প্রিন্ট
    console.log(firstName);  
    // আউটপুট: "Roksana" ✅ (১ম বার)
}

🔹 ২য় কল: myName("Abdullah", "Arman")

// সরাসরি "Abdullah", "Arman" পাস করা হয়েছে
function myName(firstName, lastName) {
    // Step 1: firstName = "Abdullah", lastName = "Arman"
    console.log(firstName + " " + lastName);  
    // আউটপুট: "Abdullah Arman" ✅
    
    // Step 2: firstName এর মান পরিবর্তন
    firstName = "Roksana";  
    // এখন firstName = "Roksana"
    
    // Step 3: নতুন মান প্রিন্ট
    console.log(firstName);  
    // আউটপুট: "Roksana" ✅ (২য় বার)
}


 ফাংশন প্রতিবার কলেই নতুন করে রান করে

// প্রতিবার কলেই ফাংশনের ভিতরের কোড 처음 থেকে রান করে
myName(name1, name2);     // ১ম বার রান
myName("Abdullah", "Arman"); // ২য় বার রান (আলাদা এক্সিকিউশন)


প্যারামিটার পরিবর্তন করা লোকাল স্কোপে সীমাবদ্ধ

function myName(firstName, lastName) {
    firstName = "Roksana";  // শুধু এই ফাংশনের ভিতরে firstName পরিবর্তন হয়
    console.log(firstName);
}

let name1 = "Mohammad";
myName(name1);  // "Roksana" প্রিন্ট হবে
console.log(name1);  // "Mohammad" (গ্লোবাল ভেরিয়েবল অপরিবর্তিত!)



প্রতিবার নতুন প্যারামিটার ভ্যালু আসে

// ১ম কল: firstName = "Mohammad"
myName(name1, name2);

// ২য় কল: firstName = "Abdullah" (পুরোনো মান ধরে রাখে না)
myName("Abdullah", "Arman");


যে Roksana শুধু ১ বার প্রিন্ট হোক, তাহলে ফাংশনটি ১ বার কল করতে হবে:

function myName(firstName, lastName) {
    console.log(firstName + " " + lastName);
    firstName = "Roksana";
    console.log(firstName);
}

let name1 = "Mohammad";
let name2 = "Aziz";

myName(name1, name2);  // শুধু ১ বার কল
// আউটপুট:
// Mohammad Aziz
// Roksana (শুধু ১ বার)


ফাংশন কলের মেকানিজম

// ফাংশন ডেফিনেশন (শুধু ১ বার তৈরি হয়)
function myName(firstName, lastName) {
    // এই অংশটি প্রতিবার কলেই নতুন করে রান করে
    console.log(firstName + " " + lastName);
    firstName = "Roksana";
    console.log(firstName);
}

// ===== ১ম কল =====
myName(name1, name2);
// কি হয়:
// 1. firstName = name1 (="Mohammad")
// 2. lastName = name2 (="Aziz")
// 3. console.log("Mohammad Aziz")
// 4. firstName = "Roksana" (লোকাল পরিবর্তন)
// 5. console.log("Roksana")
// 6. ফাংশন শেষ → সব লোকাল ভেরিয়েবল মুছে যায়

// ===== ২য় কল =====
myName("Abdullah", "Arman");
// 1. firstName = "Abdullah" (নতুন মান)
// 2. lastName = "Arman" (নতুন মান)
// 3. console.log("Abdullah Arman")
// 4. firstName = "Roksana" (আবার পরিবর্তন)
// 5. console.log("Roksana")
// 6. ফাংশন শেষ → সব লোকাল ভেরিয়েবল মুছে যায়


firstName = "Roksana" কি গ্লোবাল name1-কে পরিবর্তন করে?

উত্তর: ❌ না! কারণ:

let name1 = "Mohammad";

function myName(firstName) {
    firstName = "Roksana";  // প্যারামিটার পরিবর্তন
    console.log(firstName);  // "Roksana"
}

myName(name1);
console.log(name1);  // "Mohammad" (অপরিবর্তিত!)

Roksana ২ বার প্রিন্ট হলে কীভাবে ১ বার করে?

myName(name1, name2);  // শুধু ১ বার
// আউটপুট: Mohammad Aziz, Roksana (১ বার)

Roksana প্রিন্ট বন্ধ করব কীভাবে?

function myName(firstName, lastName) {
    console.log(firstName + " " + lastName);
    // firstName = "Roksana";  // কমেন্ট করে দিন
    // console.log(firstName);  // কমেন্ট করে দিন
}

Roksana কেন ২ বার প্রিন্ট হয়েছে?	ফাংশনটি ২ বার কল করা হয়েছে
প্রতিবার কি একই ভ্যালু আসে?	না, প্রথমবার "Mohammad" আর দ্বিতীয়বার "Abdullah"
গ্লোবাল ভেরিয়েবল পরিবর্তন হয়েছে?	না, শুধু প্যারামিটার পরিবর্তন হয়েছে
কীভাবে ১ বার করব?	ফাংশন ১ বার কল করলে

মূল কথা: ফাংশনটি যতবার কল হবে, তার ভিতরের কোড ততবার রান করবে। 
আর প্রতিবার রান করার সময় প্যারামিটার নতুন ভ্যালু পায় এবং "Roksana" সেট হয়ে প্রিন্ট হয়। 
এখানে ফাংশনটি ২ বার কল হওয়ায় Roksana ২ বার প্রিন্ট হয়েছে!



function number(num) {
    num = num * 2;
    console.log(num);
}

// let add = number(5);
let add = 5;
number(add);

১. ফাংশন তৈরি করা:

function number(num) {
   num = num * 2;
   console.log(num);
}

এখানে number নামে একটি মেশিন (ফাংশন) তৈরি করা হয়েছে, যে একটি ইনপুট নেওয়ার জন্য রেডি হয়ে আছে। এই ইনপুটের নাম  num (প্যারামিটার)। 
মেশিনের ভেতরের কাজ হলো: যে মানটাই আসবে, তাকে ২ দিয়ে গুণ করা (num * 2) এবং গুণফলটি প্রিন্ট করা।

২. ভেরিয়েবল ঘোষণা:

let add = 5;

ফাংশনের বাইরে add নামের একটি ভেরিয়েবল তৈরি  এবং তার ভেতর মান ৫।

৩. ফাংশন কল করা (সবচেয়ে গুরুত্বপূর্ণ অংশ):

number(add);

এখানে মেশিনটিকে চালু  এবং ইনপুট হিসেবে add ভেরিয়েবলটিকে পাস করা হল
  
। জাভাস্ক্রিপ্ট তখন add এর ভেতরের মান অর্থাৎ 5 লেখাটি নিয়ে ফাংশনের ভেতরে চলে গেল।

ফাংশনের ভেতরে গিয়ে num = 5 হয়ে গেল।

তারপর লাইনে হিসাব হলো: num = 5 * 2, অর্থাৎ num এর মান হয়ে গেল 10।

শেষে console.log(num) এর কারণে স্ক্রিনে আউটপুট দেখাল: 10।

ফাংশনটি রান হওয়ার পর যদি ফাংশনের বাইরে এসে আবার console.log(add); করা হয়, তবে আউটপুট কিন্তু 5-ই আসবে, 10 হবে না।

 মূল কথা (Core Concept)
জাভাস্ক্রিপ্টে যখন কোনো সাধারণ ডাটা টাইপ (যেমন: Number, String, Boolean) কোনো ফাংশনের প্যারামিটার হিসেবে পাস করা হয়, 
তখন আসল ভেরিয়েবলটি ফাংশনের ভেতরে যায় না। বরং ওই ভেরিয়েবলের মানের একটি নকল বা ফটোকপি (Copy) ফাংশনের ভেতরে যায়।

নিয়ম: ফাংশনের ভেতরে ওই কপি মানের ওপর যত পরিবর্তনই করা হোক না কেন, ফাংশনের বাইরের আসল ভেরিয়েবলের মান সবসময় অপরিবর্তিত (Unchanged) থাকে। একেই Pass by Value বলে।

function multiplyByTwo(num) {
   // num হলো বাইরের 'add' ভেরিয়েবলের একটি ফটোকপি
   num = num * 2; 
   console.log("ফাংশনের ভেতরে (কপি মান):", num); // আউটপুট: 10
}

let add = 5; // এটি আসল গ্লোবাল ভেরিয়েবল

multiplyByTwo(add); // ফাংশনে শুধু '৫' এর কপি পাঠানো হলো

console.log("ফাংশনের বাইরে (আসল মান):", add); // আউটপুট: 5 (মান বদলায়নি)






function number(num) {
    num = num * 2;
    console.log(num);
}

let add = number(5);
number(add); 


এটি হলো—"কোনো ফাংশন যদি কিছু return না করে, তবে তার মান হয় undefined।"

📝 নোট: ফাংশনের Return ভ্যালু এবং Undefined-এর খেলা

মূল কথা (Core Concept)

জাভাস্ক্রিপ্টে কোনো ফাংশন থেকে যদি  return কিবোর্ড ব্যবহার করে কোনো মান ফেরত না পাঠাই, তবে সেই ফাংশনটি স্বয়ংক্রিয়ভাবে undefined (অসংজ্ঞায়িত) ফেরত দেয়।

যখন কোডে: let add = number(5);

এখানে number(5) ফাংশনটি রান হয়েছে এবং ভেতরে ১০ প্রিন্ট করেছে।

কিন্তু ফাংশনটির ভেতরে কোনো return লেখা ছিল না।

তাই জাভাস্ক্রিপ্ট ধরে নিয়েছে ফাংশনটির আউটপুট হলো undefined। ফলে add ভেরিয়েবলের ভেতরে গিয়ে জমা হয়েছে undefined!


function number(num) {
    num = num * 2;
    console.log(num); 
    // এখানে কোনো 'return' নেই! তাই এই ফাংশনটি আসলে 'undefined' ফেরত দিচ্ছে।
}

// ধাপ ১: ফাংশনটি রান হলো। কনসোলে দেখালো: 10
// ধাপ ২: ফাংশন থেকে কিছু ফেরত না আসায় 'add' এর মান হয়ে গেল: undefined
let add = number(5); 

// ধাপ ৩: এবার কল করলে number(add) -> অর্থাৎ number(undefined)
// ফাংশনের ভেতরে গিয়ে হিসাব হলো: undefined * 2
// জাভাস্ক্রিপ্টে undefined-কে গুণ করলে ফলাফল হয় NaN (Not a Number)
number(add); // আউটপুট দেখাবে: NaN

পুরো কোডের আউটপুট যা আসবে (Output)
কোডটি রান করলে কনসোলে পর পর দুটি আউটপুট আসবে:

10 (প্রথমবার number(5) কল করার কারণে)

NaN (দ্বিতীয়বার number(undefined) কল করার কারণে)


💡 এই কোডটি ঠিক বা "সঠিক" করার উপায় (যদি ১০ এবং ২০ আউটপুট)
যদি দ্বিতীয় লাইনেও সঠিক হিসাব পেতে চাওয়া হয়, তবে ফাংশনের ভেতর অবশ্যই return ব্যবহার করতে হবে:

function number(num) {
    num = num * 2;
    console.log(num);
    return num; // এই লাইনটি যোগ করতে হবে, যাতে 'add' ভেরিয়েবল আসল মানটি পায়
}

let add = number(5); // এখন add এর মান হবে 10 (এবং কনসোলে দেখাবে 10)
number(add);         // এখন ফাংশনে 10 যাবে, হিসাব হবে 10 * 2 = 20 (কনসোলে দেখাবে 20)


📌 মনে রাখার সহজ টিপস (Key Takeaways)

console.log() শুধু পর্দায় কোনো কিছু দেখায়, সে কোনো মান ভেরিয়েবলে জমা করতে পারে না।

কোনো ফাংশনের মান ভেরিয়েবলে ধরে রাখতে চাইলে বা জমা করতে চাইলে অবশ্যই return ব্যবহার করতে হবে।
না করলে ভেরিয়েবলটির মান আজীবন undefined হবে।

undefined এর সাথে কোনো সংখ্যার গুণ বা ভাগ করলে উত্তর আসে NaN (Not a Number)।




------------------------------------------------------------------------

function userDetails(firstName, lastName) {
   let fullName = firstName + " " + lastName;
   console.log(fullName);
}

userDetails("Abdullah", "Aziz");  userDetails(firstName, lastName) এটা global নাকি local variable.........

ফাংশনের ভেতরের firstName এবং lastName হলো লোকাল (Local)।

ফাংশন কল করার সময় ব্র্যাকেটের ভেতর যে "Abdullah" এবং "Aziz" সরাসরি লিখা হয়েছে, সেগুলো কোনো ভেরিয়েবলই নয়,
  
সেগুলো হলো সরাসরি মান (String Values) বা আর্গুমেন্ট।


লোকাল ভেরিয়েবল (Local Variables)

ফাংশনের নামের ভেতরের ব্র্যাকেটে যে নামগুলো থাকে (যাদের আমরা প্যারামিটার বলি), সেগুলো সবসময় লোকাল ভেরিয়েবল হিসেবে কাজ করে।

function userDetails(firstName, lastName) { // এই দুটি লোকাল ভেরিয়েবল
   let fullName = firstName + " " + lastName; // fullName-ও একটি লোকাল ভেরিয়েবল
   console.log(fullName);
}

কেন লোকাল? কারণ এই firstName, lastName এবং fullName-কে শুধুমাত্র এই ফাংশনের ভেতরেই ({ } এর মাঝখানে) ব্যবহার করা যাবে  >?
  
ফাংশনের বাইরে এসে যদি console.log(firstName) করা হয়, তবে জাভাস্ক্রিপ্ট এরর (Error) দেবে, কারণ বাইরে এদের কোনো অস্তিত্ব নেই।


গ্লোবাল ভেরিয়েবল কখন হতো?
  
যদি ফাংশনের বাইরে কোনো ভেরিয়েবল তৈরি করা হত, তবে সেটা হতো গ্লোবাল। যেমন:

let firstName = "Abdullah"; // এটি গ্লোবাল ভেরিয়েবল
let lastName = "Aziz";     // এটিও গ্লোবাল ভেরিয়েবল

function userDetails() {
   // এই ফাংশনের
  ভেতর থেকে ওপরের গ্লোবাল ভেরিয়েবলগুলোকে সরাসরি অ্যাক্সেস করা যাবে
}

ফাংশন কলের লাইনটির ব্যাখ্যা:

এখানে কিন্তু কোনো ভেরিয়েবল পাস করা হয়নি ।   সরাসরি দুটি নাম বা টেক্সট পাঠিয়ে দেওয়া হয়েছে।

যখন এই লাইনটি রান হয়, তখন জাভাস্ক্রিপ্ট পর্দার আড়ালে ঠিক এই কাজটি করে:

ফাংশনের ভেতরে থাকা লোকাল ভেরিয়েবল firstName এর ভেতর "Abdullah" মানটি বসিয়ে দেয়।

লোকাল ভেরিয়েবল lastName এর ভেতর "Aziz" মানটি বসিয়ে দেয়।

তারপর ফাংশনের ভেতরে গিয়ে কাজ শেষ করে। কাজ শেষ হওয়া মাত্রই এই লোকাল ভেরিয়েবলগুলো মেমোরি থেকে মুছে যায়।

ফাংশনের ব্র্যাকেটের ভেতর (function userDetails(এখানে যা থাকে)) এবং ফাংশনের বডির ভেতর ({ এখানে যা তৈরি হয় }) সবকিছুই হলো লোকাল। 
এরা ফাংশনের নিজস্ব সম্পত্তি, বাইরের দুনিয়ার সাথে এদের কোনো চেনা-জানা নেই!




userDetails("Abdullah", "Aziz"); function call এর argument একদম সহজ কথায়: কপি (Copy) হয়ে যায়! প্রোগ্রামিংয়ে 'কাট (Cut)' বলতে কোনো শব্দ নেই।

সরাসরি মান না পাঠিয়ে যদি ভেরিয়েবল দিয়ে পাঠাই, তাহলে এই "কপি হওয়ার" ব্যাপারটা ১০০% প্রমাণ হয়ে যায়:

function userDetails(firstName, lastName) {
   // এখানে এসে কপির মান বদলে দিলাম
   firstName = "Arman"; 
   console.log("ফাংশনের ভেতরের firstName (কপি):", firstName); // আউটপুট: Arman
}

let myName = "Abdullah"; // এটি আসল ভেরিয়েবল

userDetails(myName, "Aziz"); // এখানে myName এর 'কপি' পাঠানো হলো

// এখন দেখা যাক আসল ভেরিয়েবলটা কি কেটে গেছে নাকি ঠিক আছে?
console.log("ফাংশনের বাইরের myName (আসল):", myName); // আউটপুট: Abdullah

🏆 ফাইনাল সিদ্ধান্ত:
যেহেতু বাইরের myName ভেরিয়েবলটি ফাংশনের ভেতরে মান বদলানোর পরেও একটুও বদলায়নি বা কেটে যায়নি,
তার মানে ফাংশন কল করার সময় আর্গুমেন্ট সবসময় কপি (Copy) হয়েই ভেতরে ঢোকে। একেই প্রোগ্রামিংয়ের ভাষায় বলে Pass by Value!





function userDetails(firstName, lastName) {
   let fullName = firstName + " " + lastName;
   console.log(fullName);
   firstName = "Mohammad";
   console.log(firstName);

}

let name1 = "Abdullah";
let name2 = "Aziz";
userDetails(name1, name2); 

name1 এবং name2 হলো গ্লোবাল ভেরিয়েবল, আর ফাংশন কল করার সময় এদের মান কপি হয়ে লোকাল ভেরিয়েবল firstName এবং lastName-এ গিয়েছে।

এখানে তো firstName = "Mohammad" দিয়ে রিঅ্যাসাইন করা হল, তাহলে firstName-এর জায়গায় মোহাম্মদ বসলো না কেন?"
  
বাস্তবে কিন্তু firstName-এর জায়গায় "Mohammad" ঠিকই বসেছে এবং প্রিন্টও হয়েছে!

💻 এই কোডের আসল আউটপুট (Output)

যদি এই কোডটি রান করা হয় তবে কনসোলে পর পর দুটি লাইন প্রিন্ট হবে:
Abdullah Aziz
Mohammad

কম্পিউটার যখন ফাংশনটি রান করে, তখন সে ঠিক নিচের ক্রমানুসারে (Sequence) কাজগুলো করে:

১. ফাংশন কল ও কপি হওয়া:

userDetails(name1, name2);

এখানে গ্লোবাল name1 ("Abdullah") এবং name2 ("Aziz") এর কপি গিয়ে লোকাল firstName এবং lastName-এ বসলো। এই মুহূর্তে ফাংশনের ভেতরে:

firstName = "Abdullah"

lastName = "Aziz"


২. নাম জোড়া লাগানো ও প্রথম প্রিন্ট:

let fullName = firstName + " " + lastName;
console.log(fullName); // আউটপুট: Abdullah Aziz
কম্পিউটার দেখলো firstName এখনও "Abdullah" আছে, তাই সে দুটি জোড়া দিয়ে fullName বানালো "Abdullah Aziz" এবং সেটা প্রিন্ট করলো।

③. রিঅ্যাসাইন করা (প্রশ্ন যেখানে): 

firstName = "Mohammad";

এই লাইনে এসে লোকাল ভেরিয়েবল firstName-এর মান বদলে দেওয়া হয়েছে। 
জাভাস্ক্রিপ্ট সাথে সাথে মেমোরিতে গিয়ে firstName-এর ভেতরের "Abdullah" কেটে সেখানে নতুন মান "Mohammad" বসিয়ে দিল।

৪. দ্বিতীয় প্রিন্ট:

console.log(firstName); // আউটপুট: Mohammad

মান বদলানোর ঠিক পরের লাইনেই যখন  console.log(firstName) করা হল, কম্পিউটার কিন্তু স্ক্রিনে Mohammad-ই প্রিন্ট করলো!

💡 খটকাটা আসলে যেখানে লেগেছে:

হয়তো মনে হচ্ছে যে firstName = "Mohammad" করার কারণে ওপরের fullName-টাও নিজে নিজে বদলে "Mohammad Aziz" হয়ে যাওয়ার কথা ছিল?

আগের ডায়েরির উদাহরণটা —কোড সবসময় ওপর থেকে নিচে রান হয়।

২ নম্বর লাইনে যখন fullName তৈরি হচ্ছিল, তখন firstName ছিল "Abdullah", তাই সে "Abdullah Aziz" বানিয়ে স্ক্রিনে দেখায় দিছে।

৪ নম্বর লাইনে এসে  firstName বদলে "Mohammad" করা হয়েছে। কিন্তু কম্পিউটার তো আর
ওপরের ২ নম্বর লাইনে ফিরে গিয়ে fullName-এর ভেতরের লেখাটা কাটাকাটি করবে না!

তাই firstName-এর মান ভেতরের জায়গায় ঠিকই বদলেছে (যার প্রমাণ ২য় আউটপুট Mohammad), কিন্তু তার প্রভাব পেছনের লাইনে গিয়ে পড়েনি।




লোবাল ভেরিয়েবল যখন আর্গুমেন্ট হিসেবে ফাংশনে পাস করা হয় এবং সেটি যখন প্যারামিটারে পৌঁছায়,
তখন সেটি আর গ্লোবাল থাকে না—সেটি সম্পূর্ণ লোকাল ভেরিয়েবল হয়ে যায়।

🔄 গ্লোবাল থেকে লোকাল হওয়ার প্রক্রিয়া

let name1 = "Abdullah"; // গ্লোবাল ভেরিয়েবল
let name2 = "Aziz";     // গ্লোবাল ভেরিয়েবল

এরা বাইরের দুনিয়ায় গ্লোবাল রাজা। কিন্তু যখনই এদের ফাংশন কলের ভেতর পাঠানো হল

userDetails(name1, name2);

তখন জাভাস্ক্রিপ্ট গ্লোবাল name1 আর name2-কে নিজে ধরে ভেতরে নিয়ে যায় না। সে শুধু তাদের ভেতরের মান দুটির ("Abdullah" এবং "Aziz")
দুটি ফটোকপি করে ফাংশনের দরজায় থাকা প্যারামিটার firstName এবং lastName-এর হাতে তুলে দেয়।
ংশনের প্যারামিটারে থাকা (firstName, lastName) হলো ওই ফাংশনের নিজস্ব লোকাল ভেরিয়েবল।

🧱 প্রমাণ: গ্লোবাল আর লোকালের মাঝখানের দেয়াল
যেহেতু প্যারামিটারে পৌঁছানোর পর তারা লোকাল ভেরিয়েবল হয়ে গেছে, 
তাই ফাংশনের ভেতরে যদি তাদের মান বদলালে ও, বাইরের গ্লোবাল ভেরিয়েবলের গায়ে একটা আঁচড়ও লাগবে না।


function userDetails(firstName, lastName) { // এখানে এসে এরা লোকাল
   let fullName = firstName + " " + lastName;
   console.log(fullName); // আউটপুট: Abdullah Aziz
   
   firstName = "Mohammad"; // লোকাল ভেরিয়েবল বদলে 'Mohammad' হলো
}

ফাংশনটা রান হওয়ার পর যদি ফাংশনের বাইরে এসে গ্লোবাল name1-কে প্রিন্ট করা হয়:

console.log(name1); // আউটপুট কিন্তু এখনও "Abdullah"-ই আসবে!


কেন "Abdullah" আসলো? কারণ গ্লোবাল ভেরিয়েবলটা যখন প্যারামিটারে পৌঁছে লোকাল হয়ে গিয়েছিল, 
তখন ফাংশনের ভেতরে শুধু সেই লোকাল ভেরিয়েবলটাকেই বদলেছ (firstName = "Mohammad"), আসল গ্লোবাল name1-কে নয়।





function userDetails(firstName, lastName) {
    firstName = "Mohammad";
    console.log(firstName);
    let fullName = firstName + " " + lastName;
    console.log(fullName);
  

}

let name1 = "Abdullah";
let name2 = "Aziz";
userDetails(name1, name2); 

ফাংশনের ভেতরে বাইরের গ্লোবাল ভেরিয়েবলের চেয়ে লোকাল ভেরিয়েবলের গুরুত্ব বা প্রায়োরিটি (Priority) সবসময় বেশি।

👑 লোকাল ভেরিয়েবলের "রাজত্ব" (Local Scope Priority)

যখন ফাংশনের বাইরে let name1 = "Abdullah" লিখা হয়েছে, সেটা হলো গ্লোবাল দুনিয়া। 
কিন্তু যখনই কোডটি userDetails ফাংশনের ভেতরে ঢুকে যাচ্ছে, তখন সেখানে একটা আলাদা স্বাধীন রাজ্য তৈরি হচ্ছে।

এই রাজ্যের নিজস্ব দুজন পাহারাদার বা লোকাল ভেরিয়েবল হলো firstName এবং lastName।

function userDetails(firstName, lastName) {
    firstName = "Mohammad"; // এখানে লোকাল ভেরিয়েবলের ওপর ফুল কন্ট্রোল বা পাওয়ার

বাইরে থেকে name1 ("Abdullah") এর কপি এসে যখন লোকাল ভেরিয়েবল firstName-এ ঢুকলো, 
তখন ওই firstName ভেরিয়েবলটার ওপর ফাংশনের ভেতরে সম্পূর্ণ অধিকার চলে এসেছে।

যেহেতু ফাংশনের ভেতরে লোকাল ভেরিয়েবলের পাওয়ার বেশি, তাই যখনইে বলা হল firstName = "Mohammad", 
সে বাইরের গ্লোবাল name1-এর দিকে আর তাকালোই না। সে নিজের ভেতরের মানটাকে সাথে সাথে বদলে "Mohammad" বানিয়ে দিল।

এরপর যখন নাম দুটি জোড়া, তখন সে ওই আপডেটেড লোকাল মানটি নিয়েই কাজ করলো।

💻 এই কোডের আউটপুট (Output)

Mohammad
Mohammad Aziz


🎯 কেন লোকাল ভেরিয়েবলকে এই বাড়তি গুরুত্ব (Priority) দেওয়া হয়?

একটা বড় সফটওয়্যার বানাচ্ছ যেখানে হাজার হাজার লাইনের কোড আছে। এখন গ্লোবাল দুনিয়ায় name1 বা name2 নামে কোনো ভেরিয়েবল থাকতেই পারে।

ফাংশনের ভেতরে যদি লোকাল ভেরিয়েবলকে বেশি গুরুত্ব দেওয়া না হতো, তবে ভুলে বাইরের কোনো ভেরিয়েবলের কারণে
ফাংশনের ভেতরের হিসাব-নিকাশ ওলটপালট হয়ে যেত।
ফাংশনকে নিরাপদ এবং স্বাধীন রাখার জন্যই জাভাস্ক্রিপ্ট নিয়ম করেছে—"ফাংশনের ভেতর লোকাল ভেরিয়েবলের কথাই শেষ কথা, 
এখানে বাইরের গ্লোবাল ভেরিয়েবলের কোনো মাতব্বরি চলবে না।"



// ১. ফাংশন ডেফিনিশন (প্যারামিটার: firstName, lastName)
function details(firstName, lastName) {
  console.log(`User Name: ${firstName} ${lastName}`);
}

// ২. ইউজার থেকে ইনপুট নেওয়া
let userFirst = prompt("Enter First Name:");
let userLast = prompt("Enter Last Name:");

// ৩. ইনপুট নেওয়া ভ্যারিয়েবলগুলোকে আর্গুমেন্ট হিসেবে ফাংশনে পাঠানো
details(userFirst, userLast);


ধরা যাক ইউজার ইনপুট দিলেন: first = "Abdullah" এবং last = "Aziz"।

গ্লোবাল স্কোপ (Global Scope):

userFirst ভ্যারিয়েবলে জমা হলো "Abdullah"

userLast ভ্যারিয়েবলে জমা হলো "Aziz"

Function Call (details(userFirst, userLast)):

userFirst-এর মান কপি হয়ে লোকাল প্যারামিটার firstName = "Abdullah" হলো।

userLast-এর মান কপি হয়ে লোকাল প্যারামিটার lastName = "Aziz" হলো।

Execution & Cleanup:

কনসোলে প্রিন্ট হলো: User Name: Abdullah Aziz

ফাংশনের কাজ শেষ হওয়ার সাথে সাথে লোকাল firstName ও lastName মেমোরি থেকে ডিলিট হয়ে গেল।
কিন্তু গ্লোবাল userFirst ও userLast-এ ইউজারের দেওয়া মান থেকে গেল।



ব্যাকএন্ড ইউজার রেজিস্ট্রেশন ও পাসওয়ার্ড সিকিউরিটি চেক
সিনারিও: ইউজার যখন ওয়েবসাইট বা অ্যাপে সাইন-আপ করার জন্য নাম ও পাসওয়ার্ড ইনপুট দেয়, তখন ব্যাকএন্ড ফাংশনে
পাসওয়ার্ড স্ট্রং কি না (অন্তত ৮ ক্যারেক্টার) তা চেক করে রেসপন্স দিতে হয়।

// ১. ফাংশন ডেফিনিশন (প্যারামিটার: username, password)


// ১. ফাংশন ডেফিনিশন (প্যারামিটার: username, password)
function registerUser(username, password) {
  // পাসওয়ার্ড সিকিউরিটি চেক
  if (password.length < 8) {
    return `Error: Hi ${username}, password must be at least 8 characters long!`;
  } else {
    return `Success: Account created successfully for ${username}!`;
  }
}

// ২. ইউজার থেকে ইনপুট নেওয়া
let inputUser = prompt("Enter your desired Username:");
let inputPass = prompt("Enter your Password:");

// ৩. ইনপুট দুটো আর্গুমেন্ট হিসেবে ফাংশনে পাঠিয়ে রেজাল্ট ভ্যারিয়েবলে রাখা
let statusMessage = registerUser(inputUser, inputPass);

// ৪. আউটপুট দেখানো
console.log(statusMessage);
alert(statusMessage);


🔍 আপনার কোডের পজিশনাল ও লজিক্যাল ম্যাপিং:

১. প্যারামিটার ও আর্গুমেন্ট হ্যান্ডলিং:

registerUser(username, password)-এ username ও password হলো Parameter।

registerUser(inputUser, inputPass) দিয়ে কল করার সময় inputUser ও inputPass-এর মান দুটো Argument হিসেবে পাস হচ্ছে।

২. লজিক ও মেথড:

password.length মেথডটি পাসওয়ার্ডের অক্ষরের সংখ্যা সঠিকভাবে গুনছে।

Template Literals (`... ${username}`) ব্যবহার করে স্ট্রিং ফর্মাটিং সঠিকভাবে করা হয়েছে।

return স্টেটমেন্ট ব্যবহার করার ফলে আউটপুট মেসেজটি বাইরে statusMessage ভ্যারিয়েবলে সুন্দরভাবে স্টোর হচ্ছে।

🖥️ ব্রাউজারে এটি যেভাবে কাজ করবে (Execution Flow):পপআপে ইউজারনেম চাইবে  যেমন দিলেন: Arman
পাসওয়ার্ড পপআপ আসবে যেমন দিলেন: pass123 (৭টি অক্ষর)password.length < 8 সত্য হওয়ায় আউটপুট আসবে:

Console Log: Error: Hi Arman, password must be at least 8 characters long!

Alert Box: একই মেসেজের একটি পপআপ দেখাবে।


আপডেট করা নিরাপদ JavaScript কোড (Cancel ও খালি ইনপুট হ্যান্ডলিং সহ)
যদি ইউজার prompt() বক্সে কিছু না লিখে Cancel চাপেন (যার ফলে null আসে)
অথবা খালি রেখে OK চাপেন (যার ফলে "" আসে), তবে এই কোডটি কোনো প্রকার ক্র্যাশ বা এরর দেওয়া ছাড়াই তা হ্যান্ডেল করবে:


// ১. আপডেটেড ফাংশন ডেফিনিশন (Cancel বা খালি ইনপুট সুরক্ষাসহ)
function registerUser(username, password) {
  // ১.১ ইউজারনেম না দিলে বা Cancel চাপলে ডিফল্ট নাম 'User' ধরা হবে
  let displayName = username || "User";

  // ১.২ পাসওয়ার্ড না দিলে (null/খালি) অথবা ৮ অক্ষরের কম হলে এরর দেবে
  if (!password || password.length < 8) {
    return `Error: Hi ${displayName}, password must be at least 8 characters long!`;
  } else {
    return `Success: Account created successfully for ${displayName}!`;
  }
}

// ২. ইউজার থেকে ইনপুট নেওয়া
let inputUser = prompt("Enter your desired Username:");
let inputPass = prompt("Enter your Password:");

// ৩. ইনপুট ফাংশনে পাঠিয়ে রেজাল্ট রিসিভ করা
let statusMessage = registerUser(inputUser, inputPass);

// ৪. আউটপুট দেখানো
console.log(statusMessage);
alert(statusMessage);


১. username || "User" (Logical OR):

যদি ইউজার নাম টাইপ করেন (যেমন: "Arman"), তবে displayName হবে "Arman"।

যদি ইউজার নাম না লিখে Cancel চাপেন (মান হয় null), তবে displayName নিজে থেকেই "User" মানটি ধরে নেবে।

২. !password || password.length < 8:

যদি ইউজার পাসওয়ার্ড বক্সে Cancel চাপেন, তবে password হয়ে যায় null (যা একটি falsy value)।

!password অংশটি সত্য হয়ে যায় এবং কোডটি password.length রিড করতে গিয়ে ক্র্যাশ বা TypeError না মেরে সরাসরি এরর মেসেজ রিটার্ন করে দেয়।

  




ই-কমার্স ডিসকাউন্ট ক্যালকুলেটর (Shopping Checkout)
সিনারিও: চেকআউট পেজে ইউজার তার মোট কেনাকাটার পরিমাণ (Amount) এবং প্রোমো কোড ইনপুট দেয়। 
ফাংশন সেই ইনপুট নিয়ে ডিসকাউন্ট হিসাব করে ফাইনাল বিল বের করে।

// ১. ফাংশন ডেফিনিশন (প্যারামিটার: totalAmount, promoCode)
function calculateFinalBill(totalAmount, promoCode) {
  let discount = 0;

  if (promoCode === "SAVE20") {
    discount = totalAmount * 0.20; // ২০% ছাড়
  } else if (promoCode === "SAVE10") {
    discount = totalAmount * 0.10; // ১০% ছাড়
  }

  let finalBill = totalAmount - discount;
  return `Original Price: $${totalAmount} | Discount: $${discount} | Final Payable: $${finalBill}`;
}

// ২. ইউজার থেকে ইনপুট নেওয়া
let userAmount = Number(prompt("Enter total shopping amount ($):"));
let userPromo = prompt("Enter Promo Code (if any):");

// ৩. ইনপুট নিয়ে ফাংশন কল ও গ্লোবাল ভ্যারিয়েবলে রেজাল্ট জমা রাখা
let invoiceSummary = calculateFinalBill(userAmount, userPromo);

console.log(invoiceSummary);


🔍 কেন এই প্যাটার্ন বাস্তব প্রজেক্টে ব্যবহৃত হয়?
  
পুনর্ব্যবহারযোগ্যতা (Reusability): registerUser বা calculateFinalBill ফাংশন এক জায়গায় লেখা থাকে, 
হাজার হাজার ইউজার আলাদা ইনপুট দিলে এটি বারবার সঠিকভাবে হিসাব করে আউটপুট দেয়।

ক্লিন আর্কিটেকচার: ইনপুট নেওয়ার কাজ আলাদা, প্রসেসিং করার কাজ ফাংশনের ভেতরে আলাদা।
