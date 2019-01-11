document.addEventListener("DOMContentLoaded", function () {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
  .then(res => res.json())
  .then(function (json) {
    showImages(json.message);
  });
});

function showImages(images) {
  let imageDiv = document.querySelector("#dog-image-container");
  let imageUL = document.createElement("ul");

  console.log(images);
  images.forEach(function(image) {
    let imageLI = document.createElement("li");
    let imageTag = document.createElement("img");
    imageTag.src = image;
    imageLI.append(imageTag);
    imageUL.append(imageLI);
  });
  imageDiv.append(imageUL);
}
