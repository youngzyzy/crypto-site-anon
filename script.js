document.getElementById("main-contract").addEventListener("click", function () {
  const text = document.getElementById("main-contract").textContent;
  console.log(text);
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
});
document.getElementById("main-contract").addEventListener("click", function () {
  this.innerHTML = "CA copied! <i class='fa-solid fa-check'></i>"; // Changes the text
});
