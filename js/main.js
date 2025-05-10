

// Start Header
let menuBtn = document.querySelector(".menu-btn");
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 200) {
    header.classList.add("backGround");
  } else {
    header.classList.remove("backGround");
  }
});
function toggleMenu() {
  document.getElementById('navList').classList.toggle('show');
}
menuBtn.onclick = toggleMenu

// End Header

// Start Details Page
if (document.querySelector(".detailsPage")) {
  // for share link in device
  let shareBtn = document.querySelector(".detailsPage .mainInfo .InfoAndAction .action .icon.share");
  function sharePage() {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: 'Look Here!',
        url: window.location.href,
      })
        .then(() => console.log('Done'))
        .catch((error) => console.log('Falied: ', error));
    } else {
      alert('The sharing feature is not supported in this browser.');
    }
  }
  shareBtn.onclick = sharePage;
  // ########################################
  // to change image to big container
  function changeImage(src) {
    document.getElementById('mainImage').src = src;
  }
  document.querySelectorAll(".thumb").forEach(thumb => {
    thumb.addEventListener("click", function () {
      document.getElementById("mainImage").src = this.src;
    });
  });
  // ###############################
  // This function displays the services according to the category.
  function renderServices(tabKey) {
    const container = document.getElementById("services");
    const items = servicesData[tabKey] || [];
    container.innerHTML = items
      .map((item) => {
        const title = item.title || "";
        const duration = item.duration || "";
        const price = item.price || "";
        const description = item.description?.replace(/'/g, "&apos;") || "";
        const features = item.features
          ? JSON.stringify(item.features).replace(/"/g, "&quot;")
          : "[]";

        return `
          <div class="service-card"
                data-title="${title}"
                data-duration="${duration}"
                data-price="${price}"
                data-description='${description}'
                data-features='${features}'
                onclick="handleServiceClick(this)">
                <div>
                  <div class="service-title">${title}</div>
                  <div>${duration}</div>
                  <div>EGB ${price}</div>
                </div>
            <button class="book-btn">Book</button>
          </div>
        `;
      })
      .join("");
  }
  // This is for the card data and calls the openFixedService function.
  function handleServiceClick(el) {
    const title = el.dataset.title;
    const duration = el.dataset.duration;
    const price = el.dataset.price;
    const description = el.dataset.description;
    const features = JSON.parse(el.dataset.features || "[]");

    openFixedService(title, duration, price, description, features);
  }
  function selectTab(tabElement, tabKey) {
    document
      .querySelectorAll(".tab")
      .forEach((tab) => tab.classList.remove("active"));
    tabElement.classList.add("active");
    renderServices(tabKey);
  }
  function scrollTabs(amount) {
    document.getElementById("tabsWrapper").scrollLeft += amount;
  }
  // open fixed div to watch details item
  function openFixedService(title, duration, price, description = '', features = []) {
    document.getElementById('fs-title').innerText = title;
    document.getElementById('fs-info').innerHTML = `${duration} <span>-</span> Male only`;
    document.getElementById('fs-price').innerText = price;
    document.getElementById('fs-discount').innerText = 'خصم 10%';

    // وصف الخدمة
    const descElement = document.getElementById('fs-description');
    if (description && description.trim() !== '') {
      descElement.innerText = description;
      descElement.style.display = 'block';
    } else {
      descElement.style.display = 'none';
    }

    // المميزات
    const ul = document.getElementById('fs-features');
    if (features.length > 0) {
      ul.innerHTML = ''; // امسح القديم
      features.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
      });
      ul.style.display = 'block';
    } else {
      ul.style.display = 'none';
    }

    document.getElementById('fixedService').style.display = 'flex';
  }

  function closeFixedService() {
    document.getElementById('fixedService').style.display = 'none';
  }
  document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('fixedService');
    const closeBtn = overlay.querySelector('.close');

    overlay.addEventListener('click', closeFixedService);
    closeBtn.addEventListener('click', closeFixedService);

    overlay.querySelector('.card').addEventListener('click', e => e.stopPropagation());
  });





}

// End Details Page


// Start Main Card
if (document.querySelector(".displayMainCard .swiper")) {
  const swiper = new Swiper(".displayMainCard .swiper", {
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
// End Main Card
