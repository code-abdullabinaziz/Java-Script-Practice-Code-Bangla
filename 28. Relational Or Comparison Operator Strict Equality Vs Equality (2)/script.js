=== (Strict Equality / কড়া সমতা): দুটি মান একই ডেটা টাইপের এবং একই মানের হলে তবেই true দেয়। যেকোনো একটা আলাদা হলে false দেয়।

!== (Strict Inequality / কড়া অসমতা): === এর ঠিক উল্টো। দুটি মানের ডেটা টাইপ আলাদা হলে অথবা মান আলাদা হলে true দেয়; দুটোই একদম একই হলে false দেয়।


ভেতরে ভেতরে কীভাবে কাজ করে? (ধাপে ধাপে)
ধরুন  x === y:

প্রথমে ডেটা টাইপ চেক করে: x-এর টাইপ আর y-এর টাইপ কি এক?

টাইপ ভিন্ন হলে (যেমন number আর string), সেখানেই কাজ শেষ—=== সাথে সাথে false দেয়, আর !== সাথে সাথে true দেয়। কোনো টাইপ কনভার্সন হয় না।

টাইপ এক হলে মান চেক করে:

Primitive টাইপ (number, string, boolean, undefined, bigint, symbol) হলে সরাসরি মান মিলিয়ে দেখে।

Special Case (NaN): NaN কারও সাথেই === এ সমান হয় না—এমনকি নিজের সাথেও না (NaN === NaN হলো false, আর NaN !== NaN হলো true)।

Special Case (+0 এবং -0): JavaScript-এ +0 === -0 হলো true (আর +0 !== -0 হলো false)।

Reference টাইপ (object, array, function): এদের ভেতরের লেখা বা উপাদান এক হলেও 
যদি মেমোরিতে আলাদা জায়গায় থাকে, তবে === এ false দেয়; শুধু একই রেফারেন্স বা একই অবজেক্ট/অ্যারে হলেই true দেয়।




উদাহরণগুলো দেখে নেওয়া যাক

ক) Number বনাম String (টাইপ মিললে তবেই true)


let countNumber = 10;
let countString = "10";

console.log(countNumber === 10);          // true  (দুটোই number এবং মান 10)
console.log(countNumber === countString); // false (একটা number, আরেকটা string)
console.log(countNumber !== countString); // true  (টাইপ এক না, তাই অসমান)
খ) Boolean, 0, "", null, undefined


console.log(0 === false);          // false (number বনাম boolean)
console.log(0 !== false);          // true

console.log("" === false);         // false (string বনাম boolean)
console.log(null === undefined);   // false (null বনাম undefined)
console.log(null !== undefined);   // true

গ) NaN এর বিশেষ আচরণ

let badNumber = Number("hello"); // NaN

console.log(badNumber === NaN);    // false
console.log(badNumber !== NaN);    // true
console.log(Number.isNaN(badNumber)); // true (NaN চেক করার সঠিক উপায়)
ঘ) Array ও Object (রেফারেন্সের খেলা)

let listOne = [1, 2];
let listTwo = [1, 2];
let listSameRef = listOne;

console.log(listOne === listTwo);    // false (ভিতরের মান এক হলেও মেমোরিতে দুটো আলাদা array)
console.log(listOne !== listTwo);    // true
console.log(listOne === listSameRef); // true (দুটোই একই array-কে নির্দেশ করছে)

let userOne = { role: "admin" };
let userTwo = { role: "admin" };
console.log(userOne === userTwo);   // false (আলাদা object)


ঙ) বাস্তব ব্যবহার (if / else এর সাথে)

let rawStatus = "200";
let statusCode = Number(rawStatus);

if (statusCode === 200) {
  console.log("Request successful.");
} else if (statusCode !== 404) {
  console.log("Other status code.");
} else {
  console.log("Not found.");
}


৪. কেন === ও !== ব্যবহার করা সবচেয়ে ভালো?
পুরোনো == বা != টাইপ বদলে দিয়ে অপ্রত্যাশিত ফল দেয় (যেমন "0" == false সত্য হয়ে যায়)।

