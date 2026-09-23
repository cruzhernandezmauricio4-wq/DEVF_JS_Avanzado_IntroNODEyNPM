// index.js
// Importamos el array de planetas
const planetas = require('./planetas');
const cowsay = require('cowsay');

let reporte = "";
planetas.forEach(planeta => {
  reporte += `\nPlaneta: ${planeta.nombre}\nDescripción: ${planeta.descripcion}\nDescubierto en: ${planeta.descubiertoEn}\n---\n`;
});

console.log(cowsay.say({
  text: reporte,
  e: "oO",
  T: "U "
}));
