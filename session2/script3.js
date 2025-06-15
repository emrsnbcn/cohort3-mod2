// DOM TREE
// JavaScript sees your html document
// let html = {
// 	head: {
// 		title: "My First Website",
// 	},
// 	body: {
// 		h1: "Hello World",
// 		p: "MESSAGE HERE",
// 	},
// };

document.getElementById("heading").style.color = "red";

// document.getElementsByClassName("second")[0].style.color = "blue";
// document.getElementsByClassName("second")[0].style.color = "blue";
// document.getElementsByClassName("second")[1].style.color = "green";
// document.getElementsByClassName("second")[2].style.color = "yellow";

let h3s = document.getElementsByClassName("third");
console.log(h3s);
console.log(h3s.length);

//turn all text with the class third into blue
//h3 text at index 2 should be green
//h3 text at index 4 should be yellow
//h3 text at index 6 should be red

for (let i = 0; i < h3s.length; i++) {
	h3s[i].style.color = "blue";
	if (i === 2) h3s[i].style.color = "green";
	if (i === 4) h3s[i].style.color = "yellow";
	if (i === 6) h3s[i].style.color = "red";
}

// document.querySelector - targets one element
// document.querySelectorAll - targets many elements

let h4 = document.querySelectorAll(".h4");
console.log(h4);
h4[0].style.color = "red";

let orig = document.getElementById("originalText"); //<h1>
let btnChange = document.getElementById("btnChange");

let para = document.getElementById("para");
let hidePara = document.getElementById("hidePara");

let showPara = document.getElementById("showPara");
showPara.style.display = "none";

//addEventListener('event', function() {})
btnChange.addEventListener("click", function () {
	orig.textContent = "The text has been changed!";
});

para.addEventListener("mouseover", function () {
	para.style.color = "blue";
});

hidePara.addEventListener("click", function () {
	para.style.display = "none";
	showPara.style.display = "inline";
});

showPara.addEventListener("click", function () {
	para.style.display = "block";
});
