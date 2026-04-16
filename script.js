const readMoreBtn = document.getElementById("read-more-btn");
const detailsSection = document.getElementById("details-section");

if (readMoreBtn && detailsSection) {
  readMoreBtn.addEventListener("click", function (event) {
    event.preventDefault();
    detailsSection.classList.toggle("hidden");
    const isHidden = detailsSection.classList.contains("hidden");
    readMoreBtn.textContent = isHidden ? "Read More" : "Show Less";
    if (!isHidden) {
      detailsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}
