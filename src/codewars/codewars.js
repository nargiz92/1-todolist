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
//
// console.log(disemvowel('hOAEjdeeareaoiyu'))
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
//
// console.log(problem(2))

//------------------------------------------------------------------------------

//Bin to Decima
//Complete the function which converts a binary number (given as a string) to a decimal number.
//Solution

function binToDec(bin){
    return parseInt(bin,2)
}
//------------------------------------------------------------------------------------
//Function 1 - hello world
//Make a simple function called greet that returns the most-famous "hello world!".
//
// Style Points
// Sure, this is about as easy as it gets.
// But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

const greet=()=>'hello world!'

//---------------------------------------------------------------------------------
//Who likes it?
//You probably know the "like" system from Facebook and other pages.
// People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//
// Implement the function which takes an array containing the names of people that like an item.
// It must return the display text as shown in the examples:
//Solution
function likes(names) {

return names.length===1
    ?`${names} likes this`:(names.length===2)
        ?`${names[0]} and ${names[1]} like this`:(names.length===3)
            ?`${names[0]}, ${names[1]} and ${names[2]} like this`:(names.length>3)
                ?`${names[0]}, ${names[1]} and ${names.length-2} others like this`
                :`no one likes this`

}

// console.log(likes([]))
// console.log(likes(["Jacob", "Alex",'Ann']))
// console.log(likes(["Jacob", "Alex",'Ann','Ali']))
// console.log(likes(["Jacob", "Alex"]))
//----------------------------------------------------------------------------------------------

//Grasshopper - Debug sayHello
//The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard.
// It is your job to fix the code and get the program working again!
//Solution

function sayHello(name) {
    return `Hello, ${name}`
}


//---------------------------------------------------------------------------------------------------
//Returning Strings
//Make a function that will return a greeting statement that uses an input;
// your program should return, "Hello, <name> how are you doing today?".
//Solution
function greet1(name){
   return `Hello, ${name} how are you doing today?`
    //your code here
}

//console.log(greet1('Nargiza'))
//---------------------------------------------------------------------------------------------------------
//A Needle in the Haystack
//Can you find the needle in the haystack?
//
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
//
// After your function finds the needle it should return a message (as a string) that says:
//
// "found the needle at position " plus the index it found the needle

//Solution:

function findNeedle(haystack) {
  const stack=haystack.findIndex((st)=>{
      return st==='needle'
  })
    return `found the needle at position ${stack}`
    // your code here
}

//console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))
//----------------------------------------------------------------------------------------------------------

//TS
//Return Negative
//In this simple assignment you are given a number and have to make it negative.
// But maybe the number is already negative?
//Solution

// export const makeNegative = (num: number): number => {
//     // TODO
//     return Math.abs(num)&&-Math.abs(num)
//
// };
//console.log(makeNegative(8))

//-----------------------------------------------------------------------------------------------------------------------------------------
//Beginner - Lost Without a Map
//Given an array of integers, return a new array with each value doubled.
//Solution
function maps(x){
    return x.map(el=>el+el)
}
//-------------------------------------------------------------------------------------------------------
//Convert a Boolean to a String
//Implement a function which convert the given boolean value into its string representation.
//Solution
const booleanToString=(b)=> b===true?'true':'false'
//------------------------------------------------------------------------------------------------------------------
//Are You Playing Banjo?
//Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
//
// The function takes a name as its only argument, and returns one of the following strings:
//
// name + " plays banjo"
// name + " does not play banjo"

//Solution

function areYouPlayingBanjo(name) {
    // Implement me
    return name[0]==='R'?`${name} plays banjo`:(name[0]==='r')?`${name} plays banjo`:`${name} does not play banjo`
}

//console.log(areYouPlayingBanjo('ramira'))
//--------------------------------------------------------------------------------------------------
//In this kata you will create a function that takes a list
// of non-negative integers and strings and returns a new list with the strings filtered out.
//Solution:
function filter_list(l) {
    return l.filter(t=>typeof t=="number")
    // Return a new array with the strings filtered out
}

//console.log(filter_list(['apple', 2, 'hi',5]))

//-----------------------------------------------------------------------------------------------------
//The Hashtag Generator
//It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

//Solution
function generateHashtag (str) {
if (str===''||str===' '){
   return false
}
if (str){
    const a=  str.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
      const b= a.split(' ')
     const c= b.filter(el=>el!=='').join('')
   return  c.length>=140?false:(c==='#')?false:(c==='')?false:(c===' ')?false:`#${c}`
}

}

//console.log(generateHashtag(''))

//-----------------------------------------------------------------------------------------------
//MakeUpperCase
//Write a function which converts the input string to uppercase.
//Solution
const makeUpperCase=(str) =>str.toUpperCase()
    // Code here

console.log(makeUpperCase('hello'))