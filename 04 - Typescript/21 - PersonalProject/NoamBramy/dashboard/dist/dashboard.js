function loadUserData() {
    var loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        var userData = JSON.parse(localStorage.getItem(loggedInUser));
        document.getElementById('username').innerText = userData.name || 'No username found';
        document.getElementById('email').innerText = loggedInUser;
        document.getElementById('phoneNumber').innerText = userData.phone || 'No phone number found';
        document.getElementById('password').innerText = userData.password || 'No password found';
    }
    else {
        alert('No user is logged in.');
        window.location.href = '../login/login.html';
    }
}
window.onload = loadUserData;
