$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registerform"
  $("form[name='registerform']").validate({
    // Specify validation rules
    rules: {
      // left side input name , right side validation name
      firstName: 'required',
      lastName: 'required',
      email: {
        required: true,

        // built in email validation
        email: true
      },
      password: {
        required: true,
        minlength: 5
      },
      confirmPassword: {
        required: true,

        equalTo: '#password'
      }
    },
    // Custom validation error messages
    messages: {
      firstName: 'Please enter your firstname',
      lastnNme: 'Please enter your lastname',
      password: {
        required: 'Please provide a password',
        minlength: 'Your password must be at least 5 characters long'
      },
      email: 'Please enter a valid email address',
      confirmPassword: {
        equalTo: 'Password and confirm password does not match'
      }
    },
    // hanlde the submission
    submitHandler: function(form) {
      form.submit();
    }
  });
});
