let isLoggedIn = false; // Alapértelmezett: nincs bejelentkezve
let username = ""; // Felhasználónév
let email = ""; // E-mail cím

// Bejelentkezés szimulálása
function simulateLogin(user) {
    isLoggedIn = true;
    username = user.username;
    email = user.email;
    updateNavbar();
    loadProfile();
}

// Kilépés szimulálása
function simulateLogout() {
    isLoggedIn = false;
    username = "";
    email = "";
    updateNavbar();
    hideProfileSection();
}

// Navigációs sáv frissítése
function updateNavbar() {
    const loginItem = document.getElementById("loginItem");
    const registerItem = document.getElementById("registerItem");
    const profileItem = document.getElementById("profileItem");
    const usernameDisplay = document.getElementById("usernameDisplay");

    if (loginItem && registerItem && profileItem && usernameDisplay) {
        if (isLoggedIn) {
            loginItem.classList.add("d-none");
            registerItem.classList.add("d-none");
            profileItem.classList.remove("d-none");
            usernameDisplay.textContent = username;
        } else {
            loginItem.classList.remove("d-none");
            registerItem.classList.remove("d-none");
            profileItem.classList.add("d-none");
        }
    } else {
        console.error("Egy vagy több menüelem nem található.");
    }
}

// Profil adatok betöltése
function loadProfile() {
    const profileName = document.getElementById("profileName");
    const profileEmail = document.getElementById("profileEmail");
    const profileDate = document.getElementById("profileDate");

    if (!profileName || !profileEmail || !profileDate) {
        console.error("Egy vagy több profil elem nem található.");
        return;
    }

    // Példa adatok (helyettesítsd valós adatokkal)
    profileName.textContent = username;
    profileEmail.textContent = email;
    profileDate.textContent = "2023-10-01"; // Példa dátum
    document.getElementById("profileSection").classList.remove("d-none");
}

// Profil szekció elrejtése
function hideProfileSection() {
    document.getElementById("profileSection").classList.add("d-none");
}

// Szerkesztési űrlap megjelenítése/elrejtése
document.getElementById("editProfileButton").addEventListener("click", () => {
    const editForm = document.getElementById("editProfileForm");
    if (editForm) {
        editForm.classList.remove("d-none");
    } else {
        console.error("Az űrlap elem nem található.");
    }
});

document.getElementById("cancelEditButton").addEventListener("click", () => {
    const editForm = document.getElementById("editProfileForm");
    if (editForm) {
        editForm.classList.add("d-none");
    } else {
        console.error("Az űrlap elem nem található.");
    }
});

// Profil adatok frissítése
document.getElementById("profileForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const newName = document.getElementById("editName").value.trim();
    const newEmail = document.getElementById("editEmail").value.trim();
    const newPassword = document.getElementById("editPassword").value.trim();

    if (!newName || !newEmail) {
        alert("Kérlek, töltsd ki az összes kötelező mezőt.");
        return;
    }

    // Példa: Adatok frissítése (ide jönne a valós adatbázis művelet)
    simulateLogin({ username: newName, email: newEmail });
    alert("Adatok frissítve!");
    // Űrlap elrejtése
    document.getElementById("editProfileForm").classList.add("d-none");
});

// Bejelentkezési űrlap kezelése
document.getElementById("loginButton").addEventListener("click", () => {
    document.getElementById("loginSection").classList.remove("d-none");
    document.getElementById("registerSection").classList.add("d-none");
});

// Regisztrációs űrlap kezelése
document.getElementById("registerButton").addEventListener("click", () => {
    document.getElementById("registerSection").classList.remove("d-none");
    document.getElementById("loginSection").classList.add("d-none");
});

// Bejelentkezési űrlap elküldése
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const loginUsername = document.getElementById("loginUsername").value.trim();
    const loginPassword = document.getElementById("loginPassword").value.trim();

    if (!loginUsername || !loginPassword) {
        alert("Kérlek, töltsd ki az összes kötelező mezőt.");
        return;
    }

    // Itt valósíthatod meg a bejelentkezési logikát (pl. API hívás)
    // Példa: Bejelentkezés sikeres
    simulateLogin({ username: loginUsername, email: "example@example.com" });
    document.getElementById("loginSection").classList.add("d-none");
    alert("Sikeresen bejelentkeztél!");
});

// Regisztrációs űrlap elküldése
document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const registerUsername = document.getElementById("registerUsername").value.trim();
    const registerEmail = document.getElementById("registerEmail").value.trim();
    const registerPassword = document.getElementById("registerPassword").value.trim();

    if (!registerUsername || !registerEmail || !registerPassword) {
        alert("Kérlek, töltsd ki az összes kötelező mezőt.");
        return;
    }

    // Itt valósíthatod meg a regisztrációs logikát (pl. API hívás)
    // Példa: Regisztráció sikeres
    simulateLogin({ username: registerUsername, email: registerEmail });
    document.getElementById("registerSection").classList.add("d-none");
    alert("Sikeresen regisztráltál!");
    window.location.href = "index.html"; // Átirányítás a főoldalra
});

// Kijelentkezés
document.getElementById("logoutButton").addEventListener("click", () => {
    // Példa: Kijelentkezési logika
    simulateLogout();
    alert("Sikeresen kijelentkeztél!");
    window.location.href = "index.html"; // Átirányítás a főoldalra
});

// Oldal betöltésekor frissítjük a navigációs sávot
window.onload = () => {
    updateNavbar();
    // Ellenőrizzük, hogy van-e bejelentkezett felhasználó
    // Ez a rész a valós alkalmazásban adatbázis-ellenőrzést igényelne
    // Ha nem szeretnéd, hogy automatikusan bejelentkezzen, hagyd figyelmen kívül ezt a sort
    // setTimeout(simulateLogin, 3000); // 3 másodperc után bejelentkezés
};