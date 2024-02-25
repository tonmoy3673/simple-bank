// Phone Search
// URL Format: https://openapi.programming-hero.com/api/phones?search=${searchText}

// Example: https://openapi.programming-hero.com/api/phones?search=iphone

// Phone detail url:
// URL Format: https://openapi.programming-hero.com/api/phone/${id}

// Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089

// let fruits = ['Apple', 'Orange','Banana'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’

// const findIndex=fruits.indexOf('Banana');
// console.log(findIndex);
//  fruits[1]='Watermelon';
//  console.log(fruits);



// Practice Problem 1

// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

// Write a program to find your and your friends’ grades using if-else.
// const yourScore = 85;
// const tomScore = 66;
// const janeScore = 95;
// const peterScore = 56;
// const johnScore = 40;


// const findResult=(marks)=>{
//     if (isNaN(marks)) {
//         return('Invalid Number!!'+ marks)
//     }
//     else if (marks>100 || typeof marks==='string' || typeof marks==='boolean') {
//         return('Invalid Number'+" "+ marks)
//     }
//     else if (marks<=100 && marks>=80) {
//         return('You Got A' +' '+ marks)
      
//     }

//     else if (marks>=60 && marks<80) {
//         return ('You Got B' +' '+marks)
//     }
//     else if (marks>=50 && marks<60) {
//         return('You Got C'+" "+marks)
//     }
//     else if (marks>=40&& marks<50) {
//         return ('You Got D'+" "+marks)
//     }
//     else if (marks<40 || marks>=0) {
//         return('You Are Fail'+" "+ marks)
//     }


    
// };



// const result=findResult(0);
// console.log(result);



// Practice Problem 2

// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.


// let number=[13,79,45];

// const findLarge=(num)=>{
//     let large=[0];
//     for (let index = 0; index < num.length; index++) {
//         const element = num[index];
//         if (element>large) {
//             large=element
//         }
        
//     }
//     return large;
    
// };

// const result=findLarge(number);
// console.log(result);





// প্রাকটিস চ্যালেঞ্জ -১:  

// ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছ। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের Grade তুমি জানো না। তবে তাদের নম্বর জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS Code দিয়ে তাদের Grade বের করে দিতে পারবে?

// ১) যারা ৫০ এর নিচে পেয়েছে, তাদের Grade F.

// ২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের Grade D.

// ৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের Grade C.

// ৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের Grade B.

// ৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের Grade A.

// ৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের Grade A+.


// const findResult=(mark)=>{
//     if (isNaN(mark) || typeof mark==='string' || mark>100 || typeof mark ==='boolean') {
//         return ('Invalid Number '+" "+ mark)
//     }

//     else if (mark>=90 && mark<=100) {
//         return ('You Got A+ Grade: Marks='+" "+ mark)
//     }
//     else if (mark>=80 && mark<90) {
//         return('You Got A Grade: Marks='+" "+mark)
//     }
//     else if (mark>=70 && mark<80) {

//          return('You Got B Grade: Marks='+" "+mark)
//     }
//     else if (mark>=60 && mark<70) {
//         return('You Got C Grade: Marks='+" "+mark)
//     }

//     else if (mark>=50 && mark<60) {
//         return('You Got D Grade: Marks='+" "+mark)
//     }
//     else if (mark<50 || mark<0) {
//         return ('You Are Failed: Marks='+" "+mark)
//     };


// }


// const result=findResult('anfwoifn');

// console.log(result);


// প্রাকটিস প্রব্লেম-২: 

// তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা Signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান Green, Yellow বা Red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো।

// let signal='';

// if (signal==='red') {
//     console.log('Danger!!');
// } else if (signal==='green') {
//     console.log('Just Go!!');
// } 

// else if (signal==='yellow') {
//     console.log('Break!!');
// }

// else{
//     console.log('Input a valid signal!!');
// }



// প্রাকটিস চ্যালেঞ্জ-৩ টা: 

// ১. LeapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি Leap Year নাকি সেটা চেক করো। Leap Year হলে ফাংশন True রিটার্ন করবে আর Leap Year না হলে False রিটার্ন করবে।