=== আর !== দিলে  নিশ্চিত থাকেন যে মান আর টাইপ দুটোই আপনার প্রত্যাশা মতো আছে—ফলে কোডে লুকানো বাগ অনেক কমে যায়।



Array / Object রেফারেন্স আর তারপর NaN কেন === এ false দেয়


১. Array আর Object কেন === এ false দেয়?
  
JavaScript-এ যখন আপনি একটা অ্যারে বা অবজেক্ট বানান, তখন ভেরিয়েবলের ভেতর সরাসরি পুরো অ্যারে বা অবজেক্টটা বসে না—
বরং মেমোরিতে ওই অ্যারে বা অবজেক্টটা কোথায় রাখা আছে, তার ঠিকানা (reference) বসে।

ধরুন:

listOne = [1, 2] — মেমোরির ১০০ নম্বর ঘরে [1, 2] রাখা হলো, আর listOne এর কাছে থাকল "১০০ নম্বর ঘর" ঠিকানাটা।

listTwo = [1, 2] — মেমোরির ২০৪ নম্বর ঘরে আরেকটা নতুন [1, 2] রাখা হলো, আর listTwo এর কাছে থাকল "২০৪ নম্বর ঘর" ঠিকানাটা।

এবার যখন আপনি listOne === listTwo লিখলেন, তখন JavaScript ভেতরের 1, 2 দেখার আগে ঠিকানা দুটো মেলায়:

"১০০ নম্বর ঘর" আর "২০৪ নম্বর ঘর" তো এক না! তাই ফলাফল আসে false।

কিন্তু  যদি let listSameRef = listOne; লেখেন, তাহলে listSameRef-এর কাছেও "১০০ নম্বর ঘর" ঠিকানাটাই যায়।
তখন listOne === listSameRef দিলে দুটোর ঠিকানাই এক হওয়ায় ফলাফল আসে true।


let listOne = [1, 2];
let listTwo = [1, 2];
let listSameRef = listOne;

console.log(listOne === listTwo);     // false (আলাদা ঠিকানা)
console.log(listOne === listSameRef); // true  (একই ঠিকানা)



২. NaN কেন নিজের সাথেও === এ false দেয়?
  
NaN মানে Not-a-Number—এটা কোনো নির্দিষ্ট একটা সংখ্যা না, বরং গণিত বা সংখ্যায় রূপান্তরের কোনো ভুল/অসংজ্ঞায়িত ফলাফলের চিহ্ন।

যেমন:

Number("abc") করলে যে NaN আসে, আর 0 / 0 বা Math.sqrt(-1) করলে যে NaN আসে—দুটোই যে কোনো অসংজ্ঞায়িত বা ভুল হিসাবের জায়গা বোঝায়,
তাই JavaScript-এর নিয়ম অনুযায়ী এগুলোকে একে অপরের সাথে সমান (=== এ true) ধরা হয় না।


let invalidOne = Number("abc");
let invalidTwo = Number("xyz");

console.log(invalidOne === invalidTwo); // false
console.log(NaN === NaN);               // false
console.log(Number.isNaN(invalidOne));  // true (এভাবেই আসল NaN ধরা যায়)


এক নজরে মনে রাখার সহজ কথা

Array / Object: ভেতরের জিনিস এক হলেও মেমোরির ঠিকানা আলাদা হলে === এ false হয়।

NaN: এটা কোনো নির্দিষ্ট মান না বলেই NaN === NaN সবসময় false হয়; চেক করতে হলে Number.isNaN(...) ব্যবহার করতে হয়।




console.log(20 === "20"); false
console.log(20 === 20);  true
console.log("20" === "20"); true
console.log(20 === 30); false
console.log(undefined === undefined); true
console.log(null === null); true
console.log("" === " "); false
console.log("" === ""); true
console.log(true === 1); false
console.log(false === 0); false

let num = Number("100");
console.log(num === 10); false

console.log("100" !== "100");  false
console.log(100 !== 100);  false
console.log(100 !== 120);  true
console.log("100" !== 120);  true
console.log(null !== null); false
console.log(undefined !== null); true





