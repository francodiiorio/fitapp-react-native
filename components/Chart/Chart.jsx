import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import useTrainingData from '../../hooks/useChart';


const TrainingChart = ({ authData }) => {
    const dataPie = useTrainingData(authData);
  
    if (!dataPie.length) {
      return <Text>Loading...</Text>;
    }
  
    return (
      <View style={styles.container}>
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
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
  });
  
  export default TrainingChart;