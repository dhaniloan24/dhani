document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("enquiry-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  // Demo-only: intentionally does not transmit or save any form data.
  message.textContent = "Demo check complete. Nothing was submitted or saved. Connect a secure, authorized backend before using this form for real enquiries.";
  form.reset();
});
