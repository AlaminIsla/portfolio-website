const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 200)
});


  // Store the reference to the currently expanded paragraph
  let currentExpandedParagraph = null;

  // Get all the "Read More" buttons
  const readMoreButtons = document.querySelectorAll('.read-more-btn');

  // Add click event listener to each button
  readMoreButtons.forEach(button => {
    button.addEventListener('click', event => {
      // Prevent the default behavior of the anchor tag
      event.preventDefault();

      // Get the associated paragraph element
      const paragraph = button.previousElementSibling;

      // Toggle the 'show' class to hide or display the full text
      paragraph.classList.toggle('show');

      // Update the button text based on the visibility of the full text
      if (paragraph.classList.contains('show')) {
        button.textContent = 'Read Less';

        // If there was a previously expanded paragraph, collapse it
        if (currentExpandedParagraph && currentExpandedParagraph !== paragraph) {
          currentExpandedParagraph.classList.remove('show');
          // Reset the text of the button for the collapsed paragraph
          const prevButton = currentExpandedParagraph.nextElementSibling;
          prevButton.textContent = 'Read More';
        }

        // Update the reference to the currently expanded paragraph
        currentExpandedParagraph = paragraph;
      } else {
        button.textContent = 'Read More';
      }
    });
  });

  

let menu =  document.querySelector('#menu-icon');
let navlist =  document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('open');
};

const sr = ScrollReveal ({
  distance:'40px',
  duration: 2050,
  delay: 200,
  reset: true
});
sr.reveal('.hero-text', {origin:'top'});
sr.reveal('.about-img, .service-item, .about-text ', {origin:'bottom'});
sr.reveal('.about-text h2, .text-center, .right-contact h2 ', {origin:'top'});
sr.reveal('.end-section', {origin:'top'});



  