const form = document.getElementById('cta-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('cta-email').value;
    const content = document.getElementById('cta-body').value;

    const details = { email, content };

    console.warn(details);

    fetch('/api/form', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(details)

    });
})


