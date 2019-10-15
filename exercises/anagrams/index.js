// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (stringA, stringB) => {
	let mapA = buildCharMap(stringA);
	let mapB = buildCharMap(stringB);

    // let mapA 
    // let mapB
	// for (let char of stringA.replace(/[^\w]/g, '').toLowerCase()) {
	// 	if (!mapA[char]) {
	// 		mapA[char] = 1;
	// 	} else {
	// 		mapA[char] += 1;
	// 	}
	// }

	// for (let char of stringB.replace(/[^\w]/g, '').toLowerCase()) {
	// 	if (!mapB[char]) {
	// 		mapB[char] = 1;
	// 	} else {
	// 		mapB[char] += 1;
	// 	}
	// }
	if (Object.keys(mapA).length !== Object.keys(mapB).length) {
		return false;
	}

	for (let char in mapA) {
		if (mapA[char] !== mapB[char]) {
			return false;
		}
	}
	return true;
};

function buildCharMap(str) {
	const charMap = {};
	for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
		charMap[char] = charMap[char] + 1 || 1;
	}
	return charMap;
}

module.exports = anagrams;
