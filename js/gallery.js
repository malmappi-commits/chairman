const galleryFilter = document.querySelectorAll(".gallery-filter");
const galleryItem = document.querySelectorAll(".gallery-item");
galleryFilter.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.category;
    galleryItem.forEach((item) => {
      if (
        selectedCategory === "all" ||
        item.dataset.category === selectedCategory
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
    galleryFilter.forEach((filter) => {
      filter.classList.remove("active");
    });
    button.classList.add("active");
  });
});
