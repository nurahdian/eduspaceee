const gallery = document.querySelector(".galaxy-gallery");
const items = Array.from(gallery.children);

// acak urutan
items.sort(() => Math.random() - 0.5);

// masukkan ulang
items.forEach(item => gallery.appendChild(item));
