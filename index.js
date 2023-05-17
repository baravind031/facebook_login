function formValidate() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var contact = document.getElementById("contact").value;
    var password = document.getElementById("password").value;
    
    if (name === "") {
      alert("Please enter your name.");
      return false;
    }

    if (surname === "") {
        alert("Please enter your surname.");
        return false;
      }
    if (contact === "") {
      alert("Please enter your mobile number or email address.");
      return false;
    }   
    if (password == "") {
      alert("Please enter a password.");
      return false;
    } 
    return true;
   } 
  // Add event listener to the form submit button
//   var form = document.querySelector(".form");
//   form.addEventListener("signup", function (event) {
//     if (validateForm()) {
//       alert("Wellcome to facebook!");
//     }
//   });

