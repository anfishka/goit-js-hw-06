let nameInput = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output"); 

nameInput.addEventListener("input", () => {
    nameInput.value.trim() === "" ? nameOutput.textContent = "Anonymous" :
        nameOutput.textContent = nameInput.value;
})
