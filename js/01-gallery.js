import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");


const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>

`
  )
  .join("");


container.insertAdjacentHTML("beforeend", markup);

// container.addEventListener("click", onClick);

// function onClick(evt) {
//   evt.preventDefault();

//   if (evt.target === evt.currentTarget) {
//     return;
//   }

//   const currentProduct = evt.target.closest(".gallery__item");

//   container.forEach((item) => {
//     const imgOriginal = document.querySelector(".gallery__image");
//     console.log(`Img ${item.imgOriginal}`);

//     const imgModal = imgOriginal.getAttribute("data-source");

//     const instance = basicLightbox.create(`
// <div class ="modal">
// <img src="${imgModal}" width="800" height="600">
// </div>
// `);

//     instance.show();
//   });
// }

// const container = document.querySelectorAll(".gallery__item");

// container.forEach(item => {
//   const image = item.querySelector(".gallery__image");
//   const originalSrc = image.getAttribute("data-source");

//   //   // Запобігаємо переходу за посиланням
//   item.addEventListener("click", (e) => {
//     e.preventDefault();

//     //     // Замінюємо значення атрибута src в модальному вікні
//     const lightbox = basicLightbox.create(`
//     <img src="${originalSrc}">
//   `);

//     //     // Відкриваємо модальне вікно
//     lightbox.show();
//   });
// });

container.addEventListener('click', function (event) {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const source = event.target.getAttribute('data-source');
    
    // Open the modal
    const lightbox = basicLightbox.create(`
      <img src="${source}" alt="Image description">
    `);

    lightbox.show();
  }
});






