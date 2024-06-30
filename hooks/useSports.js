import React, { useState, useEffect } from "react"
import { collection, query, onSnapshot, where, addDoc, getDocs } from "firebase/firestore"
import { db } from "../credentials"

const useSports = () => {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "sports"));
        const sportsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSports(sportsList);
      } catch (error) {
        console.error("Error fetching sports: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSports();
  }, []);

  return { sports, loading };
};

export default useSports