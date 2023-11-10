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

  event.target.classList.contains("gallery__image");
  const source = event.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
  <img src="${source}">
  `);

  instance.show();

  container.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }

    if (evt.target === evt.currentTarget) {
      return;
    }
  });
}
