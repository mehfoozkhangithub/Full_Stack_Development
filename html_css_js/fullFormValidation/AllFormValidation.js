function myform() {
  let userName = document.getElementById("user").value;
  let password = document.getElementById("pass").value;
  let confirmPassword = document.getElementById("confpass").value;
  let mobile = document.getElementById("mobile_number").value;
  let email = document.getElementById("email").value;

  //   user Validation
  if (userName == "") {
    document.getElementById("username_msg").innerHTML =
      " ** Please fill the userName field";
    document.getElementById("username_msg").style.color = "red";
    return false;
  } else if (userName.length <= 2 || userName.length > 20) {
    document.getElementById("username_msg").innerHTML =
      " ** Please enter the length between 2 to 20";
    document.getElementById("username_msg").style.color = "red";
    return false;
  } else if (!isNaN(userName)) {
    document.getElementById("username_msg").innerHTML =
      " ** Only characters are allowed ";
    document.getElementById("username_msg").style.color = "red";
    return false;
  }

  //   pass Validation
  if (password == "") {
    document.getElementById("pass_msg").innerHTML =
      " ** Please fill the password field";
    document.getElementById("pass_msg").style.color = "red";
    return false;
  } else if (password.length <= 5 || password.length > 20) {
    document.getElementById("pass_msg").innerHTML =
      " ** Please enter the length between 5 to 20";
    document.getElementById("pass_msg").style.color = "red";
    return false;
  } else if (password != confirmPassword) {
    document.getElementById("confpass_msg").innerHTML =
      " ** Password Not Matched";
    document.getElementById("confpass_msg").style.color = "red";
    return false;
  }

  //confirPass Validation

  if (confirmPassword == "") {
    document.getElementById("confpass_msg").innerHTML =
      " ** Please fill the confirmPassword field";
    document.getElementById("confpass_msg").style.color = "red";
    return false;
  }

  // mobileNumber Validation

  if (mobile == "") {
    document.getElementById("mobile_msg").innerHTML =
      " ** Please fill the mobile field";
    document.getElementById("mobile_msg").style.color = "red";
    return false;
  } else if (isNaN(mobile)) {
    document.getElementById("mobile_msg").innerHTML =
      " ** Please enter a digit not a characters.";
    document.getElementById("mobile_msg").style.color = "red";
    return false;
  } else if (mobile.length != 10) {
    document.getElementById("mobile_msg").innerHTML =
      " ** Mobile number must be a 10 digit.";
    document.getElementById("mobile_msg").style.color = "red";
    return false;
  }

  // email Validation

  if (email == "") {
    document.getElementById("email_msg").innerHTML =
      " ** Please fill the email field";
    document.getElementById("email_msg").style.color = "red";
    return false;
  } else if (email.indexOf("@") <= 0) {
    document.getElementById("email_msg").innerHTML = " ** @ Invalid Position.";
    document.getElementById("email_msg").style.color = "red";
    return false;
  } else if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    document.getElementById("email_msg").innerHTML = " **  Invalid Position.";
    document.getElementById("email_msg").style.color = "red";
    return false;
  }
}
