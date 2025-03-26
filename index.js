document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-btn');
    const loginOverlay = document.getElementById('login-btn');
  
    loginButton.addEventListener('click', function() {
      loginOverlay.classList.toggle('hidden');
    });
  });

    document.addEventListener('DOMContentLoaded', (event) => {
        const loginButton = document.getElementById('login-btn');

        loginButton.addEventListener('click', () => {
            window.location.href = 'Login.html';  // Replace 'login.html' with your login page URL
        });
    });

document.addEventListener('DOMContentLoaded', (event) => {
    const signButton = document.getElementById('sign-up');

    signButton.addEventListener('click', () => {
        window.location.href = 'SignUp.html';  // Replace 'login.html' with your login page URL
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const faqButton = document.getElementById('faq');

    signButton.addEventListener('click', () => {
        window.location.href = 'FAQ.html';  // Replace 'login.html' with your login page URL
    });
});
    
