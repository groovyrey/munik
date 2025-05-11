document.getElementById('togglePassword').addEventListener('change', function() {
	const passwordInput = document.getElementById('password');
	passwordInput.type = this.checked ? 'text' : 'password';
});

function login() {
	const username = document.getElementById('username').value.trim();
	const password = document.getElementById('password').value.trim();
	
	if (!username || !password) {
		alert("Please enter both username and password.");
		return;
	}
	
	// Redirect to main menu
	window.location.href = 'main.html';
}