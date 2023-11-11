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

  if (event.target.classList.contains("gallery__image")) {
  } else if (evt.target === evt.currentTarget) {
    return;
  }
}

const imgAttr = document.querySelector("a");
const textImg = document.querySelector("img");

const source = imgAttr.getAttribute("href");
const srcImg = imgAttr.getAttribute("src");
const descriptionImg = textImg.getAttribute("alt");

const gallery = new SimpleLightbox(".gallery a", {
  sourceAtt: "href",
  captionsData: "alt",
  captionDelay: 250,
});

gallery.open();
