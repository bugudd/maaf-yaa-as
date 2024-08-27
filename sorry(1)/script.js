document.getElementById('apologyBtn').addEventListener('click', function() {
    let responseDiv = document.getElementById('response');
    
    // Toggle the response visibility
    if (responseDiv.classList.contains('hidden')) {
        responseDiv.classList.remove('hidden');
        this.textContent = "Click to reset";

        // Replace with your phone number and message
        let phoneNumber = "6285782570257"; // Replace '62xxxxxxxxxx' with the recipient's WhatsApp number (62 for Indonesia)
        let message = "akuu maafin ko sayanggg <3";
        let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp with the message
        window.open(whatsappURL, '_blank');
    } else {
        responseDiv.classList.add('hidden');
        this.textContent = "maafin akuu yaa?";
    }
});
