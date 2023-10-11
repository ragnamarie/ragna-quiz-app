document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('[data-js="form"]');

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);

    // console.log(data);
    // console.log(data.question);
    // console.log(data.answer);

    storeInput();
  });

  //trying to create array here
  function storeInput() {
    // Initialize an empty array
    const questionArray = [];
    const answerArray = [];

    // Get the input elements
    const input1 = document.getElementById("question");
    const input2 = document.getElementById("answer");

    // Get the values of the input elements
    const value1 = input1.value;
    const value2 = input2.value;

    // Add the values to the array
    questionArray.push(value1);
    answerArray.push(value2);

    // Print the array to the console
    console.log(questionArray);
    console.log(answerArray);
  }
});
