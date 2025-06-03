<script>
// Initialize AOS with modified settings
    AOS.init({
      duration: 1000,
      once: false, // Changed to false to allow animations to repeat
      offset: 100,
      mirror: true, // Elements will animate out while scrolling past them
      disable: 'mobile' // Disable on mobile devices for better performance
    });

    // Add scroll-triggered animations with reset
    window.addEventListener('scroll', function() {
      const elements = document.querySelectorAll('.animate__animated');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if(position.top < window.innerHeight && position.bottom >= 0) {
          element.style.visibility = 'visible';
          // Reset animation classes
          element.classList.remove('animate__animated');
          void element.offsetWidth; // Trigger reflow
          element.classList.add('animate__animated');
        }
      });
    });

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Reset animations when scrolling up
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st < lastScrollTop) {
        // Scrolling up
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(element => {
          element.classList.remove('aos-animate');
        });
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }, false);
  
</script>