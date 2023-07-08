const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      const nameValue = nameInput.value.trim();
      const emailValue = emailInput.value.trim();
      const messageValue = messageInput.value.trim();
      let valid = true;

      if (nameValue === '') {
        nameError.textContent = 'Name is required';
        valid = false;
      }

      if (emailValue === '') {
        emailError.textContent = 'Email is required';
        valid = false;
      } else if (!isEmailValid(emailValue)) {
        emailError.textContent = 'Invalid email format';
        valid = false;
      }

      if (messageValue === '') {
        messageError.textContent = 'Message is required';
        valid = false;
      }

      if (valid) {
        // Submit the form or perform any other desired action
        form.reset();
        alert('Form submitted successfully!');
      }
    });

    function clearErrors() {
      nameError.textContent = '';
      emailError.textContent = '';
      messageError.textContent = '';
    }

    function isEmailValid(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }