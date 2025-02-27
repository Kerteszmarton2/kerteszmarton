// NewsAPI kulcs
const API_KEY = "001f49d7cbf241f1bfeed545c38a76c2";

// URL a parfüm hírekhez (csak 10 találat)
const API_URL = `https://newsapi.org/v2/everything?q=perfume NOT (concert OR Genius OR novelist OR Trump OR Orders OR walmart OR habit OR Delicious OR PNOĒS OR Sophie OR Pizza OR Sci-Fi OR Logitech OR Watch OR Shoes OR Message OR Apothecary OR weekend OR Beauty OR Nightstand OR Reeves OR Shoe OR 韓国 OR Card OR Alba OR Apple OR Egyptian OR BWS OR Captain OR Recipe OR books OR Crossword OR rubbish OR Tea OR Candle OR Wine OR J-Pop OR robbers  OR Newborn OR Bella OR Snacks OR Chronological OR Sexuality OR Stepsister OR Amazon OR Strange OR cheating )&language=en&sortBy=relevancy&apiKey=${API_KEY}`;
 

// DOM elemek
const newsContainer = document.getElementById("news-container");

// Adatok lekérése és megjelenítése
async function fetchNews() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.articles && data.articles.length > 0) {
      // Csak a legelső 10 hírt jelenítjük meg
      data.articles.slice(0, 12).forEach(article => {
        const { title, description, url, urlToImage } = article;

        // HTML elem létrehozása
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");

        // Kép hozzáadása
        if (urlToImage) {
          newsItem.innerHTML += `<img src="${urlToImage}" alt="${title}">`;
        }

        // Cím és leírás hozzáadása
        newsItem.innerHTML += `
          <h2>${title}</h2>
          <p>${description || "Nincs elérhető leírás."}</p>
          <a href="${url}" target="_blank">Tovább olvasom</a>
        `;

        // Elem hozzáadása a konténerhez
        newsContainer.appendChild(newsItem);
      });
    } else {
      newsContainer.innerHTML = "<p>Nem találhatók releváns hírek.</p>";
    }
  } catch (error) {
    console.error("Hiba történt az adatok lekérése során:", error);
    newsContainer.innerHTML = "<p>Hiba történt a hírek betöltése közben.</p>";
  }
}

// Oldal betöltésekor lekérjük a híreket
document.addEventListener("DOMContentLoaded", fetchNews);