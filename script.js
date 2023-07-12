$(document).ready(function() {
  $("#myForm").submit(function(event) {
  event.preventDefault(); // Prevent form from submitting normally
  
  // Get form data
  var formData = {
    name: $("#name").val(),
    email: $("#email").val(),
    message: $("#message").val()
  };
  
  // Send data to Google Sheet using AJAX
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwCUZeJxvt0N43Y138MTvEH3o7E3Xq7IMbGBZ7YQUYEsfFhWXxOJYj3-qlcOTU4-7G2Bg/exec",
    method: "POST",
    dataType: "json",
    data: formData,
    success: function(response) {
      // Handle successful submission
      console.log(response);
      alert("Form submitted successfully");
      window.location.reload()
  window.location.href ="index.html"
    }
  });
  $("#myForm")[0].reset();
  });
  });