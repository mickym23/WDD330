function divDisplay() {
   let input  = document.getElementById("content").value;
   document.getElementById('outputDiv1').innerHTML = input;
}

let num = document.getElementById

function sumOf() {
   let ourSum = 0;
   let userInput = parseFloat(document.getElementById("number").value);

   for (i=userInput; i >= 0; i--) {
      ourSum += i;
   }
   document.getElementById('outputDiv2').innerHTML = ourSum;
}

function addNum () {
   let userInput1 = parseFloat(document.getElementById("firstNum").value);
   let userInput2 = parseFloat(document.getElementById("secondNum").value);

   let sum = userInput1 + userInput2;

   document.getElementById("outputDiv3").innerHTML = "Total: " + sum;
}