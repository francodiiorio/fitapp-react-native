//PROMESIFICAR agregar conexión con la Base final
const listaDeEjercicios = [
  {
    name: "Flexiones",
    type: "Entrenamiento de fuerza",
    category: "Gym",
    description:
      "Colócate en posición de plancha alta con las manos directamente debajo de los hombros. Baja el cuerpo doblando los codos hasta que el pecho casi toque el suelo. Empuja hacia arriba para volver a la posición inicial.",
  },
  {
    name: "Sentadillas",
    type: "Entrenamiento de fuerza",
    category: "Gym",
    description:
      "Párate con los pies a la altura de los hombros. Baja las caderas hacia atrás y hacia abajo como si te sentaras en una silla, manteniendo el pecho erguido y las rodillas sobre los pies. Regresa a la posición inicial.",
  },
  {
    name: "Planchas",
    type: "Entrenamiento del core",
    category: "Gym",
    description:
      "Colócate en posición de plancha con los antebrazos en el suelo y el cuerpo en línea recta desde la cabeza hasta los talones. Mantén esta posición, asegurándote de contraer el core.",
  },
  {
    name: "Dominadas",
    type: "Entrenamiento de fuerza",
    category: "Gym",
    description:
      "Agarra la barra con las manos un poco más abiertas que la anchura de los hombros y cuélgate con los brazos extendidos. Sube el cuerpo tirando de la barra hasta que la barbilla esté por encima de la barra. Baja lentamente hasta la posición inicial.",
  },
  {
    name: "Burpees",
    type: "Entrenamiento de cuerpo completo",
    category: "Gym",
    description:
      "Desde una posición de pie, baja al suelo en una posición de cuclillas y coloca las manos en el suelo. Salta con los pies hacia atrás para entrar en una posición de plancha, realiza una flexión y luego salta los pies hacia adelante de nuevo. Salta hacia arriba con las manos extendidas sobre la cabeza.",
  },
  {
    name: "Abdominales",
    type: "Entrenamiento del core",
    category: "Gym",
    description:
      "Acuéstate de espaldas con las rodillas dobladas y los pies planos en el suelo. Coloca las manos detrás de la cabeza y levanta la parte superior del cuerpo hacia las rodillas, usando los músculos abdominales. Baja de nuevo a la posición inicial.",
  },
  {
    name: "Zancadas",
    type: "Entrenamiento de fuerza",
    category: "Gym",
    description:
      "Párate con los pies juntos. Da un paso adelante con una pierna y baja las caderas hasta que ambas rodillas estén dobladas en un ángulo de 90 grados. Empuja hacia arriba y regresa a la posición inicial. Repite con la otra pierna.",
  },

  {
    name: "Running",
    type: "Cardiovascular",
    category: "Aeróbico",
    description: "Mejora la salud cardiovascular, quema un alto número de calorías, incrementa la densidad ósea y fortalece los músculos de las piernas y el core."
  },
  {
    name: "Ciclismo",
    type: "Cardiovascular",
    category: "Aeróbico",
    description: "Mejora la salud cardiovascular, fortalece los músculos de las piernas y la parte inferior del cuerpo, es de bajo impacto para las articulaciones y puede mejorar el equilibrio y la coordinación."
  },
  {
    name: "Nadar",
    type: "Cardiovascular",
    category: "Aeróbico",
    description: "Mejora la salud cardiovascular, trabaja todos los grupos musculares principales, es de bajo impacto para las articulaciones, mejora la flexibilidad y puede ayudar a reducir el estrés."
  }
];

const getExcersices = () => {
  return new Promise((resolve, reject) => {
    return resolve(listaDeEjercicios);
  });
};

export default { getExcersices };
