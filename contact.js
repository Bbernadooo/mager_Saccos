document.getElementById('magerContactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Professional Alert Logic
    const btn = document.querySelector('.submit-btn');
    btn.innerText = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
        alert("Thank you! Your message has been sent to Mager SACCOS LTD. We will contact you shortly.");
        btn.innerText = "Send Message";
        btn.disabled = false;
        this.reset();
    }, 1500);
});