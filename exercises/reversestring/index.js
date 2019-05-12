// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// soln one 
// const reverse = ((str) => {
//     const arr = str.split('')
//     arr.reverse()
//     return arr.join('') //join array elements into string

// })


// soln2
const reverse = ((str)=>{
    let reversed = ""
    for (let character of str){
        reversed = character + reversed //add the character to the start of the reversed string
    }
    return reversed

})


module.exports = reverse;
