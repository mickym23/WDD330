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

// Chapter 15:1 Balloon Event Handler
const balloonEvent = () => {

	const balloon = document.getElementById('balloon');
	let size = 0;

	const getSize = (secondSize) => {
		size = secondSize;
		balloon.style.fontSize = size + 'px';
	}
	
	const eventHandler = (event) => {
		if (event.key == "ArrowUp") {
			if (size > 80) {
				balloon.innerHTML = '💥';
				document.body.removeEventListener("keydown", eventHandler);
				window.setTimeout(() => location.reload(), 3000);
			} else {
				getSize(size * 1.1);
				event.preventDefault();
			}
		}	else if (event.key == "ArrowDown") {
			getSize(size * 0.9);
			event.preventDefault();
		}
	}
	
	 getSize(20);
	 window.addEventListener("keydown", eventHandler);
}

// Chapter 15.2 Mouse Trail
const mouseTrail = () => {
	let trailElements = [];
	for (let i = 0; i < 25; i++) {
	  let node = document.createElement("div");
	  node.className = "trail";
	  document.body.appendChild(node);
	  trailElements.push(node);
	}
	let currentElement = 0;
	
	window.addEventListener("mousemove", event => {
	  let trail = trailElements[currentElement];
	  trail.style.left = (event.pageX - 10) + "px";
	  trail.style.top = (event.pageY - 10) + "px";
	  trail.style.padding = '-30%';
	  currentElement = (currentElement + 1) % trailElements.length;
	});
}

// refresh for Mouse Trail
const refreshPage = () => {
	location.reload();
}

// Chapter 15:3 Tab List
const enableTabs = () => {

	function asTabs(node) {
		let tabs = Array.from(node.children).map(node => {
			let button = document.createElement("button");
			button.textContent = node.getAttribute("data-tabname").toUpperCase();
			let tab = {node, button};
			button.addEventListener("click", () => selectTab(tab));
			return tab;
		 });	

		 let tabList = document.createElement("div");
    	for (let {button} of tabs) tabList.appendChild(button);
    	node.insertBefore(tabList, node.firstChild);

		 const selectTab = (selectedTab) => {
			for (let tab of tabs) {
				let selected = tab == selectedTab;
				tab.node.style.display = selected ? "" : "none";
				tab.button.style.color = selected ? "red" : "";
			 }
		  }
		  selectTab(tabs[0]);
	}
	asTabs(document.querySelector("tab-panel"));
}

// chapter 6.1: Vector Class
const vectorType = () => {
	class Vec {
		constructor (x, y) {
			this.x = x;
			this.y = y;
		}

		plus (vector) {
			let sumX = this.x + vector.x;
			let sumY = this.y + vector.y;
			return new Vec(sumX, sumY);
		}

		minus (vector) {
			let diffX = this.x - vector.x;
			let diffY = this.y - vector.y;
			return new Vec(diffX, diffY);
		}

		get length() {
			return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
		}
	}

	console.log(new Vec(1, 2).plus(new Vec(2, 3)));
	// → Vec{x: 3, y: 5}
	console.log(new Vec(1, 2).minus(new Vec(2, 3)));
	// → Vec{x: -1, y: -1}
	console.log(new Vec(3, 4).length);
	// → 5
}

// Chapter 6.2: Group Class
const groupClass = () => {
	class Group {
		constructor () {
			this.collection = [];
		}

		add (val) {
			if (this.collection.includes(val)) {
				console.log('This item has been added already.');
			} else {
				this.collection.push(val);
				console.log('Added!');
			}
		}

		delete (val) {
			const valIndex = this.collection.indexOf(val);
			this.collection.splice(valIndex, 1);
		}

		has (val) {
			if (this.collection.includes(val)) {
				return true;
			} else {
				return false;
			}
		}

		static from (range) {
			let group = new Group;
			for (let  i = range[0]; i <= range[1]; i++) {
				group.add(i);
			}
			return group;
		}
	 }
	 
	 let group = Group.from([10, 20]);

	 console.log(group.collection);
	 // [10, 11, 12, 13, 14, 15, 16, 17,18, 19, 20]
	 console.log(group.has(10));
	 // → true
	 console.log(group.has(30));
	 // → false
	 group.add(10);
	 // This item has been added already
	 group.delete(10);
	 console.log(group.has(10));
	 // → false
}

// Chapter 6.3: Iteratable Groups
const iteratableGroups = () => {
	class Group {
		constructor () {
			this.collection = [];
		}

		add (val) {
			if (this.collection.includes(val)) {
				console.log('This item has been added already.');
			} else {
				this.collection.push(val);
				console.log('Added!');
			}
		}

		delete (val) {
			const valIndex = this.collection.indexOf(val);
			this.collection.splice(valIndex, 1);
		}

		has (val) {
			if (this.collection.includes(val)) {
				return true;
			} else {
				return false;
			}
		}

		static from (vals) {
			let group = new Group;
			for (let val of vals) {
				group.add(val);
			}
			return group;
		}

		[Symbol.iterator]() {
			return new GroupIterator(this);
		 }
	 }

	 class GroupIterator {
		constructor(group) {
			this.group = group;
			this.currentPosition = 0;
		 }
	  

		 next() {
			if (this.currentPosition >= this.group.collection.length) {
				return {done: true};
			 } else {
				let result = {value: this.group.collection[this.currentPosition],
								  done: false};
				this.currentPosition++;
				return result;
			 }
		  }
		 }
		 
		 for (let value of Group.from(["a", "b", "c"])) {
			console.log(value);
		 }
		 // → a
		 // → b
		 // → c
}

// Chapter 6.4 Borrowing a Method
const borrowMethod = () => {
	let map = {one: true, two: true, hasOwnProperty: true};

	// Fix this call
	console.log(Object.prototype.hasOwnProperty.call(map, "one"));
	// → true
}

// Chapter 8.1: Retry
const retry = () => {
		class MultiplicatorUnitFailure extends Error {}

		function primitiveMultiply(a, b) {
		  if (Math.random() < 0.2) {
			 return a * b;
		  } else {
			 throw new MultiplicatorUnitFailure("Klunk");
		  }
		}
		
		function reliableMultiply(a, b) {
		  for (;;) {
			  try {
				  let output = primitiveMultiply(a, b);
				  return output;
			  } catch (e) {
				if (!(e instanceof MultiplicatorUnitFailure)) {
					throw e;
				}
			  }
		  }
		}
		
		console.log(reliableMultiply(8, 8));
		// → 64
}

// Chapter 8.2: Locked Box
const lockedBox = () => {
	const box = {
		locked: true,
		unlock() { this.locked = false; },
		lock() { this.locked = true;  },
		_content: [],
		get content() {
		  if (this.locked) throw new Error("Locked!");
		  return this._content;
		}
	 };
	 
	 function withBoxUnlocked(body) {
		let locked = box.locked;
		if (!locked) {
		  return body();
		}
	 
		box.unlock();
		try {
		  return body();
		} finally {
		  box.lock();
		}
	 }
	 
	 withBoxUnlocked(function() {
		box.content.push("gold piece");
	 });
	 
	 try {
		withBoxUnlocked(function() {
		  throw new Error("Pirates on the horizon! Abort!");
		});
	 } catch (e) {
		console.log("Error raised:", e);
	 }
	 
	 console.log(box.locked);
	 // → true
}

