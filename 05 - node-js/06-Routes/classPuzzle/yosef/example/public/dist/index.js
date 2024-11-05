function sendPost(event) {
    event.preventDefault();
    var form = event.target;
    var username = form.elements.namedItem('username');
    var email = form.elements.namedItem('email');
}
