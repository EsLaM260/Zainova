// Start Feature Property
if (document.querySelector(".displayProperty .swiper")) {
  const swiper = new Swiper(".displayProperty .swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 450px
      450: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 600px
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}
// End Feature PropertyF