const signUpButton = document.getElementById('sign-up');
const modal = document.getElementById('signupModal');
const closeModal = document.getElementsByClassName('close')[0];

signUpButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Redirect the Learn More button to an external link
const learnMoreButton = document.getElementById('learn-more');

learnMoreButton.addEventListener('click', function () {
    window.location.href = 'https://www.investopedia.com/articles/investing/102615/story-instagram-rise-1-photo0sharing-app.asp'; // The desired external link
});

const exploreMoreButton = document.querySelector('.explore-more-btn');
exploreMoreButton.addEventListener('click', () => {
    alert('Thanks for your interest! Visit our website to learn more about Instagram.');
});

const formSubmitButton = document.querySelector('.modal-content button[type="submit"]');

formSubmitButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'https://www.instagram.com/accounts/emailsignup/';
});

signUpButton.addEventListener('click', function () {
    signUpButton.innerText = 'Thanks for Signing Up!';
    signUpButton.style.backgroundColor = '#32CD32'; 
    signUpButton.style.cursor = 'not-allowed'; 
    setTimeout(() => {
        signUpButton.innerText = 'Create Account';
        signUpButton.style.backgroundColor = '#E1306C'; 
        signUpButton.style.cursor = 'pointer'; 
    }, 3000);
});
