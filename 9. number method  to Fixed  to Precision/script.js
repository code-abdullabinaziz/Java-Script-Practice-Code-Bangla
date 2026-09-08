JavaScript-এ toFixed() এবং toPrecision() হলো Number অবজেক্টের মেথড, যা সংখ্যা ফরম্যাট (Format) করার জন্য ব্যবহৃত হয়। 
এগুলোর মাধ্যমে দশমিকের পর কয়টি ঘর থাকবে বা মোট কয়টি সংখ্যা থাকবে তা নির্ধারণ করা যায়।


let num = 20.58528;
console.log(num.toFixed(2));
console.log(typeof (num));


toFixed() মেথড মূলত নম্বরকে ডেসিমাল ফিক্স করে স্ট্রিং (String) হিসেবে রিটার্ন করে। :

let x = 9.656;

let res1 = x.toFixed(0);
let res2 = x.toFixed(2);
let res3 = x.toFixed(4);
let res4 = x.toFixed(6);

console.log(res1); // Output: "10"    (কোনো দশমিক থাকবে না, রাউন্ড হয়ে ১০ হয়েছে)
console.log(res2); // Output: "9.66"  (দশমিকের পর ২ ঘর, রাউন্ড হয়েছে)
console.log(res3); // Output: "9.6560" (দশমিকের পর ৪ ঘর পূরণ করতে শেষে ০ যুক্ত হয়েছে)
console.log(res4); // Output: "9.656000" (দশমিকের পর ৬ ঘর পূরণ করতে তিনটি ০ যুক্ত হয়েছে)

// Type check
console.log(typeof res2); // Output: "string"

মুল বিষয়: toFixed() সর্বদা মানটি স্ট্রিং বানিয়ে দেয় এবং প্রয়োজন অনুযায়ী রাউন্ডিং (Rounding) বা শূন্য (0) যোগ করে দশমিকের পরের ঘরগুলো পূরণ করে।





toPrecision() মেথড মূলত একটি সংখ্যার মোট ঘরসংখ্যা (Significant Digits/Total Digits) নির্দিষ্ট করে সংখ্যাটিকে স্ট্রিং (String) হিসেবে রিটার্ন করে।


let num = 20.58528;
console.log(num.toPrecision(3))
console.log(typeof (num));


let x = 9.656;

let res1 = x.toPrecision();
let res2 = x.toPrecision(2);
let res3 = x.toPrecision(4);
let res4 = x.toPrecision(6);

console.log(res1); // Output: "9.656"    (প্যারামিটার না দিলে মূল সংখ্যাটিই স্ট্রিং হয়ে থাকে)
console.log(res2); // Output: "9.7"      (মোট ২ ঘর রেখে রাউন্ড করেছে)
console.log(res3); // Output: "9.656"    (মোট ৪ ঘর পূরণ থাকায় হুবহু ৯.৬৫৬ এসেছে)
console.log(res4); // Output: "9.65600"  (মোট ৬ ঘর পূরণ করতে শেষে দুটি ০ যুক্ত হয়েছে)

// Type check
console.log(typeof res2); // Output: "string"


toFixed() ও toPrecision() এর পার্থক্য:

toFixed(n) ডেসিমালের (দশমিকের) পরের ঘর গণনা করে।

toPrecision(n) দশমিকের আগে ও পরে মিলিয়ে মোট ঘর গণনা করে।




toFixed() মেথডটি মূল ভ্যারিয়েবলকে পরিবর্তন করে না, বরং সেটিকে প্রসেস করে একটি নতুন String (লেখা) রিটার্ন করে।

🔍 কেন মান ও টাইপ আলাদা এলো?
১. num ভ্যারিয়েবলটি অপরিবর্তিত থাকে:

JavaScript-এর সব Primitive Data Type (যেমন: Number, String) হলো Immutable (পরিবর্তন অযোগ্য)।

num.toFixed(3) কল করলেও আসল num ভ্যারিয়েবলের ভেতরের মান (20.1234123) পরিবর্তন হয় না। তাই typeof(num) সবসময় number-ই থাকে।

২. toFixed(3) একটি নতুন String তৈরি করে:

toFixed() মেথডের মূল কাজ হলো দশমিকের পর নির্দিষ্ট ঘর (এখানে ৩ ঘর) পর্যন্ত রেখে সংখ্যাটিকে একটি string-এ রূপান্তর করা।

এটি ফলাফল হিসেবে "20.123" রিটার্ন করে kk ভ্যারিয়েবলে জমা করেছে। তাই typeof(kk) এসেছে string।

let num = 20.1234123; // এটি একটি আসল Number

kk = num.toFixed(3); // এটি তৈরি করল "20.123" (যা একটি String)

console.log(kk);          // "20.123" (দশমিকের পর ৩ ঘর রাখা স্ট্রিং)
console.log(num);         // 20.1234123 (আসল মূল সংখ্যাটি অপরিবর্তিত)

console.log(typeof(kk));   // string (কারণ toFixed স্ট্রিং বানিয়ে দেয়)
console.log(typeof(num));  // number (কারণ আসল ভ্যারিয়েবল পরিবর্তন হয়নি)

🛠️ যদি kk-কে আবার Number বানিয়ে রাখতে চাইলে :
toFixed() ব্যবহার করার পর যদি মানটিকে স্ট্রিং না রেখে আবার number টাইপেই রূপান্তর করতে চাইলে, তবে তার আগে Number() বা + সাইনে বেবহার করা যাবে


let num = 20.1234123;

// + চিহ্ন ব্যবহার করে দ্রুত Number-এ রূপান্তর
let kk = +num.toFixed(3); 

console.log(kk);         // 20.123
console.log(typeof(kk)); // number

'
  

let num = 2023;

kk = num.toString();

console.log(kk);         // Output: "2023"
console.log(num);        // Output: 2023

console.log(typeof(kk));  // Output: string
console.log(typeof(num)); // Output: number


মূল মান ঠিক থাকছে: num.toString() ব্যবহার করলে num ভ্যারিয়েবলের আসল মান (2023) নষ্ট হয় না। সেটি মূল টাইপে (number) অক্ষত থাকে।

নতুন রূপ তৈরি হচ্ছে: toString() মেথডটি 2023-কে টেক্সট বা স্ট্রিংয়ে রূপান্তর করে একটি নতুন মান রিটার্ন করে, যা  kk ভ্যারিয়েবলে রেখে দেওয়া হসছে (যার টাইপ string)।

💡 ব্যাকএন্ড এবং সিকিউরিটিতে এটি কোথায় কাজে লাগে?
ব্যাকএন্ড ডেভেলপমেন্ট বা সিকিউরিটি চেকিংয়ে এই কৌশলটি প্রায়ই ব্যবহার করতে হয়:

OTP বা Phone Number ভ্যালিডেশনে: গণিত করার জন্য সংখ্যাটিকে Number হিসেবে রাখা হয়, কিন্তু দৈর্ঘ্য (Length) চেক করা বা মেসেজে পাঠানোর জন্য toString() দিয়ে স্ট্রিং বানিয়ে নেওয়া হয়।

ID বা Token জেনারেট করতে: ডেটাবেজের নিউমেরিক আইডি বা ইউজার ইনপুট থেকে ডাটা নিয়ে স্ট্রিং কনক্যাটেনেশন (String Concatenation) করার কাজে এটি লাগে।





জাভাস্ক্রিপ্টে toString() মেথডের মূল কাজ হলো কোনো ডেটা టైপকে (Number, Boolean, Array, Object) স্ট্রিং (Text)-এ রূপান্তর করা।

দৈনন্দিন কোডিং থেকে শুরু করে বড় প্রজেক্টের লজিক তৈরিতে toString() মেথডের কিছু বিশেষ ও প্রয়োজনীয় ব্যবহার নিচে দেওয়া হলো:

