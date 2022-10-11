function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "shabeebkaip@gmail.com",
	Password : "IPPAimma1972",
	To : 'shabeebkaip@gmail.com',
	From : document.getElementById('email').value,
	Subject : "Hi",
	Body : "hi",
	}).then(
		message => alert("mail sent successfully")
	);
}