// const findLeapYear=(year)=>{
//     if (year%4===0 && year%100 !==0 || year%400===0) {
//         return ('Its Leap Year '+" "+year)
//     } else {
//         return ('Its not Leap Year '+" "+year)
//     }
// };

// const result=findLeapYear(2020);
// console.log(result);

// ২. তোমার বয়স কি Odd নাকি Even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন True রিটার্ন করবে আর Odd হলে False রিটার্ন করবে।

// const findAge=(age)=>{

//     return age%2===0 ? 'True' : 'False';

// };

// const result=findAge(29)
// console.log(result);

// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 

// const convertHours=(hour,min)=>{
   
//     return parseFloat(hour*60) + parseFloat(min)

// };

// const result=convertHours(2,42);

// console.log(result);


// =========== Find the large Number ==========
// const number=[10,20,300,80,30,50,23,100];
 
// const findLarge=(num)=>{
//     let large=0;
//     for (let index = 0; index < num.length; index++) {
//         const element = num[index];
//         if (element>large) {
//             large=element
//         }
        
//     }
//     return large;
// }

// const result=findLarge(number);
// console.log(result);

// ========== Find the Odd Number ===========//
// const number=[10,20,80,30,50,23,100,33,37];

// const findOdd=(num)=>{
//     let odd=[];
//     for (let index = 0; index < num.length; index++) {
//         const element = num[index];
//         if (element%2===0) {
//             odd.push(element)
//         }
//     }

//     return odd;
// }

// const result=findOdd(number);
// console.log(result);


// ================= Find Duplicate ================//


// const names=['abul','kabul','dadul','mabul','kabul','dadul','abul','kabul','dadul','abul'];

// const findDuplicate=(name)=>{
//   let duplicate=[];
//  for (const nam of name) {
//     if (duplicate.includes(nam)===false) {
//         duplicate.push(nam)
//     }
//  }
//  return duplicate;
// };

// const result=findDuplicate(names);
// console.log(result);






// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 


// const name='Tonmoy';
// const isStatus=true;
// const age=30;





// ২. তুমি কি জানো কখন Let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন Const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে Let এবং Const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই Let এবং Const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। 


// const myName='Tonmoy';
// let myAge=28;
// myAge=30;




// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 

// const A=30;
// const B=20;

// const add=A+B;
// const sub=A-B;
// const multi=A*B;
// const divi=A/B;
// const modulus=A%B;






// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 


// const A=30;
// const B=20;

// const compo=A<B;




// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 

// const name='Tonmoy';
// const age=30;

// const myId=name==='Tonmoy' && age===30 ?'Its Me' :'Unknown';
// const mySelf=name==='Tonmoy' || age===20 ?'Its Me' :'Unknown';
// console.log(myId +' : '+mySelf);





// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি If-Else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 

// const myName='Mehedi Hasan Tonmoy';

// if (myName) {
//     console.log('Its Me');
// } else {
//     console.log('Unknown');
// }

// // .



// ৭. তোমাকে যদি বলে একটা While লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

// let i=7;
// while (i<=19) {
//     i++;
//     if (i%2===1) {
//         console.log(i);
//     }
// }






// ৮. তোমাকে যদি বলা হয় তুমি একটা Array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই Array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। Array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 



// let number=[10,19,23,40,28,34,60];
// console.log(number.length);
// number[4]=50;
// number.push(100,200);
// number.pop();
// console.log(number);





// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা Array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার For লুপ হোক বা For Of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 

// let number=[10,19,23,40,28,34,60];
// for(i=0;i<number.length;i++){
   
//     console.log(number[i]);
// }






// ১০. তোমাকে যদি বলা হয়। একটা Array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে Console Log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 


// const number=[70,84,86,90,34,44,56,899,900,9];
//     let largeNumber=[];
// for (let index = 0; index < number.length; index++) {

//     const element = number[index];
//     if (element>80) {
//         largeNumber.push(element);
        
//     }

    
// }
// console.log(largeNumber);



// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 


// const multi=(A,B,C)=>{return A*B*C};
// const result=multi(5,5,5);
// console.log(result);




// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 