let num = 20;
num = num.toString();
console.log(num);
console.log(typeof (num));


যেকোনো সংখ্যা বা বুলিয়ান মানকে টেক্সট বা স্ট্রিং বানাতে এটি সবচেয়ে বেশি ব্যবহৃত হয়।

let age = 25;
let strAge = age.toString(); 

console.log(strAge);        // Output: "25"
console.log(typeof strAge); // Output: "string"

let isLoggedIn = true;
console.log(isLoggedIn.toString()); // Output: "true"

সংখ্যাকে অন্য Base-এ রূপান্তর (Advanced & Future Use)
toString()-এর একটি বিশেষ ক্ষমতা আছে—এর ভেতরে Radix / Base (2 থেকে 36) পাস করে সংখ্যাকে বাইনারি, অক্টাল বা হেক্সাডেসিমালে বদলে ফেলা যায়।

let num = 255;

// ১. বাইনারি (Binary - Base 2) তে রূপান্তর
console.log(num.toString(2));  // Output: "11111111"

// ২. হেক্সাডেসিমাল (Hexadecimal - Base 16) তে রূপান্তর (যেমন: Color Code)
console.log(num.toString(16)); // Output: "ff"

// ৩. অক্টাল (Octal - Base 8)
console.log(num.toString(8));  // Output: "377"


অ্যারে (Array) থেকে কমা-যুক্ত স্ট্রিং তৈরি
একটি অ্যারেকে সহজে কমা দিয়ে আলাদা করা টেক্সটে পরিণত করতে toString() ব্যবহার করা হয়।

let skills = ["JavaScript", "HTML", "CSS"];
let result = skills.toString();

console.log(result); // Output: "JavaScript,HTML,CSS"



গুরুত্বপূর্ণ সতর্কতা: Null এবং Undefined
toString() ব্যবহার করার সময় সরাসরি null বা undefined-এর ওপর মেথডটি কল করলে TypeError দেখায়।


let user = null;
// user.toString(); // ❌ Uncaught TypeError

// সমাধান: নিরাপদ থাকতে গ্লোবাল String() ব্যবহার করতে পারেন
console.log(String(user)); // Output: "null" (এরর দেবে না)


প্রফেশনাল টিপ: Literal Number-এর ক্ষেত্রে ব্যবহার
কোনো সংখ্যা সরাসরি ভ্যারিয়েবলে না রেখে যদি নম্বর লিটারেল দিয়ে ব্যবহার করতে চান, তবে দুটি ডট (..) বা ব্র্যাকেট ব্যবহার করতে হয়,
কারণ একক ডটকে জাভাস্ক্রিপ্ট দশমিক (Decimal Point) ভেবে নেয়:

// console.log(25.toString());   // ❌ SyntaxError
console.log((25).toString());    // Output: "25" (সঠিক)
console.log(25..toString());     // Output: "25" (সঠিক)





জাভাস্ক্রিপ্টে parseInt() এবং parseFloat() হলো স্ট্রিংকে (string) সংখ্যায় রূপান্তর করার ফাংশন parseInt() স্ট্রিং থেকে পূর্ণসংখ্যা (integer) তৈরি করে
আর parseFloat() দশমিক সংখ্যাসহ (floating-point) মান তৈরি করে [৫]। যেমন, parseInt("10.5") দিলে ১০ হয়, কিন্তু parseFloat("10.5") দিলে ১০.৫ হয় 


parseInt() হলো জাভাস্ক্রিপ্টের একটি অন্যতম বহুল ব্যবহৃত গ্লোবাল ফাংশন। এর মূল কাজ হলো—কোনো স্ট্রিং (Text) 
থেকে পূর্ণসংখ্যা (Integer) খুঁজে বের করে তা Number টাইপে রূপান্তর (Parse) করা।

এটি কীভাবে কাজ করে?
স্ট্রিংয়ের শুরু থেকে পড়া শুরু করে এবং প্রথম থেকে যতগুলো ডিজিটাল সংখ্যা পায়, সেগুলোকে পূর্ণসংখ্যা হিসেবে কেটে নেয়।

যদি স্ট্রিংয়ের শুরুতেই কোনো বর্ণ বা অকার্যকর চরিত্র থাকে, তবে এটি NaN (Not-a-Number) রিটার্ন করে।

এটি দশমিকের পরের অংশ বাদ দিয়ে দেয় (কোনো রাউন্ডিং করে না, শুধু কেটে ফেলে)।

parseInt(string, radix)

string: যে টেক্সটটিকে পূর্ণসংখ্যায় রূপান্তর করতে চান।

radix (প্রস্তাবিত/ঐচ্ছিক): সংখ্যাটি কোন বেসের (যেমন: Base 10 বা ডেসিমাল, Base 2 বা বাইনারি)। আধুনিক জাভাস্ক্রিপ্টে ১০ ভিত্তিক হিসাবের জন্য 10 লিখে দেওয়া সবচেয়ে ভালো অভ্যাস (Best Practice)।

console.log(parseInt("100"));       // Output: 100
console.log(parseInt("45.89"));     // Output: 45 (দশমিক বাদ দিয়ে দেয়)
console.log(parseInt("200px"));     // Output: 200 (শুরুর সংখ্যাটুকু বের করে নেয়)
console.log(parseInt("  50  "));    // Output: 50 (আশেপাশের স্পেস ইগনোর করে)

// শুরুতে সংখ্যা না থাকলে
console.log(parseInt("abc100"));    // Output: NaN

let num = "20";
num = parseInt(num);
console.log(num);
console.log(typeof (num));



let num = "2028";   // এটি একটি String (কারণ কোটেশন আছে)

let kk = parseInt(num); // parseInt স্ট্রিং থেকে নতুন Number বানিয়ে kk-তে রাখল

console.log(kk);          // 2028
console.log(num);         // "2028"

console.log(typeof(kk));   // number (কারণ parseInt সংখ্যা বানিয়ে দিয়েছে)
console.log(typeof(num));  // string (কারণ আসল ভ্যারিয়েবল বদলায়নি)

একটি number এবং অপরটি string হওয়ার কারণ হলো—parseInt() মেথডটি মূল ভ্যারিয়েবল num-কে পরিবর্তন করে না,
বরং সেটির মান থেকে একটি নতুন সংখ্যা (Integer) তৈরি করে kk ভ্যারিয়েবলে বসিয়ে দেয়।


🔍 কেন একটি number এবং অন্যটি string?
১. num ভ্যারিয়েবলটি অপরিবর্তিত থাকে:
শুরুতেই num = "2028" লিখেছেন (ইনভার্টেড কমা "" থাকার কারণে এটি একটি string)।

parseInt(num) মেথডটি শুধু num-এর ভেতরের লেখাটি পড়ে নেয়, কিন্তু মূল num ভ্যারিয়েবলকে বদলে ফেলে না। তাই typeof(num) সবসময় string-ই থেকে যায়।

২. parseInt() একটি নতুন সংখ্যা তৈরি করে:

parseInt("2028") স্ট্রিংটিকে গাণিতিক সংখ্যায় কনভার্ট করে পূর্ণসংখ্যা 2028 বানিয়ে দেয়।

এই নতুন সংখ্যাটি kk ভ্যারিয়েবলে গিয়ে জমা হয়। তাই typeof(kk) এসেছে number।





CSS থেকে মান নিয়ে জাভাস্ক্রিপ্টে হিসাব-নিকাশ করা
ওয়েব ডেভেলপমেন্টে CSS DOM-এর কোনো এলিমেন্টের উইডথ বা হাইট থেকে "300px" বা "15em"-এর মতো স্ট্রিং ভ্যালু পাওয়া যায়।
এগুলোকে সংখ্যায় রূপান্তর করে যোগ-বিয়োগ করতে parseInt() ব্যবহৃত হয়:


