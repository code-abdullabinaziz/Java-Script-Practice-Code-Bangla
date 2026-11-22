JavaScript-এ if-else স্টেটমেন্ট ব্যবহার করা হয় মূলত কোনো একটি নির্দিষ্ট শর্তের (condition) ওপর ভিত্তি করে সিদ্ধান্ত নেওয়ার জন্য।

সহজ কথায়, "যদি এই শর্তটি সত্যি হয় তবে এই কাজটি করো, নাহলে অন্য কাজটি করো।"

if: যদি শর্তটি সঠিক হয়।

else if: যদি আগের শর্তটি ভুল হয় কিন্তু নতুন এই শর্তটি সঠিক হয়।

else: যদি উপরের কোনো শর্তই সঠিক না হয়।

১. শর্তটি সব সময় ব্র্যাকেটের ( ) ভেতরে লিখতে হয়।

২. শর্তটি সত্য নাকি মিথ্যা তা যাচাই করার জন্য সাধারণত Comparison Operators ব্যবহার করা হয় (যেমন: ==, ===, >, <, >=, <=, !=)।


if-else-এ কন্ডিশনের বাইরে () ১০০% বাধ্যতামূলক করার মূল কারণ হলো ইন্টারপ্রেটার বা কম্পাইলারকে স্পষ্ট সীমানা নির্দেশ করা (Unambiguous Parsing)।

প্রোগ্রামিং ভাষার ব্যাকরণ বা সিঙ্কট্যাক্স ডিজাইনে এটি রাখার ৩টি প্রধান কারণ:

১. কন্ডিশন এবং কোড স্টেটমেন্ট আলাদা করা

কোড স্ক্যান করার সময় ইন্টারপ্রেটার কীভাবে বুঝবে যে কন্ডিশনটি ঠিক কোথায় শেষ হয়েছে এবং আপনার চালানো কোড কোথায় শুরু হয়েছে? () বন্ধনীটি কন্ডিশনের শুরু ও শেষ বিন্দু নির্দেশ করে।

২. {} অপশনাল রাখা

C, C++ এবং JavaScript-এ এক লাইনের কোডের জন্য {} (Curly Braces) না দিলেও চলে।

যেমন:

if (age >= 18) console.log("Adult");


যদি () না থাকত, তবে কোডটি হতো: if age >= 18 console.log("Adult")

এখানে ইন্টারপ্রেটার কনফিউজড হয়ে যেত যে 18 কি কন্ডিশনের শেষ নাকি console.log কন্ডিশনের অংশ।









let mangoPrice = 20;

let bananaPrice = 20;

if (mangoPrice <= bananaPrice) {
    console.log("Its True");
}




let myName = "Abdullah";

if (myName == "Abdullah") {
    console.log("Hello");
 }



if (3 < 5) {
    console.log("Yes True");
}



let name = "Aziz";
    if (name == "Abdullah") {
    console.log("is false");
}




let a;

if (a = "Abdullah") {
    console.log("is True");
}



let b;
if (b = null) {
    console.log("is false");
 }



let myColor = "Orange";

if (myColor == "Orange") {
    console.log("Just like the Orange !");
}



let c;

if ( c = "Hello" ) {
    console.log("C Is True");
}



let d;

if ( d = null ) {
    console.log("C Is False");
}



let e;
if (e = "Abdullah") {
    console.log("My Name Is Abdullah");
}



if ("0") {
    console.log("This is True")
}



if ( 3 + 5 ) {
    console.log("Its True")
}



let amount = prompt("Enter Your Amount: ");
if (amount = "100") {
    console.log("Abdullah");
}


JavaScript-এ Arithmetic Operators ব্যবহার করার সময় অনেক ক্ষেত্রে ডাটা অটোমেটিকভাবে Number টাইপে রূপান্তর হয়।

এটাকেই বলা হয় Type Coercion। (গাণিতিক অপারেটর যেমন: +, -, *, /) 
    
Type Coercion:   

যখন JavaScript নিজে থেকেই এক টাইপের ডাটাকে অন্য টাইপে পরিবর্তন করে, তখন তাকে Type Coercion বলে।

"10" → string

5 → number

Arithmetic operator ব্যবহার করলে JavaScript অনেক সময় string কে number বানিয়ে ফেলে।


