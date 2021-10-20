document.getElementById('navDiv').innerHTML = '<nav class="navigation"><ul><li><a href="#" onclick="toggleMenu()">&#9776; Menu</a></li><li><a href="/WDD330/index.html">Home</a></li><li><a href="/WDD330/views/notes.html">Weekly Notes</a></li><li><a href="/WDD330/views/t-a.html">Team Activities</a></li><li><a href="/WDD330/views/quiz/index.html">JS Ninja Quiz</a></li></ul></nav>' ;

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}