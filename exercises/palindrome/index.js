// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// soln 1
// const palindrome = ((str) =>{
//     let reversed = ''
//     for (char of str){
//         reversed = char + reversed
//     }
//     return reversed === str
// }) 

// soln 2


const palindrome = ((str) =>{
    let letters = str.split('') 
    let reversed = ''
    letters.forEach(letter => {
        reversed = letter + reversed
    });
    return reversed === str
})

module.exports = palindrome;