console.log("10" - 2);   // আউটপুট: 8 (স্ট্রিং "10" সংখ্যা ১০-এ রূপান্তরিত হয়েছে)

console.log("5" * "4");  // আউটপুট: 20 (দুটি স্ট্রিংই সংখ্যায় রূপান্তরিত হয়েছে)

console.log(true + 5);   // আউটপুট: 6 (true রূপান্তরিত হয়েছে 1-এ)

console.log(false + 5);  // আউটপুট: 5 (false রূপান্তরিত হয়েছে 0-এ)

console.log(null + 10);  // আউটপুট: 10 (null রূপান্তরিত হয়েছে 0-এ)

console.log(undefined + 10);

console.log("5" + 2);    // আউটপুট: "52" (এখানে যোগ না হয়ে জোড়া লেগেছে)

console.log(5 + 2);      // আউটপুট: 7 (সাধারণ যোগ)






() (Parentheses / ব্র্যাকেট): সবচেয়ে বেশি পাওয়ারফুল! ব্র্যাকেটের ভেতরের কাজ সব সময় আগে হবে।

! (Logical NOT): ব্র্যাকেট না থাকলে NOT-এর কাজ সবার আগে হয়।

&& (Logical AND): এরপর AND-এর কাজ হয়।

|| (Logical OR): সবার শেষে OR-এর কাজ হয়।



Logical AND (&&) অপারেটর
নিয়ম: && ব্যবহার করলে সবগুলো শর্তই সত্য (True) হতে হবে। যেকোনো একটা মিথ্যা (False) হলেই পুরো ফল মিথ্যা হয়ে যাবে।


উদাহরণ: জব অ্যাপ্লাই করার যোগ্যতা
ধরা যাক, চাকরি পাওয়ার জন্য বয়স হতে হবে ১৮-এর বেশি এবং গ্র্যাজুয়েট হতে হবে।

let age = 22;
let isGraduated = true;

// বয়স ১৮-এর বেশি হতে হবে "এবং" গ্র্যাজুয়েট হতে হবে
if (age >= 18 && isGraduated === true) {
    console.log("You are eligible for the job!");
} else {
    console.log("You are not eligible for the job.");
}
আউটপুট: You are eligible for the job! (কারণ দুটো শর্তই সত্য)





Logical OR (||) অপারেটর

নিয়ম: || ব্যবহার করলে যে কোনো একটি শর্ত সত্য (True) হলেই কাজ হবে। দুটো শর্তই একসাথে মিথ্যা না হলে এটি মিথ্যা হয় না।

উদাহরণ: ডিসকাউন্ট পাওয়ার শর্ত
ধরা যাক, স্টুডেন্ট হলে অথবা বয়স ৬০-এর বেশি হলে বাস ভাড়ায় ডিসকাউন্ট পাওয়া যাবে।

let isStudent = false;
let age = 65;

// স্টুডেন্ট হতে হবে "অথবা" বয়স ৬০-এর বেশি হতে হবে
if (isStudent === true || age >= 60) {
    console.log("You get a discount!");
} else {
    console.log("You have to pay full price.");
}
আউটপুট: You get a discount! (কারণ isStudent মিথ্যা হলেও বয়স ৬৫ হওয়ায় ২য় শর্তটি সত্য হয়ে গেছে)





🔍 Logical NOT (!) অপারেটর কী করে?
    
নিয়ম: ! এর কাজ হলো সত্যি (True) কে মিথ্যা (False) বানিয়ে দেওয়া, 
    
আর মিথ্যা (False) কে সত্যি (True) বানিয়ে দেওয়া। অর্থাৎ, এটি শর্তকে উল্টে দেয় (Invert করে)।

let isLightOn = false; // আলো এখন বন্ধ

// !isLightOn মানে হলো: "isLightOn যদি true না হয়" (অথবা "আলো কি বন্ধ?")
if (!isLightOn) {
    console.log("Please turn on the light.");
} else {
    console.log("The light is already on.");
}


আউটপুট: Please turn on the light.

ব্যাখ্যা: isLightOn ছিল false। কিন্তু সামনে ! বসানোর কারণে !false হয়ে গেল true! তাই if ব্লকের ভেতরের কোডটি কাজ করল।





