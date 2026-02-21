// Smooth Scrolling
document.querySelectorAll('#main-nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add Dark Mode Toggle
const darkModeToggle = document.createElement("li");
darkModeToggle.innerHTML =
  '<a href="#" title="dark-mode" id="dark-mode-toggle"><i class="fas fa-moon"></i></a>';
document.querySelector("#main-nav ul").appendChild(darkModeToggle);

const body = document.body;

darkModeToggle.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
  updateDarkModeIcon();
});

function updateDarkModeIcon() {
  const icon = document.querySelector("#dark-mode-toggle i");
  if (body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
}

// Check for saved user preference
if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark-mode");
  updateDarkModeIcon();
}

// Making the skills section more presentable
const animateSkillBars = () => {
  document.querySelectorAll("#about-b .progress-bar").forEach((bar) => {
    const width = bar.getAttribute("data-percent");
    bar.style.width = "0%";
    bar.style.transition = "width 1s ease-in-out";
    setTimeout(() => {
      bar.style.width = width + "%";
    }, 100);
  });
};

// Trigger animation when the skills section is in view
const skillsSection = document.querySelector("#about-b");
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      animateSkillBars();
      observer.unobserve(skillsSection); // Ensure it only animates once
    }
  },
  { threshold: 0.5 },
);

if (skillsSection) {
  observer.observe(skillsSection);
}

// Add Project Filtering
const createFilterButtons = () => {
  const categories = ["all", "websites", "mobile apps", "technical writing"];
  const filterContainer = document.createElement("div");
  filterContainer.className = "filter-buttons";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category;
    button.style.textTransform = "capitalize";
    button.className = "btn-tertiary filter-btn";
    button.setAttribute("data-filter", category);
    button.setAttribute("type", "button");
    filterContainer.appendChild(button);
  });
  // document.querySelector('#work-a .container').prepend(filterContainer)
  document.addEventListener("DOMContentLoaded", () => {
    const parentElement = document.querySelector("#work-a .container");
    if (parentElement) {
      parentElement.prepend(filterContainer);
    } else {
      filterContainer.style.display = "none";
    }
    // This is done this way because the prepend method is producing errors
    // on the console in cases where its calling object is not existing in the DOM.
  });
};

// Add the other filter button's content later. REVIEW: me.
const filterProjects = () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      projects.forEach((project) => {
        if (filter === "all" || project.classList.contains(filter)) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
};

createFilterButtons();
filterProjects();

// Lazy Loading Images
document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer,
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    let lazy = function () {
      lazyImages.forEach(function (lazyImage) {
        if (
          lazyImage.getBoundingClientRect().top < window.innerHeight &&
          lazyImage.getBoundingClientRect().bottom > 0 &&
          getComputedStyle(lazyImage).display !== "none"
        ) {
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
        }
      });

      if (lazyImages.length === 0) {
        document.removeEventListener("scroll", lazy);
        window.removeEventListener("resize", lazy);
        window.removeEventListener("orientationchange", lazy);
      }
    };

    document.addEventListener("scroll", lazy);
    window.addEventListener("resize", lazy);
    window.addEventListener("orientationchange", lazy);
  }
});

// Loading Spinner
// Shows a spinner to the user before the page loads.
document.addEventListener("DOMContentLoaded", function () {
  const loadingSpinner = document.getElementById("loadingSpinner");

  // Hide the spinner once the page is fully loaded
  window.addEventListener("load", function () {
    loadingSpinner.style.display = "none";
  });
});

// Scroll Animation
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

// Date generation

const currentDate = new Date();
const year = currentDate.getFullYear();
document.getElementById("year").textContent = year;

// Clock

function updateClock() {
  // Get the current date and time
  const now = new Date();

  // Format the date and time according to the user's local device time zone
  const options = {
    weekday: "long",
    // year: 'numeric',
    // month: 'long',
    // day: 'numeric',
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Africa/Lagos", // Uses the user's local device time zone
    timeZoneName: "short",
  };
  const formattedTime = now.toLocaleString("en-US", options);

  // Update the clock elements with the formatted time
  document.querySelector(".clock").textContent = formattedTime;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update of the clock
updateClock();

// Welcome Message
const welcomeMessage = () => {
  const currentHour = currentDate.getHours();
  const greeting = document.querySelector(".greeting");
  greeting.style.textTransform = "uppercase";

  if (currentHour < 12) {
    greeting.textContent = "Good morning!";
  } else if (currentHour < 18) {
    greeting.textContent = "Good afternoon!";
  } else {
    greeting.textContent = "Good evening!";
  }
};

welcomeMessage();

// JavaScript code to handle accordion functionality
const accordionButtons = document.querySelectorAll(".accordion-button");
accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;
    accordionContent.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("form");
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  let email = document.getElementById("email");
  let submitBtn = document.getElementById("pass-kyc");

  function validateForm() {
    // Enable button only if all fields are filled & email format is correct

    // For name Validation
    if (name.checkValidity()) {
      name.style.borderColor = "green";
    } else {
      name.style.borderColor = "red";
    }

    // For phone Validation
    if (phone.checkValidity()) {
      phone.style.borderColor = "green";
    } else {
      phone.style.borderColor = "red";
    }

    // For email Validation
    if (email.checkValidity()) {
      email.style.borderColor = "green";
    } else {
      email.style.borderColor = "red";
    }

    // For submit button disability toggle
    if (name.checkValidity() && phone.checkValidity()) {
      submitBtn.disabled = false;
      submitBtn.classList.add("btn-secondary");
    } else {
      submitBtn.disabled = true;
      submitBtn.classList.remove("btn-secondary");
    }

    // reporting validation
    if (form.checkValidity()) {
      document.querySelector(".kyc-content h4").textContent =
        "Your Details are correct, Kindly submit the form";
      document.querySelector("#form legend").textContent =
        " " + "Details Valid" + " ";
    } else {
      document.querySelector(".kyc-content h4").textContent =
        "Please fix the errors before submitting";
    }
  }

  submitBtn.addEventListener("click", (e) => {
    // prevents the submit button from reloading the page.
    e.preventDefault();
    // gives the impression of a new page.
    document.getElementById("kyc-container").style.display = "none";
    document.getElementById("welcome-message").style.display = "block";
    // collect the text control value
    recipientName = document.querySelector(".recipient-name");
    recipientName.textContent = name.value.trim();
    recipientName.style.textTransform = "capitalize";
    // form.reportValidity();
  });
  // Listen to input changes in the form fields
  form.addEventListener("input", validateForm);
  document.querySelector(".reset").addEventListener("click", () => {
    form.reset();
    submitBtn.disabled = true;
    validateForm();
  });
  document.querySelector(".cancel-kyc").addEventListener("click", () => {
    if (confirm(`Are you sure you want to leave this site?`))
      window.location.href = `https://www.google.com/`;
  });
});

// JavaScript code to handle transition between greeting message and main page
const goToMyWebsite = document.getElementById("goToMyWebsite");

goToMyWebsite.addEventListener("click", () => {
  document.getElementById("welcome-message").style.display = "none";
  document.getElementById("wrapper").style.display = "block";
});
