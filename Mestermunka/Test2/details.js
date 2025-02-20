document.addEventListener('DOMContentLoaded', () => {
    const perfumes = [
        { 
            name: "Chanel No. 5", 
            brand: "Chanel", 
            price: 120, 
            gender: "Női", 
            family: "Virágos", 
            images: [
                "https://fimgs.net/himg/o.97897.jpg",
                "https://example.com/chanel_no5_image2.jpg",
                "https://example.com/chanel_no5_image3.jpg"
            ]
        },
        { 
            name: "Dior Sauvage", 
            brand: "Dior", 
            price: 95, 
            gender: "Férfi", 
            family: "Fás", 
            images: [
                "https://th.bing.com/th/id/OIP.4NXznXEtsVcv4whOgXI43QHaHa?rs=1&pid=ImgDetMain",
                "https://example.com/dior_sauvage_image2.jpg",
                "https://example.com/dior_sauvage_image3.jpg"
            ]
        },
        { 
            name: "Gucci Bloom", 
            brand: "Gucci", 
            price: 110, 
            gender: "Női", 
            family: "Virágos", 
            images: [
                "https://cdn.shopify.com/s/files/1/0259/7733/products/gucci_bloom_1024x1024.jpg?v=1508631709",
                "https://example.com/gucci_bloom_image2.jpg",
                "https://example.com/gucci_bloom_image3.jpg"
            ]
        },
        { 
            name: "Versace Eros", 
            brand: "Versace", 
            price: 80, 
            gender: "Férfi", 
            family: "Aromás", 
            images: [
                "https://th.bing.com/th?id=OPEC.BSjEE1ZhdWEjKQ474C474&w=248&h=248&c=17&o=5&dpr=1.3&pid=21.1",
                "https://example.com/versace_eros_image2.jpg",
                "https://example.com/versace_eros_image3.jpg"
            ]
        },
        { 
            name: "Chanel Coco Mademoiselle", 
            brand: "Chanel", 
            price: 130, 
            gender: "Női", 
            family: "Orientális", 
            images: [
                "https://www.chanel.com/apac/img/q_auto,fl_lossy,dpr_2,f_jpg/w_960/prd-emea/sys-master/content/ha0/h43/8826501595166-CCM-INTENSE-pdp-ed-push-amber.jpg",
                "https://example.com/chanel_coco_mademoiselle_image2.jpg",
                "https://example.com/chanel_coco_mademoiselle_image3.jpg"
            ]
        },
        { 
            name: "Dior J'adore", 
            brand: "Dior", 
            price: 100, 
            gender: "Női", 
            family: "Virágos", 
            images: [
                "https://perfumeuae.com/wp-content/uploads/2016/10/dior_jadore.jpg",
                "https://example.com/dior_jadore_image2.jpg",
                "https://example.com/dior_jadore_image3.jpg"
            ]
        },
        { 
            name: "Gucci Guilty", 
            brand: "Gucci", 
            price: 90, 
            gender: "Férfi", 
            family: "Fűszeres", 
            images: [
                "https://th.bing.com/th/id/OIP.bnxLB4fkgLO099t740y6lwHaHa?w=209&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                "https://example.com/gucci_guilty_image2.jpg",
                "https://example.com/gucci_guilty_image3.jpg"
            ]
        },
        { 
            name: "Versace Bright Crystal", 
            brand: "Versace", 
            price: 75, 
            gender: "Női", 
            family: "Gyümölcsös", 
            images: [
                "https://cdn.notinoimg.com/detail_main_mq/versace/8011003817498_1-o/bright-crystal___140714.jpg",
                "https://example.com/versace_bright_crystal_image2.jpg",
                "https://example.com/versace_bright_crystal_image3.jpg"
            ]
        }
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const perfumeName = urlParams.get('id');
    const perfume = perfumes.find(p => decodeURIComponent(p.name) === perfumeName);

    if (perfume) {
        document.getElementById("perfumeDetails").innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <div class="image-gallery">
                        ${perfume.images.map((image, index) => `
                            <div class="image-item">
                                <img src="${image}" alt="${perfume.name} - Kép ${index + 1}" class="img-fluid" data-index="${index}">
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="col-md-6">
                    <h1>${perfume.name}</h1>
                    <p><strong>Márka:</strong> ${perfume.brand}</p>
                    <p><strong>Nem:</strong> ${perfume.gender}</p>
                    <p><strong>Illatcsalád:</strong> ${perfume.family}</p>
                    <p><strong>Ár:</strong> ${perfume.price} EUR</p>
                </div>
            </div>
        `;

        // Kép nagyítás és görgetés
        const images = document.querySelectorAll('.image-item img');
        const modal = document.getElementById('myModal');
        const modalImage = document.getElementById('modalImage');
        const closeBtn = document.getElementById('closeModal');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');
        let currentIndex = 0;

        images.forEach((img, index) => {
            img.addEventListener('click', () => {
                currentIndex = index;
                modal.style.display = 'block';
                modalImage.src = img.src;
            });
        });

        closeBtn.onclick = () => {
            modal.style.display = 'none';
        };

        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };

        prevBtn.onclick = () => {
            currentIndex = (currentIndex - 1 + perfume.images.length) % perfume.images.length;
            modalImage.src = perfume.images[currentIndex];
        };

        nextBtn.onclick = () => {
            currentIndex = (currentIndex + 1) % perfume.images.length;
            modalImage.src = perfume.images[currentIndex];
        };

        // Nyílakkal való görgetés
        document.addEventListener('keydown', (event) => {
            if (modal.style.display === 'block') {
                if (event.key === 'ArrowLeft') {
                    prevBtn.click();
                } else if (event.key === 'ArrowRight') {
                    nextBtn.click();
                } else if (event.key === 'Escape') {
                    closeBtn.click();
                }
            }
        });

        // Képek közötti váltás
        const imageGallery = document.querySelector('.image-gallery');
        imageGallery.addEventListener('click', (event) => {
            const clickedImage = event.target.closest('.image-item img');
            if (clickedImage) {
                currentIndex = parseInt(clickedImage.getAttribute('data-index'));
                modal.style.display = 'block';
                modalImage.src = clickedImage.src;
            }
        });
    } else {
        document.getElementById("perfumeDetails").innerHTML = "<h1>A termék nem található.</h1>";
    }
});