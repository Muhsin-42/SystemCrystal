const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const resetLinks = () => {
  navLinks.forEach((link) => link.classList.remove("active"));
};

const handleScroll = () => {
  const { pageYOffset } = window;

  sections.forEach((section) => {
    const { id, offsetTop, clientHeight } = section;
    const offset = offsetTop - 1;

    if (pageYOffset >= offset && pageYOffset < offset + clientHeight) {
      resetLinks();
      navLinks.forEach((link) => {
        if (link.dataset.scroll === id) {
          link.classList.add("active");
        }
      });
    }
  });
};

document.addEventListener("scroll", handleScroll);