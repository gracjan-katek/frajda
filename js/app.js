// Nasłuchuj zdarzenia 'DOMContentLoaded', aby mieć pewność, że strona jest w pełni załadowana
document.addEventListener('DOMContentLoaded', function() {

  // --- Kod odpowiedzialny za zmianę nawigacji przy przewijaniu (już go masz) ---
  const header = document.querySelector('header');
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll);


  // --- NOWOŚĆ: Kod odpowiedzialny za menu mobilne ---
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav');

  navToggle.addEventListener('click', function() {
    // Dodaj/usuń klasę 'nav-open' do nagłówka
    header.classList.toggle('nav-open');
  });

  // Opcjonalnie: zamykanie menu po kliknięciu w link
  navMenu.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      header.classList.remove('nav-open');
    }
  });

});

// Wszystkie kolory z logo
const allColors = ["#3BBFAD", "#2E9AE6", "#F7C71E", "#EE6DAF", "#66D4C5"];

// Przechodzimy po wszystkich h2
document.querySelectorAll("h2").forEach(h2 => {
  // Jeśli H2 znajduje się w sekcji #kontakt
  const isKontakt = h2.closest("#kontakt") !== null;

  // Jeśli tak -> używamy kolorów BEZ żółtego (#F7C71E)
  const colors = isKontakt
    ? allColors.filter(c => c !== "#F7C71E")
    : allColors;

  // Zamiana liter na <span> z kolorami
  h2.innerHTML = h2.textContent
    .split("")
    .map((ch, i) => `<span style="color:${colors[i % colors.length]}">${ch}</span>`)
    .join("");
});

const navAllColors = ["#2E9AE6", "#F7C71E", "#EE6DAF"];

document.querySelectorAll(".hero-content h1").forEach(h1 => {
  // sprawdzamy, czy nagłówek znajduje się w #kontakt
  const isKontakt = h1.closest("#kontakt") !== null;

  // jeśli w #kontakt -> bez żółtego
  const colors = isKontakt
    ? navAllColors.filter(c => c !== "#F7C71E")
    : navAllColors;

  // zamieniamy litery na <span> z kolorami (naprzemiennie)
  h1.innerHTML = h1.textContent
    .split("")
    .map((ch, i) => `<span style="color:${colors[i % colors.length]}">${ch}</span>`)
    .join("");
});


let colorIndex = 0;
document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll("nav a");

  menuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.style.color = navAllColors[colorIndex];
      colorIndex = (colorIndex + 1) % navAllColors.length;
    });

    item.addEventListener("mouseleave", () => {
      item.style.color = ""; // wraca do koloru zdefiniowanego w CSS
    });
  });
});
