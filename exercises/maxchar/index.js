// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
	const chars = {};
	let max = 0;
	let maxcharacter = '';
	for (let char of str) {
		if (!chars[char]) {
			chars[char] = 1;
		} else {
			chars[char]++;
		}
	}
	for (let char in chars) {
		if (chars[char] > max) {
			max = chars[char];
			maxcharacter = char;
		}
	}
	return maxcharacter;
	//short equivalent of the code in the first for loop
	// chars[char] = chars[char] +1 || 1

	//for of loop is used in iterables i.e strings and arrays
	// for in is used in objects  i.e non iterables
};

module.exports = maxChar;
