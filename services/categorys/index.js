import { db } from "../../credentials";
import { collection, getDocs } from "firebase/firestore";
// const dataBase = db

function getUniqueTypes() {
  return new Promise((resolve, reject) => {
    const sportsCollection = collection(db,"sports");
    getDocs(sportsCollection)
      .then((snapshot) => {
        const types = new Set();
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.type) {
            types.add(data.type);
          }
        });
        resolve(Array.from(types));
      })
      .catch((error) => {
        reject("Error al obtener los tipos de ejercicio " + error);
      });
  });
}


const categorys = [{ name: "Aeróbico" }];

const getCategorys = () => {
  return new Promise((resolve, reject) => {
    return resolve(categorys);
  });
};

export { getCategorys, getUniqueTypes};