function calculateNewWidth(currentWidthString, addPixels) {
  // "300px" থেকে শুধু 300 সংখ্যাটি কেটে নেওয়া হচ্ছে
  let currentWidth = parseInt(currentWidthString, 10);

  if (Number.isNaN(currentWidth)) {
    return "Invalid width format!";
  }

  let newWidth = currentWidth + addPixels;
  return newWidth + "px";
}

// ১. সঠিক ইনপুট
console.log(calculateNewWidth("300px", 50)); 
// Output: "350px"

// ২. ভুল স্ট্রিং দিলে
console.log(calculateNewWidth("auto", 50)); 
// Output: "Invalid width format!"


HTML Form Input (যেমন: বয়স বা সাল) সংখ্যায় রূপান্তর করা
ইউজার যখন HTML ফর্মের ইনপুট ফিল্ডে কিছু টাইপ করে, জাভাস্ক্রিপ্ট তা সর্বদা স্ট্রিং হিসেবে গ্রহণ করে। যেমন: "1998"। জন্মসাল থেকে বয়স বের করতে এটিকে নম্বরে রূপান্তর করা জরুরি:


function calculateAge(birthYearInput) {
  // ইনপুট স্ট্রিংকে ইন্টারজারে পার্স করা হচ্ছে
  let birthYear = parseInt(birthYearInput, 10);
  let currentYear = 2026;

  // ইনপুট ভ্যালিডেশন
  if (Number.isNaN(birthYear) || birthYear > currentYear) {
    return "Please enter a valid birth year.";
  }

  let age = currentYear - birthYear;
  return "Your age is: " + age + " years.";
}

console.log(calculateAge("2001")); 
// Output: "Your age is: 25 years."



parseFloat() হলো জাভাস্ক্রিপ্টের একটি গ্লোবাল ফাংশন। এর কাজ হলো—কোনো স্ট্রিং (Text) থেকে দশমিকসহ সংখ্যা (Floating-point number) খুঁজে বের করে তা Number টাইপে রূপান্তর করা।

কীভাবে কাজ করে?
এটি স্ট্রিংয়ের শুরু থেকে পড়া শুরু করে এবং প্রথম দশমিক সংখ্যা বা ভগ্নাংশটুকু কেটে নেয়।

এটি স্ট্রিংয়ের ভেতর প্রথম দশমিক বিন্দুটি (.) গ্রহণ করে, কিন্তু দ্বিতীয় কোনো দশমিক পেলে বা অন্য কোনো টেক্সট পেলে পড়া বন্ধ করে দেয়।

যদি স্ট্রিংয়ের শুরুতেই কোনো অক্ষর বা অকার্যকর চিহ্ন থাকে, তবে এটি NaN রিটার্ন করে।

let num = "20.5";
num = parseFloat(num);
console.log(num);
console.log(typeof (num));


console.log(parseFloat("10.50"));     // Output: 10.5
console.log(parseFloat("45.89px"));   // Output: 45.89 (সংখ্যার পরের টেক্সট বাদ দেয়)
console.log(parseFloat("3.14.15"));   // Output: 3.14 (দ্বিতীয় ডটের পর থেকে বাদ দেয়)
console.log(parseFloat("  99.9  "));  // Output: 99.9 (স্পেস ইগনোর করে)

// শুরুতে সংখ্যা না থাকলে
console.log(parseFloat("price 10.5"));// Output: NaN



console.log(parseFloat("10.50")); // 10.5 (কারণ এটি এখন আসল Number)
console.log(parseFloat("10.5000")); // 10.5 (সব শেষের শূন্য বাদ পড়ে যাবে)
50 না এসে 5 আসার কারণ হলো—গণিতের নিয়মে দশমিকের একদম শেষে থাকা শূন্যের (Trailing Zero) কোনো আলাদা মান বা অস্তিত্ব থাকে না।
JavaScript যখন "10.50" স্ট্রিংটিকে একটি আসল গাণিতিক সংখ্যায় (Number) রূপান্তর করে, 
তখন সে অপ্রয়োজনীয় শূন্যটি ফেলে দেয়।নিচে বিষয়টি সহজে ভেঙে দেওয়া হলো:
🔍 ১. গাণিতিক মান ও লেখার পার্থক্যস্ট্রিং রূপ (Text): "10.50"—এটি স্রেফ একটি লেখা বা অক্ষর।
তাই এখানে শূন্যটি দেখা যাচ্ছিল।সংখ্যা রূপ (Number): 10.50 আর 10.5 গণিতের হিসেবে সম্পূর্ণ একই জিনিস। 
কম্পিউটার মেমরিতে সংখ্যা হিসেবে জমা রাখার সময় দশমিকের পরের বাড়তি শূন্য ধরে রাখে না।যেমন: গণিতে 10.50 টাকা আর 10.5 টাকা বলা একই কথা।




ইকমার্স সাইটের কার্ট বা ট্যাক্স হিসাব (Currency & Decimal Values)
ওয়েবসাইটে প্রোডাক্টের দাম বা ট্যাক্স প্রায়ই "12.99 BDT" বা "5.5%" হিসেবে টেক্সট আকারে থাকে। দশমিক অক্ষুণ্ণ রেখে এগুলো যোগ-বিয়োগ করতে parseFloat() ব্যবহার করা হয়:

function calculateTotalWithTax(priceString, taxRateString) {
  // স্ট্রিং থেকে দশমিক সংখ্যা বের করা হচ্ছে
  let price = parseFloat(priceString);
  let taxRate = parseFloat(taxRateString);

  if (Number.isNaN(price) || Number.isNaN(taxRate)) {
    return "Invalid price or tax rate!";
  }

  let taxAmount = price * (taxRate / 100);
  let totalPrice = price + taxAmount;

  return "Total: " + totalPrice.toFixed(2) + " BDT";
}

// ১. সঠিক ইনপুট
console.log(calculateTotalWithTax("99.99 BDT", "7.5%")); 
// Output: "Total: 107.49 BDT"

// ২. ভুল ইনপুট
console.log(calculateTotalWithTax("Free", "5%")); 
// Output: "Invalid price or tax rate!"


জিওলোকেশন (GPS Latitude & Longitude) ফিল্টার করা
ম্যাপে ইউজার থেকে পাওয়া অক্ষাংশ (Latitude) এবং দ্রাঘিমাংশ (Longitude) সর্বদা দশমিক সংখ্যা হয় 
এবং অনেক সময় এগুলো স্ট্রিং আকারে পাঠায় (যেমন: "25.7439")। এগুলোকে নিখুঁত সংখ্যায় রূপান্তর করতে এটি লাগে:

function processCoordinates(latInput, lngInput) {
  let lat = parseFloat(latInput);
  let lng = parseFloat(lngInput);

  // কোঅর্ডিনেট সঠিক দশমিক সংখ্যা কি না তা যাচাই
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    return "Invalid map coordinates!";
  }

  return "Location set to: " + lat + ", " + lng;
}

console.log(processCoordinates("25.7439 N", "89.2752 E")); 
// Output: "Location set to: 25.7439, 89.2752"




// number method 
console.log(Number("12"));

console.log(Number("12.5"));

console.log(Number(true));
console.log(Number(false));




The Number.isFinite() Method

Number.isFinite() হলো JavaScript-এর একটি বিল্ট-ইন মেথড। এর কাজ হলো চেক করা যে কোনো মান (value) একটি সঠিক এবং সীমিত সংখ্যা (Finite Number) কি না।

এটি পরীক্ষা করে দেখে সংখ্যাটি কি একটি নির্দিষ্ট মান সম্পন্ন বৈধ সংখ্যা (Finite Number) নাকি অসীম (Infinite/NaN)।

কাজ: সংখ্যাটি যদি Infinity, -Infinity, বা NaN (Not a Number) না হয়, তবে true দেবে।

