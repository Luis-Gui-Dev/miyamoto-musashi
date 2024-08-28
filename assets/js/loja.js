function mostrarCategoria(categoria) {
    const categorias = document.querySelectorAll('.categoria');
    categorias.forEach(cat => {
        if (cat.id === categoria) {
            cat.style.display = 'block';
        } else {
            cat.style.display = 'none';
        }
    });
}
function mostrarSubcategoria(subcategoria) {
    const subcategorias = document.querySelectorAll('.subcategoria');
    subcategorias.forEach(subcat => {
        if (subcat.id === subcategoria) {
            subcat.style.display = 'block';
        } else {
            subcat.style.display = 'none';
        }
    });
}
window.onload = function() {
    mostrarCategoria('roupas');
    mostrarSubcategoria('sapatos');
};