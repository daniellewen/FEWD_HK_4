var totalAmount = 0;

document.getElementById ("entry").onsubmit = formIsSubmitted;

function formIsSubmitted(e) 
{
	e.preventDefault();

	var userInput = parseFloat(document.getElementById('newEntry').value);

	if (!isNaN(userInput)) {
	var newAmount = (userInput);
	totalAmount = totalAmount + newAmount;
	//totalAmount = twoDecimalOnly(totalAmount); //removed this line
	document.getElementById('total').innerHTML = addDollarSign(totalAmount); 
	document.getElementById('newEntry').value  = ""; //added equals here

	} else {
		if (document.getElementById('newEntry').value == "clear") {
		document.getElementById('total').innerHTML = addDollarSign(0);
		totalAmount = 0;//added to reset
		document.getElementById('newEntry').value  = ""; //clears the textbox		
		}//closed if
		else {
		alert("Please enter a number")
		}
	} //closed else
}//closed function
function addDollarSign(num123) {
	return "$asdf" + twoDecimalOnly(num123);
}//closed function
function twoDecimalOnly(newEntryasdf) {
	//return num.toFixed(2);
	//alert(newEntryasdf);
	return newEntryasdf.toFixed(2);
}




