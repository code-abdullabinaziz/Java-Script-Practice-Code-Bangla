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






function getUserProfile() {
  let name, age;
  let attempts = 0; // চেষ্টা গণনার জন্য

  // নাম নেওয়ার লুপ
  while (!name) {
    let input = prompt("Enter your full name:");
    if (input === null) {
      console.log("Input collection was cancelled.");
      return null;
    }
    name = input.trim();
  }

  // বয়স নেওয়ার লুপ
  while (true) {
    let input = prompt("Enter your age (numbers only):");
    
    // ইউজার Cancel চাপলে
    if (input === null) {
      console.log("Input collection was cancelled.");
      return null;
    }
    
    age = Number(input);
    
    // সঠিক সংখ্যা ও বয়স হলে লুপ থামবে
    if (!isNaN(age) && age > 0) {
      break;
    }
    
    attempts++; // ভুল ইনপুটের সংখ্যা গণনা
    
    // ৩ বারের বেশি ভুল করলে
    if (attempts >= 3) {
      alert(`How many times do I have to tell you? Please enter a valid age! (Attempt ${attempts})`);
    } else {
      alert("Invalid input! Please enter a valid age.");
    }
  }

  return {
    name: name,
    age: age,
    isAdult: age >= 18
  };
}

let user = getUserProfile();
if (user) {
  console.log("User Data Collected:", user);
}


১. ফাংশন ডিফিনিশন ও ভেরিয়েবল ডিক্লেয়ারেশন

