document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.about-item');
    const checkVisibility = () => {
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                item.classList.add('visible');
            }
        });
    };
    
    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);
    
    // Initial check in case some items are already visible
    checkVisibility();
});

document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        accordion.addEventListener("click", () => {
            // Close all other panels
            accordions.forEach((item) => {
                if (item !== accordion) {
                    item.classList.remove("active");
                    item.nextElementSibling.style.display = "none";
                    item.querySelector(".accordion-icon").textContent = "+";
                }
            });

            // Toggle the current panel
            const panel = accordion.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
                accordion.querySelector(".accordion-icon").textContent = "+";
            } else {
                panel.style.display = "block";
                accordion.querySelector(".accordion-icon").textContent = "−";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let index = 0;

  const updateSlider = () => {
    slider.style.transform = `translateX(-${index * 100}%)`;
  };

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length; // Move to the next slide, loop back if at the end
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length; // Move to the previous slide, loop back if at the start
    updateSlider();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.slider-container');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sliderContainer.style.opacity = '1';
          sliderContainer.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.5 }
  );

  sliderContainer.style.opacity = '0';
  sliderContainer.style.transform = 'translateY(50px)';

  observer.observe(sliderContainer);
});

document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  const slider = document.querySelector(".slider");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  // Function to update slide position
  const updateSlidePosition = () => {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  };

  // Next slide (no auto-play, no loop back)
  nextBtn.addEventListener("click", () => {
    if (slideIndex < totalSlides - 1) {  // Only move to the next slide if it's not the last
        slideIndex += 1;
        updateSlidePosition();
    }
  });

  // Previous slide
  prevBtn.addEventListener("click", () => {
    if (slideIndex > 0) {  // Don't allow negative index
        slideIndex -= 1;
        updateSlidePosition();
    }
  });

  // Optionally, remove the auto-play feature
  // setInterval(() => {
  //     slideIndex = (slideIndex + 1) % totalSlides;  // This will automatically loop
  //     updateSlidePosition();
  // }, 5000);  // Change slide every 5 seconds
});

function plusSlides(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Initialize the slideshow
showSlides();

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = 'Back to Top';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.display = 'none';
    backToTopButton.style.backgroundColor = 'orange';
    backToTopButton.style.border = 'none';
    backToTopButton.style.padding = '10px 20px';
    backToTopButton.style.color = '#fff';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.borderRadius = '5px';
    document.body.appendChild(backToTopButton);

    // Show button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll to top when clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});





