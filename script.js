/* ===========================
   Task 1: FORM VALIDATION
=========================== */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#subscribeForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector("#name");
      const email = form.querySelector("#email");
      const password = form.querySelector("#password");
      const confirm = form.querySelector("#confirmPassword");
      const errorBox = form.querySelector("#formError");

      let errors = [];

      // Проверка обязательных полей
      if (!name.value.trim()) errors.push("Name is required.");
      if (!email.value.trim()) errors.push("Email is required.");
      if (!password.value.trim()) errors.push("Password is required.");
      if (!confirm.value.trim()) errors.push("Please confirm your password.");

      // Проверка формата email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email.value && !emailPattern.test(email.value))
        errors.push("Invalid email format.");

      // Проверка длины пароля
      if (password.value && password.value.length < 6)
        errors.push("Password must be at least 6 characters.");

      // Проверка совпадения паролей
      if (password.value !== confirm.value)
        errors.push("Passwords do not match.");

      if (errors.length > 0) {
        errorBox.innerHTML = errors.join("<br>");
        errorBox.style.display = "block";
      } else {
        errorBox.style.display = "none";
        alert("Form submitted successfully!");
        form.reset();
      }
    });
  }

  /* ===========================
     Task 2: ACCORDION (Content Sections)
  =========================== */
  const accordions = document.querySelectorAll(".accordion-title");
  accordions.forEach((title) => {
    title.addEventListener("click", () => {
      const content = title.nextElementSibling;
      content.classList.toggle("active");
      if (content.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });

  /* ===========================
     Task 3: POPUP SUBSCRIPTION
  =========================== */
  const popup = document.querySelector(".popup");
  const openBtn = document.querySelector("#openPopup");
  const closeBtn = document.querySelector("#closePopup");

  if (popup && openBtn && closeBtn) {
    openBtn.addEventListener("click", () => {
      popup.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
      if (e.target === popup) popup.style.display = "none";
    });
  }

  /* ===========================
     Task 4: CHANGE BACKGROUND COLOR
  =========================== */
  const bgButton = document.querySelector("#changeBg");
  const pastelColors = [
    "#FDE2E4",
    "#FAD2E1",
    "#E2ECE9",
    "#CFF5E7",
    "#F6EACB",
    "#FFF1E6",
    "#EDE7F6"
  ];

  if (bgButton) {
    bgButton.addEventListener("click", () => {
      const randomColor =
        pastelColors[Math.floor(Math.random() * pastelColors.length)];
      document.body.style.transition = "background-color 0.8s ease";
      document.body.style.backgroundColor = randomColor;
    });
  }

  /* ===========================
     Task 5: DISPLAY CURRENT DATE & TIME
  =========================== */
  const dateTimeBox = document.querySelector("#dateTime");

  function updateDateTime() {
    const now = new Date();
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    if (dateTimeBox) {
      dateTimeBox.textContent = now.toLocaleString("en-US", options);
    }
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);
});
