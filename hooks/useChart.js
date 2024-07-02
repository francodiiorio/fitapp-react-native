import { useState, useEffect } from "react"; 
import { subscribeToTrainingData, subscribeToMonthlyTrainingData } from "../services/Charts";

const useTrainingData = (authData, type) => {
    const [data, setData] = useState([0]);
  
    useEffect(() => {
      const km = data.km ? Number(data.km) : 0;
      if (isNaN(km)) return;
      if (authData) {
        let unsubscribe;
        if (type === "pie") {
          unsubscribe = subscribeToTrainingData(authData.user.uid, setData);
        } else if (type === "line") {
          unsubscribe = subscribeToMonthlyTrainingData(authData.user.uid, setData);
        }
        
        return () => unsubscribe && unsubscribe();
      }
    }, []);
  
    return data;
  };
  
  export default useTrainingData;