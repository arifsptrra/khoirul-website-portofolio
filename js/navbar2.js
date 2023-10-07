const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar-ul");
const bgNavbar = document.querySelector(".bg-navbar");

burger.addEventListener("click", function () {
  this.classList.add("burger");
  navbar.classList.add("navbar-ul");
  bgNavbar.classList.add("bg-navbar");
});

bgNavbar.addEventListener("click", function () {
  this.classList.remove("bg-navbar");
  navbar.classList.remove("navbar-ul");
  burger.classList.remove("burger");
});

// for color navbar active
const about = document.querySelector(".about");
const achieve = document.querySelector(".achieve");
const skills = document.querySelector(".skills");
const contact = document.querySelector(".contact");

about.addEventListener("click", function (event) {
  this.classList.add("about");
  achieve.classList.remove("achieve");
  skills.classList.remove("skills");
  contact.classList.remove("contact");
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      }
    );
  }
});
achieve.addEventListener("click", function (event) {
  this.classList.add("achieve");
  about.classList.remove("about");
  skills.classList.remove("skills");
  contact.classList.remove("contact");
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      }
    );
  }
});
skills.addEventListener("click", function (event) {
  this.classList.add("skills");
  about.classList.remove("about");
  achieve.classList.remove("achieve");
  contact.classList.remove("contact");
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      }
    );
  }
});

contact.addEventListener("click", function (event) {
  this.classList.add("active");
  about.classList.remove("about");
  achieve.classList.remove("achieve");
  skills.classList.remove("skills");
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      }
    );
  }
});
