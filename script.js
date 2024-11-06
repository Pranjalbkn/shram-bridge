yearlybt = document.querySelector(".yearly");
monthlybt = document.querySelector(".monthly");
pricevalue1 = document.querySelector(".pricevalue1");
pricevalue2 = document.querySelector(".pricevalue2");
pricevalue3 = document.querySelector(".pricevalue3");
yearlybt.addEventListener("click", () => {
    pricevalue1.innerText = "₹5500/yr-";
    pricevalue2.innerText = "₹11500/yr-";
    pricevalue3.innerText = "₹13500/yr-";
})

monthlybt.addEventListener("click", () => {
    pricevalue1.innerText = "₹500/mo-";
    pricevalue2.innerText = "₹1000/mo-";
    pricevalue3.innerText = "₹1200/mo-";
})

// testimonialbase = document.getElementsByClassName("testimonialbase");
// testimonial.document.getElementsByClassName("testimonial");
// testimonialbase.addEventListener("mouseenter",()=>{
//     testimonial.style.transform = rotate(-3);
//     testimonialbase.classlist.add("trans-3");
// })

// testimonialBase.addEventListener('mouseover', (event) => {
//     // Rotate the testimonial base by -2 degrees
//     testimonialBase.style.transform = 'rotate(-2deg)';
  
//     // Rotate the testimonial by 2 degrees
//     testimonial.style.transform = 'rotate(2deg)';
//   });

// Get all testimonial base elements
const testimonialBases = document.querySelectorAll('.testimonialbase');

// Add event listeners to each testimonial base element
testimonialBases.forEach((testimonialBase) => {
  testimonialBase.addEventListener('mouseover', (event) => {
    // Get the corresponding testimonial element
    const testimonial = testimonialBase.querySelector('.testimonial');

    // Rotate the testimonial base by -2 degrees
    // testimonial.classList.add("trans3");
    // testimonialBase.classList.add("trans-3");
    // Rotate the testimonial by 2 degrees
    testimonialBase.style.transform = 'rotate(-2.5deg)';
    testimonial.style.transform = 'rotate(5deg)';
  });

  testimonialBase.addEventListener('mouseout', (event) => {
    const testimonial = testimonialBase.querySelector('.testimonial');
    testimonial.classList.remove("trans3");
    // testimonialBase.classList.remove("trans-3");
    // Reset the rotation when the user stops hovering
    testimonialBase.style.transform = 'rotate(0deg)';
    testimonial.style.transform = 'rotate(0deg)';
  });
});


// script.js

// Function to handle the redirect
function redirectToSignUp() {
  window.location.href = "signup.html"; // Change this to your desired URL
}

// Get the Sign Up button element
const signUpButton = document.querySelector('.register');

// Add click event listener to the Sign Up button
signUpButton.addEventListener('click', redirectToSignUp);




// script.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Get the sign-in button by its ID
  const signinButton = document.getElementById('signinButton');

  // Add a click event listener to the sign-in button
  signinButton.addEventListener('click', function() {
      // Redirect to the new page
      window.location.href = 'loginpage.html'; // Replace with your desired URL
  });
});

// script.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Get the register button by its ID
  const registerButton = document.getElementById('registerButton');

  // Add a click event listener to the register button
  registerButton.addEventListener('click', function() {
      // Redirect to the login page
      window.location.href = 'loginpage.html'; // Replace with your desired URL
  });
});