দশমিক ও পূর্ণসংখ্যা উভয় ক্ষেত্রেই: এটি দশমিক (100.55) এবং পূর্ণসংখ্যা (100)—দুটোকেই true বলবে, কারণ দুটোই সসীম (Finite) সংখ্যা।

Number.isFinite() অবজেক্ট বা অ্যারেতে কাজ করে না—এগুলোতে দিলে সবসময় false আসে।

মূলত Number (সংখ্যা) টাইপ ছাড়া আর কোনো ডাটা টাইপেই Number.isFinite() কাজ করে না (সবক্ষেত্রেই false দেয়)।



এটি কীভাবে কাজ করে?
মেথডটি মূলত দুটি শর্ত পরীক্ষা করে:
১. মানটি আসলেই Number টাইপ কি না।

২. মানটি NaN, Infinity, বা -Infinity কি না।

মানটি কি সরাসরি নম্বর (Number) টাইপ? (নম্বর না হয়ে টেক্সট বা অন্য কিছু হলে সরাসরি রিজেক্ট করে দেবে)।

সংখ্যাটি কি অসীম (Infinity) বা অকার্যকর (NaN)? (এগুলো হলেও রিজেক্ট করবে)।

এই দুটি শর্ত পার হলেই কেবল সে true বলবে, না হলে false।

যদি মানটি Number টাইপের হয় এবং এটি সসীম (Finite) সংখ্যা হয়, তবেই এটি true দেয়। কোনো প্রকার টাইপ কনভার্সন (Type Coercion) করে না।

📌১. সসীম (Finite)অর্থ: যার নির্দিষ্ট শুরু এবং শেষ আছে; যা গণনা করে বা মেপে শেষ করা যায়।বাস্তব উদাহরণ: হাতের আঙুলের সংখ্যা (১০টি), 
একটি বইয়ের পাতার সংখ্যা (২০০টি), বা ২৪ ঘণ্টার একদিন।
প্রোগ্রামিং উদাহরণ: 100, 5.5, -50 ইত্যাদি হলো Finite Numbers (সসীম সংখ্যা)। কারণ এগুলোর নির্দিষ্ট একটি মান আছে।
📌 ২. অসীম (Infinite)অর্থ: যার কোনো শেষ বা সীমানা নেই; যা কখনো গণনা করে শেষ করা যায় না (যা চিরকাল চলতেই থাকে)।বাস্তব উদাহরণ: 
মহাবিশ্বের ব্যাপ্তি, আকাশের তারার সংখ্যা, বা স্বাভাবিক সংখ্যার গণনা (1, 2, 3, 4, 5... এটি চলতেই থাকবে, কখনো শেষ হবে না)
।প্রোগ্রামিং উদাহরণ: যেকোনো সংখ্যাকে শূন্য (0) দিয়ে ভাগ করলে তার ফলাফল হয় অসীম।জাভাস্ক্রিপ্টে একে Infinity বলা হয় (যেমন: 1 / 0 = Infinity)।

Number.isFinite() দিয়ে অক্ষরের দৈর্ঘ্য গণনা করা হয় না—এটি দিয়ে মানটি কোনো বৈজ্ঞানিক/গাণিতিক সসীম সংখ্যা (Finite Number) কি না তা চেক করা হয়।

let text = "Bangladesh";
let result = Number.isFinite(text);

console.log(result); // Output: false

🔍 কেন false এলো?
Number.isFinite()-এর কাজ: এটি চেক করে ইনপুটটির ডাটা টাইপ Number (সংখ্যা) কি না এবং সেই সংখ্যাটি সসীম কি না।

text একটি স্ট্রিং: "Bangladesh" কোনো সংখ্যা (Number) নয়, এটি একটি Text/String Data।

টাইপ ভিন্ন হওয়ায়: যেহেতু ইনপুটটি সংখ্যাই নয়, তাই Number.isFinite() সরাসরি false রিটার্ন করে।

অক্ষরের সংখ্যা গোনার জন্য .length ব্যবহার করতে হয়:

let text = "Bangladesh";

// ১. অক্ষরের সংখ্যা (Length) কত বের করা
let len = text.length; // 10

// ২. এখন 'len' (10) একটি সসীম সংখ্যা কি না চেক করা
let result = Number.isFinite(len);

console.log(result); // Output: true (কারণ 10 একটি সসীম সংখ্যা)

📝 মূল পার্থক্য (সংক্ষেপে):
"Bangladesh" ➔ এটি একটি String। তাই Number.isFinite("Bangladesh") হবে false (কারণ এটি কোনো সংখ্যা নয়)।

10 (Bangladesh-এর দৈর্ঘ্য) ➔ এটি একটি Number। তাই Number.isFinite(10) হবে true (কারণ ১০ একটি সসীম সংখ্যা)।



// সসীম (Finite) - নির্দিষ্ট মান আছে
console.log(isFinite(500)); 
// Output: true (কারণ ৫০০ একটি সসীম সংখ্যা)

// অসীম (Infinite) - কোনো সীমা নেই
console.log(isFinite(1 / 0)); 
// Output: false (কারণ ১ কে ০ দিয়ে ভাগ করলে মান অসীম বা Infinity হয়ে যায়)




let res1 = Number.isFinite(100);       // true (সাধারণ সংখ্যা)
let res2 = Number.isFinite(0);         // true
let res3 = Number.isFinite(2.5);       // true (দশমিক সংখ্যা)

let res4 = Number.isFinite(Infinity);  // false (অসীম)
let res5 = Number.isFinite(-Infinity); // false
let res6 = Number.isFinite(NaN);       // false (Not a Number)

// Type Coercion করে না
let res7 = Number.isFinite("100");     // false (কারণ এটি String, Number নয়)
let res8 = Number.isFinite(true);      // false (কারণ এটি Boolean)


Number.isFinite() মেথডে নাম্বার (Number) টাইপ ছাড়া অন্য যেকোনো ডাটা টাইপ দিলে সবসময় false আসবে।

কারণ Number.isFinite() কোনো টাইপ রূপান্তর (Type Conversion) করে না। এটি অত্যন্ত কঠোরভাবে দুটি জিনিস চেক করে:

মানটিকে অবশ্যই Number টাইপ হতে হবে।

সেই নাম্বারটিকে সসীম (Finite) হতে হবে (অর্থাৎ Infinity, -Infinity, বা NaN হওয়া যাবে না)।


// ১. শুধু সসীম সংখ্যার ক্ষেত্রে true

Number.isFinite(100);       // true (পূর্ণসংখ্যা)
Number.isFinite(-45.5);     // true (ঋণাত্মক দশমিক)
Number.isFinite(0);         // true
Number.isFinite(Math.PI);   // true (3.14159...)



// ২. নাম্বার টাইপ কিন্তু অসীম/অবৈধ সংখ্যা (false)
console.log(Number.isFinite(Infinity));   // false
console.log(Number.isFinite(NaN));        // false

// ❌ ৩. নাম্বার ছাড়া বাকি সব ডাটা টাইপ (সবসময় false)
console.log(Number.isFinite("100"));      // false (String)
console.log(Number.isFinite("Bangladesh"));// false (String)
console.log(Number.isFinite(true));       // false (Boolean)
console.log(Number.isFinite(null));       // false (Null)
console.log(Number.isFinite(undefined));  // false (Undefined)
console.log(Number.isFinite([1, 2]));     // false (Array)
console.log(Number.isFinite({a: 1}));     // false (Object)




function calculateTotal(price, quantity) {
  let total = price * quantity;

  // দাম এবং মোট হিসাব দুটোই ভ্যালিড কি না চেক করা হচ্ছে
  if (Number.isFinite(price) && Number.isFinite(total)) {
    return "Total Price: " + total + " BDT";
  } else {
    return "Invalid input! Please enter a valid number.";
  }
}

// ১. সঠিক ইনপুট (Valid Numbers)
console.log(calculateTotal(500, 3)); 
// Output: "Total Price: 1500 BDT"

