// Select settings
const horizontalOffset = document.querySelector("#horizontal-offset"),
  verticalOffset = document.querySelector("#vertical-offset"),
  blur = document.querySelector("#blur"),
  spread = document.querySelector("#spread"),
  opactiy = document.querySelector("#opactiy"),
  generatedCSS = document.querySelector("#generated-css"),
  copyCode = document.querySelector("#copyCode");

const box = document.querySelector(".box");

function loadEventListeners() {
  horizontalOffset.addEventListener("change", callClass);
  verticalOffset.addEventListener("change", callClass);
  blur.addEventListener("change", callClass);
  spread.addEventListener("change", callClass);
  opacity.addEventListener("change", callClass);
  copyCode.addEventListener("click", copyCSS);
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
  generatedCSS.textContent = `box-shadow: ${horizontalOffset.value}px ${verticalOffset.value}px ${blur.value}px ${spread.value}px rgba(0,0,0,${opacity.value})`;
}

function copyCSS() {
  navigator.clipboard.writeText(`${generatedCSS.textContent}`);
}

loadEventListeners();