function getUserProfile() {
  let name, age;
  let attempts = 0;
কাজ: getUserProfile নামের একটি ফাংশন তৈরি করা হলো।

স্টেট:

name = undefined (প্রথমে কোনো মান নেই)

age = undefined (প্রথমে কোনো মান নেই)

attempts = 0 (ভুল ইনপুটের কাউন্টার শুরু হলো ০ দিয়ে)

২. প্রথম ধাপ: নাম নেওয়ার লুপ (Name Validation Loop)

while (!name) {
  let input = prompt("Enter your full name:");
    
কাজ: !name এর মানে হলো যতক্ষণ name এর মান খালি বা ট্রু (Truthy) না হবে, লুপটি চলতে থাকবে। 
প্রথমবার name ফাঁকা, তাই লুপের ভেতর ঢুকবে এবং স্ক্রিনে প্রম্পট বক্স দেখাবে।


  if (input === null) {
    console.log("Input collection was cancelled.");
    return null;
  }
কাজ: ইউজার যদি প্রম্পটে Cancel চাপেন, তবে input এর মান হবে null।

স্টেট: ক্যানসেল চাপলে কনসোলে মেসেজ প্রিন্ট হয়ে ফাংশনটি সাথে সাথেই থেমে যাবে এবং null ফেরত পাঠাবে।


  name = input.trim();
}
কাজ: ইউজার যদি নাম লিখে OK চাপেন (যেমন: "  Abdullah  "), তবে .trim() পদ্ধতিটি 
সামনের ও পেছনের অতিরিক্ত খালি জায়গা মুছে দিয়ে name = "Abdullah" সেট করবে।

লুপ শেষ: যেহেতু name এখন আর খালি নেই (!name এখন false), তাই নামের লুপটি বন্ধ হয়ে পরবর্তী ধাপে চলে যাবে।

৩. দ্বিতীয় ধাপ: বয়স নেওয়ার লুপ (Age Validation Loop)

while (true) {
  let input = prompt("Enter your age (numbers only):");
কাজ: while (true) দিয়ে একটি ইনফিনিট (অসীম) লুপ শুরু করা হলো, যা সঠিক ইনপুট বা ক্যানসেল না করা পর্যন্ত ঘুরতেই থাকবে।

    
  if (input === null) {
    console.log("Input collection was cancelled.");
    return null;
  }
কাজ: ইউজার বয়স চাওয়ার প্রম্পটে Cancel চাপলে ফাংশন সরাসরি বন্ধ হয়ে null রিটার্ন করবে।

  age = Number(input);
কাজ: প্রম্পট থেকে পাওয়া টেক্সট ইনপুটকে (যেমন: "25") সংখ্যায় পরিবর্তন করা হবে।

স্টেট: যদি ইউজার "25" দেন, তবে age = 25 হবে। আর যদি ইউজার ভুল করে কোনো অক্ষর টাইপ করেন (যেমন: "abc"), তবে age = NaN (Not a Number) হবে।


  if (!isNaN(age) && age > 0) {
    break;
  }
কাজ: এখানে দুটি বিষয় পরীক্ষা করা হয়:

!isNaN(age) -> এটি কি একটি সঠিক সংখ্যা?

age > 0 -> সংখ্যাটি কি ধনাত্মক?

স্টেট: দুটিই সত্যি হলে (যেমন: ২৫ দিলে), break কাজ করবে এবং বয়সের লুপটি তৎক্ষণাৎ থেমে যাবে।

৪. ভুল ইনপুট হ্যান্ডলিং ও কাস্টম মেসেজ (Error Handling)
    
ইউজার যদি ভুল ইনপুট দেন (যেমন: "abc" বা -5), তবে কোডটি নিচের অংশগুলোতে যাবে:


  attempts++;
কাজ: ভুল ইনপুট দেওয়ার কারণে attempts এর মান ১ বেড়ে যাবে (প্রথম ভুলে attempts = 1)।

  if (attempts >= 3) {
    alert(`How many times do I have to tell you? Please enter a valid age! (Attempt ${attempts})`);
  } else {
    alert("Invalid input! Please enter a valid age.");
  }
}
কাজ:

১ম ও ২য় ভুল: attempts ৩ এর কম থাকায় সাধারণ সতর্কবার্তা দেখা যাবে: "Invalid input! Please enter a valid age."

৩য় বা তার বেশি ভুল: attempts >= 3 শর্ত পূরণ হওয়ায় কড়া ওয়ার্নিং দেখা যাবে: "How many times do I have to tell you? Please enter a valid age! (Attempt 3)"

লুপ রি-রান: অ্যালার্ট বন্ধ হওয়ার পর লুপটি আবার প্রম্পট নিয়ে ইউজারের কাছে ফিরে যাবে।

৫. ডাটা রিটার্ন করা (Data Return)
সঠিক বয়স দেওয়ার পর লুপ থেকে বের হয়ে কোডটি শেষভাগে পৌঁছাবে:


return {
  name: name,
  age: age,
  isAdult: age >= 18
};
কাজ: ইউজারের সব তথ্য নিয়ে একটি চমৎকার অবজেক্ট তৈরি করে রিটার্ন করা হবে।

স্টেট (যদি নাম = "Abdullah" এবং বয়স = ২৫ হয়):


{
  name: "Abdullah",
  age: 25,
  isAdult: true  // ২৫ দিন ১৮ এর বড় হওয়ায় এটি true হয়েছে
}
৬. ফাংশন কল ও কনসোল আউটপুট (Execution)

let user = getUserProfile();
কাজ: getUserProfile() ফাংশনটি রান করে তার থেকে ফেরত আসা অবজেক্টটি user ভেরিয়েবলে জমা রাখা হলো।


if (user) {
  console.log("User Data Collected:", user);
}
    
কাজ:

ইউজার যদি সঠিকভাবে নাম ও বয়স দেন, তবে user এর ভেতর অবজেক্ট থাকবে এবং কনসোলে প্রসেস করা তথ্য প্রিন্ট হবে।

ইউজার যদি কোনো প্রম্পটে Cancel চেপে থাকেন, তবে user = null হবে এবং if(user) মিথ্যা হওয়ায় কোনো আউটপুট প্রিন্ট হবে না (শুধু ক্যানসেলের মেসেজটি দেখাবে)।

চূড়ান্ত কনসোল আউটপুট (সব সঠিক দিলে):

User Data Collected: { name: 'Abdullah', age: 25, isAdult: true }





    


১. পাসওয়ার্ড নিশ্চিতকরণ ও ম্যাচিং (Password Signup Validation)
ই-কমার্স বা যেকোনো ওয়েবসাইটে অ্যাকাউন্ট খোলার সময় পাসওয়ার্ড স্ট্রং কিনা এবং কনফার্ম পাসওয়ার্ড মিলছে কিনা তা যাচাই করার বাস্তবসম্মত লজিক:


function registerPassword() {
  let attempts = 0;

  while (true) {
    let password = prompt("Enter your new password (at least 6 characters):");
    if (password === null) return null; // Cancel button check

    let confirmPassword = prompt("Re-enter your password:");
    if (confirmPassword === null) return null;

    // 1. Check if empty or less than 6 characters
    if (password.trim().length < 6) {
      alert("Error: Password must be at least 6 characters long!");
    } 
    // 2. Check if passwords match
    else if (password !== confirmPassword) {
      attempts++;
      alert(`Error: Passwords do not match! (Attempt: ${attempts})`);
    } 
    // 3. If everything is correct
    else {
      alert("Success! Your password has been set successfully.");
      return password;
    }
  }
}

// To run:
let userPassword = registerPassword();
console.log("Saved Password:", userPassword);



ধাপ ১: ফাংশন ও ভেরিয়েবল ডিক্লেয়ারেশন

function registerPassword() {
  let attempts = 0;
কী হচ্ছে: registerPassword নামের একটি ফাংশন তৈরি হলো।

স্টেট (State): ভুল পাসওয়ার্ড কনফার্ম করার চেষ্টা কয়বার হয়েছে তা ট্র্যাক করার জন্য attempts ভেরিয়েবলের মান 0 দিয়ে শুরু হলো।

ধাপ ২: অসীম লুপ শুরু

  while (true) {
কী হচ্ছে: while (true) মানে হলো একটি অসীম লুপ (Infinite Loop)। সঠিক পাসওয়ার্ড না দেওয়া পর্যন্ত বা ইউজার ক্যানসেল না করা পর্যন্ত এটি চলতেই থাকবে।

ধাপ ৩: প্রথম পাসওয়ার্ড ইনপুট নেওয়া

    let password = prompt("Enter your new password (at least 6 characters):");
    if (password === null) return null;
কী হচ্ছে: স্ক্রিনে প্রম্পট বক্স আসবে পাসওয়ার্ড লেখার জন্য।

যদি ইউজার Cancel চাপেন: password-এর মান null হবে এবং ফাংশনটি সাথে সাথে বন্ধ হয়ে null রিটার্ন করবে।

যদি পাসওয়ার্ড দেন: যেমন ইউজার টাইপ করলেন "123456", তবে password = "123456" হিসেবে জমা হবে।

ধাপ ৪: কনফার্ম পাসওয়ার্ড ইনপুট নেওয়া

    let confirmPassword = prompt("Re-enter your password:");
    if (confirmPassword === null) return null;
কী হচ্ছে: দ্বিতীয়বার পাসওয়ার্ড কনফার্ম করার জন্য আরেকটি প্রম্পট বক্স আসবে।

যদি ইউজার Cancel চাপেন: ফাংশনটি বন্ধ হয়ে null রিটার্ন করবে।

যদি পাসওয়ার্ড দেন: যেমন আবার দিলেন "123456", তবে confirmPassword = "123456" হবে।

ধাপ ৫: প্রথম শর্ত - পাসওয়ার্ডের দৈর্ঘ্য চেক (Length Check)

    if (password.trim().length < 6) {
      alert("Error: Password must be at least 6 characters long!");
    } 
কী হচ্ছে: পাসওয়ার্ডে স্পেস বাদ দিয়ে মোট কয়টি অক্ষর আছে তা মাপা হয় (.length < 6)।

যদি ছোট হয়: যেমন কেউ শুধু "123" দিল, তবে দৈর্ঘ্য ৬ এর কম হওয়ায়
শর্ত সত্যি হবে এবং অ্যালার্ট দেখাবে: "Error: Password must be at least 6 characters long!"। অ্যালার্ট বন্ধ হওয়ার পর লুপ আবার ঘুরে উপরে চলে যাবে।

ধাপ ৬: দ্বিতীয় শর্ত - পাসওয়ার্ড দুটি মিলছে কিনা চেক (Match Check)

    else if (password !== confirmPassword) {
      attempts++;
      alert(`Error: Passwords do not match! (Attempt: ${attempts})`);
    } 
কী হচ্ছে: দৈর্ঘ্য ঠিক থাকার পর চেক করা হয় প্রথম পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড হুবহু এক কি না (password !== confirmPassword)।

যদি না মেলে:

attempts++ এর কারণে ভুলের সংখ্যা ১ বেড়ে যাবে (প্রথম ভুলে attempts = 1)।

অ্যালার্ট দেখাবে: "Error: Passwords do not match! (Attempt: 1)"। এরপর লুপ আবার নতুন করে শুরু হবে।

ধাপ ৭: তৃতীয় শর্ত - সবকিছু ঠিক থাকলে (Success Block)

    else {
      alert("Success! Your password has been set successfully.");
      return password;
    }
  }
}
কী হচ্ছে: পাসওয়ার্ডের দৈর্ঘ্য ৬ বা তার বেশি হলে এবং দুটি পাসওয়ার্ড হুবহু মিলে গেলে এই ব্লকে ঢুকবে।

সফলতার অ্যালার্ট দেখানোর পর return password; কমান্ডের মাধ্যমে পাসওয়ার্ডটি রিটার্ন করে পুরো লুপ ও ফাংশনটি চিরতরে বন্ধ হয়ে যাবে।

ধাপ ৮: ফাংশন কল ও কনসোল আউটপুট

let userPassword = registerPassword();
console.log("Saved Password:", userPassword);
কী হচ্ছে:

ফাংশনটি রান করে ইউজারের দেওয়া সঠিক পাসওয়ার্ডটি userPassword ভেরিয়েবলে জমা হবে।

সবশেষে, কনসোলে প্রিন্ট দেখাবে:

Saved Password: 123456







২. কেনাকাটায় ব্যালেন্স ও পেমেন্ট হিসেব (ATM / Shopping Cart Checkout)
একটি শপিং সিস্টেম বা ব্যাংকিং উইথড্র প্রসেস—যেখানে ইউজার যত টাকা তুলতে বা কেনাকাটা করতে চায়, 
তার পর্যাপ্ত ব্যালেন্স আছে কিনা তা ডায়নামিকভাবে কমানো ও হ্যান্ডেল করা:



function processPayment(accountBalance) {
  alert(`Your current account balance: $${accountBalance}`);

  while (accountBalance > 0) {
    let input = prompt(`How much do you want to withdraw or spend? (Remaining: $${accountBalance})`);
    
    if (input === null) {
      console.log("Transaction cancelled by user.");
      break;
    }

    let amount = Number(input);

    // Input Validation: Check if number and positive
    if (isNaN(amount) || amount <= 0) {
      alert("Error: Please enter a valid amount!");
      continue; // Restarts the loop
    }

    // Balance Check
    if (amount > accountBalance) {
      alert(`Error: Insufficient funds! Maximum withdrawal available: $${accountBalance}`);
    } else {
      accountBalance -= amount; // Deduct from balance
      alert(`Transaction successful! You withdrew: $${amount}. Current balance: $${accountBalance}`);

      if (accountBalance === 0) {
        alert("Your account balance is now zero!");
        break;
      }
    }
  }

  return accountBalance;
}

// Function execution with initial balance of 500
let remainingBalance = processPayment(500);
console.log("Final Remaining Balance:", remainingBalance);


২. লাইন-বাই-লাইন ড্রাই রান (Line-by-Line Dry Run)
ধরা যাক, আমরা শুরুতেই processPayment(500) ডাললাম। অর্থাৎ প্যারামিটার হিসেবে accountBalance = 500 প্রবেশ করল।

ধাপ ১: ইনিশিয়াল ব্যালেন্স নোটিফিকেশন

alert(`Your current account balance: $${accountBalance}`);
কী ঘটে: স্ক্রিনে অ্যালার্ট পপ-আপ দেখাবে: "Your current account balance: $500"।

স্টেট: accountBalance = 500

ধাপ ২: লুপের শর্ত ও উইথড্রয়াল প্রম্পট (While Loop)

  while (accountBalance > 0) {
কী ঘটে: চেক করে accountBalance > 0 কিনা (এখানে $500 > 0, শর্ত সত্য)। লুপের ভেতরে ঢুকবে।


let input = prompt(`How much do you want to withdraw or spend? (Remaining: $${accountBalance})`);
কী ঘটে: ইউজার ইনপুটের জন্য একটি পপ-আপ দেখাবে।

ধাপ ৩: ক্যানসেল বাটন হ্যান্ডলিং

    if (input === null) {
      console.log("Transaction cancelled by user.");
      break;
    }
কী ঘটে: ইউজার যদি Cancel চাপেন, তবে input হবে null।

ফলাফল: কনসোলে প্রিন্ট হবে "Transaction cancelled by user." এবং break চালুর মাধ্যমে লুপ ভেঙে যাবে।

ধাপ ৪: টাইপ কনভার্সন ও টাইপ ভ্যালিডেশন

    let amount = Number(input);

    if (isNaN(amount) || amount <= 0) {
      alert("Error: Please enter a valid amount!");
      continue;
    }
কী ঘটে: ইনপুটকে সংখ্যায় রূপান্তর করা হয়।

কেস ১ (ভুল ইনপুট): ইউজার যদি টাইপ করেন "abc" বা -100, তবে isNaN(amount) সত্য হবে।

ফলাফল: অ্যালার্ট দেবে "Error: Please enter a valid amount!" এবং continue-এর কারণে পরের কোড স্কিপ করে লুপের শুরুতে ফেরত যাবে।

ধাপ ৫: পর্যাপ্ত ব্যালেন্স আছে কিনা তা চেক করা

    if (amount > accountBalance) {
      alert(`Error: Insufficient funds! Maximum withdrawal available: $${accountBalance}`);
    }
কী ঘটে: ইউজার যদি বর্তমান ব্যালেন্সের চেয়ে বেশি টাকা চাইতে বসেন (যেমন $600)।

ফলাফল: অ্যালার্ট দেবে "Error: Insufficient funds! Maximum withdrawal available: $500"। ব্যালেন্স বিয়োগ হবে না, লুপ আবার ঘুরবে।

ধাপ ৬: সফল লেনদেন ও ব্যালেন্স বিয়োগ

    } else {
      accountBalance -= amount;
      alert(`Transaction successful! You withdrew: $${amount}. Current balance: $${accountBalance}`);
কী ঘটে: ইউজার যদি বৈধ টাকা টাইপ করেন (যেমন $200)।

স্টেট আপডেট: accountBalance = 500 - 200 = 300

ফলাফল: অ্যালার্ট দেখাবে: "Transaction successful! You withdrew: $200. Current balance: $300"

ধাপ ৭: ব্যালেন্স শূন্য হলে লুপ থামানো

      if (accountBalance === 0) {
        alert("Your account balance is now zero!");
        break;
      }
    }
  }
