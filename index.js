const form = document.getElementById('cta-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('cta-email');
    const content = document.getElementById('cta-body');
    const buttonText = document.getElementById('cta-button');
    const message = document.getElementById('cta-message');

    const details = { 
        email: email.value, 
        content: content.value 
    };


    buttonText.innerHTML = 'Sending...';

    fetch('/api/form', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(details)

    }).then(() => {
        email.value = '';
        content.value = '';
        message.innerHTML = 'Thank you for submitting !'
        message.style.opacity = 1;

        setTimeout(() => {
            message.innerHTML = '';
            message.style.opacity = 0;
        }, 5000);
    }).finally(() => {
        buttonText.innerHTML = `
            Send
            <img src="./assets/Arrow.svg" alt="arrow">
        `
    });
})


