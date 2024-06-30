import { useState, useEffect } from "react"; 
import { subscribeToTrainingData } from "../services/Charts";

const useTrainingData = (authData) => {
    const [dataPie, setDataPie] = useState([]);
  
    useEffect(() => {
      if (authData) {
        const unsubscribe = subscribeToTrainingData(authData.user.uid, setDataPie);
        return () => unsubscribe();
      }
    }, [authData]);
  
    return dataPie;
  };
  
  export default useTrainingData;