কী ঘটে: ইউজার যদি পুরো টাকা তুলে নেন (যেমন শেষ ধাপে $300 তুলে নিলেন), তখন accountBalance হবে 0।

ফলাফল: অ্যালার্ট দেবে "Your account balance is now zero!" এবং break করে লুপ থামিয়ে দেবে।

ধাপ ৮: মান রিটার্ন ও কনসোল আউটপুট

  return accountBalance;
}

let remainingBalance = processPayment(500);
console.log("Final Remaining Balance:", remainingBalance);

কী ঘটে: ফাংশনটি তার সর্বশেষ অবশিষ্টাংশ ব্যালেন্স ফেরত দেবে (return accountBalance) যা remainingBalance ভেরিয়েবলে জমা হবে।

কনসোল আউটপুট:Final Remaining Balance: 0 (যদি সব তুলে নেওয়া হয়) অথবা যত অবশিষ্ট থাকবে।







৩. একাধিক প্রোডাক্টের ডিসকাউন্ট ও কুপন কোড ভ্যালিডেশন (Promo Code Check)
অনলাইন শপিং এ কুপন কোড (যেমন: SAVE20 বা EID50) সঠিক ইনপুট দেওয়া পর্যন্ত লুপ ও ট্রিম ব্যবহার করে প্রসেস করার নিয়ম:

