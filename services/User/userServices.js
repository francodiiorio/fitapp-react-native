const valoresDePrueba = {
  fechas: ["2023-06-25", "2023-07-01", "2023-07-15", "2023-08-20"],

  porcentajes: [40, 10, 20, 50],
};

const guardarValores = (dato1, dato2) => {

  console.log("llegan los valores"+dato1+dato2)
  valoresDePrueba.fechas.push(dato1);

  valoresDePrueba.porcentajes.push(dato2);
};

export { valoresDePrueba, guardarValores };