// ২. স্ট্রিং ইনপুট দেওয়া হলে (String Input)
console.log(calculateTotal("500", 3)); 
// Output: "Invalid input! Please enter a valid number."

// ৩. অসীম ইনপুট দেওয়া হলে (Infinity Input)
console.log(calculateTotal(Infinity, 2)); 
// Output: "Invalid input! Please enter a valid number."



গ্লোবাল isFinite() আর Number.isFinite() এর পার্থক্য

এই দুটি নিয়ে অনেকে প্যাঁচ লাগিয়ে ফেলে, তাই পার্থক্যটি ভালোভাবে জেনে রাখা দরকার:

গ্লোবাল isFinite("50"): এটি একটু দয়ালু। সে দেখে সামনে "50" টেক্সট আছে, সে একে জোর করে নম্বর 50 বানিয়ে নিয়ে true বানিয়ে দেয়।

Number.isFinite("50"): এটি খুব কড়া। সে দেখে এটি নম্বর নয় বরং স্ট্রিং/টেক্সট, তাই সে একে কোনো সুযোগ না দিয়ে সরাসরি false বলে দেয়।


// Global isFinite() - স্ট্রিংকে নম্বরে কনভার্ট করার চেষ্টা করে
console.log(isFinite("100"));        // true (কারণ "100" কে সংখ্যা 100 এ বদলে নেয়)

// Number.isFinite() - কঠোরভাবে টাইপ চেক করে (Strict Check)
console.log(Number.isFinite("100")); // false (কোনো কনভার্সন করে না)



🧪 কোন কোন ক্ষেত্রে isFinite() কাজ করে (true দেয়)?


// ১. স্ট্রিং সংখ্যা (Numeric Strings)
console.log(isFinite("100"));       // true (কারণ "100" -> 100)
console.log(isFinite("12.34"));     // true (কারণ "12.34" -> 12.34)

// ২. বুলিয়ান মান (Booleans)
console.log(isFinite(true));        // true (কারণ true -> 1)
console.log(isFinite(false));       // true (কারণ false -> 0)

// ৩. খালি মান বা খালি স্ট্রিং (Null & Empty String)
console.log(isFinite(null));        // true (কারণ null -> 0)
console.log(isFinite(""));          // true (কারণ "" -> 0)

// ৪. খালি অ্যারে (Empty Array)
console.log(isFinite([]));          // true (কারণ [] -> 0)
console.log(isFinite([5]));         // true (কারণ [5] -> 5)


❌ কোন কোন ক্ষেত্রে false দেয়?

// ১. সাধারণ টেক্সট (অক্ষরযুক্ত স্ট্রিং)
console.log(isFinite("Bangladesh")); // false (কারণ এটি NaN এ রূপান্তর হয়)

// ২. Undefined
console.log(isFinite(undefined));    // false (কারণ undefined -> NaN)

// ৩. একের অধিক উপাদানযুক্ত অ্যারে বা অবজেক্ট
console.log(isFinite([1, 2]));       // false (কারণ [1,2] -> NaN)
console.log(isFinite({ key: 100 })); // false (কারণ Object -> NaN)

// ৪. অসীম সংখ্যা বা সরাসরি NaN
console.log(isFinite(Infinity));     // false
console.log(isFinite(NaN));          // false

  


১. গড় বা রেটিং হিসাব করা (Division by Zero ঠেকানো)

অনেক সময় ওয়েবসাইটের রেটিং বের করতে গিয়ে শূন্য (0) দিয়ে ভাগ করার ঘটনা ঘটে, 
  যার ফলে জাভাস্ক্রিপ্ট Infinity আউটপুট দেয়। এটি ঠেকাতে Number.isFinite() দারুণ কাজ করে।


function calculateAverage(totalStars, totalReviews) {
  let average = totalStars / totalReviews;

  // totalReviews যদি 0 হয়, তবে average হবে Infinity। তাই এখানে চেক করা হচ্ছে:
  if (Number.isFinite(average)) {
    return "Average Rating: " + average.toFixed(1);
  } else {
    return "No reviews yet or invalid data.";
  }
}

// ১. সাধারণ হিসাব
console.log(calculateAverage(45, 10)); 
// Output: "Average Rating: 4.5"

// ২. শূন্য দিয়ে ভাগ হলে (Infinity)
console.log(calculateAverage(0, 0)); 
// Output: "No reviews yet or invalid data."





২. ব্যাংকিং বা পেমেন্ট সিস্টেমে টাকার পরিমাণ যাচাই করা

ইউজার যখন টাকা উইথড্র (Withdraw) বা পেমেন্ট করতে যায়, তখন হ্যাকাররা বা ভুলবশত ইউজাররা টেক্সট (String) বা ফাঁকা ডেটা পাঠাতে পারে। 
টাকা কাটার আগে ইনপুটটি একদম নিখুঁত সংখ্যা কি না, তা যাচাই করতে এটি ব্যবহার করা যায়।


function processWithdrawal(balance, withdrawAmount) {
  // ইউজার সঠিক সংখ্যার অ্যামাউন্ট দিয়েছে কি না তা চেক করা হচ্ছে
  if (!Number.isFinite(withdrawAmount)) {
    return "Transaction failed! Please enter a valid amount.";
  }

  if (withdrawAmount > balance) {
    return "Insufficient balance!";
  }

  let newBalance = balance - withdrawAmount;
  return "Withdrawal successful. New Balance: " + newBalance + " BDT";
}

// ১. সঠিক ইনপুট
console.log(processWithdrawal(5000, 1000)); 
// Output: "Withdrawal successful. New Balance: 4000 BDT"

// ২. স্ট্রিং ইনপুট দেওয়া হলে
console.log(processWithdrawal(5000, "1000")); 
// Output: "Transaction failed! Please enter a valid amount."

// ৩. ভুল ডেটা বা ফাঁকা থাকলে (যেমন null বা undefined পাঠালে)
console.log(processWithdrawal(5000, undefined)); 
// Output: "Transaction failed! Please enter a valid amount."






The Number.isInteger() Method

Number.isInteger() হলো জাভাস্ক্রিপ্টের একটি বিল্ট-ইন মেথড, যা দিয়ে পরীক্ষা করা হয় কোনো মান পূর্ণসংখ্যা (Integer) কি না।

এটি ইনপুট যাচাই করে কেবল true অথবা false রিটার্ন করে।

এটি কীভাবে কাজ করে?
মেথডটি মূলত ২টি জিনিস নিশ্চিত করে:
১. ইনপুটটি সরাসরি Number টাইপ কি না (স্ট্রিং হলে কোনো কনভার্সন করে না, সরাসরি false দেয়)।
২. সংখ্যাটিতে কোনো দশমিক অংশ (Decimal/Fraction) নেই এবং এটি অসীম (Infinity) বা অকার্যকর (NaN) নয়।


// Integer হলে -> true
console.log(Number.isInteger(10));      // true
console.log(Number.isInteger(-5));      // true
console.log(Number.isInteger(0));       // true
console.log(Number.isInteger(10.0));    // true (কারণ ১০.০ আর ১০ একই কথা)

// Integer না হলে -> false
console.log(Number.isInteger(10.5));    // false (দশমিক সংখ্যা)
console.log(Number.isInteger("10"));    // false (কারণ এটি String, Number নয়)
console.log(Number.isInteger(NaN));     // false
console.log(Number.isInteger(Infinity));// false


ইকমার্স সাইটে কোয়ান্টিটি (Quantity) ভ্যালিডেশন
অনলাইন শপিং সাইটে ইউজার প্রোডাক্টের সংখ্যা (Quantity) কখনোই দশমিক (যেমন: ১.৫ টি শার্ট) বা টেক্সট দিতে পারবে না। এটি হ্যান্ডেল করার কোড:


