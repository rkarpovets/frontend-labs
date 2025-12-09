const elem1 = document.getElementById("target-1");
const elem2 = document.querySelector("#target-2");

if (elem1) {
  elem1.onclick = function() {
    this.classList.toggle("my-red-style");
  };
}

if (elem2) {
  elem2.onclick = function() {
    this.classList.toggle("my-blue-style");
  };
}

const container = document.getElementById("image-container");
const btnAdd = document.getElementById("btn-add");
const btnIncrease = document.getElementById("btn-increase");
const btnDecrease = document.getElementById("btn-decrease");
const btnDelete = document.getElementById("btn-delete");

if (btnAdd) {
  btnAdd.onclick = function() {
    const newImg = document.createElement("img");
    newImg.className = "city-image";
    newImg.src = "https://uamedtours.com.ua/storage/images/0b72f48967d33b504c7b742bba050f4d.jpg";
    newImg.alt = "місто Одеса";
    newImg.width = 600;

    container.appendChild(newImg);
  };
}

if (btnDelete) {
  btnDelete.onclick = function() {
    const lastImage = container.lastElementChild;
    if (lastImage) {
      lastImage.remove();
    }
  };
}

if (btnIncrease) {
  btnIncrease.onclick = function() {
    const lastImage = container.lastElementChild;
    if (lastImage) {
      lastImage.width += 50;
    }
  };
}

if (btnDecrease) {
  btnDecrease.onclick = function() {
    const lastImage = container.lastElementChild;
    if (lastImage && lastImage.width > 50) {
      lastImage.width -= 50;
    }
  };
}