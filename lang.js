document.getElementById("hindiBtn").addEventListener("click", function () {
  setLanguage("hindi");
});

document.getElementById("englishBtn").addEventListener("click", function () {
  setLanguage("english");
});

function setLanguage(lang) {
  document.querySelectorAll("[data-lang-hindi]").forEach((el) => {
    el.innerText = el.getAttribute(`data-lang-${lang}`);
  });
}
