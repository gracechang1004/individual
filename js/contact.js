var submission = {};

document.addEventListener("DOMContentLoaded", function() {
	submission.firstname = document.getElementById("firstname");
	submission.lastname = document.getElementById("lastname");
	submission.email = document.getElementById("email");
	submission.message = document.getElementById("message");
})

function isNotEmpty(value) {
 	if (value == null || typeof value == 'undefined' ) return false;
 	return (value.length > 0);
}

function isEmail(email) {
	let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(String(email).toLowerCase());
}

function submissionValidation(submission, validationFunction) {
	if (submission == null) return false;

	let isSubmissionValid = validationFunction(submission.value)
	if (!isSubmissionValid) {
		submission.className = 'placeholderRed';
	} else {
		submission.className = '';
	}

	return isSubmissionValid;
}

function isValid() {
	var valid = true;

 	valid &= submissionValidation(submission.firstname, isNotEmpty);
	valid &= submissionValidation(submission.lastname, isNotEmpty);
	valid &= submissionValidation(submission.email, isEmail);
	valid &= submissionValidation(submission.message, isNotEmpty);

	return valid;
}

class User {
	constructor(firstname, lastname, email, message) {
 		this.firstname = firstname;
 		this.lastname = lastname;
 		this.email = email;
 		this.message = message;
 	}
}

function sendContact() {
	if (isValid()) {
		let usr = new User(firstname.value, lastname.value, email.value);

		alert("Thanks " + usr.firstname + ", your message has been sent!")
	} else {
		alert("There was an error")

	}
}

