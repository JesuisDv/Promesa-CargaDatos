let timeoutId;
let rejectPromise;

const cargarBtn = document.getElementById("cargar");
const cancelarBtn = document.getElementById("cancelarCarga");
const estado = document.getElementById("status");
const estado2 = document.getElementById("estado")
const resultado = document.getElementById("resultado");

cargarBtn.onclick = () =>{
    estado.classList.remove("hidden");
    cancelarBtn.disabled = false;
    estado2.textContent = '';
    resultado.textContent = '';

new Promise((resolve, reject) =>{
    rejectPromise = reject;
    timeoutId = setTimeout(() =>{
        resolve("Carga de datos completada")
    },2000);
})
 .then((msg) =>{
        estado.classList.add("hidden");
        estado2.textContent = msg;
        resultado.innerText= `Nombre: Jesus
        Edad: 21`
        cancelarBtn.disabled = true;
    })
.catch(() =>{
        estado.classList.add("hidden");
        estado2.textContent = 'Carga de datos rechazada ❌';
        resultado.textContent = 'Error';
        cancelarBtn.display = true;
    });
};  

cancelarBtn.onclick = ()=>{
    clearTimeout(timeoutId);
    if (rejectPromise) rejectPromise();
};