function addToCart(productId, quantity) {
  // কোয়ান্টিটি অবশ্যই পূর্ণসংখ্যা এবং অন্তত ১ হতে হবে
  if (!Number.isInteger(quantity) || quantity <= 0) {
    return "Invalid quantity! Please enter a whole number.";
  }

  return "Added " + quantity + " item(s) to cart.";
}

// ১. সঠিক ইনপুট
console.log(addToCart(101, 3)); 
// Output: "Added 3 item(s) to cart."

// ২. দশমিক দিলে (ভুল)
console.log(addToCart(101, 2.5)); 
// Output: "Invalid quantity! Please enter a whole number."

// ৩. স্ট্রিং ইনপুট দিলে (ভুল)
console.log(addToCart(101, "4")); 
// Output: "Invalid quantity! Please enter a whole number."



পেজিনেশন (Pagination) পেজ নম্বর চেক করা
ব্লগ বা ইকমার্স ওয়েবসাইটের নিচে ১, ২, ৩ নম্বর পেজ থাকে। URL থেকে যদি কেউ ভুলবশত বা অনিচ্ছাকৃতভাবে page=2.5 পাঠায়, তবে তা ফিল্টার করার কোড:


function loadPageData(pageNumber) {
  // পেজ নম্বর পূর্ণসংখ্যা কি না তা চেক করা হচ্ছে
  if (!Number.isInteger(pageNumber) || pageNumber < 1) {
    return "Page not found! Redirecting to home...";
  }

  return "Fetching data for Page " + pageNumber + "...";
}

// ১. ভ্যালিড পেজ
console.log(loadPageData(2)); 
// Output: "Fetching data for Page 2..."

// ২. ইনভ্যালিড পেজ
console.log(loadPageData(1.8)); 
// Output: "Page not found! Redirecting to home..."



ছাত্র-ছাত্রীদের জন্য গ্রেড পয়েন্ট বা মার্কস এন্ট্রি সিস্টেম
শিক্ষকদের নম্বর এন্ট্রি প্যানেলে কিছু ক্ষেত্রে পূর্ণসংখ্যা ছাড়া দশমিক বা ইনভ্যালিড ডেটা সাবমিট করা আটকানো প্রয়োজন হয় (যেমন: উপস্থিতি নম্বর বা মোট ক্লাস সংখ্যা নির্ধারণের সময়):


function submitClassAttendance(studentName, totalDaysAttended) {
  // উপস্থিতির দিনসংখ্যা অবশ্যই একটি ধনাত্মক পূর্ণসংখ্যা হতে হবে
  if (!Number.isInteger(totalDaysAttended) || totalDaysAttended < 0) {
    return "Error: Attendance days must be a valid whole number!";
  }

  return "Attendance updated for " + studentName + ": " + totalDaysAttended + " days.";
}

// ১. সঠিক ইনপুট
console.log(submitClassAttendance("Mohammad", 22)); 
// Output: "Attendance updated for Mohammad: 22 days."

// ২. ভুল ইনপুট (দশমিক দিলে)
console.log(submitClassAttendance("Mohammad", 22.5)); 
// Output: "Error: Attendance days must be a valid whole number!"


লুপ (Loop) বা অ্যারে ইনডেক্স নিরাপদ রাখা
জাভাস্ক্রিপ্টে অ্যারের ইনডেক্স সর্বদা 0, 1, 2 এর মতো পূর্ণসংখ্যা হয়। ভুলে কোনো ফ্লোটিং সংখ্যা (2.4) 
দিয়ে ইনডেক্স বা লুপিংয়ের চেষ্টা করলে প্রোগ্রাম ক্র্যাশ বা undefined রিটার্ন করা আটকানোর জন্য এটি ব্যবহার করা হয়:

function getStudentByIndex(studentsArray, index) {
  // ইনডেক্সটি পূর্ণসংখ্যা এবং অ্যারের সীমার মধ্যে কি না চেক করা হচ্ছে
  if (!Number.isInteger(index) || index < 0 || index >= studentsArray.length) {
    return "Invalid Index! Cannot fetch data.";
  }

  return "Student: " + studentsArray[index];
}

let students = ["Sakib", "Tamim", "Rahim"];

// ১. সঠিক ইনডেক্স
console.log(getStudentByIndex(students, 1)); 
// Output: "Student: Tamim"

// ২. ভুল ইনডেক্স (দশমিক দিলে)
console.log(getStudentByIndex(students, 1.5)); 
// Output: "Invalid Index! Cannot fetch data."

কোয়ান্টিটি (প্রোডাক্ট সংখ্যা)

পেজ নম্বর (Pagination)

দিন/উপস্থিতি/বয়সের সংখ্যা

অ্যারের ইনডেক্স বা পজিশন

এই ৪টি ক্ষেত্রে ভ্যালিডেশন বসানোর সময় চোখ বন্ধ করে Number.isInteger()





Number.isNaN() 

Number.isNaN() হলো জাভাস্ক্রিপ্টের একটি মেথড, যা দিয়ে নিখুঁতভাবে পরীক্ষা করা হয় কোনো মানের টাইপ ও ভ্যালু সত্যিই NaN (Not a Number) কি না।
জাভাস্ক্রিপ্টে এমন কিছু গাণিতিক ভুল অপারেশন আছে, যার কোনো সঠিক গাণিতিক ফলাফল হয় না। তখন জাভাস্ক্রিপ্ট ফলাফল হিসেবে NaN দেয়।

এটি কেবল true অথবা false রিটার্ন করে।

📌 Number.isNaN() কীভাবে কাজ করে?
  
এটি মেথড হিসেবে ২টি শর্ত কঠোরভাবে পরীক্ষা করে:

ইনপুটটির ডাটা টাইপ Number হতে হবে।

এবং সেটির প্রকৃত মান NaN হতে হবে।

এই ২টি শর্ত একসঙ্গে পূরণ হলেই কেবল এটি true রিটার্ন করে, অন্যথায় false দেয়।

যদি মানটি সরাসরি NaN হয়, কেবল তখনই এটি true দেবে। অন্য কোনো ডেটা টাইপ (যেমন: String, Undefined, Object) হলেও এটি false দেবে—কোনো প্রকার টাইপ পরিবর্তন (Type Conversion) করবে না।

১. কখন true দেবে? (প্রকৃত NaN মান)

// ১. অবৈধ গাণিতিক হিসাব (যেমন: স্ট্রিংক সংখ্যা দিয়ে গুণ করা)
let invalidMath = "Hello" * 5; 
console.log(invalidMath); // Output: NaN
console.log(Number.isNaN(invalidMath)); // Output: true

// ২. সরাসরি NaN চেক করা
console.log(Number.isNaN(NaN)); // Output: true

// ৩. ঋণাত্মক সংখ্যার বর্গমূল (অবাস্তব সংখ্যা)
console.log(Number.isNaN(Math.sqrt(-1))); // Output: true


২. কখন false দেবে? (যা NaN নয়)

console.log(Number.isNaN(100));        // false (এটি একটি বৈধ সংখ্যা)
console.log(Number.isNaN("Hello"));    // false (এটি String, NaN নয়)
console.log(Number.isNaN(undefined));  // false (এটি undefined, NaN নয়)
console.log(Number.isNaN("100"));      // false (এটি String)



// সরাসরি NaN হলে -> true
console.log(Number.isNaN(NaN));             // true
console.log(Number.isNaN(0 / 0));           // true (কারণ ০/০ এর ফলাফল NaN)
console.log(Number.isNaN(Number("hello")));// true (অকার্যকর কাস্টিং)

// NaN না হলে -> false
console.log(Number.isNaN(100));             // false
console.log(Number.isNaN("NaN"));           // false (কারণ এটি একটি String)
console.log(Number.isNaN(undefined));       // false (কারণ এটি Undefined)

⚠️ একটি বড় বিভ্রান্তি: isNaN() vs Number.isNaN()
জাভাস্ক্রিপ্টে দুটি একই ধরনের মেথড আছে, তবে এদের মধ্যে পার্থক্য বিশাল:

