import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `);

// instance.show();

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

function onClick(evt) {
  evt.preventDefault();

  if (
    !evt.target.classList.contains(
      "gallery_item",
      "gallery_link",
      "gallery_image"
    )
  ) {
    return;
  }
  console.log(evt.target);
}
