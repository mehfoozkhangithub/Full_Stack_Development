function myFunctions() {
  let email = document.myForm.email.value;
  let pass = document.myForm.pass.value;
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

  // password validation

  //pending i have to work on it...

  if (pass !== null) {
    if (pass.trim() !== "") {
      console.log(`please enter the value...`);
    } else if (pass.length > 8 && pass.length > 20) {
      console.log(`please enter the correct length...`);
    }
    // else if(){}
    // hello
  }
}

// mehfoozkahn@gmail.com
