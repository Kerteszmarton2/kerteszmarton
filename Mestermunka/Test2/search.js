const perfumes = [
    { name: "Chanel No. 5", brand: "Chanel", price: 120, gender: "Női", family: "Virágos", image: "https://fimgs.net/himg/o.97897.jpg" },
    { name: "Dior Sauvage", brand: "Dior", price: 95, gender: "Férfi", family: "Fás", image: "https://th.bing.com/th/id/OIP.4NXznXEtsVcv4whOgXI43QHaHa?rs=1&pid=ImgDetMain" },
    { name: "Gucci Bloom", brand: "Gucci", price: 110, gender: "Női", family: "Virágos", image: "https://cdn.shopify.com/s/files/1/0259/7733/products/gucci_bloom_1024x1024.jpg?v=1508631709" },
    { name: "Versace Eros", brand: "Versace", price: 80, gender: "Férfi", family: "Aromás", image: "https://th.bing.com/th?id=OPEC.BSjEE1ZhdWEjKQ474C474&w=248&h=248&c=17&o=5&dpr=1.3&pid=21.1" },
    { name: "Chanel Coco Mademoiselle", brand: "Chanel", price: 130, gender: "Női", family: "Orientális", image: "https://www.chanel.com/apac/img/q_auto,fl_lossy,dpr_2,f_jpg/w_960/prd-emea/sys-master/content/ha0/h43/8826501595166-CCM-INTENSE-pdp-ed-push-amber.jpg" },
    { name: "Dior J'adore", brand: "Dior", price: 100, gender: "Női", family: "Virágos", image: "https://perfumeuae.com/wp-content/uploads/2016/10/dior_jadore.jpg" },
    { name: "Gucci Guilty", brand: "Gucci", price: 90, gender: "Férfi", family: "Fűszeres", image: "https://th.bing.com/th/id/OIP.bnxLB4fkgLO099t740y6lwHaHa?w=209&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { name: "Versace Bright Crystal", brand: "Versace", price: 75, gender: "Női", family: "Gyümölcsös", image: "https://cdn.notinoimg.com/detail_main_mq/versace/8011003817498_1-o/bright-crystal___140714.jpg" }
];

function populateFilters() {
    const brands = [...new Set(perfumes.map(perfume => perfume.brand))];
    const genders = [...new Set(perfumes.map(perfume => perfume.gender))];
    const families = [...new Set(perfumes.map(perfume => perfume.family))];

    populateSelect("filterBrand", brands);
    populateSelect("filterGender", genders);
    populateSelect("filterType", families);
}

function populateSelect(selectId, options) {
    const select = document.getElementById(selectId);
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });
}

function displayPerfumes(perfumes) {
    const perfumeList = document.getElementById("perfumeList");
    perfumeList.innerHTML = ""; 
    perfumes.forEach(perfume => {
        const perfumeCard = document.createElement("div");
        perfumeCard.className = "col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mb-4";
        perfumeCard.innerHTML = `
            <a href="details.html?id=${encodeURIComponent(perfume.name)}" class="card-link">
                <div class="card h-100">
                    <img src="${perfume.image}" class="card-img-top" alt="${perfume.name}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${perfume.name}</h5>
                        <p class="card-text"><strong>Márka:</strong> ${perfume.brand}</p>
                        <p class="card-text"><strong>Nem:</strong> ${perfume.gender}</p>
                        <p class="card-text"><strong>Illatcsalád:</strong> ${perfume.family}</p>
                        <p class="card-text"><strong>Ár:</strong> ${perfume.price} EUR</p>
                    </div>
                </div>
            </a>
        `;
        perfumeList.appendChild(perfumeCard);
    });
}

function filterAndSort() {
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    const filterBrand = document.getElementById("filterBrand").value;
    const filterPrice = document.getElementById("filterPrice").value;
    const sortBy = document.getElementById("sortBy").value;
    const filterGender = document.getElementById("filterGender").value;
    const filterFamily = document.getElementById("filterType").value;

    let filteredPerfumes = perfumes.filter(perfume => {
        const matchesSearch = perfume.name.toLowerCase().includes(searchText);
        const matchesGender = filterGender ? perfume.gender === filterGender : true;
        const matchesBrand = filterBrand ? perfume.brand === filterBrand : true;
        const matchesPrice = filterPrice ? (
            filterPrice === "0-50" ? perfume.price <= 50 :
            filterPrice === "50-100" ? perfume.price > 50 && perfume.price <= 100 :
            filterPrice === "100-150" ? perfume.price > 100 && perfume.price <= 150 :
            filterPrice === "150+" ? perfume.price > 150 : true
        ) : true;
        const matchesFamily = filterFamily ? perfume.family === filterFamily : true;
        return matchesSearch && matchesGender && matchesBrand && matchesPrice && matchesFamily;
    });

    if (sortBy === "priceAsc") {
        filteredPerfumes.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceDesc") {
        filteredPerfumes.sort((a, b) => b.price - a.price);
    } else if (sortBy === "nameAsc") {
        filteredPerfumes.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "nameDesc") {
        filteredPerfumes.sort((a, b) => b.name.localeCompare(a.name));
    }

    displayPerfumes(filteredPerfumes);
}

document.getElementById("searchInput").addEventListener("input", filterAndSort);
document.getElementById("filterBrand").addEventListener("change", filterAndSort);
document.getElementById("filterPrice").addEventListener("change", filterAndSort);
document.getElementById("sortBy").addEventListener("change", filterAndSort);
document.getElementById("filterGender").addEventListener("change", filterAndSort);
document.getElementById("filterType").addEventListener("change", filterAndSort);
document.getElementById("resetFilters").addEventListener("click", () => {
    document.getElementById("searchInput").value = "";
    document.getElementById("filterBrand").value = "";
    document.getElementById("filterPrice").value = "";
    document.getElementById("sortBy").value = "";
    document.getElementById("filterGender").value = "";
    document.getElementById("filterType").value = "";
    filterAndSort();
});

window.onload = () => {
    populateFilters();
    displayPerfumes(perfumes);
};