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

container.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const source = event.target.getAttribute('data-source');
    
   
    const lightbox = basicLightbox.create(`
      <img src="${source}">
    `);

    lightbox.show();
  } else if (evt.target === evt.currentTarget) {
    return;
  }
};



//   const currentProduct = evt.target.closest(".gallery__item");












