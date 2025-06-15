const billInput = document.getElementById("billInput"); //<input id="billInput" />
const tipInput = document.getElementById("tipInput");
const personInput = document.getElementById("personInput");
const result = document.getElementById("result");
const calculate = document.getElementById("calculateBtn");

calculate.addEventListener("click", function () {
	const bill = parseFloat(billInput.value);
	const tipPercent = parseFloat(tipInput.value);
	const persons = parseInt(personInput.value);

	if (isNaN(bill) || isNaN(tipPercent)) {
		result.textContent = "Please enter valid numbers";
		result.style.color = "red";
		return;
	}

	const tip = bill * (tipPercent / 100);
	const total = bill + tip;
	const share = total / persons;

	//toFixed(2) show two decimal places
	// result.textContent =
	// 	"Tip: RM" + tip.toFixed(2) + " | Total RM: " + total.toFixed(2);

	//Template literals - you dont need to escape the quotes. ${variables}
	// `` <- back tick
	result.textContent = `Tip: RM ${tip.toFixed(2)} | Total RM: ${total.toFixed(
		2
	)} | Share RM: ${share.toFixed(2)}`;
});

billInput.addEventListener("keyup", function (event) {
	if (parseFloat(event.target.value) < 1)
		alert("Total bill must be atleast 1");
});
