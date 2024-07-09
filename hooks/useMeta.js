import { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { db } from "../credentials";

const useMeta = (authData) => {

  const [userId, setUserId] = useState(null);
  const [metas, setMetas] = useState([]);

  useEffect(() => {
    if (authData) {
      setUserId(authData.user.uid);
      console.log("ACAAAAAAAAAAAAAAAAAA")
      console.log(userId)
    }
  }, [authData]);


  const addData = async (newData, userId) => {
    // console.log(userId);
    if (isNaN(newData.value)) {
      throw new Error("Por favor, ingrese valores numéricos válidos.");
    } if (!userId) {
      throw new Error("Usuario no autenticado.");
    }

    await addDoc(collection(db, "users", userId, "meta"), newData);
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

  return { addData, metas };
};

export default useMeta;
