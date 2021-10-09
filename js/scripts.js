// Chapter 2.1 Looping a Triangle
const loopTriangle = () => {
	let hash = '';
	for (let i = 0; i < 7; i++) {
		hash += '#';
		console.log(hash);
	}
}

// Chapter 2.2 FizzBuzz
const fizzBuzz = () => {
	let num = 0;
	let output = '';
	for (let i = 0; i < 100; i++) {
		num += 1;
		if ((num % 5 === 0) && (num % 3 === 0)){
			output = 'FizzBuzz';
		} else if (num % 3 === 0) {
			output = 'Fizz';
		} else if (num % 5 === 0) {
			output = 'Buzz';
		} else {
			output = num;
		}
		console.log(output);
	}
}

// Chapter 2.3 Chessboard
const chessBoard = () => {
	let board = "";
	let size = 8;

	for (let y = 0; y < size; y++) {
		for (let x = 0; x < size; x++) {
			if ((x + y) % 2 == 0) {
				board += " ";
			} else {
				board += "#";
			}
		}
		board += "\n";
	}
	console.log(board);
}

// Chapter 3.1 Functions (Minimum)
const minimums = () => {
	const minNums = () => {
		const min = (arg1, arg2) => {
			return Math.min(arg1, arg2);
		}

		console.log(min(0, 10));
		// → 0
		console.log(min(0, -10));
		// → -10
	}
	minNums();
}

// Chapter 3.2 Functions (Recursion)
const testingRecursion = () => {
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
}


// Chapter 3.3 Functions (Bean Counting)
const beanCounting = () => {
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
}

// Chapter 4.1 Sum of Range
const sumRange = () => {
	
	const range = (start, end, step = start < end ? 1 : -1) => {
		const numArray = [];

      if (step > 0) {
		for (start; start <= end; start+=step) {
			numArray.push(start);
		}
      } else {
		for (start; start >= end; start += step) {
			numArray.push(start);
		}
      }
      return numArray;
	}

	const sum = (nums) => {
		const rangeSum = nums.reduce((num, a) => num + a, 0);
		return rangeSum;
	}
	
	console.log(range(1, 10));
	// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	console.log(range(5, 2, -1));
	// → [5, 4, 3, 2]
	console.log(sum(range(1, 10)));
	// → 55
}

// Chapter 4.2 Reversing Arrays (Without Reverse Method)
const reverse = () => {
	const reverseArray = (arr) => {
		let reversedArray = new Array;
		for (let i = arr.length-1; i >= 0; i--) {
			reversedArray.push(arr[i]);
		}
		return reversedArray;
	}

	const reverseArrayInPlace = (arr) => {
		for (let i = 0; i < Math.floor(arr.length / 2); i++) {
			[arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
	  }
	  return arr;
	}

	console.log(reverseArray(["A", "B", "C"]));
	// → ["C", "B", "A"];
	let arrayValue = [1, 2, 3, 4, 5];
	reverseArrayInPlace(arrayValue);
	console.log(arrayValue);
	// → [5, 4, 3, 2, 1]
}

// Chapter 4.3 A list
const runList = () => {
	const arrayToList = (arr) => {
		let list = null;
  		for (let i = arr.length - 1; i >= 0; i--) {
    	list = {
			 value: arr[i], 
			 rest: list};
  		}
  		return list;
	}

	const listToArray = (list) => {
		let arr = [];
		for (let node = list; node; node = node.rest) {
		  arr.push(node.value);
		}
		return arr;
	 }
	 
	const prepend = (value, list) => {
		return {
			value,
			rest: list
		};
	 }
	 
	const nth = (list, nth_num) => {
		if (!list) {
			return undefined;
		} else if (nth_num === 0) {
			return list.value;
		} else {
			return nth(list.rest, nth_num - 1);
	 	}
	}
	 
	 console.log(arrayToList([10, 20]));
	 // → {value: 10, rest: {value: 20, rest: null}}
	 console.log(listToArray(arrayToList([10, 20, 30])));
	 // → [10, 20, 30]
	 console.log(prepend(10, prepend(20, null)));
	 // → {value: 10, rest: {value: 20, rest: null}}
	 console.log(nth(arrayToList([10, 20, 30]), 1));
	 // → 20
}

// Chapter 4.4 Deep Comparison
const deepComparison = () => {
	const deepEqual = (obj1, obj2) => {
		if (obj1 === obj2) {
			return true;
		}
		
		if (typeof obj1 != "object" || obj1 == null || typeof obj2 != "object" || obj2 == null) {
			return  false;
		}

		keys1 = Object.keys(obj1);
		keys2 = Object.keys(obj2);

		if (keys1.length != keys2.length) {
			return false;
		}
		
		for (let key of keys1) {
			if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
				return false;
			}
			return true;
		}
	}
    
    let obj = {here: {is: "an"}, object: 2};
	console.log(deepEqual(obj, obj));
	// → true
	console.log(deepEqual(obj, {here: 1, object: 2}));
	// → false
	console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
	// → true
}

// Chapter 14.1 Build a Table
// I went through the book and struggled with this one, this is mainly the Eloquent JS Chap 14.1 code. 
// I have gone through the code and understand how it works and how the data is passed through to the div
const displayTable = () => {

	const MOUNTAINS = [
		{name: "Kilimanjaro", height: 5895, place: "Tanzania"},
		{name: "Everest", height: 8848, place: "Nepal"},
		{name: "Mount Fuji", height: 3776, place: "Japan"},
		{name: "Vaalserberg", height: 323, place: "Netherlands"},
		{name: "Denali", height: 6168, place: "United States"},
		{name: "Popocatepetl", height: 5465, place: "Mexico"},
		{name: "Mont Blanc", height: 4808, place: "Italy/France"}
	 ];

	 const buildTable = (data) => {
	 let table = document.createElement("table");
  
    let fields = Object.keys(data[0]);
    let headRow = document.createElement("tr");
    fields.forEach(function(field) {
      let headCell = document.createElement("th");
      headCell.appendChild(document.createTextNode(field));
      headRow.appendChild(headCell);
    });
    table.appendChild(headRow);

    data.forEach(function(object) {
      let row = document.createElement("tr");
      fields.forEach(function(field) {
        let cell = document.createElement("td");
        cell.appendChild(document.createTextNode(object[field]));
        row.appendChild(cell);
      });
      table.appendChild(row);
    });

    return table;
	}
	document.querySelector("#mountains").appendChild(buildTable(MOUNTAINS));
	
	const disableButton = () => {
		document.getElementById('tableButton').setAttribute("disabled", "disabled"); 
	 }

	 disableButton();
}

// Chapter 14.2 Elements by Tag name
const logElements = () => {
	const byTagName = (node, str) => {
		let arr = [];
		str = str.toUpperCase();
		
		const countInstances = (node) => {
			for (let i = 0; i < node.childNodes.length; i++) {
				let child = node.childNodes[i];
				if (child.nodeType == document.ELEMENT_NODE) {
					if (child.nodeName == str) {
						arr.push(child);
					}
					countInstances(child);
				}
			}
		}
		countInstances(node);
		return arr;
	}
	console.log(byTagName(document.body, "h1").length);
	// → 2
	console.log(byTagName(document.body, "span").length);
	// → 1
	let para = document.querySelector("p");
	console.log(byTagName(para, "span").length);
	// → 0
}



