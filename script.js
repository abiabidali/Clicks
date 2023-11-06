function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Check if any of the fields are empty
  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Please fill in all the required fields.");
    return;
  }

    // Email validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  

  // Rest of the code to submit the form
  var formData = {
    'name': name,
    'email': email,
    'message': message
  };

  $("#loading").show(); // Show loading spinner

  $.ajax({
    url: 'https://script.google.com/macros/s/AKfycbwHintgbf1QzPLkiaLwyzPztbuoosRzOTyi2OpLiEw87wt4qcHq_S2AoackeKTT9kZHeA/exec',
    type: 'POST',
    data: formData,
    success: function(response) {
      $("#loading").hide(); // Hide loading spinner
      alert("Form submitted successfully!\n\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
  });
}