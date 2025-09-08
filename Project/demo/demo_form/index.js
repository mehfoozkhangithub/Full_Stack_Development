function myFunction() {
  var user_name = document.getElementById('name').value;
  var user_email = document.getElementById('email').value;
  var user_pass = document.getElementById('password').value;

  console.log(' user_name:', user_name);
  console.log(' user_email:', user_email);
  console.log(' user_pass:', user_pass);

  window.location.reload();
}
