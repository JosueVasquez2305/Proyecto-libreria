// ==========================================
// PISO 1: EL CEREBRO (VARIABLES GLOBALES)
// ==========================================
let ganadoresConfirmados = [];
let numerosExcluidos = [];


// ==========================================
// PISO 2: CONSTANTES DE CAPTURA (DOM)
// ==========================================
const botonSortear = document.getElementById("btn-generar"); 
const botonConfirmar = document.getElementById("btn-confirmar");
const listaVisualGanadores = document.getElementById("lista-ganadores"); 


// ==========================================
// PISO 3: FUNCIONALIDAD DE LOS BOTONES
// ==========================================

// --- BOTÓN 1: GENERAR NÚMERO ---
botonSortear.addEventListener("click", function() {
    // Captura cuántos participantes juegan
    const totalParticipantes = Number(document.getElementById("caja").value);

    // Validación por si el input está vacío o es cero
    if (totalParticipantes <= 0 || isNaN(totalParticipantes)) {
        alert("Por favor, ingresa un número válido de participantes.");
        return;
    }

    // Fórmula del azar (del 1 al total)
    const numeroGanador = Math.floor(Math.random() * totalParticipantes) + 1;

    // Cambia el "?" en la pantalla por el número
    document.getElementById("numero-sorteado").textContent = numeroGanador;
});


// --- BOTÓN 2: CONFIRMAR GANADOR ---
botonConfirmar.addEventListener("click", function() {
    // Capturamos el número que está mostrando la pantalla justo ahora
    const ganadorFirme = Number(document.getElementById("numero-sorteado").textContent);

    // Evitamos que guarde un 0 o un "?" si le dan click antes de tiempo
    if (ganadorFirme === 0 || isNaN(ganadorFirme)) {
        alert("¡Primero debes generar un número ganador!");
        return; 
    }

    // Guardar en la memoria (Arrays)
    ganadoresConfirmados.push(ganadorFirme);
    numerosExcluidos.push(ganadorFirme);

    // Crear el elemento visual en el HTML (<li>)
    const nuevoItem = document.createElement("li"); 
    nuevoItem.textContent = `Número: ${ganadorFirme}`; 
    
    // Inyectar el nuevo item dentro de tu lista vacía
    listaVisualGanadores.appendChild(nuevoItem);

    // Monitoreo en la consola
    console.log("Ganadores confirmados:", ganadoresConfirmados);
    console.log("Todos los excluidos:", numerosExcluidos);
});