isNaN(val) (গ্লোবাল মেথড): এটি পরীক্ষা করার আগে ইনপুটকে জোর করে সংখ্যায় রূপান্তর (Type Coercion) করার চেষ্টা করে। 
তাই "Hello" দিলে সেটি আগে সংখ্যা বানাতে ব্যর্থ হয়ে NaN বানিয়ে ফেলে এবং true রিটার্ন করে (যা প্রায়ই ভুল কনফিউশন তৈরি করে)।

Number.isNaN(val) (ES6 মেথড): এটি কোনো টাইপ পরিবর্তন করে না। ইনপুটটি স্ট্রিং হলে সরাসরি false দেবে, কেবল সত্যি সত্যি NaN পেলেই true দেবে।


// পার্থক্যটি লক্ষ্য করো:
console.log(isNaN("Hello"));        // true  (ভুল বোঝায়: স্ট্রিংকে সংখ্যায় রূপান্তর করতে গিয়ে NaN বানিয়ে ফেলেছে)
console.log(Number.isNaN("Hello")); // false (সঠিক: "Hello" একটি String, এটি NaN নয়)

📝 সংক্ষেপে মনে রাখার নিয়ম
NaN আসে তখন, যখন জাভাস্ক্রিপ্ট কোনো গাণিতিক হিসাব সম্পন্ন করতে ব্যর্থ হয়।

ইনপুট ডাটা টাইপ রূপান্তর না করে একদম নিখুঁতভাবে NaN চেক করতে সবসময় আধুনিক Number.isNaN() ব্যবহার করা ভালো প্র্যাকটিস।


গ্লোবাল isNaN() বনাম Number.isNaN()
দুটির পার্থক্য জানা অত্যন্ত জরুরি:

গ্লোবাল isNaN("Hello"): এটি ইনপুটকে প্রথমে জোর করে সংখ্যায় বানানোর চেষ্টা করে। "Hello" কে নম্বর বানাতে না পেরে সেটিকে NaN ধরে নেয় এবং true দেয়।

Number.isNaN("Hello"): এটি টাইপ কনভার্সন করে না। যেহেতু "Hello" একটি স্ট্রিং, তাই এটি সরাসরি false দেয়।

ভবিষ্যতে কাজে লাগার মতো ২টি বাস্তব উদাহরণ
১. ইনপুট থেকে গাণিতিক হিসাব এবং ভুল ইনপুট হ্যান্ডেল করা
ইউজার কোনো ইনপুট ফিল্ড থেকে সংখ্যা পাঠালে তা দিয়ে হিসাব করার পর ফলাফলটি অকার্যকর (NaN) হয়ে গেছে কি না, তা পরীক্ষা করার জন্য:


function calculateSquareRoot(number) {
  let result = Math.sqrt(number); // ঋণাত্মক সংখ্যার বর্গমূল নিলে NaN আসে

  // হিসাবের পর মানটি NaN কি না চেক করা হচ্ছে
  if (Number.isNaN(result)) {
    return "Error: Cannot calculate square root of a negative number!";
  }

  return "Square root is: " + result;
}

// ১. সঠিক ইনপুট
console.log(calculateSquareRoot(16)); 
// Output: "Square root is: 4"

// ২. ঋণাত্মক সংখ্যা দিলে (ফলাফল NaN আসবে)
console.log(calculateSquareRoot(-9)); 
// Output: "Error: Cannot calculate square root of a negative number!"


ডেটাবেজ বা API থেকে পাওয়া ফিল্ড ভ্যালিডেশন
কখনো কখনো টাইপ কাস্টিং করার পর (Number(val)) মানটি অকার্যকর হয়ে গেলে তা সহজে ধরার জন্য:

function processPrice(inputPrice) {
  let parsedPrice = Number(inputPrice);

  // ইনপুটটি সংখ্যায় রূপান্তর করতে ব্যর্থ হলে parsedPrice হবে NaN
  if (Number.isNaN(parsedPrice)) {
    return "Invalid price format! Transaction failed.";
  }

  return "Final Price: " + parsedPrice + " BDT";
}

// ১. সঠিক স্ট্রিং ইনপুট
console.log(processPrice("500")); 
// Output: "Final Price: 500 BDT"

// ২. ভুল স্ট্রিং ইনপুট (যা নম্বর বানানো যায় না)
console.log(processPrice("abc")); 
// Output: "Invalid price format! Transaction failed."



শপিং কার্টে ফর্ম ইনপুট থেকে ডিসকাউন্ট ক্যালকুলেশন
ইউজার যখন ওয়েবসাইট থেকে কোনো ডিসকাউন্ট কোড বা পার্সেন্টেজ ফর্মে টাইপ করে, 
তখন টেক্সটবক্স থেকে আসা ইনপুট স্ট্রিং হিসেবে থাকে। সেটিকে ম্যাথমেটিক্যাল ক্যালকুলেশন করার আগে ও পরে চেক করার নিরাপদ উপায়:

function applyDiscount(price, discountInput) {
  // টেক্সট ইনপুটকে নম্বর বানানোর চেষ্টা করা হচ্ছে
  let discountPercent = Number(discountInput);

  // ইনপুট টেক্সট ভুল হলে (যেমন: "10%" বা "ten" দিলে) Number() মেথডটি NaN বানায়
  if (Number.isNaN(discountPercent)) {
    return "Error: Invalid discount percentage entered!";
  }

  let finalPrice = price - (price * (discountPercent / 100));
  return "Discounted Price: " + finalPrice + " BDT";
}

// ১. সঠিক ইনপুট
console.log(applyDiscount(1000, "15")); 
// Output: "Discounted Price: 850 BDT"

// ২. ভুল ইনপুট ("15%" চিহ্নসহ দিলে Number() রূপান্তর ব্যর্থ হয়ে NaN হয়)
console.log(applyDiscount(1000, "15%")); 
// Output: "Error: Invalid discount percentage entered!"



এপিআই (API) বা ডেটাবেজ থেকে আসা ইনকমপ্লিট ডেটা ক্লিনিং
অনলাইন ব্যাকএন্ড বা এপিআই থেকে ডেটা আসার সময় অনেক সময় কোনো ফিল্ডের মান 
গাণিতিক অপারেশনের কারণে NaN হয়ে আসতে পারে। ওই ডেটা দিয়ে সামনের কাজ বা চার্ট (Chart) দেখানোর আগে ফিল্টার করার লজিক:

function filterValidScores(scores) {
  // অকার্যকর (NaN) মানগুলো বাদ দিয়ে শুধু ভ্যালিড স্কোর ফিল্টার করা হচ্ছে
  let validScores = scores.filter(score => !Number.isNaN(score));
  
  return validScores;
}

// এপিআই থেকে পাওয়া বিভিন্ন ধরনের স্কোরের অ্যারে (যেখানে কিছু NaN ঢুকে পড়েছে)
let apiData = [85, 90, 0 / 0, 78, Number("abc"), 95];

console.log(filterValidScores(apiData)); 
// Output: [85, 90, 78, 95] (NaN এর ভ্যালুগুলো বাদ পড়ে গেছে)

১. Number("text") দিয়ে কাস্টিং করলে তা NaN হয়ে যায়।

২. 0 / 0 বা কোনো টেক্সটের সাথে অংক কষলে (যেমন: "hello" * 5) ফলাফল NaN আসে।

৩. এসব ক্ষেত্রে ভ্যালু নষ্ট হলো কি না তা নিশ্চিত করতে Number.isNaN() চেক বসানো হয়।





