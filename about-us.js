document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.download-btn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Log for analytics or just show a friendly alert
            console.log('Regulation file download started.');
            
            // Optional: Change text temporarily to show it's working
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Starting Download...';
            
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 3000);
        });
    }
});