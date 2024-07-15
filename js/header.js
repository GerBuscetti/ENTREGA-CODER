const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const producthome = document.getElementsByClassName("card-img-top");

const imagen = document.getElementById('imagenhome');
const boton = document.getElementById('buynowbutton');
const remeras = [
  "img/imgropa/remeras/remera1.png",
  "img/imgropa/remeras/remera2.png",
  "img/imgropa/remeras/remera3.png",
  "img/imgropa/remeras/remera4.png",
  "img/imgropa/remeras/remera5.png",
  "img/imgropa/remeras/remera6.png",
  "img/imgropa/remeras/remera7.png",
  "img/imgropa/remeras/remera8.png",
  "img/imgropa/remeras/remera9.png",
  "img/imgropa/remeras/remera10.png",
  "img/imgropa/remeras/remera11.png",
  "img/imgropa/remeras/remera12.png",
  "img/imgropa/remeras/remera13.png",
  "img/imgropa/remeras/remera14.png",
  "img/imgropa/remeras/remera15.png",
]
const zapatillas = [
  "img/imgropa/zapatillas/zapatilla1.png",
  "img/imgropa/zapatillas/zapatilla11.png",
  "img/imgropa/zapatillas/zapatilla3.png",
  "img/imgropa/zapatillas/zapatilla4.png",
  "img/imgropa/zapatillas/zapatilla5.png",
  "img/imgropa/zapatillas/zapatilla6.png",
  "img/imgropa/zapatillas/zapatilla7.png",
  "img/imgropa/zapatillas/zapatilla8.png",
  "img/imgropa/zapatillas/zapatilla9.png",
  "img/imgropa/zapatillas/zapatilla10.png",
  "img/imgropa/zapatillas/zapatilla11.png",
  "img/imgropa/zapatillas/zapatilla12.png",
  "img/imgropa/zapatillas/zapatilla13.png",
  "img/imgropa/zapatillas/zapatilla14.png",
  "img/imgropa/zapatillas/zapatilla15.png",
]
const pantalones = [
  "img/imgropa/pantalones/pantalon1.png",
  "img/imgropa/pantalones/pantalon2.png",
  "img/imgropa/pantalones/pantalon3.png",
  "img/imgropa/pantalones/pantalon4.png",
  "img/imgropa/pantalones/pantalon5.png",
  "img/imgropa/pantalones/pantalon6.png",
  "img/imgropa/pantalones/pantalon7.png",
  "img/imgropa/pantalones/pantalon8.png",
  "img/imgropa/pantalones/pantalon9.png",
  "img/imgropa/pantalones/pantalon10.png",
  "img/imgropa/pantalones/pantalon11.png",
  "img/imgropa/pantalones/pantalon12.png",
  "img/imgropa/pantalones/pantalon13.png",
  "img/imgropa/pantalones/pantalon14.png",
  "img/imgropa/pantalones/pantalon15.png",
]




menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


function mostrar_remeras() {



  // Recorre todos los elementos y cambia la imagen
  for (var i = 0; i < producthome.length; i++) {

    var productdata = producthome[i].nextElementSibling.querySelector('.card-title');
    
    producthome[i].src = remeras[i]; // Reemplaza "img/nueva-imagen.jpg" con la ruta de la nueva imagen que deseas usar
    productdata.textContent = "Remera";
  }
}
function mostrar_pantalones() {

    for (var i = 0; i < producthome.length; i++) {

      var productdata = producthome[i].nextElementSibling.querySelector('.card-title');
    
        producthome[i].src = pantalones[i]; 
        productdata.textContent = "Pantalon";
      }
}
function mostrar_zapatillas() {
  
    for (var i = 0; i < producthome.length; i++) {

      var productdata = producthome[i].nextElementSibling.querySelector('.card-title');
    
        producthome[i].src = zapatillas[i]; 
        productdata.textContent = "Zapatilla";
      }
}
function ir_home() {
  window.location.href = "index.html";
}

function mostrar_ropa() {

    imagen.style.display = 'none';
    boton.style.display = 'none';

}

function ver_producto() {
  window.location.href = "templates/product_page.html";

}