// const myId={
//     name:'Tonmoy',
//     age:30,
//     status:'Unmarried'
// };

// // simple way//

// myId.age=50;
// console.log(myId);

// //  another way//
// myId['age']=40
// console.log(myId);





// উপরের ১২টা কাজের মধ্যে তুমি যদি ৯টা থেকে ১০ টা বা তার বেশি কাজ করে ফেলতে পারো। তাহলে তোমার বেসিক কনসেপ্ট ঠিক আছে। যদি ৫টা থেকে ৯টা অর্থাৎ ৫ টা, ৬টা, ৭টা বা ৮টা করতে পারো। তাহলে তোমাকে হার্ডওয়ার্ক করতে হবে। একটু বেশি সময় দিতে হবে। আর তুমি যদি ৫টা এর কম। অর্থাৎ ০, বা ১টা বা ২টা বা ৩টা বা ৪টা পেয়ে থাকো তাহলে তোমাকে ডিফারেন্টভাবে জাভাস্ক্রিপ্ট এ আরো সময় দিতে হবে। সেক্ষেত্রে তুমি আমাদের ইমেইল করে দিতে পারো Web@Programming-Hero.Com এ। তোমার ওভারঅল অবস্থা লিখে। আমরা তোমাকে স্পেশালভাবে তোমার সিচুয়েশন অনুসারে গাইডলাইন দিবো। 











// প্রব্লেম সলভিং চেকলিস্ট/সেলফ এসেসমেন্ট : 







// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে FeetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে Feet আর রিটার্ন করবে Inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

// const FeetToInch=(feet)=>{
//     return parseFloat(feet*12)
// };

// const result=FeetToInch(2.5);
// console.log(result);


// ২. একদম ফাংশন এর নাম হুবহু CentimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

// const CentimeterToMeter=(cm)=>{
//     return parseFloat(cm*0.01)
// };

// const result=CentimeterToMeter(110.8);
// console.log(result);





// .



// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে PaperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

// এইবার ভালো করে খেয়াল করো। 



// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 



// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 



// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

// এখন তোমার কাজ হচ্ছে PaperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 



// উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 

// const PaperRequirements=(book1,book2,book3)=>{
//     const firstBook=book1*100;
//     const secondBook=book2*200;
//     const thirdBook=book3*300;
//     const totalPage=firstBook+secondBook+thirdBook
//     return(totalPage);

// };

// const result=PaperRequirements(3,2,3);
// console.log(result);





// .



// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে BestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা Array নিবে। সেই Array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

// const friends=['Rohimhhhhh','Karimamama','Abullllahaaafw','Kgafafao']
// let largeName=[];
// const BestFriend=(friend)=>{
//     for(i=0;i<friend.length;i++){
//         const names=friend[i];
//         if (names.length>largeName.length) {
//             largeName=names;
//         }
//     }
//     return largeName;
// }

// const result=BestFriend(friends);
// console.log(result);


// .



// ৫. এইটা একটু ট্রিকি হতে পারে। একটা Array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা Array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

// const number=[10,0,40,34,-30,29,-23];

// const findPositive=(num)=>{
//     let positive=[];
//     for (let index = 0; index < num.length; index++) {
//         const element = num[index];
//         if (element>=0) {
            
//             positive.push(element);
//             continue;
//         } else {
//             break;
//         }
//     }
//      return positive;
// };

// const result=findPositive(number);
// console.log(result);




// Create a input field and add text=======>

// document.getElementById('btn').addEventListener('click',function() {
//     const inputField=document.getElementById('input-field');
//     const inputText=inputField.value;
//     const titleText=document.getElementById('text');
//     titleText.innerText=inputText;
//     inputField.value=' ';
// })

// Create a comment box and add comments=====>


// ============== Adding Comment =========//

// document.getElementById('btn-comment').addEventListener('click',function () {
//     const commetField=document.getElementById('text-area').value;
//     const commentText=document.getElementById('comment');
//     const newTag=document.createElement('h3');
//     commetField.value=' ';
//     newTag.innerText=(commetField)
//     commentText.appendChild(newTag);
    
    
    

// })



// ======================= Now Bank ===================//






