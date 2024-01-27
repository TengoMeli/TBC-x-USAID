/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// Close the dropdown if the user clicks outside of it
function handleDropdown(event) {
    // Get the dropdown element by its ID
    var dropdown = document.getElementById("myDropDown");
  
    // If the clicked element has the class 'dropbtn', toggle the visibility of the dropdown
    if (event.target.matches('.dropbtn')) {
        dropdown.classList.toggle("show");
    } else {
        // If clicked outside the dropdown, close any open dropdowns
        var dropdowns = document.getElementsByClassName("dropdownContent");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
          }
      }
  }
  
  // Event listener for the dropdown button and outside clicks
  document.addEventListener("click", handleDropdown);
  
  
  
  // making a clickable slideshow
  
  // Initialize the slide index and show the first slide
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Event listeners for previous and next slide buttons
  document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
  document.querySelector(".next").addEventListener("click", () => plusSlides(1));
  
  // Event listeners for dot indicators
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => currentSlide(index + 1));
  });
  
  // Function to navigate to the previous or next slide
  function plusSlides(n) {
      showSlides(slideIndex += n);
  }
  
  // Function to navigate to a specific slide
  function currentSlide(n) {
      showSlides(slideIndex = n);
  }
  
  // Function to display slides and update dot indicators
  function showSlides(n) {
      let slides = document.getElementsByClassName("mySlides");
      slideIndex = (n > slides.length) ? 1 : (n < 1) ? slides.length : n;
      
      Array.from(slides).forEach((slide, i) => {
          slide.style.display = (i === slideIndex - 1) ? "flex" : "none";
      });
  
      let dots = document.querySelectorAll(".dot");
      dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === slideIndex - 1);
      });
  }
  
  // Function to show slides automatically with a 3-second interval
  function myFunction() {
      document.getElementById("mySlides").style.transition = "all 0.5s";
  }
  
  setInterval(function () {
      plusSlides(1);
  }, 3000 );
  
  // MAKING DROPDOWN QUESTIONS
  
  // Get all question buttons
  var questionBtns = document.querySelectorAll('.questionBtn');
  
  // Add click event listener to each question button
  questionBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
          // Close other answers
          questionBtns.forEach(function(otherBtn) {
              if (otherBtn !== btn) {
                  otherBtn.parentElement.classList.remove('open');
                  otherBtn.nextElementSibling.style.display = 'none';
                  otherBtn.classList.remove('no-border');
                  otherBtn.querySelector('i').classList.remove('rotate');
              }
          });
  
          // Toggle the 'open' class on the parent question div
          btn.parentElement.classList.toggle('open');
  
          // Toggle the display of the answer
          var answer = btn.nextElementSibling;
          if (answer.style.display === 'block') {
              answer.style.display = 'none';
          } else {
              answer.style.display = 'block';
          }
  
          // Toggle the 'rotate' class on the <i> element
          btn.querySelector('i').classList.toggle('rotate', answer.style.display === 'block');
  
          // Toggle the 'no-border' class on the button
          btn.classList.toggle('no-border', answer.style.display === 'block');
      });
  });