const imageInput = document.querySelector("#image-file");
const imagePreview = document.querySelector("#image-preview");
const previewImage = imagePreview.querySelector("img");
const removeImage = document.querySelector("#remove-image");

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];

  if (!file) return;

  previewImage.src = URL.createObjectURL(file);

  imagePreview.hidden = false;
});

removeImage.addEventListener("click", () => {
  imageInput.value = "";

  previewImage.src = "";

  imagePreview.hidden = true;
});
