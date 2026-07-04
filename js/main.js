document.addEventListener("DOMContentLoaded", () => {
  const guideCards = document.querySelectorAll(".guide-card");

  const activateGuideCard = (selectedCard) => {
    guideCards.forEach((card) => {
      const isSelected = card === selectedCard;
      card.classList.toggle("is-active", isSelected);
      card.setAttribute("aria-pressed", String(isSelected));

      const icon = card.querySelector(".guide-card-icon");
      if (icon) {
        icon.src = isSelected ? icon.dataset.activeIcon : icon.dataset.defaultIcon;
      }
    });
  };

  guideCards.forEach((card) => {
    card.addEventListener("click", () => activateGuideCard(card));

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      activateGuideCard(card);
    });
  });

  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

  const activateNavLink = (selectedLink) => {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link === selectedLink);
    });
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", () => activateNavLink(link));
  });

  const currentHashLink = document.querySelector(`.nav-links a[href="${window.location.hash}"]`);
  if (currentHashLink) {
    activateNavLink(currentHashLink);
  }

  const testimonials = [
    {
      text: "The team made the entire process smooth and stress-free. I found my dream home in just two weeks.",
      name: "Yunus Seyhan",
      role: "Postgraduate student",
      rating: 5,
      imageColor: "#c4c4c4"
    },
    {
      text: "The platform helped me compare homes and find the perfect match within my budget. Highly recommend their service.",
      name: "Selina Hossain",
      role: "Property buyer",
      rating: 5,
      imageColor: "#bfc8c9"
    },
    {
      text: "From listing to closing, everything was handled professionally. I couldn't be happier with my new home.",
      name: "Mike Hesson",
      role: "Real estate investor",
      rating: 4,
      imageColor: "#d0d0d0"
    }
  ];

  const testimonialPrev = document.querySelector(".testimonial-prev");
  const testimonialNext = document.querySelector(".testimonial-next");
  const testimonialImage = document.querySelector('[data-testimonial="image"]');
  const testimonialText = document.querySelector('[data-testimonial="text"]');
  const testimonialRating = document.querySelector('[data-testimonial="rating"]');
  const testimonialName = document.querySelector('[data-testimonial="name"]');
  const testimonialRole = document.querySelector('[data-testimonial="role"]');
  const testimonialContent = document.querySelector(".testimonial-content");

  let testimonialIndex = 0;

  const renderTestimonial = (nextIndex) => {
    if (!testimonialText || !testimonialName || !testimonialRole || !testimonialRating || !testimonialImage) {
      return;
    }

    testimonialIndex = (nextIndex + testimonials.length) % testimonials.length;
    const testimonial = testimonials[testimonialIndex];

    testimonialText.textContent = testimonial.text;
    testimonialName.textContent = testimonial.name;
    testimonialRole.textContent = testimonial.role;
    testimonialRating.setAttribute("aria-label", `${testimonial.rating} star rating`);
    testimonialImage.style.backgroundColor = testimonial.imageColor;

    testimonialRating.querySelectorAll("img").forEach((star, index) => {
      star.style.opacity = index < testimonial.rating ? "1" : "0.25";
    });

    testimonialContent?.classList.add("is-changing");
    testimonialImage.classList.add("is-changing");

    window.setTimeout(() => {
      testimonialContent?.classList.remove("is-changing");
      testimonialImage.classList.remove("is-changing");
    }, 120);
  };

  testimonialPrev?.addEventListener("click", () => renderTestimonial(testimonialIndex - 1));
  testimonialNext?.addEventListener("click", () => renderTestimonial(testimonialIndex + 1));
});

const propertyCards = document.querySelectorAll(".property-card");

propertyCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    propertyCards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
  });
});


let propertyData = {};

fetch("./data/db.json")
    .then(response => response.json())
    .then(data => {

        propertyData = data;

        renderProperties("apartment");

    })
    .catch(error => console.log(error));
  
function renderProperties(type){

    const cards = document.querySelectorAll(".property-card");

    propertyData[type].forEach((property,index)=>{

        const card = cards[index];

        card.querySelector("h3").textContent = property.title;

        card.querySelector(".property-address span").textContent = property.address;

        card.querySelector("strong").textContent = property.price;

        card.querySelector(".property-image").style.backgroundImage =
            `url(${property.image})`;

    });

}

const tabs = document.querySelectorAll(".featured-tab");

tabs.forEach(tab=>{

    tab.addEventListener("click",()=>{

        tabs.forEach(item=>item.classList.remove("active"));

        tab.classList.add("active");

        renderProperties(tab.textContent.toLowerCase());

    });

});

const navbar = document.querySelector(".navbar");
const mobileToggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelectorAll(".nav-links a");

if (navbar && mobileToggle) {
  mobileToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
}