function applyPromoCode(originalPrice) {
  const VALID_COUPON = "SAVE20"; // Our valid coupon code
  let attempts = 0;

  while (attempts < 3) {
    let input = prompt(`Price: $${originalPrice}. Enter promo code to get discount (or click OK/Cancel to Skip):`);
    
    if (input === null || input.trim() === "") {
      console.log("No promo code was used.");
      return { finalPrice: originalPrice, discountApplied: 0 };
    }

    // Input cleanup and convert to uppercase
    let cleanedCode = input.trim().toUpperCase();

    if (cleanedCode === VALID_COUPON) {
      let discount = originalPrice * 0.20; // 20% discount
      let finalPrice = originalPrice - discount;
      alert(`Congratulations! You got a 20% discount. New price: $${finalPrice}`);
      
      return { finalPrice: finalPrice, discountApplied: discount };
    } else {
      attempts++;
      alert(`Invalid promo code! Remaining attempts: ${3 - attempts}`);
    }
  }

  alert("Maximum attempt limit reached. You must pay the original price.");
  return { finalPrice: originalPrice, discountApplied: 0 };
}

// Testing with a 1000 product:
let cartSummary = applyPromoCode(1000);
console.log("Cart Summary:", cartSummary);



২. লাইন-বাই-লাইন ড্রাই রান (Line-by-Line Dry Run)
ধরা যাক, আমরা ফাংশনটি কল করলাম: let cartSummary = applyPromoCode(1000);। এখানে originalPrice = 1000।

