const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("mainNav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (form && formMsg) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !service || !message) {
      formMsg.textContent = "Please fill all required fields.";
      formMsg.style.color = "#c0392b";
      return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      formMsg.textContent = "Please enter a valid email address.";
      formMsg.style.color = "#c0392b";
      return;
    }

    formMsg.textContent = "Thanks! Your inquiry has been recorded. We will contact you soon.";
    formMsg.style.color = "#1f7a3f";
    form.reset();
  });
}
