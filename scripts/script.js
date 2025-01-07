document.getElementById('learn-more').addEventListener('click', () => {
    window.scrollTo({
        top: document.getElementById('about').offsetTop,
        behavior: 'smooth',
    });
});

document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for contacting me!');
});