ধাপ ১: ইনিশিয়ালাইজেশন

  const VALID_COUPON = "SAVE20";
  let attempts = 0;
কী ঘটে: সঠিক কুপন কোড সেট করা হলো "SAVE20" এবং ভুল চেষ্টা গণনার জন্য attempts = 0 দিয়ে শুরু হলো।

ধাপ ২: লুপ শুরু (While Loop)

  while (attempts < 3) {
কী ঘটে: চেক করে attempts কি ৩ এর কম আছে কিনা (০ < ৩, শর্ত সত্য)। লুপের ভেতর ঢুকবে।


let input = prompt(`Price: $${originalPrice}. Enter promo code...`);
কী ঘটে: ইউজারের সামনে প্রম্পট বক্স আসবে।

ধাপ ৩: ক্যানসেল বা খালি ইনপুট চেক (Skip/Cancel)

    if (input === null || input.trim() === "") {
      console.log("No promo code was used.");
      return { finalPrice: originalPrice, discountApplied: 0 };
    }
কী ঘটে: ইউজার যদি কিছু না লিখে শুধু ওকে চাপেন অথবা Cancel চাপেন, তবে কোডটি বুঝতে পারবে ইউজার কুপন ব্যবহার করতে চান না।

ফলাফল: কনসোলে মেসেজ প্রিন্ট হবে এবং কোনো ডিসকাউন্ট ছাড়াই মূল দাম (1000) রিটার্ন করে ফাংশন শেষ হয়ে যাবে।

ধাপ ৪: ইনপুট ক্লিনআপ ও ক্যাপিটাল লেটার রূপান্তর

let cleanedCode = input.trim().toUpperCase();
কী ঘটে: ইউজার যদি ছোটহাতে বা অতিরিক্ত স্পেস দিয়ে লেখেন (যেমন: "  save20  "), তবে .trim() অতিরিক্ত স্পেস কেটে ফেলবে 
এবং .toUpperCase() সেটিকে বড় হাতের "SAVE20" এ রূপান্তর করবে।

ধাপ ৫: সঠিক কোড মিললে (Success Block)

    if (cleanedCode === VALID_COUPON) {
      let discount = originalPrice * 0.20; 
      let finalPrice = originalPrice - discount;
      alert(`Congratulations! You got a 20% discount. New price: $${finalPrice}`);
      
      return { finalPrice: finalPrice, discountApplied: discount };
কী ঘটে: যদি কোড মিলে যায় (যেমন: "SAVE20"):

২০% ডিসকাউন্ট হিসাব হবে (1000 এর ২০% = ২০০)।

নতুন দাম হবে 1000 - 200 = 800।

সফলতার অ্যালার্ট দেখাবে।

একটি চমৎকার অবজেক্ট রিটার্ন করে ফাংশন বন্ধ হয়ে যাবে:

{ finalPrice: 800, discountApplied: 200 }

ধাপ ৬: ভুল কোড দিলে (Error Block & Attempts Increment)

    } else {
      attempts++;
      alert(`Invalid promo code! Remaining attempts: ${3 - attempts}`);
    }
  }