রিয়েল-লাইফ উদাহরণ: ইউজার কি লগইন করেনি? (Not Logged In)
ওয়েবসাইটে লগইন করা আছে কি না তা চেক করার সহজ উদাহরণ:

let isLoggedIn = false;

// !isLoggedIn মানে: "যদি ইউজার লগইন অবস্থায় না থাকে"
if (!isLoggedIn) {
    console.log("Please log in to continue.");
} else {
    console.log("Welcome back to your dashboard!");
}

আউটপুট: Please log in to continue.






১. ফ্রি শিপিং অফার (Free Shipping Eligibility)

শর্ত: কোনো অর্ডার ক্যান্সেল হওয়া যাবে না AND (অর্ডারের পরিমাণ $১০০০ এর বেশি হতে হবে OR প্রিমিয়াম মেম্বার হতে হবে)।


let isCanceled = false;
let totalAmount = 1200;
let isPremiumMember = false;

if (!isCanceled && (totalAmount > 1000 || isPremiumMember)) {
    console.log("Eligible for Free Shipping!");
} else {
    console.log("Shipping fee applies.");
}


আউটপুট: Eligible for Free Shipping!

কীভাবে কাজ করছে:

ব্র্যাকেটের ভেতর (OR): (1200 > 1000 || false) ➔ true || false ➔ true

NOT এর কাজ: !isCanceled ➔ !false ➔ true

AND এর কাজ: true && true ➔ true (তাই if এর কোড রান হলো)।




২. পরীক্ষার এডমিট কার্ড ডাউনলোড (Exam Hall Permission)

শর্ত: ফি বকেয়া থাকা যাবে না AND (উপস্থিতি ৮০% এর বেশি হতে হবে OR স্পেশাল পারমিশন থাকতে হবে)।

let hasDueFees = false;
let attendance = 75;
let hasSpecialPermission = true;

if (!hasDueFees && (attendance >= 80 || hasSpecialPermission)) {
    console.log("Admit Card Download Allowed.");
} else {
    console.log("Cannot Download Admit Card.");
}

আউটপুট: Admit Card Download Allowed.

কীভাবে কাজ করছে:

ব্র্যাকেটের ভেতর (OR): (75 >= 80 || true) ➔ false || true ➔ true

NOT এর কাজ: !hasDueFees ➔ !false ➔ true

AND এর কাজ: true && true ➔ true




৩. রাইড শেয়ারিং ডিসকাউন্ট (Discount Eligibility)

শর্ত: রাত হওয়া যাবে না AND (প্রমো কোড থাকতে হবে OR ইউজার ফার্স্ট টাইম রাইডার হতে হবে)।

let isNight = true;
let hasPromoCode = true;
let isFirstRide = false;

if (!isNight && (hasPromoCode || isFirstRide)) {
    console.log("Discount Applied!");
} else {
    console.log("No Discount Available.");
}


আউটপুট: No Discount Available.

কীভাবে কাজ করছে:

ব্র্যাকেটের ভেতর (OR): (true || false) ➔ true

NOT এর কাজ: !isNight ➔ !true ➔ false (কারণ এখন রাত!)

AND এর কাজ: false && true ➔ false (যেহেতু রাত হয়ে গেছে, তাই ডিসকাউন্ট বাতিল)।



৪. নাইট ক্লাব এন্ট্রি সিষ্টেম (Club Access System)
ব্র্যাকেট ছাড়া উদাহরণ: জাভাস্ক্রিপ্ট কীভাবে ব্র্যাকেট না থাকলেও নিজের নিয়মে হিসাব করে তা দেখানোর জন্য।

শর্ত: ইউজার ব্যান হওয়া যাবে না AND বয়সে প্রাপ্তবয়স্ক হতে হবে, অথবা ইউজার যদি ভিআইপি (VIP) হয়।

let isBanned = false;
let age = 20;
let isVIP = false;

if (!isBanned && age >= 18 || isVIP) {
    console.log("Access Granted!");
} else {
    console.log("Access Denied!");
}

আউটপুট: Access Granted!

প্রেসিডেন্স অনুযায়ী কীভাবে কাজ করছে:

সবার আগে NOT (!): !isBanned ➔ !false ➔ true

এরপর AND (&&): true && (20 >= 18) ➔ true && true ➔ true

