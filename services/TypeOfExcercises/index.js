
//Segun mati. Crear en la base los tipos, traerlos todos y mapearlos para devolver solo los correctos.
// despues entregar el array con los nombres filtrados y renderizarlos

//uniq = [...new Set(array)]; PARA ELIMINAR LOS NOMBRES DUPLICADOS EN LA BASE

//PROMESIFICAR agregar conexión con la Base final
const listOfExcercises = [
  {  type: "Entrenamiento de fuerza" },
  {  type: "Cardio" },
  {  type: "Entrenamiento del core" },
  {  type: "Entrenamiento de cuerpo completo" },
];

// OBTENGO LA LISTA DE EJERCICIOS COMPLETA Y LA MAPEO EN UN OBJETO DE TIPOS DE EJERCICIOS
const typeOfExcercises = listOfExcercises.reduce((acc, excercise) => {
  const { type } = excercise;

  if (!acc[type]) {
    acc[type] = [];
  }
  acc[type].push(excercise);
  return acc;
}, {});

// DESESTRUCTURO EL OBJETO Y LO CONVIERTO EN ARRAY PARA MANEJARLO

const cant = Object.keys(typeOfExcercises).length;
// console.log(cant);

const group = () => {
  let array = [];

  for (let index = 0; index < cant; index++) {
    let group = Object.keys(typeOfExcercises)[index];

    array.push(group);
  }
  return array;
};
// console.log("ESTOY")

// const array = group()
// console.log(typeof array[1]);

const getGroupExcersices = () => {
  return new Promise((resolve, reject) => {
    return resolve(listOfExcercises);
  });
};

export default { getGroupExcersices };
