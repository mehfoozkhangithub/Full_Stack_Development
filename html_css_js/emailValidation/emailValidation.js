function myFunctions() {
  let email = document.myForm.email.value;
  console.log(email);

  if (email.indexOf("@") <= 0) {
    document.getElementById("Message").innerHTML = "Invalid Email by @";
    return false;
  } else if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    document.getElementById("Message").innerHTML =
      "Invalid Email by .com/.in domain";
    return false;
  }
}

// mehfoozkahn@gmail.com
