document.addEventListener('DOMContentLoaded', () => {
    // Sample data
    const perfumes = [
        { id: 1, name: "Chanel No. 5", brand: "Chanel", gender: "female", price: 120, imageUrl: "https://via.placeholder.com/250" },
        { id: 2, name: "Dior Sauvage", brand: "Dior", gender: "male", price: 110, imageUrl: "https://via.placeholder.com/250" },
        { id: 3, name: "Bleu de Chanel", brand: "Chanel", gender: "unisex", price: 130, imageUrl: "https://via.placeholder.com/250" }
    ];

    const brands = [...new Set(perfumes.map(perfume => perfume.brand))];

    // Populate brand dropdown
    const brandSelect = document.getElementById('brand');
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
    });

    // Render perfumes
    function renderPerfumes(perfumes) {
        const perfumesList = document.getElementById('perfumesList');
        perfumesList.innerHTML = '';
        perfumes.forEach(perfume => {
            const perfumeCard = document.createElement('div');
            perfumeCard.className = 'perfume-card';
            perfumeCard.innerHTML = `
                <img src="${perfume.imageUrl}" alt="${perfume.name}">
                <h3>${perfume.name}</h3>
                <p>Márka: ${perfume.brand}</p>
                <p>Nem: ${perfume.gender}</p>
                <p>Ár: ${perfume.price} Ft</p>
            `;
            perfumesList.appendChild(perfumeCard);
        });
    }

    // Initial render
    renderPerfumes(perfumes);

    // Search functionality
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const filteredPerfumes = perfumes.filter(perfume =>
            perfume.name.toLowerCase().includes(searchTerm) ||
            perfume.brand.toLowerCase().includes(searchTerm)
        );
        renderPerfumes(filteredPerfumes);
    });

    // Filter and sort functionality
    const genderSelect = document.getElementById('gender');
    const brandSelect = document.getElementById('brand');
    const sortSelect = document.getElementById('sort');

    function applyFiltersAndSort() {
        let filteredPerfumes = perfumes;

        const gender = genderSelect.value;
        if (gender) {
            filteredPerfumes = filteredPerfumes.filter(perfume => perfume.gender === gender);
        }

        const brand = brandSelect.value;
        if (brand) {
            filteredPerfumes = filteredPerfumes.filter(perfume => perfume.brand === brand);
        }

        const sort = sortSelect.value;
        if (sort === 'name') {
            filteredPerfumes.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sort === 'price') {
            filteredPerfumes.sort((a, b) => a.price - b.price);
        }

        renderPerfumes(filteredPerfumes);
    }

    genderSelect.addEventListener('change', applyFiltersAndSort);
    brandSelect.addEventListener('change', applyFiltersAndSort);
    sortSelect.addEventListener('change', applyFiltersAndSort);
});