let currentLang = "si";
const langBtn = document.getElementById("langBtn");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

function setLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang === "si" ? "si" : "en";
  document.querySelectorAll("[data-si][data-en]").forEach(el=>{
    el.textContent = lang === "si" ? el.dataset.si : el.dataset.en;
  });
  langBtn.textContent = lang === "si" ? "English" : "සිංහල";
  document.title = lang === "si"
    ? "ශ්‍රී සුධර්ම දහම් පාසල | මාවතගම"
    : "Sri Sudharma Dhamma School | Mawathagama";
  localStorage.setItem("dhammaLang", lang);
}
