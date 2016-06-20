window.onload  = function() {
	getUserEmail();
	};

function getUserEmail() {
	var buttonSelect = document.querySelector("#button-yellow");
	buttonSelect.addEventListener('click', email);
}

function email() {
	var email = prompt('Please enter your email'); 

	if(email !== null) {
		console.log(email);
	}
}


