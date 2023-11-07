let fontSizeControl = document.querySelector("#font-size-control");
let text = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
    text.style.fontSize = fontSizeControl.value + "px";
})