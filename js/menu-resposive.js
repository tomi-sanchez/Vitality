//Agregar y quitar clases para ver el menú desplegable
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
});

//Código para que al hacer click en el enlace te lleve a la sección seleccionada y el menú desaparezca
const links = document.querySelectorAll("#nav a");
links.forEach(function(link) {
  link.addEventListener("click", function(e) {
    const menu = document.getElementById("nav");
    menu.style.display = "none";
    
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});