
const consejos = [
    "Planifica tu Rutina de Ejercicio",
    "Establece Objetivos Realistas",
    "Prioriza el Descanso y la Recuperación",
    "Aliméntate de Manera Saludable y Equilibrada",
    "Mantén la Hidratación"
  ];
  
  export function obtenerConsejoAleatorio() {
    const indice = Math.floor(Math.random() * consejos.length);
    return consejos[indice];
  }
  


