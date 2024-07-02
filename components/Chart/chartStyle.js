import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants"

const styles = StyleSheet.create({

  chartConfigLine: {
    backgroundColor: COLORS.white,
    backgroundGradientFrom: COLORS.white,
    backgroundGradientTo: COLORS.white,
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  },

  chartContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  chartBox: {
    width: '99%',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
})

export default styles