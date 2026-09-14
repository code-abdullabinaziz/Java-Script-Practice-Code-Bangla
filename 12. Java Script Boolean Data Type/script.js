Boolean Data Type

জাভাস্ক্রিপ্টে Boolean (বুলিয়ান) হলো প্রিমিটিভ (Primitive) ডেটা টাইপ। এটি মূলত লজিক্যাল সিদ্ধান্ত নেওয়ার জন্য ব্যবহৃত হয়। সহজ কথায়, 
কোনো কিছু "হ্যাঁ" নাকি "না", "সঠিক" নাকি "ভুল"—তা প্রকাশ করার জন্যই বুলিয়ান ব্যবহার করা হয়।

বুলিয়ান ভ্যালু দুটি:

১. true (সত্য) ২. false (মিথ্যা)

let isRaining = true;  // বৃষ্টি হচ্ছে
let isSunny = false;   // রোদ নেই

console.log(isRaining); // আউটপুট: true
console.log(typeof isSunny); // আউটপুট: boolean

বুলিয়ান সাধারণত কোনো শর্ত (Condition) চেক করার জন্য ব্যবহৃত হয়। প্রোগ্রামিংয়ে if-else স্টেটমেন্টের মাধ্যমে সিদ্ধান্ত নেওয়ার সময় এটি সবচেয়ে বেশি কাজে লাগে।

let age = 20;
let canVote = age >= 18; 

if (canVote) {
    console.log("আপনি ভোট দিতে পারবেন।");
} else {
    console.log("আপনি এখনো ভোট দেওয়ার যোগ্য হননি।");
}



let x = true;
let y = false; 

let numOne = Number(true);
let numTwo = Number(false);
console.log(numOne);
console.log(numTwo);

console.log(3 > 2);
console.log(3 < 2);



let age = 20;

let isAdult = age >= 18; 
console.log(isAdult); // Output: true (কারণ ২০, ১৮ এর চেয়ে বড়)
console.log(10 === 5); // Output: false



Node.js ব্যাকএন্ড এবং সাইবার সিকিউরিটিতে Boolean (true / false) ডাটা টাইপ সবচেয়ে
বেশি ব্যবহৃত হয় এক্সেস কন্ট্রোল (Authorization), ফ্ল্যাগ (Security Flags) এবং ফাংশনাল সুইচের কাজে।

১. এক্সেস কন্ট্রোল ও ইউজার রোল (Authorization)
সিস্টেমে কোনো ইউজার এডমিন কি না বা তার ফাইল ডিলিট করার পারমিশন আছে কি না, তা চেক করতে Boolean ব্যবহার করা হয়।


let isAdmin = true;
let isAccountActive = true;

function deleteUserAccount(userId) {
  // সিকিউরিটি চেক: একাউন্ট একটিভ এবং ইউজার এডমিন কি না
  if (isAdmin && isAccountActive) {
    return `User ${userId} deleted successfully by Admin.`;
  } else {
    return "Access Denied! You do not have permission to perform this action.";
  }
}

console.log(deleteUserAccount(102)); 
// Output: User 102 deleted successfully by Admin.




টু-ফ্যাক্টর অথেন্টিকেশন (2FA Security)
ইউজার সঠিক পাসওয়ার্ড দিলেও তার ২FA ভেরিফাইড কি না তা Boolean দিয়ে চেক করে লগইন পারমিশন দেওয়া হয়।

let isPasswordCorrect = true;
let is2FAVerified = false;

if (isPasswordCorrect && is2FAVerified) {
  console.log("Login Successful! Redirecting to Dashboard...");
} else if (isPasswordCorrect && !is2FAVerified) {
  console.log("Security Alert: Please enter your 2FA OTP code.");
} else {
  console.log("Login Failed: Incorrect Credentials.");
}
// Output: Security Alert: Please enter your 2FA OTP code.


এক্সপ্রেস কুকি সিকিউরিটি (Secure HTTP-Only Cookies)
Node.js (Express.js)-এ যখন কোনো সেশন কুকি বা JWT টোকেন ব্রাউজারে পাঠানো হয়, তখন হ্যাকার
যেন XSS (Cross-Site Scripting) বা MiTM (Man-in-the-Middle) অ্যাটাক করে টোকেন চুরি করতে না পারে, সেজন্য Boolean ফ্ল্যাগ সেট করা হয়:

// Express.js response cookie configuration
res.cookie('token', userToken, {
  httpOnly: true,  // true হলে জাভাস্ক্রিপ্ট (XSS) দিয়ে হ্যাকার কুকি পড়তে পারবে না
  secure: true,    // true হলে শুধু HTTPS (encrypted) কানেকশনে কুকি ট্রান্সফার হবে
  sameSite: 'strict'
});



ব্যাকএন্ড সিকিউরিটি ট্রিক (Boolean() Casting)
কখনো ক্লায়েন্ট থেকে কোনো হেডার বা টোকেন আসলে সেটি ফাঁকা কি না (Null/Undefined), তা ১ সেকেন্ডে সত্য নাকি মিথ্যা (true/false) বানিয়ে ফেলা যায়:

let authToken = req.headers['authorization'];

// ডাটা থাকলে true, খালি থাকলে false হয়ে যাবে
let isAuthenticated = Boolean(authToken); 

if (!isAuthenticated) {
  return "401 Unauthorized Request";
}
