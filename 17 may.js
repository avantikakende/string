// Class Questions - 
// 1 . Given a sentence, capitalize the first character of each word.
// 	input - this is javascript
	// output - This Is JavaScript

    // const input = s => s.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    // const output = input("this is javascript");
    // console.log(output);  
    

// 2. Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
//  input - ["javascript", "react", "node"]
// 	output - [true, false, false]

// function check(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i].includes('Javascript'));
//     }
//     return result;
// }
// const input = ["javascript", "react", "node"];
// const output = check(input);
// console.log(output);  


// 3. Given a string which contains an email address, return true if the given email is valid, else return false.
// 	input - puran@navgurukul.org
// 	output - true
// 	input - puran@navgurukul
// 	output - false
// 	input - puran@gmail.com
// 	output - true

// function valid(email){
//     if (email.includes="@") && (email.includes="com") || (email.includes="org"){
//         return true;
//     }
//     else{
//         return false;
//     }
//     console.log(email.)
// }


// 4. Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.
// 	input - below, elbow
// 	output - true
// 	input - night, thing
// 	output - true

// function number(str1, str2) {
//     return str1.split('').sort().join('') === str2.split('').sort().join('');
// }
// console.log(number("below", "elbow")); 
// console.log(number("night", "thing")); 


// 5. Reverse the given sentence.
// 	input- i am learning javascript.
// 	output - tpircsavaj gninrael ma i

// function reverseSentence(sentence) {
//     return sentence.split(' ').reverse().join(' ');
// }
// function reverse(str){
//     let s='';
//     for(let i=str.length-1; i>=0; i--){
//         s=s+str[i]
//     }
//     return s;
// }
// let str=" at hostel"
// let rev=reverse(str)
// console.log(rev);


// 6. Reveres the given string word by word then return the reversed string.
// 	input - Success comes to those who work hard
// 	output - hard work who those to comes Success



