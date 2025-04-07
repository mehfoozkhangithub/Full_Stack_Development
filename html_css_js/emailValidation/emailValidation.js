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
    } else {
      const hasUpperCase = /[A-Z]/.test(pass);
      const hasLowerCase = /[a-z]/.test(pass);
      const hasNumber = /[0-9]/.test(pass);
      const hasSpecialChar = /[!@#$%^&*(),.?\":{}|<>]/.test(pass);

      if (!hasUpperCase) {
        console.log("Password must inclued at least one UpperCase Letter...");
      } else if (!hasLowerCase) {
        console.log("Password must inclued at least one LowerCase Letter...");
      } else if (!hasNumber) {
        console.log("Password must inclued at least one Number...");
      } else if (!hasSpecialChar) {
        console.log("Password must inclued at least one Special Character...");
      } else {
        console.log("Password is Valid...");
      }
    }
  }
}

// mehfoozkahn@gmail.com
