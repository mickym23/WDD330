/* Went through tutorial with:
   https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
   https://www.w3schools.com/tags/canvas_arc.asp
*/
function draw() {
   let canvas = document.getElementById('canvas');
   if (canvas.getContext) {
     let ctx = canvas.getContext('2d');
   
     ctx.beginPath();
     ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
     ctx.fillStyle = "#FFFF00"; 
     ctx.fill(); // Fill circle with yellow
     ctx.moveTo(110, 75);
     //Arc params: context.arc(x,y,radius,startingAngle,endingAngle,counterclockwise);
     ctx.arc(75, 75, 35, 0*Math.PI, 0.50*Math.PI, false);  // Mouth
     ctx.moveTo(65, 65);
     ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
     ctx.moveTo(95, 65);
     ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
     
     ctx.stroke();
   }
 }
 
 window.addEventListener('DOMContentLoaded', draw);