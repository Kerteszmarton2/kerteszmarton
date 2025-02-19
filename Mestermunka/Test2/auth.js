let users = JSON.parse(localStorage.getItem("users")) || []; // Regisztrált felhasználók listája
let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

function simulateLogin(user) {
    isLoggedIn = true;
    currentUser = user;
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
    localStorage.setItem("currentUser", JSON.stringify(user));
    updateNavbar();
}

function simulateLogout() {
    isLoggedIn = false;
    currentUser = null;
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    updateNavbar();
    window.location.href = "index.html";
}

function updateNavbar() {
    const loginItem = document.getElementById("loginItem");
    const registerItem = document.getElementById("registerItem");
    const profileItem = document.getElementById("profileItem");
    const usernameDisplay = document.getElementById("usernameDisplay");

    if (isLoggedIn && currentUser) {
        loginItem.classList.add("d-none");
        registerItem.classList.add("d-none");
        profileItem.classList.remove("d-none");
        usernameDisplay.textContent = currentUser.username;
    } else {
        loginItem.classList.remove("d-none");
        registerItem.classList.remove("d-none");
        profileItem.classList.add("d-none");
    }
}

document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("registerUsername").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();

    if (!username || !email || !password) {
        alert("Kérlek, töltsd ki az összes mezőt!");
        return;
    }

    if (users.find(user => user.email === email)) {
        alert("Ez az e-mail cím már regisztrálva van!");
        return;
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Sikeres regisztráció! Most jelentkezz be.");
    window.location.href = "login.html";
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const loginEmail = document.getElementById("loginUsername").value.trim();
    const loginPassword = document.getElementById("loginPassword").value.trim();

    const user = users.find(user => user.email === loginEmail && user.password === loginPassword);
    if (!user) {
        alert("Hibás e-mail vagy jelszó!");
        return;
    }

    simulateLogin(user);
    alert("Sikeresen bejelentkeztél!");
    window.location.href = "index.html";
});

document.getElementById("logoutButton").addEventListener("click", () => {
    simulateLogout();
    alert("Sikeresen kijelentkeztél!");
});

window.onload = updateNavbar;
