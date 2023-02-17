function validate() {
    var username = document.getElementById("name");
    var mess = document.getElementById("message");
    var number = document.getElementById("mobile");
    var btn = document.getElementById('btn');
    btn.addEventListener('click', function (e) {
        e.preventDefault()
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "username",
            Password: "password",
            To: 'them@website.com',
            From: "you@isp.com",
            Subject: "This is the subject",
            Body: "And this is the body"
        }).then(
            message => alert(message)
        );

    })

    if (number.value.trim() == "") {
        alert("No blank value Allowed");
        return false;
    }
    else {
        true;
    }
    if (number.value.trim().length < 10) {
        alert("Wrong Mobile No.");
        return false;
    }
    else {
        true;
    }
    if (number.value.trim().length > 10) {
        alert("Wrong Mobile No.");
        return false;
    }
    else {
        true;
    }

    if (username.value.trim() == "" || mess.value.trim() == "") {
        alert("No blank value Allowed");
        return false;
    }
    else {
        true;
        alert("thank for submit")
    }

}

