import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

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

list.insertAdjacentHTML("beforeend", markup);

list.addEventListener("click", onClick);

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

  //   const picture =
  const instance = basicLightbox.create(`
  <div class ="modal">
   <img src="${original}" width="800" height="600">
  </div>
  `);

  instance.show();
}

// onClick();
