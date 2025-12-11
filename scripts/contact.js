// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const submitBtn = document.getElementById('submit-button');
const contactPage = document.getElementById('contact-page');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault(); // prevent default form submission
    
    // clear the contact page content
    contactPage.innerHTML = '';
    
    // create thank you message
    const thankYouMsg = document.createElement('p');
    thankYouMsg.textContent = 'Thank you for your message!';
    thankYouMsg.style.fontSize = '24px';
    thankYouMsg.style.textAlign = 'center';
    thankYouMsg.style.marginTop = '50px';
    
    // add the message to the page
    contactPage.appendChild(thankYouMsg);
});

