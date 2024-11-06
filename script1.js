function redirectToSignUp() {
    window.location.href = "signup.html"; // Change this to your desired URL
  }
  
  // Get the Sign Up button element
  const signUpButton = document.querySelector('.register');
  
  // Add click event listener to the Sign Up button
  signUpButton.addEventListener('click', redirectToSignUp);


  document.addEventListener('DOMContentLoaded', function() {
    // Get the sign-in button by its ID
    const signinButton = document.getElementById('signinButton');
  
    // Add a click event listener to the sign-in button
    signinButton.addEventListener('click', function() {
        // Redirect to the new page
        window.location.href = 'loginpage.html'; // Replace with your desired URL
    });
  });