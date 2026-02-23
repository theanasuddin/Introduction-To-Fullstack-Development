const rollButton = document.getElementById("roll-button");
rollButton.addEventListener("click", () => {
  rollDice();
});

document.addEventListener("rollDice", (event) => {
  const totalSpan = document.querySelector("#totals span");
  const currentTotal = Number(totalSpan.textContent);
  totalSpan.textContent = currentTotal + 1;
});

document.addEventListener("rollDice", (event) => {
  const value = event.detail.value;
  let container;
  switch (value) {
    case 1:
      container = document.querySelector("#ones p");
      break;
    case 2:
      container = document.querySelector("#twos p");
      break;
    case 3:
      container = document.querySelector("#threes p");
      break;
    case 4:
      container = document.querySelector("#fours p");
      break;
    case 5:
      container = document.querySelector("#fives p");
      break;
    case 6:
      container = document.querySelector("#sixes p");
      break;
  }
  const currentCount = Number(container.textContent) || 0;
  container.textContent = currentCount + 1;
});

document.addEventListener("rollDice", (event) => {
  const value = event.detail.value;
  const template = document.getElementById(`template${value}`);
  const newFace = template.content.cloneNode(true);

  rollButton.innerHTML = "";
  rollButton.appendChild(newFace);
});
