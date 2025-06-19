const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const icon = item.querySelector(".toggleIcon");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    // Close all
    faqItems.forEach((i) => {
      i.classList.remove("open");
      i.querySelector(".toggleIcon").src = "./images/plus.png";
    });

    // Toggle current
    if (!isOpen) {
      item.classList.add("open");
      icon.src = "./images/minus.png";
    }
  });
});