কী ঘটে: ইউজার যদি ভুল কোড দেন (যেমন: "SAVE10"):

attempts++ এর মাধ্যমে ভুল চেষ্টার সংখ্যা ১ বেড়ে যাবে (প্রথম ভুল হলে attempts = 1)।

অ্যালার্ট দেখাবে: "Invalid promo code! Remaining attempts: 2"।

লুপ আবার ঘুরে নতুন ইনপুট চাইতে শুরু করবে।

ধাপ ৭: সর্বোচ্চ চেষ্টা শেষ হলে (Max Limit Reached)

  alert("Maximum attempt limit reached. You must pay the original price.");
  return { finalPrice: originalPrice, discountApplied: 0 };
}
কী ঘটে: ইউজার যদি পরপর ৩ বার ভুল কোড দিয়ে ফেলেন, তবে লুপের শর্ত (attempts < 3) মিথ্যে হয়ে যাবে 
এবং লুপ ভেঙে বাইরে চলে আসবে। তখন মূল দামে পেমেন্ট করার নোটিশ দিয়ে অবজেক্ট রিটার্ন করবে।

ধাপ ৮: কনসোল আউটপুট

let cartSummary = applyPromoCode(1000);
console.log("Cart Summary:", cartSummary);
কী ঘটে: ফাংশন থেকে যা রিটার্ন হয়ে আসবে (cartSummary ভেরিয়েবলে) তা কনসোলে প্রিন্ট দেখাবে। যেমন সফল হলে দেখাবে:

