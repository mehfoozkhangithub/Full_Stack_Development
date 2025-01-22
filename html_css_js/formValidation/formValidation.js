function myRadioFunc() {
  let radioData = document.myRadio.contant;
  for (let i = 0; i < radioData.length; i++) {
    if (radioData[i].checked === true) {
      return true;
    }
  }
  document.getElementById("Message").innerHTML = "Please Select anyone";
  return false;
}
