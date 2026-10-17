Javascript Prompt 

জাভাস্ক্রিপ্টে prompt() এবং confirm() হলো ব্রাউজারের দুটি অত্যন্ত পপুলার ইন-বিল্ট (In-built) পপ-আপ বক্স। 
যখন ইউজার ইন্টারফেস (UI) নিয়ে কাজ করতে চাইলে বা 
ইউজারের কাছ থেকে সরাসরি কোনো ইনপুট বা সিদ্ধান্ত নিতে, তখন এই বক্সগুলো ব্যবহার করা হয়।

পাইথন বা সি-তে ইউজারের কাছ থেকে ডেটা নেওয়ার জন্য যেমন input() বা scanf() ব্যবহার করতে, জাভাস্ক্রিপ্ট ব্রাউজারে সেই কাজটাই করে prompt()।

আর কোনো কিছুর জন্য হ্যা/না (Yes/No) কনফার্মেশন নেওয়ার জন্য ব্যবহৃত হয় confirm()।

📥 ১. JavaScript Prompt Box (prompt())
ইউজারের কাছ থেকে কোনো টেক্সট বা ইনপুট নেওয়ার জন্য prompt() ব্যবহার করা হয়। 
এটি যখন স্ক্রিনে আসে, তখন ইউজারকে একটা লেখার জায়গা (Input Field) এবং সাথে OK ও Cancel বাটন দেখায়।

let userName = prompt("আপনার নাম লিখুন:", "ডিফল্ট নাম");

💡 নোট: ব্র্যাকেটের ভেতরের প্রথম অংশটি হলো মেসেজ, আর কমা দিয়ে দ্বিতীয় অংশটি হলো 
ঐ ইনপুট বক্সের Default Value (ইউজার কিছু না লিখলে যেটা নিজে থেকে বসে থাকবে)। দ্বিতীয় অংশটি দেওয়া অপশনাল।


prompt()-এর ৩টি গোল্ডেন রুলস (রিটার্ন টাইপ):

ইউজার কিছু লিখে OK দিলে: ইউজার বক্সে যা লিখবে, সেটি একটি স্ট্রিং (String) হিসেবে রিটার্ন হবে।

ইউজার কিছু না লিখে জাস্ট OK দিলে: একটি খালি স্ট্রিং "" রিটার্ন হবে।

ইউজার যদি Cancel বাটনে ক্লিক করে: সরাসরি null রিটার্ন হবে।


let age = prompt("আপনার বয়স কত?");

if (age === null) {
    console.log("ইউজার ক্যানসেল বাটনে চাপ দিয়েছে।");
} else if (age === "") {
    console.log("ইউজার কিছু না লিখে ফাকা বক্স সাবমিট করেছে।");
} else {
    console.log("ইউজারের বয়স হলো: " + age);
    console.log("ডেটা টাইপ: " + typeof age); // আউটপুট সবসময় string আসবে!
}




//Prompt Box
let name = prompt("Enter You Name :");
console.log(name);

let num = prompt("Enter You Number :");
num = Number(num);
console.log(num)
console.log( typeof num);




let age = prompt("তোমার বয়স কত?");

if (age >= 18) {
    alert("তুমি ভোট দিতে পারবে!");
} else {
    alert("তুমি এখনো ভোট দেওয়ার বয়সে পৌঁছাওনি।");
}




let priceInput = prompt("Enter product price: "); // ইউজার দিল যেমন "500"
let price = Number(priceInput);

// ১০% ডিসকাউন্ট হিসাব করা
let discountAmount = price * 0.10;
let finalPrice = price - discountAmount;

console.log(`Original Price: ${price}`);
console.log(`Final Price after 10% discount: ${finalPrice}`);



let priceInput = prompt("Enter product price: "); // ইউজার দিল যেমন "1000"
let price = Number(priceInput);

// ৫০% ডিসকাউন্ট হিসাব করা (0.50 দিয়ে গুণ বা 2 দিয়ে ভাগ করলেই হবে)
let discountAmount = price * 0.50; 
let finalPrice = price - discountAmount;

console.log(`Original Price: ${price}`);
console.log(`Final Price after 50% discount: ${finalPrice}`);


let finalPrice = price / 2; // সরাসরি অর্ধেক দাম হয়ে যাবে


------------------------------------------
// let name = prompt("Enter your name: ");
// let age = prompt("Enter your age: ");
// age = Number(age);
// let height = prompt("Enter your height: ");
// height = parseFloat(height);
// let address = prompt("Enter your address: ");
// let cgpa = prompt("Enter your cgpa: ");

