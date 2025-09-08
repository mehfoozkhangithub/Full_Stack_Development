function myRadioFunc(e) {
  e.preventDefault();
  let radioData = document.myRadio.contant;
  console.log('🚀 ~ radioData:', radioData);
  for (let i = 0; i < radioData.length; i++) {
    if (radioData[i].checked === true) {
      return true;
    }
  }
  document.getElementById("Message").innerHTML = "Please Select anyone";
  return false;
}