Cart Summary: {finalPrice: 800, discountApplied: 200}






4.অ্যারে বা লিস্টের আইটেম ফিল্টারিং (Searching In Array)
লিস্ট বা ডাটাবেজে একাধিক নাম বা প্রোডাক্ট আছে,
সেখান থেকে ইউজার যা সার্চ করছে তা আছে কিনা তা খুঁজে বের করা (.toLowerCase() ও .includes() ব্যবহার করে):


function searchDatabase() {
  const products = ["Laptop", "Smartphone", "Headphone", "Keyboard", "Mouse"];

  while (true) {
    let input = prompt("What product are you looking for? (or click Cancel):");
    
    if (input === null) return "Search was cancelled.";
    
    let searchTerm = input.trim().toLowerCase();

    if (searchTerm === "") {
      alert("Please type a product name!");
      continue;
    }

    // Checking if the product is in the list
    let found = products.filter(item => item.toLowerCase().includes(searchTerm));

    if (found.length > 0) {
      alert(`Product found: ${found.join(", ")}`);
      return found;
    } else {
      alert(`Sorry! No product found named "${searchTerm}". Try again.`);
    }
  }
}

// To run:
let searchResult = searchDatabase();
console.log("Search Result:", searchResult);


২. লাইন-বাই-লাইন ড্রাই রান (Line-by-Line Dry Run)
ধাপ ১: অ্যারে ডিক্লেয়ারেশন

  const products = ["Laptop", "Smartphone", "Headphone", "Keyboard", "Mouse"];
