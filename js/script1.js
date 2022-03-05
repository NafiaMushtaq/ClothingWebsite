function openloginform() {
    document.getElementById("login1").style.display = "block";
}

function closeloginform() {
    document.getElementById("login1").style.display = "none";
}

function opensignupform() {
    document.getElementById("signup1").style.display = "block";
}

function closesignupform() {
    document.getElementById("signup1").style.display = "none";
}

function signupform() {
    document.getElementById("signup1").style.display = "block";
    document.getElementById("login1").style.display = "none";
}

function loginform() {
    document.getElementById("login1").style.display = "block";
    document.getElementById("signup1").style.display = "none";
}

function uppercase() {
    var x = document.getElementById("Fname");
    x.value = x.value.toUpperCase();

    var y = document.getElementById("Lname");
    y.value = y.value.toUpperCase();
}

function LoginForm() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('Password').value;
    if (name.length < 1) {
        document.getElementById('errorname').innerHTML = " Please Enter Your Username *";
    } else if (name.indexOf("_") == -1) {
        document.getElementById('errorname').innerHTML = " Please Enter Your Correct Username *";
    } else {
        document.getElementById('errorname').innerHTML = "";
    }
    if (password.length < 1) {
        document.getElementById('errorpassword').innerHTML = " Please Enter Your Password *";
    } else if (password.length > 8) {
        document.getElementById('errorpassword').innerHTML = " Please Write Ateast 8 Digit Password *";
    } else if (password.length < 8) {
        document.getElementById('errorpassword').innerHTML = " Please Write Ateast 8 Digit Password *";
    } else {
        document.getElementById('errorpassword').innerHTML = "";
    }
    if (name.length < 1 || name.indexOf("_") == -1 || password.length < 1 || password.length > 8 || password.length < 8) {
        return false;
    }
}

function SignupForm() {
    var Firstname = document.getElementById('fname').value;
    var Lastname = document.getElementById('lname').value;
    var Username = document.getElementById('uname').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('Pass').value;
    var Repassword = document.getElementById('RePass').value;

    if (Firstname.length < 1) {
        document.getElementById('errorfname').innerHTML = " Please Enter Your First Name *"
    } else {
        document.getElementById('errorfname').innerHTML = "";
    }
    if (Lastname.length < 1) {
        document.getElementById('errorlname').innerHTML = " Please Enter Your Last Name *"
    } else {
        document.getElementById('errorlname').innerHTML = "";
    }
    if (Username.length < 1) {
        document.getElementById('erroruname').innerHTML = " Please Enter Your Username *"
    } else if (Username.indexOf("_") == -1) {
        document.getElementById('erroruname').innerHTML = " Please Write Yor Username Using '_' *"
    } else {
        document.getElementById('erroruname').innerHTML = "";
    }

    if (email.length < 1) {
        document.getElementById('erroremail').innerHTML = " Please Enter Your Email *"
    } else if (email.indexOf("@") == -1) {
        document.getElementById('erroremail').innerHTML = " Please Enter Your Correct Email *"
    } else {
        document.getElementById('erroremail').innerHTML = "";
    }
    if (pass.length < 1) {
        document.getElementById('errorPass').innerHTML = " Please Enter Your Password *";
    } else if (pass.length > 8) {
        document.getElementById('errorPass').innerHTML = " Please Write Atleast 8 Digit Password *";
    } else if (pass.length < 8) {
        document.getElementById('errorPass').innerHTML = " Please Write Ateast 8 Digit Password *";
    } else {
        document.getElementById('errorPass').innerHTML = "";
    }
    if (Repassword.length < 1) {
        document.getElementById('errorRePass').innerHTML = " Please Enter Your Password *";
    } else if (Repassword.length > 8) {
        document.getElementById('errorRePass').innerHTML = " Please Write Atleast 8 Digit Password *";
    } else if (Repassword.length < 8) {
        document.getElementById('errorRePass').innerHTML = " Please Write Ateast 8 Digit Password *";
    } else if (pass != Repassword) {
        document.getElementById('errorRePass').innerHTML = " Please Write Same Password *";
    } else {
        document.getElementById('errorRepass').innerHTML = "";
    }
    if (Firstname.length < 1 || Lastname.length < 1 || Username.length < 1 || Username.indexOf("_") == -1 || email.indexOf("@") == -1 || pass.length < 1 || pass.length > 8 || pass.length < 8 || Repassword.length < 1 || Repassword.length > 8 || Repassword.length < 8 || pass != Repassword) {
        return false;
    }
}
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}