function loadUserProfile() {
    const profileNameElement = document.getElementById("profileName");
    const profileEmailElement = document.getElementById("profileEmail");
    const profileDateElement = document.getElementById("profileDate");

    if (!profileNameElement || !profileEmailElement || !profileDateElement) {
        console.error("Egy vagy több profil elem nem található.");
        return;
    }

    // Példa adatok (helyettesítsd valós adatokkal)
    profileNameElement.textContent = "Felhasználó";
    profileEmailElement.textContent = "felhasznalo@example.com";
    profileDateElement.textContent = "2023-10-01";
}

function toggleEditFormVisibility(visible) {
    const editForm = document.getElementById("editProfileForm");
    if (!editForm) {
        console.error("Az űrlap elem nem található.");
        return;
    }
    editForm.classList.toggle("d-none", !visible);
}

function updateProfileData(newName, newEmail) {
    const profileNameElement = document.getElementById("profileName");
    const profileEmailElement = document.getElementById("profileEmail");

    if (!profileNameElement || !profileEmailElement) {
        console.error("Egy vagy több profil elem nem található.");
        return;
    }

    profileNameElement.textContent = newName;
    profileEmailElement.textContent = newEmail;
}

document.getElementById("editProfileButton").addEventListener("click", () => {
    toggleEditFormVisibility(true);
});

document.getElementById("cancelEditButton").addEventListener("click", () => {
    toggleEditFormVisibility(false);
});

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
    updateProfileData(newName, newEmail);
    alert("Adatok frissítve!");

    // Űrlap elrejtése
    toggleEditFormVisibility(false);
});

document.getElementById("logoutButton").addEventListener("click", () => {
    // Példa: Kijelentkezési logika
    alert("Sikeresen kijelentkeztél!");
    window.location.href = "index.html"; // Átirányítás a főoldalra
});

// Oldal betöltésekor betöltjük a profil adatokat és bejelentkezünk a menüsornézetbe 3 másodpercen később
window.onload = () => {
    loadUserProfile();
    setTimeout(() => {
        window.location.href = "menu.html"; // Átirányítás a menüsornézetre
    }, 3000); // 3 másodperc
};