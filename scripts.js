let timeoutId;
let rejectPromise;

const cargarBtn = document.querySelector(".cargar");
const cancelarBtn = document.getElementById("cancelarCarga");
const estado = document.getElementById("status");
const estado2 = document.getElementById("estado")
const resultado = document.getElementById("resultado");

cargarBtn.onclick = () =>{
    estado.classList.remove("hidden");
    cancelarBtn.disable = false;
    estado2.textContent = '';

new Promise((resolve, reject) =>{
    rejectPromise = reject;
    timeoutId = setTimeout(() =>{
        resolve("Carga de datos completada")
    },1000);
})
 .then((msg) =>{
        estado.style.display = hidden;
        estado2.textContent = msg;
        resultado.textContent = 'Nombre: Jesus, Edad: 21';
        cancelarCarga.disable = false;
    })
.catch(() =>{
        estado.style.display = hidden;
        estado2.textContent = 'Carga de datos rechazada X';
        cancelarBtn.display = true;
    });
};  

cancelarBtn.onclick = ()=>{
    clearTimeout(timeoutId);
    reject();
};