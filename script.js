document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
  
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
    });
  
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    });
    fetch('data/product.json')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
        `;
                card.addEventListener('click', () => {
                    window.location.href = product.link;
                });
                productList.appendChild(card);
            });
        })
        .catch(error => console.error('Gagal memuat produk:', error));
});

// Banner slider
let current = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}, 4000); // ganti setiap 4 detik