const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar-ul");

burger.addEventListener("click", function () {
  this.classList.toggle("change");
  navbar.classList.toggle("change");
});

// for color navbar active
const about = document.querySelector(".about");
const achievement = document.querySelector(".achievement");
const skills = document.querySelector(".skills");
const kontak = document.querySelector(".kontak");

about.addEventListener("click", function (event) {
  this.classList.toggle("active");
  achievement.classList.remove("active");
  skills.classList.remove("active");
  about.classList.remove("active");
  kontak.classList.remove("active");
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
achievement.addEventListener("click", function (event) {
  this.classList.toggle("active");
  about.classList.remove("active");
  skills.classList.remove("active");
  about.classList.remove("active");
  kontak.classList.remove("active");
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
  this.classList.toggle("active");
  about.classList.remove("active");
  achievement.classList.remove("active");
  about.classList.remove("active");
  kontak.classList.remove("active");
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
about.addEventListener("click", function (event) {
  this.classList.toggle("active");
  about.classList.remove("active");
  achievement.classList.remove("active");
  skills.classList.remove("active");
  kontak.classList.remove("active");
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
kontak.addEventListener("click", function (event) {
  this.classList.toggle("active");
  about.classList.remove("active");
  achievement.classList.remove("active");
  skills.classList.remove("active");
  about.classList.remove("active");
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
