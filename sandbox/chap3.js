// Chapter 3.1 Functions (Minimum)
const min = (arg1, arg2) => {
	return Math.min(arg1, arg2);
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


// Chapter 3.2 Functions (Recursion)
function isEven(n) {
	if (n == 0) {
		return true;
    } else if (n == 1) {
		return false;
    } else if (n < 0) {
		return isEven(-n);
    } else {
     	return isEven(n - 2); 
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false


// Chapter 3.3 Functions (Bean Counting)
const countBs = (word) => {
	let count = 0;
	 for (let  i = 0; i < word.length; i++) {
		 if (word[i] === 'B') {
			 count++
		 }
	 }
		return count;
 }
 
 const countChar = (word, letter) => {
	let count = 0;
	 for (let  i = 0; i < word.length; i++) {
		 if (word[i] === letter) {
			 count++;
		 }
	 }
		return count;
 }

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4