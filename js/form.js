document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('[data-js="form"]');

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    console.log(data.question);
    console.log(data.answer);
  });
});
