function searchServices() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".service-card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();

    if (text.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      message.textContent = "✅ Thank you! Your message has been sent successfully.";
      message.style.color = "green";

      form.reset();
    });
  }
});
