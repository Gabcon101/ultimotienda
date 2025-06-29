const productos = [
  { id: 1, nombre: "Martillo", precio: 199, imagen: "img/martillo.jpg" },
  { id: 2, nombre: "Taladro Trupper", precio: 899, imagen: "img/taladro.jpg" },
  { id: 3, nombre: "Llaves mixtas", precio: 299, imagen: "img/llaves.jpg" },
  { id: 4, nombre: "Sierra eléctrica", precio: 1250, imagen: "img/sierra.jpg" },
  { id: 5, nombre: "Desarmador", precio: 480, imagen: "img/desarmador.jpg" },
  { id: 6, nombre: "Caja herramientas", precio: 750, imagen: "img/caja.jpg" },
  { id: 7, nombre: "Escalera", precio: 620, imagen: "img/escalera.jpg" },
  { id: 8, nombre: "Lijadora", precio: 990, imagen: "img/lijadora.jpg" },
  { id: 9, nombre: "Pistola de calor", precio: 560, imagen: "img/pistola.jpg" },
  { id: 10, nombre: "Nivel láser", precio: 880, imagen: "img/nivel.jpg" }
];

function mostrarProductos(orden = 'asc', contenedor = 'productos') {
  const grid = document.getElementById(contenedor);
  if (!grid) return;
  grid.innerHTML = '';
  const ordenados = [...productos].sort((a, b) => orden === 'asc' ? a.precio - b.precio : b.precio - a.precio);
  ordenados.forEach(p => {
    const div = document.createElement('div');
    div.className = 'producto';
    div.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" />
      <h3>${p.nombre}</h3>
      <p>$${p.precio}</p>
    `;
    grid.appendChild(div);
  });
}