সবার শেষে OR (||): true || isVIP ➔ true || false ➔ true





৫. ব্যাংক লোন অনুমোদন (Bank Loan Approval)

শর্ত: খারাপ ক্রেডিট স্কোর থাকা যাবে না AND আয় ৫০,০০০ এর বেশি হতে হবে, অথবা গ্যারান্টর (Guarantor) থাকতে হবে।

let hasBadCreditScore = true;
let monthlyIncome = 60000;
let hasGuarantor = true;

if (!hasBadCreditScore && monthlyIncome > 50000 || hasGuarantor) {
    console.log("Loan Approved!");
} else {
    console.log("Loan Rejected!");
}


আউটপুট: Loan Approved!

প্রেসিডেন্স অনুযায়ী কীভাবে কাজ করছে:

সবার আগে NOT (!): !hasBadCreditScore ➔ !true ➔ false

এরপর AND (&&): false && (60000 > 50000) ➔ false && true ➔ false (খারাপ ক্রেডিট স্কোরের কারণে আয় ভালো হলেও লোন হচ্ছে না)

সবার শেষে OR (||): false || hasGuarantor ➔ false || true ➔ true (গ্যারান্টর থাকায় শেষমেশ লোন পাস হয়ে গেল!)

💡 গোল্ডেন রুল (Golden Rule for Beginners)

কোড লেখার সময় প্রেসিডেন্স বা কাজের ধারাবাহিকতা মুখস্থ না রেখে সবসময় ব্র্যাকেট () ব্যবহার করা বেস্ট প্র্যাকটিস। 

এতে নিজের ইচ্ছামতো লজিক নিয়ন্ত্রণ করা যায় এবং কোড পড়া সহজ হয়।




এবার লজিক্যাল অপারেটরের ২টির মিশ্রণে (Mixed) ২টি করে উদাহরণ

১. ! (NOT) এবং && (AND) এর মিশ্রণ
নিয়ম: শর্তটি মিথ্যা হতে হবে এবং ২য় শর্তটিও সত্য হতে হবে।

উদাহরণ ১: ওয়েবসাইট অফলাইন মেসেজ

let isMaintenanceOn = false;
let isLoggedIn = true;

// মেনটেন্যান্স চলা যাবে না "AND" ইউজারকে লগইন থাকতে হবে
if (!isMaintenanceOn && isLoggedIn) {
    console.log("Welcome to Dashboard!");
} else {
    console.log("Access Denied!");
}

ব্যাখ্যা:

!isMaintenanceOn ➔ !false ➔ true

true && isLoggedIn ➔ true && true ➔ true

আউটপুট: Welcome to Dashboard!




উদাহরণ ২: পাসওয়ার্ড রিসেট

let isAccountBlocked = false;
let hasEmailMatch = true;

// অ্যাকাউন্ট ব্লক থাকা যাবে না "AND" ইমেইল মিলতে হবে
if (!isAccountBlocked && hasEmailMatch) {
    console.log("Reset link sent to your email!");
} else {
    console.log("Cannot send reset link.");
}





২. ! (NOT) এবং || (OR) এর মিশ্রণ
নিয়ম: ১ম শর্তটি না হলেও চলবে অথবা ২য় শর্তটি সত্যি হলেও চলবে।

let isOwnerHome = false;
let isEmergencyButtonPassed = false;

// মালিক বাসায় না থাকলে "OR" এমার্জেন্সি বোতাম টিপলে অ্যালার্ম বাজবে
if (!isOwnerHome || isEmergencyButtonPassed) {
    console.log("ALARM! Security Alert System Activated!");
} else {
    console.log("System Normal.");
}

ব্যাখ্যা: !isOwnerHome ➔ !false ➔ true। যেহেতু OR (||)-এর প্রথম অংশেই true চলে এসেছে, অ্যালার্ম বাজবে।

আউটপুট: ALARM! Security Alert System Activated!




উদাহরণ ২: ফ্রি কোর্স অ্যাক্সেস

let isPaidUser = false;
let isFreeTrialAvailable = true;

// পেইড ইউজার না হলেও "OR" ফ্রি ট্রায়াল থাকলে কোর্স দেখতে পারবে
if (!isPaidUser || isFreeTrialAvailable) {
    console.log("Enjoy your free course preview!");
} else {
    console.log("Please purchase the course.");
}

