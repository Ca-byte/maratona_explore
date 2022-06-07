const InputQuestion = document.querySelector(".input");
const Question = document.querySelector(".question");
const BtnTruth = document
  .querySelector(".btn-truth")
  .addEventListener("click", onhandleAnswer);
const PAnswer = document.querySelector(".answer");

function onhandleAnswer(event) {
  event.preventDefault();
  let items = [
    "yes!😎",
    "no! 😔",
    "maybe 💅",
    "be focus and ask me again.😅",
    "I'm sorry! 😢",
    "Next life! 🤡",
    "Of course!",
    "Pretty sure!😂",
    "oh no!😰",
    "Don't be stupid!😏",
    "You know.😉",
    "Miracles happens 😂",
    "Be positive!🤩",
    "Speachless 👽",
  ];
  Question.innerText = InputQuestion.value;
  InputQuestion.value = "";

  let item = items[Math.floor(Math.random() * items.length)];

  PAnswer.innerHTML = item;

  InputQuestion.addEventListener("focus", onHandleRemoveAnswer);
}

function onHandleRemoveAnswer() {
  Question.innerText = "";
  PAnswer.innerText = "";
}
