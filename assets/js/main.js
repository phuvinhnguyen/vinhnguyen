document.addEventListener('DOMContentLoaded', function() {
    // Initialize Mermaid
    mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
        flowchart: {
            useMaxWidth: true,
            htmlLabels: true
        }
    });

    // Add copy button to code blocks
    document.querySelectorAll('.highlight').forEach((block) => {
        // Skip if the block is a mermaid diagram
        if (block.querySelector('.mermaid')) {
            return;
        }

        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        
        block.appendChild(button);

        button.addEventListener('click', async () => {
            try {
                const code = block.querySelector('code').textContent;
                await navigator.clipboard.writeText(code);
                button.textContent = 'Copied!';
                button.classList.add('copied');
                
                setTimeout(() => {
                    button.textContent = 'Copy';
                    button.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
                button.textContent = 'Failed to copy';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to images when they come into view
    const images = document.querySelectorAll('.post-content img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach(image => imageObserver.observe(image));
}); 