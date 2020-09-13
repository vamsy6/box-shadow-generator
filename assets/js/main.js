// Select settings
const horizontalOffset = document.querySelector("#horizontal-offset"),
  verticalOffset = document.querySelector("#vertical-offset"),
  blur = document.querySelector("#blur"),
  spread = document.querySelector("#spread"),
  opactiy = document.querySelector("#opactiy");

const box = document.querySelector(".box");

function loadEventListeners() {
  horizontalOffset.addEventListener("change", callClass);
  verticalOffset.addEventListener("change", callClass);
  blur.addEventListener("change", callClass);
  spread.addEventListener("change", callClass);
  opacity.addEventListener("change", callClass);
}

function callClass() {
  const boxSettings = new BoxSettings(
    horizontalOffset.value,
    verticalOffset.value,
    blur.value,
    spread.value,
    opacity.value
  );
  boxSettings.changeSettings(box);
}

loadEventListeners();
