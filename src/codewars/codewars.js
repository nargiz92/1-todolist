//  const countSheeps = (arrOfSheep) => {
//     return arrOfSheep.filter(el=>el===true).length
// }
// console.log(countSheeps([true,true,false]))


// Abbreviate a Two Word Name;
//  Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
//      The output should be two capital letters with a dot separating them.
//
//      It should look like this:
//
//  Sam Harris => S.H
//
//  patrick feeney => P.F

// Solution
//
//  function abbrevName(name){
//     return  name.map(word => `${word[0].toUpperCase()}.`).join('')
//
//  }
//
//  console.log(abbrevName("Sam Harris"))

//--------------------------------------------------------------------------
// Trolls are attacking your comment section!
//
//     A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
//     For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//
//     Note: for this kata y isn't considered a vowel.

//Solution
function disemvowel(str) {
    return str.replace(/[aeuio]/gi, '')
}

console.log(disemvowel('hOAEjdeeareaoiyu'))
//-------------------------------------------------------------------------------------------------------
// Hello World - Without Strings
// You need to create a function, helloWorld, that will return the String Hello, World!
// without actually using raw strings. This includes quotes, double quotes and template strings.
// You can, however, use the String constructor and any related functions.
//

//solution
const greeting = 'Hello, World!'
const helloWorld = () => greeting

//--------------------------------------------------------------------------------------------------
//
// //Convert boolean values to strings 'Yes' or 'No'.
// //Solution
// function boolToWord( bool ){
//     return bool?'Yes':'No'
// }
//
//
// console.log(boolToWord(true))

//_____________________________________

//Hex to Decimal
//Complete the function which converts hex number (given as a string) to a decimal number.
//Solution.

function hexToDec(hexString){
   return parseInt(hexString,16)
    //your code here
}
//-----------------------------------------------------------------------
//Vowel remover

//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//Solution
function shortcut (string) {
    return string.replace(/[aeuio]/gi, '')
}

shortcut('Hello')

//----------------------------------------------------------------------------
//Create Phone Number
//Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.
//Solution
function createPhoneNumber(numbers){
let n1=numbers.toString()
    let n2=n1.replace(/,/g,'')
        let n3=`(${n2[0]}${n2[1]}${n2[2]}) ${n2[3]}${n2[4]}${n2[5]}-${n2[6]}${n2[7]}${n2[8]}${n2[9]}`
   return n3
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

//--------------------------------------------------------------------------
//Super Duper Easy
//Make a function that returns the value multiplied by 50 and increased by 6.
// If the value entered is a string it should return "Error".
//Solution

function problem(x){

   return ( typeof x ==='number') ?x*50+6:'Error'
    //your code here
}

console.log(problem(2))