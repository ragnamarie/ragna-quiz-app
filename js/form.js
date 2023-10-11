document.addEventListener("DOMContentLoaded", function () {
  const questionSection = document.querySelector(
    '[data-js="question-section"]'
  );

  questionSection.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data.question);
    console.log(data.answer);

    //creates box
    const questionBox = document.createElement("div");
    questionBox.classList.add("question-box");
    questionSection.append(questionBox);
    // creates empty bookmark
    const bookmark = document.createElement("img");
    bookmark.setAttribute("src", "images/bookmark.png");
    bookmark.setAttribute("alt", "BOOKMARKS");
    questionBox.append(bookmark);
    // makes bookmark change color
    bookmark.addEventListener("click", () => {
      if (bookmark.getAttribute("src") == "images/bookmark.png") {
        bookmark.setAttribute("src", "images/bookmark_filled.png");
        bookmark.setAttribute("alt", "BOOKMARKS");
        questionBox.append(bookmark);
      } else {
        bookmark.setAttribute("src", "images/bookmark.png");
        bookmark.setAttribute("alt", "BOOKMARKS");
        questionBox.append(bookmark);
      }
    });
    // creates question
    const question = document.createElement("p");
    question.classList.add("question-box__questions");
    question.textContent = data.question;
    questionBox.append(question);
    // creates button
    const answerButton = document.createElement("button");
    answerButton.classList.add("question-box__answer-button");
    answerButton.textContent = "SHOW ANSWER";
    questionBox.append(answerButton);
    //shows answer
    answerButton.addEventListener("click", () => {
      if (answerButton.textContent == "SHOW ANSWER") {
        answerButton.classList.add("question-box__answer-button");
        answerButton.textContent = data.answer;
        questionBox.append(answerButton);
      } else {
        answerButton.classList.add("question-box__answer-button");
        answerButton.textContent = "SHOW ANSWER";
        questionBox.append(answerButton);
      }
    });
    //creates category boxes container
    const boxContainer = document.createElement("div");
    boxContainer.classList.add("question-box__container");
    questionBox.append(boxContainer);
    //creates category boxes -- need to add category array or something
    for (i = 0; i < 3; i++) {
      const categories = document.createElement("p");
      categories.classList.add("question-box__container__categories");
      categories.textContent = "Math";
      boxContainer.append(categories);
    }
  });
});
