function searchServices() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".service-card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (!form || !message) return; // prevents errors

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    message.textContent = "✅ Thank you! Your message has been sent successfully.";
    message.style.color = "green";

    form.reset();
  });
});