কী ঘটে: আমাদের প্রোডাক্ট ডাটাবেজ হিসেবে ৫টি আইটেমের একটি অ্যারে তৈরি হলো।

ধাপ ২: অসীম লুপ শুরু (While Loop)

  while (true) {
    let input = prompt("What product are you looking for? (or click Cancel):");
কী ঘটে: while(true) দিয়ে লুপ শুরু হলো এবং ইউজারের কাছে কী খুঁজছে তা জানতে প্রম্পট বক্স আসবে।

ধাপ ৩: ক্যানসেল বাটন চেক

    if (input === null) return "Search was cancelled.";
কী ঘটে: ইউজার যদি Cancel চাপেন, তবে input এর মান null হবে এবং ফাংশনটি "Search was cancelled." রিটার্ন করে চিরতরে বন্ধ হয়ে যাবে।

ধাপ ৪: ইনপুট ক্লিনআপ ও লোয়ারকেস রূপান্তর

    let searchTerm = input.trim().toLowerCase();
কী ঘটে: .trim() দিয়ে অতিরিক্ত স্পেস কেটে ফেলা হয় এবং .toUpperCase() বা .toLowerCase() দিয়ে সব অক্ষর ছোট হাতের অক্ষরে রূপান্তর করা হয় (যেমন: ইউজার "  LAPTOP  " লিখলে সেটি হয়ে যাবে "laptop")। এটি করার কারণ হলো যাতে বড় বা ছোট হাতের অক্ষরের মিল নিয়ে কোনো সমস্যা না হয়।

ধাপ ৫: খালি ইনপুট চেক

    if (searchTerm === "") {
      alert("Please type a product name!");
      continue;
    }
কী ঘটে: ইউজার যদি কিছু না লিখে শুধু এন্টার বা ওকে চাপেন, তবে অ্যালার্ট দেখাবে "Please type a product name!" এবং continue-এর মাধ্যমে লুপ আবার শুরুতে চলে যাবে।

ধাপ ৬: ফিল্টারিং ও প্রোডাক্ট খোঁজা (Filter & Search)

let found = products.filter(item => item.toLowerCase().includes(searchTerm));
কী ঘটে: .filter() এবং .includes() মিলে আমাদের products অ্যারে থেকে চেক করে দেখავს ইউজার যা লিখেছেন তা কোনো প্রোডাক্টের নামের ভেতরে আছে কি না।

উদাহরণ: ইউজার যদি "phone" লেখেন, তবে "Smartphone" এবং "Headphone" দুটোর মধ্যেই "phone" থাকায় found অ্যারেতে এই দুটি প্রোডাক্ট জমা হবে।

ধাপ ৭: প্রোডাক্ট পাওয়া গেলে (Success Block)

    if (found.length > 0) {
      alert(`Product found: ${found.join(", ")}`);
      return found;
    } 
কী ঘটে: যদি found অ্যারের সাইজ বা দৈর্ঘ্য ১ বা তার বেশি হয় (অর্থাৎ প্রোডাক্ট পাওয়া যায়):

অ্যালার্ট দেখাবে: Product found: Smartphone, Headphone (.join(", ") দিয়ে অ্যারেটিকে সুন্দর কমা দিয়ে টেক্সটে রূপান্তর করা হয়েছে)।

return found; এর মাধ্যমে অ্যারেটি রিটার্ন করে ফাংশনটি বন্ধ হয়ে যাবে।

ধাপ ৮: প্রোডাক্ট না পাওয়া গেলে (Error Block)

    } else {
      alert(`Sorry! No product found named "${searchTerm}". Try again.`);
    }
  }
}
কী ঘটে: ইউজার যদি এমন কিছু খোঁজেন যা লিস্টে নেই (যেমন: "Tablet"), তবে found.length শূন্য হবে এবং
অ্যালার্ট দেখাবে: Sorry! No product found named "tablet". Try again.। এরপর লুপ আবার নতুন ইনপুট চাওয়ার জন্য ঘুরে উপরে চলে যাবে।
