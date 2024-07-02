import React, { useState, useEffect } from "react"
import { collection, query, onSnapshot, where, addDoc, getDocs } from "firebase/firestore"
import { db } from "../../credentials"
import { COLORS } from "../../constants";

export const subscribeToTrainingData = (userId, callback) => {
  const collectionRef = collection(db, 'users', userId, 'training');
  const q = query(collectionRef, where('ejercicio', 'in', ['ciclismo', 'running', 'nado']));

  return onSnapshot(q, querySnapshot => {
    let kmBici = 0;
    let kmCorriendo = 0;
    let kmNadando = 0;

    querySnapshot.forEach(doc => {
      const data = doc.data();
      if (data.ejercicio === 'ciclismo') {
        kmBici += data.km;
      } else if (data.ejercicio === 'running') {
        kmCorriendo += data.km;
      } else if (data.ejercicio === 'nado') {
        kmNadando += data.km;
      }
    });

    const trainingData = [
      { name: 'ciclismo', population: kmBici, color: COLORS.primary, legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'running', population: kmCorriendo, color: '#F004', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'nado', population: kmNadando, color: COLORS.secondary, legendFontColor: '#7F7F7F', legendFontSize: 15 },
    ];

    callback(trainingData); 
  });
};


export const subscribeToMonthlyTrainingData = (userId, callback) => {
  const collectionRef = collection(db, 'users', userId, 'training');
  const q = query(collectionRef);

  return onSnapshot(q, querySnapshot => {
    const monthlyData = {};

    querySnapshot.forEach(doc => {
      const data = doc.data();
      const date = data.date.toDate(); // Convertir a objeto Date
      const month = date.getMonth(); // Obtener el mes (0-11)

      if (!monthlyData[month]) {
        monthlyData[month] = 0;
      }
      monthlyData[month] += data.km;
    });

    const formattedData = Object.keys(monthlyData).map(month => ({
      month: parseInt(month) + 1, // Ajustar el índice del mes (1-12)
      km: monthlyData[month]
    }));

    

    callback(formattedData);
  });
};