const loader = document.getElementById("preloader");
window.addEventListener('load', function () {
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
});

const navbar = document.querySelector(".navbar");

const landing = document.querySelector(".landing");
const about = document.querySelector(".about");
const associate = document.querySelector(".associate");
const reach = document.querySelector(".reach");
const news = document.querySelector(".news");
const partners = document.querySelector(".partners");
const gallery = document.querySelector(".gallery");
const contacts = document.querySelector(".contact");

const sections = [landing, about, associate, reach, news, partners, gallery, contacts];

// Menu active item

const menuItems = document.querySelectorAll(".navbar .menu .item");

let current = 0;

// menu open
let toggle = 0;

const menuIcon = document.querySelector(".icon");
const menu = document.querySelector(".navbar .menu");
menuIcon.addEventListener("click", () => {
  if (!toggle) {
    menu.style.transform = "translate(-50%,0)";
    document.querySelector(".icon i").classList.remove("fa-bars");
    document.querySelector(".icon i").classList.add("fa-times");
    toggle = 1;
  }
  else {
    menu.style.transform = "translate(-50%,-120%)";
    document.querySelector(".icon i").classList.remove("fa-times");
    document.querySelector(".icon i").classList.add("fa-bars");
    toggle = 0;
  }
});

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", () => {
    if (toggle === 1) {
      menu.style.transform = "translate(-50%,-120%)";
      document.querySelector(".icon i").classList.remove("fa-times");
      document.querySelector(".icon i").classList.add("fa-bars");
      toggle = 0;
    }
  });
};


const landingOptions = {
  threshold: 0.25
};

const landingObserver = new IntersectionObserver
  (function (
    entries,
    landingObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navbar.classList.add("scrolled");
      }
      else {
        navbar.classList.remove("scrolled");
      }
    });
  },
    landingOptions);

landingObserver.observe(landing);


// scroll change active

const scrollOptions = {
  threshold: 0.6
};

const scrollObserver0 = new IntersectionObserver
  (function (entries, scrollObserver0) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        menuItems[current].classList.remove("active");
        menuItems[0].classList.add("active");
        current = 0;
      }
    });
  },
    scrollOptions);

scrollObserver0.observe(sections[0]);


const scrollObserver1 = new IntersectionObserver
  (function (entries, scrollObserver1) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        menuItems[current].classList.remove("active");
        menuItems[1].classList.add("active");
        current = 1;
      }
    });
  },
    scrollOptions);

scrollObserver1.observe(sections[1]);


const scrollObserver2 = new IntersectionObserver
  (function (entries, scrollObserver2) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        menuItems[current].classList.remove("active");
        menuItems[2].classList.add("active");
        current = 2;
      }
    });
  },
    scrollOptions);

scrollObserver2.observe(sections[2]);

const scrollObserver3 = new IntersectionObserver
  (function (entries, scrollObserver3) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        menuItems[current].classList.remove("active");
        menuItems[3].classList.add("active");
        current = 3;
      }
    });
  },
    scrollOptions);

scrollObserver3.observe(sections[3]);


const scrollObserver4 = new IntersectionObserver
  (function (entries, scrollObserver4) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        menuItems[current].classList.remove("active");
        menuItems[4].classList.add("active");
        current = 4;
      }
    });
  },
    scrollOptions);

scrollObserver4.observe(sections[4]);


const scrollObserver5 = new IntersectionObserver
  (function (entries, scrollObserver5) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        menuItems[current].classList.remove("active");
        menuItems[5].classList.add("active");
        current = 5;
      }
    });
  },
    scrollOptions);

scrollObserver5.observe(sections[5]);

const scrollObserver6 = new IntersectionObserver
  (function (entries, scrollObserver6) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        menuItems[current].classList.remove("active");
        menuItems[6].classList.add("active");
        current = 6;
      }
    });
  },
    scrollOptions);

scrollObserver6.observe(sections[6]);


const scrollObserver7 = new IntersectionObserver
  (function (entries, scrollObserver7) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        menuItems[current].classList.remove("active");
        menuItems[7].classList.add("active");
        current = 7;
      }
    });
  },
    scrollOptions);

scrollObserver7.observe(sections[7]);

// active on click

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", () => {
    if (i !== current) {
      menuItems[current].classList.remove("active");
    }
    sections[i].scrollIntoView();
    current = i;
  });
};