আউটপুট: Enjoy your free course preview!




৩. && (AND) এবং || (OR) এর মিশ্রণ

নিয়ম (প্রেসিডেন্স): ব্র্যাকেট না থাকলে && (AND) এর কাজ আগে হবে, তারপর || (OR) এর কাজ হবে।

উদাহরণ ১: ট্রাভেল টিকিট বুকিং

let isAdult = true;
let hasNID = true;
let hasPassport = false;

// (প্রাপ্তবয়স্ক হতে হবে AND NID থাকতে হবে) OR পাসপোর্ট থাকতে হবে
if (isAdult && hasNID || hasPassport) {
    console.log("Ticket Issued Successfully!");
} else {
    console.log("Documents Missing.");
}

ব্যাখ্যা:

আগে && এর কাজ: isAdult && hasNID ➔ true && true ➔ true

পরে || এর কাজ: true || hasPassport ➔ true || false ➔ true

আউটপুট: Ticket Issued Successfully!



উদাহরণ ২: গেম আনলক

let level = 10;
let coins = 500;
let isVIPMember = false;

// (লেভেল ১০ হতে হবে AND কয়েন ৫০০ হতে হবে) OR VIP মেম্বার হতে হবে
if (level >= 10 && coins >= 500 || isVIPMember) {
    console.log("New Weapon Unlocked!");
} else {
    console.log("Locked!");
}

আউটপুট: New Weapon Unlocked!





// ৩. Precedence & Logical Operators (!, &&, ||, ??)
let rawAge = "20";
let age = Number(rawAge);
let hasId = true;
let isBlocked = false;
let rawDiscount = 0;
let discount = rawDiscount ?? 5; // 0 null/undefined না, তাই 0-ই থাকবে

// এখানে আগে !isBlocked, তারপর age >= 18, তারপর &&, শেষে ||
if ((!isBlocked && age >= 18 && hasId) || age >= 65) {
  console.log(`Eligible. Discount: ${discount}%`);
} else {
  console.log("Not eligible.");
}




// ৪. Advanced: Guard-style Validation + Edge Case + Ternary (ফাংশন ছাড়া)
let rawWithdraw = "750";
let balance = 2000;
let amount = Number(rawWithdraw);

if (rawWithdraw === "" || rawWithdraw === null || Number.isNaN(amount)) {
  console.log("Error: Valid amount din.");
} else if (!Number.isInteger(amount)) {
  console.log("Error: Shudhu purno sonkha lagbe.");
} else if (amount <= 0) {
  console.log("Error: 0 ba tar kom withdraw hoy na.");
} else if (amount > balance) {
  console.log("Error: Balance porjapto na.");
} else {
  balance -= amount;
  let status = balance < 500 ? "LOW_BALANCE" : "OK";
  console.log(`Success. Remaining: ${balance}, Status: ${status}`);
}




    
(Advanced): Guard Clause, Input Validation ও Ternary/Nullish প্যাটার্ন

বাস্তব কোড বা ব্যাকএন্ডে গভীর if-else নেস্টিং না করে শুরুতেই ভুল বা edge-case আটকে দেওয়া হয়
    
(Guard Clause)। ছোট মানের জন্য Ternary (? :) এবং null/undefined এর জন্য ?? বেশ কাজে লাগে।

function processWithdrawal(rawAmount, currentBalance) {
  let amount = Number(rawAmount);

  // Guard Clauses: আগেভাগেই invalid বা edge-case বাদ দেওয়া হচ্ছে
  if (rawAmount === "" || rawAmount === null || Number.isNaN(amount)) {
    return { ok: false, message: "Invalid amount input." };
  }
  if (amount <= 0) {
    return { ok: false, message: "Amount must be greater than zero." };
  }
  if (amount > currentBalance) {
    return { ok: false, message: "Insufficient balance." };
  }

  let remainingBalance = currentBalance - amount;
  let statusTag = remainingBalance < 500 ? "LOW_BALANCE" : "HEALTHY";

  return {
    ok: true,
    remainingBalance,
    statusTag
  };
}

let userBalance = null ?? 2000;
console.log(processWithdrawal("750", userBalance));
console.log(processWithdrawal("5000", userBalance));
console.log(processWithdrawal("abc", userBalance));
