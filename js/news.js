const newsFilter = document.querySelectorAll(".news-filter");
const newsCard = document.querySelectorAll(".news-card");
newsFilter.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.category;
    newsCard.forEach((card) => {
      if (
        selectedFilter === "all" ||
        card.dataset.category === selectedFilter
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
    newsFilter.forEach((filter) => {
      filter.classList.remove("active");
    });
    button.classList.add("active");
  });
});
const paginationbuttons = document.querySelectorAll(".news-pagination button");
let currentPage = 1;
const cardsPerpage = 4;
function displayNewsPage() {
  const startIndex = (currentPage - 1) * cardsPerpage;
  const endIndex = startIndex + cardsPerpage;
  newsCard.forEach((card, index) => {
    if (index >= startIndex && index < endIndex) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
displayNewsPage();
paginationbuttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Previous") {
      if (currentPage <= 1) {
        return (currentPage = 1);
      }
      currentPage -= 1;
      displayNewsPage();
    } else if (button.textContent === "Next →") {
      if (currentPage >= 3) {
        return (currentPage = 3);
      }
      currentPage += 1;
      displayNewsPage();
    } else {
      let pageNum = Number(button.textContent);

      currentPage = pageNum;
    }

    displayNewsPage();
    paginationbuttons.forEach((page) => {
      page.classList.remove("current-page");
      if (Number(page.textContent) === currentPage) {
        page.classList.add("current-page");
      }
    });
  });
});
