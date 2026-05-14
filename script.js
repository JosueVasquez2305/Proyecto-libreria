// ¿Dónde guardo los datos?: Si generas un número, ¿cómo evitas que salga dos veces? Necesitarás algo para recordar qué números ya salieron.

// El momento del "clic": Tienes 4 botones principales. Cada uno necesita un "oído" (addEventListener). ¿Qué debería pasar exactamente cuando presionas "Generar"?

// La conexión: ¿Cómo sacas el valor que la persona escribió en el input id="caja"?

 // El movimiento de datos: Si el número está en la pantalla principal y presionas "Confirmar", ¿qué debe pasar con ese número y a qué lista (id="lista-ganadores") debe viajar?



// 1. Conexión con el botón
const botonSortear = document.getElementById("btn-generar"); 

botonSortear.addEventListener("click", function() {
    // 2. Captura y conversión a número
    const totalParticipantes = Number(document.getElementById("caja").value);

    // 3. La fórmula del azar (del 1 al total)
    const numeroGanador = Math.floor(Math.random() * totalParticipantes) + 1;

    // 4. El "reemplazo" en pantalla (adiós al '?' y bienvenido el ganador)
    document.getElementById("numero-sorteado").textContent = numeroGanador;
});