document.addEventListener("DOMContentLoaded", function () {
  const questionSection = document.querySelector(
    '[data-js="question-section"]'
  );

  const questions = [
    "Whose stage name is Sporty Spice?",
    "How many members do the Spice Girls have?",
    "Robbie Williams is from which boy band?",
  ];

  function addQuestionBox() {
    //creates box
    const questionBox = document.createElement("div");
    questionBox.classList.add("question-box");
    questionSection.append(questionBox);
    // creates empty bookmark
    const bookmark = document.createElement("img");
    bookmark.setAttribute("src", "images/bookmark.png");
    bookmark.setAttribute("alt", "BOOKMARKS");
    questionBox.append(bookmark);
    // creates question
    const question = document.createElement("p");
    question.classList.add("question-box__questions");
    question.textContent = "What is 12 divided by 3?"; // this will be replaced by loop
    questionBox.append(question);
    // creates button
    const answerButton = document.createElement("button");
    answerButton.classList.add("question-box__answer-button");
    answerButton.textContent = "SHOW ANSWER";
    questionBox.append(answerButton);
    //creates category boxes container
    const boxContainer = document.createElement("div");
    boxContainer.classList.add("question-box__container");
    questionBox.append(boxContainer);
    //creates category boxes -- needs loop within loop
    const categories = document.createElement("p");
    categories.classList.add("question-box__container__categories");
    categories.textContent = "Math";
    boxContainer.append(categories);
  }
  addQuestionBox();
});
