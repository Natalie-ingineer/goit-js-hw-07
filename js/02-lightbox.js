import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const container = document.querySelector("a");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
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
  const altAttr = event.target.getAttribute("alt");

  if (event.target.classList.contains("gallery__image")) {
  } else if (evt.target === evt.currentTarget) {
    return;
  }
}

const sourceAttr = document.querySelector("a");
console.log(sourceAttr);
console.log(sourceAttr.getAttribute("href"));

const gallery = $(".gallery a").simpleLightbox({ sourceAttr });

gallery.next(); // Next Image
