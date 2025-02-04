document.addEventListener('DOMContentLoaded', () => {
    // Sample data (mocked from database)
    const perfumes = [
        { id: 1, name: "Chanel No. 5", brand: "Chanel", gender: "female", price: 120, imageUrl: "https://via.placeholder.com/250" },
        { id: 2, name: "Dior Sauvage", brand: "Dior", gender: "male", price: 110, imageUrl: "https://via.placeholder.com/250" },
        { id: 3, name: "Bleu de Chanel", brand: "Chanel", gender: "unisex", price: 130, imageUrl: "https://via.placeholder.com/250" },
        { id: 4, name: "Versace Eros", brand: "Versace", gender: "male", price: 90, imageUrl: "https://via.placeholder.com/250" },
        { id: 5, name: "Gucci Bloom", brand: "Gucci", gender: "female", price: 150, imageUrl: "https://via.placeholder.com/250" }
    ];

    // Extract unique brands from the sample data
    const brands = [...new Set(perfumes.map(perfume => perfume.brand))];

    // Select DOM elements
    const brandSelect = document.getElementById('brand');
    const genderSelect = document.getElementById('gender');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const sortSelect = document.getElementById('sort');
    const searchForm = document.getElementById('searchForm');
    const perfumesList = document.getElementById('perfumesList');

    // Populate brand dropdown
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
    });

    // Render perfumes
    function renderPerfumes(filteredPerfumes) {
        perfumesList.innerHTML = '';
        filteredPerfumes.forEach(perfume => {
            const perfumeCard = document.createElement('div');
            perfumeCard.className = 'perfume-card';
            perfumeCard.innerHTML = `
                <img src="${perfume.imageUrl}" alt="${perfume.name}">
                <h3>${perfume.name}</h3>
                <p>Márka: ${perfume.brand}</p>
                <p>Nem: ${perfume.gender === 'male' ? 'Férfi' : perfume.gender === 'female' ? 'Nő' : 'Unisex'}</p>
                <p>Ár: ${perfume.price} Ft</p>
            `;
            perfumesList.appendChild(perfumeCard);
        });
    }

    // Initial render
    renderPerfumes(perfumes);

    // Search functionality
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const filteredPerfumes = perfumes.filter(perfume =>
            perfume.name.toLowerCase().includes(searchTerm) ||
            perfume.brand.toLowerCase().includes(searchTerm)
        );
        renderPerfumes(filteredPerfumes);
    });

    // Price range slider update
    priceRange.addEventListener('input', () => {
        priceValue.textContent = `${priceRange.value} Ft`;
        applyFiltersAndSort();
    });

    // Filter and sort functionality
    function applyFiltersAndSort() {
        let filteredPerfumes = perfumes;

        // Gender filter
        const gender = genderSelect.value;
        if (gender) {
            filteredPerfumes = filteredPerfumes.filter(perfume => perfume.gender === gender);
        }

        // Brand filter
        const brand = brandSelect.value;
        if (brand) {
            filteredPerfumes = filteredPerfumes.filter(perfume => perfume.brand === brand);
        }

        // Price filter
        const maxPrice = parseInt(priceRange.value);
        filteredPerfumes = filteredPerfumes.filter(perfume => perfume.price <= maxPrice);

        // Sorting
        const sort = sortSelect.value;
        if (sort === 'name') {
            filteredPerfumes.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sort === 'price_asc') {
            filteredPerfumes.sort((a, b) => a.price - b.price);
        } else if (sort === 'price_desc') {
            filteredPerfumes.sort((a, b) => b.price - a.price);
        }

        renderPerfumes(filteredPerfumes);
    }

    // Event listeners for filters and sorting
    genderSelect.addEventListener('change', applyFiltersAndSort);
    brandSelect.addEventListener('change', applyFiltersAndSort);
    sortSelect.addEventListener('change', applyFiltersAndSort);
});