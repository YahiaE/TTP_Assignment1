function increment(){
	var counter = document.getElementsByClassName("donation_money__text")[1];
	var amountDonated = document.getElementById("rangeValue");
	var total = parseInt(counter.innerHTML.substring(1)) + parseInt(amountDonated.innerHTML.substring(1));


	counter.innerHTML = "$" + total;
	clearInfo();
}

function clearInfo(){
	var first = document.getElementById("firstName");
	var last = document.getElementById("lastName");
	var email = document.getElementById("email");
	var slider = document.querySelector('input[type=range]');
	var amountDonated = document.getElementById("rangeValue");

	first.value = last.value = email.value = ""
	slider.value = 1;
	amountDonated.innerHTML = "$1";
}
