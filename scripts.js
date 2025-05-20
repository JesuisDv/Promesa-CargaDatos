let timeoutId;
let rejectPromise;

const cargarBtn = document.querySelector(".cargar");
const cancelarBtn = document.querySelector("cancelarCarga");
const estado = document.querySelector(".status");

cargarBtn.onclick = () =>{
    estado.style.display = flex;
    cancelarCarga.disable = false;

new Promise((resolve, reject) =>{
    rejectPromise = reject;
    timeoutId = setTimeout(() =>{
        resolve("Carga de datos completada")
    },3000)
});
    .then((msg) =>{
        estado.style.display = hidden;
        cancelarCarga.disable = true;
    });
    .catch(() =>{
        estado.textContent = 'Carga de datos rechazada X';
        cancelarBtn.display = true;
    });
};  