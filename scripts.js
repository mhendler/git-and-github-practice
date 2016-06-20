window.onload  = function() {

	function getUserEmail() {
	var buttonSelect = document.querySelector("#button-yellow");
	buttonSelect.addEventListener('click', email);
}
getUserEmail();

function email() {
	var email = prompt('Please enter your email'); 

	if(email !== null) {
		console.log(email);
	}
}
};


