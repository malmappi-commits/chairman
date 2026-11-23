const pageForm = document.querySelector(".chairman-contact-form");
const formError = document.querySelector(".form-error");

pageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formError.textContent = "";
  const fullName = pageForm.elements["fullName"].value;
  const email = pageForm.elements["email"].value;
  const message = pageForm.elements["message"].value;
  const phone = pageForm.elements["phone"].value;
  const subject = pageForm.elements["subject"].value;
  if (!fullName.trim()) {
    formError.textContent = "please enter your full name";
    return;
  }
  if (!message.trim()) {
    formError.textContent = "Please enter your message.";
    return;
  }
  if (subject === "") {
    formError.textContent = "Please select a subject.";
    return;
  }
  formError.textContent = "Your message has been submitted successfully!";
  pageForm.reset();
  console.log(fullName, email, message, phone);
});
