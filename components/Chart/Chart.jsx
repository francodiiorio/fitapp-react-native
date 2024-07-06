import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { PieChart, LineChart } from 'react-native-chart-kit';
import useTrainingData from '../../hooks/useChart';
import { color } from '@rneui/base';
import styles from './chartStyle';


const TrainingChart = ({ authData }) => {
    const dataPie = useTrainingData(authData, "pie");
    const dataLine = useTrainingData(authData, "line")

      const formattedDataLine = {
    labels: dataLine.map(item => `month ${item.month}`),
    datasets: [
      {
        data: dataLine.map(item => item.km),
        color: (opacity = 1) => `rgba(255, 167, 38, ${opacity})`, // Ajusta el color según tu configuración
        strokeWidth: 2,
      }
    ],
    legend: ["Kilometers per Month"] // optional
  };

  

  const isValidData = dataLine.every(item => isNaN(item.km));
  console.log(isValidData)
  
    if (!dataPie.length || isValidData) {
      return <Text>No tienes estadisticas de entrenamientos para mostrar actuamente</Text>;
    } 
  
    return (
      <ScrollView>
        <View style={styles.chartContainer}>
          <View style={styles.chartBox}>
        <PieChart
          data={dataPie}
          width={300}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
        </View>
      </View>
      <View style={styles.chartContainer}>
      <View style={styles.chartBox}>
        <LineChart
          data={formattedDataLine}
          width={300}
          height={220}
          chartConfig={styles.chartConfigLine}
          bezier
        /> 

        </View>
      </View>
      </ScrollView>
    );
  };
  

  
  export default TrainingChart;