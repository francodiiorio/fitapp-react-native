import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  writeBatch,
  where,
  getDocs,
} from "firebase/firestore";
import {Alert} from "react-native";
import { db } from "../credentials";

const useMeta = (authData) => {
  const [userId, setUserId] = useState(null);
  const [metas, setMetas] = useState([]);

  useEffect(() => {
    if (authData) {
      setUserId(authData.user.uid);
      // console.log("ACAAAAAAAAAAAAAAAAAA");
      // console.log(userId);
    }
  }, [authData]);

  const addData = async (newData, userId) => {
    if (isNaN(newData.value)) {
      throw new Error("Por favor, ingrese valores numéricos válidos.");
    }
    if (!userId) {
      throw new Error("Usuario no autenticado.");
    }

    await addDoc(collection(db, "users", userId, "meta"), newData);
  };

  const updateData = async (trainingData, userId) => {
    // console.log(trainingData);
    // console.log(userId);
    const userMetaSnapshot = await getDocs(
      collection(db, "users", userId, "meta")
    );
    try {
      const batch = writeBatch(db);
      let seModifico = false;

      userMetaSnapshot.forEach((doc) => {
        const meta = doc.data();
        if (!meta.done) {
          if (meta.date.toDate() < trainingData.date) {
            if (meta.type === "km" && trainingData.km >= meta.value) {
              console.log("Se encontro una meta de Distancia");
              batch.update(doc.ref, { done: true });
              seModifico = true;
            } else if (meta.type === "vel" && trainingData.vel >= meta.value) {
              console.log("Se encontro una meta de Velocidad");
              batch.update(doc.ref, { done: true });
              seModifico = true;
            }
          }
        }
      });
      
      if(seModifico)Alert.alert("Has alcanzado una nueva meta")
      await batch.commit();

   
    } catch (error) {
      console.error("Error actualizando el estado de metas: ", error);
    }
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const getData = async () => {
      try {
        const metas = [];
        const userMetaSnapshot = await getDocs(
          collection(db, "users", userId, "meta")
        );

        userMetaSnapshot.forEach((metaDoc) => {
          metas.push(metaDoc.data());
        });
        setMetas(metas);
      } catch (error) {
        console.error("Error al obtener la colección 'meta': ", error);
      }
    };

    if (userId) {
      getData();
    }
  }, [, addData]);

  return { addData, updateData, metas };
};

export default useMeta;