BigInt হলো জাভাস্ক্রিপ্টের (ES2020 তে আসা) একটি প্রিমিয়ার বা বিশেষ Primitive Data Type।
এর মূল কাজ হলো—সাধারণ Number টাইপের সীমার বাইরের অত্যন্ত বিশাল পূর্ণসংখ্যা (Large Integer) নিয়ে নির্ভুলভাবে হিসাব-নিকাশ করা।কেন BigInt প্রয়োজন? 
(সমস্যা ও সমাধান)জাভাস্ক্রিপ্টের সাধারণ Number টাইপ সর্বাধিক 2^53 - 1 বা 9007199254740991 (যা Number.MAX_SAFE_INTEGER) পর্যন্ত পূর্ণসংখ্যার হিসাব নির্ভুলভাবে করতে পারে।


// সাধারণ Number এর সীমাবদ্ধতা:
let max = Number.MAX_SAFE_INTEGER; // 9007199254740991

console.log(max + 1); // Output: 9007199254740992 (সঠিক)
console.log(max + 2); // Output: 9007199254740992 (ভুল! ১ বাড়ার কথা ছিল)

BigInt তৈরি করার ২টি নিয়ম
১. কোনো পূর্ণসংখ্যার শেষে n বসিয়ে:

let bigNum1 = 9007199254740991n;

২. BigInt() ফাংশন ব্যবহার করে:

let bigNum2 = BigInt("9007199254740991");




জাভাস্ক্রিপ্টে ম্যাথ (Math) সম্পর্কিত কাজ করার জন্য মেথডগুলো এগুলো অবজেক্ট-ওরিয়েন্টেড Math অবজেক্টের মেথড। 
তবে কাজের সুবিধার্থে স্ট্রিং ডাটাকে সংখ্যায় রূপান্তর করে কিংবা মেথডের ফলাফলের সাথে স্ট্রিং ও ব্যাকটিকস যোগ করে আমরা এগুলো ব্যবহার করে থাকি।

নিচে Math.floor(), Math.ceil(), Math.round(), Math.trunc(), Math.abs(), Math.pow(), Math.sqrt(), এবং Math.random() সহ প্রয়োজনীয় সব মেথডের বিস্তারিত উদাহরণ 


📌 ১. Math.floor()
দশমিক সংখ্যাকে নিচের দিকের নিকটতম পূর্ণসংখ্যায় (Round Down) রূপান্তর করে।

let num = "4.9"; // স্ট্রিং টাইপ ডাটা

// Math মেথড স্বয়ংক্রিয়ভাবে স্ট্রিং "4.9" কে সংখ্যায় রূপান্তর করে নেয়
console.log(`Math.floor("4.9") : ${Math.floor(num)}`); 
// Output: Math.floor("4.9") : 4

console.log(`Negative Floor : ${Math.floor(-4.1)}`); 
// Output: Negative Floor : -5 (কারণ -৫ হলো -৪.১ এর চেয়ে ছোট পূর্ণসংখ্যা)



📌 ২. Math.ceil()
দশমিক সংখ্যাকে ওপরের দিকের নিকটতম পূর্ণসংখ্যায় (Round Up) রূপান্তর করে।

let num = "4.1";

console.log(`Math.ceil("4.1") : ${Math.ceil(num)}`); 
// Output: Math.ceil("4.1") : 5

console.log(`Negative Ceil : ${Math.ceil(-4.9)}`); 
// Output: Negative Ceil : -4


📌 ৩. Math.round()
সাধারণ গাণিতিক নিয়মে রাউন্ড করে। দশমিকের পর .5 বা তার বেশি হলে ওপরের পূর্ণসংখ্যা, আর .5-এর কম হলে নিচের পূর্ণসংখ্যা দেয়।

console.log(`Math.round("4.5") : ${Math.round("4.5")}`); // Output: 5
console.log(`Math.round("4.4") : ${Math.round("4.4")}`); // Output: 4


📌 ৪. Math.trunc()
দশমিকের পরের সব অংশ কেটে শুধু মূল পূর্ণসংখ্যাটি (Integer) রেখে দেয়।

console.log(`Math.trunc("4.99") : ${Math.trunc("4.99")}`); // Output: 4
console.log(`Math.trunc("-4.99") : ${Math.trunc("-4.99")}`); // Output: -4


📌 ৫. Math.abs() (Absolute Value)
যেকোনো ঋণাত্মক (Negative) সংখ্যাকে ধনাত্মক (Positive)-এ রূপান্তর করে।

let balance = "-500";

console.log(`Absolute Value: ${Math.abs(balance)}`); 
// Output: Absolute Value: 500




📌 ৬. Math.pow() & Math.sqrt() (পাওয়ার ও বর্গমূল)
Math.pow(base, exponent): পাওয়ার বা স্কয়ার হিসাব করে।

Math.sqrt(number): সংখ্যার বর্গমূল (Square Root) বের করে।

console.log(`2^3 (Power) : ${Math.pow("2", 3)}`); // Output: 8
console.log(`Square Root of 25 : ${Math.sqrt("25")}`); // Output: 5


📌 ৭. Math.min() & Math.max()
তালিকার সবচেয়ে ছোট এবং সবচেয়ে বড় সংখ্যাটি খুঁজে বের করে।

console.log(`Max Number : ${Math.max(10, "50", 30, 5)}`); // Output: 50
console.log(`Min Number : ${Math.min(10, "50", 30, 5)}`); // Output: 5


📌 ৮. Math.random()
0 থেকে শুরু করে 1-এর কম পর্যন্ত যেকোনো র‍্যান্ডম দশমিক সংখ্যা তৈরি করে।

// ১ থেকে ১০ এর মধ্যে র‍্যান্ডম পূর্ণসংখ্যা তৈরি
let randomNum = Math.floor(Math.random() * 10) + 1;

console.log(`Random Number (1-10): ${randomNum}`);




💡 বোনাস: String-কে Number বানিয়ে Math মেথড ব্যবহার
কখনো কখনো নিখুঁত হিসেব করতে স্ট্রিংকে আগে parseInt() বা parseFloat() দিয়ে সংখ্যা বানিয়ে নেওয়া ভালো প্র্যাকটিস:

let strNum = "12.3456";

// দশমিক সংখ্যায় রূপান্তর করে Math.round করা
let parsedNum = parseFloat(strNum);

console.log(`Result: ${Math.round(parsedNum)}`); // Output: Result: 12


Math.round()-এর প্রধান কাজ হলো যেকোনো দশমিক সংখ্যাকে তার সবচেয়ে কাছের পূর্ণসংখ্যায় (Nearest Integer) রূপান্তর করা।

দশমিকের পর .5 বা তার বেশি থাকলে: এটি সংখ্যাটিকে ওপরের পূর্ণসংখ্যায় বাড়িয়ে দেয়।

দশমিকের পর .5-এর কম থাকলে: এটি দশমিকের পরের অংশ বাদ দিয়ে নিচের পূর্ণসংখ্যাটি রেখে দেয়।Math.round()-এর প্রধান কাজ হলো যেকোনো দশমিক সংখ্যাকে তার সবচেয়ে কাছের পূর্ণসংখ্যায় (Nearest Integer) রূপান্তর করা।

দশমিকের পর .5 বা তার বেশি থাকলে: এটি সংখ্যাটিকে ওপরের পূর্ণসংখ্যায় বাড়িয়ে দেয়।

দশমিকের পর .5-এর কম থাকলে: এটি দশমিকের পরের অংশ বাদ দিয়ে নিচের পূর্ণসংখ্যাটি রেখে দেয়।

let strNum = "12.3456";

let parsedNum = parseFloat(strNum); // "12.3456" স্ট্রিংটি 12.3456 সংখ্যায় রূপান্তরিত হলো
console.log(`Result: ${Math.round(parsedNum)}`); // Output: Result: 12

Math.round() দশমিকের পরের কোনো সংখ্যা রাখে না—এটি দশমিক তুলে দিয়ে সব সময় একটি নিখুঁত পূর্ণসংখ্যা (Integer) বানিয়ে দেয়।