// console.log("Your name is: " + name);
// console.log(typeof name);
// console.log("Your age is: " + age);
// console.log(typeof age);
// console.log("Your height is: " + height);
// console.log(typeof height);
// console.log("Your address is: " + address);
// console.log(typeof address);
// console.log("Your cgpa is: " + cgpa);
// console.log(typeof cgpa);


const name = prompt("Enter your name:");
const age = Number(prompt("Enter your age:")); 
const height = parseFloat(prompt("Enter your height (in feet/cm):"));
const address = prompt("Enter your address:");
const cgpa = parseFloat(prompt("Enter your cgpa:")); 


console.log(`
--- User Information ---
Name: ${name} (${typeof name})
Age: ${age} (${typeof age})
Height: ${height} (${typeof height})
Address: ${address} (${typeof address})
CGPA: ${cgpa} (${typeof cgpa})
`);


if (cgpa >= 3.5) {
    console.log("Result: Excellent performance!");
}


----------------------------------------------------------
const name = prompt("Enter your name: ");
const age = Number(prompt("Enter your age: "));
const height = parseFloat(prompt("Enter your height: "));
const address = prompt("Enter your address: ");
const cgpa = parseFloat(prompt("Enter your cgpa: "));
// ফোন নাম্বার স্ট্রিং হিসেবে রাখলে শুরুর '0' হারাবে না
const phoneNumber = prompt("Enter your phone Number: "); 

console.log(`
--------- Your Information ------------
Name: ${name} | Type: ${typeof name}
Age: ${age} | Type: ${typeof age}
Height: ${height} | Type: ${typeof height}
Address: ${address} | Type: ${typeof address}
CGPA: ${cgpa} | Type: ${typeof cgpa}
Phone: ${phoneNumber} | Type: ${typeof phoneNumber}
---------------------------------------
`);

সঠিক নিয়ম: typeof কে ${} এর ভেতরে রাখতে হবে। 
ভুল: ${name} typeof ${name} ➡️ আউটপুট: Aziz typeof Aziz
সঠিক: ${name} (Type: ${typeof name}) ➡️ আউটপুট: Aziz (Type: string)

ফোন নাম্বারের শুরুতে '0' হারিয়ে যাওয়া
parseInt(prompt("Enter your phone Number: "))
বাংলাদেশে ফোন নাম্বার শুরু হয় 01 দিয়ে। কিন্তু যখন parseInt বা Number ব্যবহার করা হয়, জাভাস্ক্রিপ্ট শুরুর 0 টাকে ফেলে দেয়।

উদাহরণ: ইনপুট দিলে 01711, আউটপুট আসবে 1711।

সমাধান: ফোন নাম্বার সব সময় String হিসেবে রাখা উচিত। অর্থাৎ শুধু prompt(...) লিখলেই হবে।



⚖️ ২. JavaScript Confirm Box (confirm())

ইউজারের কাছ থেকে কোনো কাজের অনুমতি বা সিদ্ধান্ত (Yes/No বা OK/Cancel) নেওয়ার জন্য confirm() ব্যবহার করা হয়। এখানে কোনো ইনপুট বক্স থাকে না, শুধু OK এবং Cancel বাটন থাকে।
//ConfirmBox
let isAdmin = confirm("Are You Admin?");
console.log(isAdmin);

console.log(typeof isAdmin);



let decision = confirm("আপনি কি এই ফাইলটি ডিলিট করতে চান?");



এটি শুধুমাত্র একটি বুলিয়ান (Boolean) মান রিটার্ন করে:
ইউজার যদি OK বাটনে ক্লিক করে  এটি true রিটার্ন করে।ইউজার যদি Cancel বাটনে ক্লিক করে বা ক্রস চেপে কেটে দেয় এটি false রিটার্ন করে।

let isDelete = confirm("আপনি কি নিশ্চিত যে অ্যাকাউন্টটি ডিলিট করবেন?");

if (isDelete) {
    // true হলে এই ব্লক কাজ করবে
    console.log("অ্যাকাউন্ট সফলভাবে ডিলিট করা হয়েছে।");
} else {
    // false হলে এই ব্লক কাজ করবে
    console.log("ডিলিট করার সিদ্ধান্ত বাতিল করা হলো।");
}




let answer = confirm("তুমি কি Delete করতে চাও?");

if (answer) {
    alert("Delete হয়েছে");
} else {
    alert("Delete বাতিল হয়েছে");
}




let logout = confirm("Logout করবে?");

if (logout) {
    alert("Logout Success");
} else {
    alert("তুমি এখনো Login আছ");
}




let name = prompt("তোমার নাম লিখো");

let answer = confirm("তোমার নাম " + name + " কি ঠিক আছে?");

if (answer) {
    alert("Welcome " + name);
} else {
    alert("আবার চেষ্টা করো");
}

