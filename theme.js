const themeSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "light") {
    themeSwitch.checked = true;
    /*zdjecia do jasnego trybu*/
   
  }
}
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    /*zdjecia do jasnego trybu*/
    
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    /*zdjecia do ciemnego trybu*/
    /*document.getElementById("center-logo").src =
      "https://cdn.glitch.global/7245122c-149e-4f8d-b647-1fd0743ab98f/logo1.png?v=1698946098237";
    document.getElementById("image1").src =
      "https://cdn.glitch.global/7245122c-149e-4f8d-b647-1fd0743ab98f/logaJeProgram.png?v=1701601254047";*/
  }
}

themeSwitch.addEventListener("change", switchTheme, false);
