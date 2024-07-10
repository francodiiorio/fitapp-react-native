import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants/theme";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 20 * 2,
  },
  button: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Oscurecer el fondo
  },
  x:{
    position: "absolute",
    top: 10,
    right: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: -40
  },
  picker: {
    height: 50,
    width: '100%',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    paddingLeft: 8,
  },
  header: {
    marginBottom: 20 * 2,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#333333",
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 20,
    color: "#555555",
    textAlign: "center",
    marginTop: 10,
  },
  exercisesContainer: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20 ,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  excerciseTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F5F4F4",
    marginBottom: 10,
  },
  adviceText: {
    fontSize: 18,
    textAlign: "center",

    color: "#F5F4F4",
    lineHeight: 22,
  },
  adviceTitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#666666",
    fontWeight: "bold",
    lineHeight: 22,
  },
  carouselContainer: {
    marginTop: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',  // Ajusta el ancho del modal
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  titleModal: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  aclaracionModal: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',  // Asegura que el input ocupe todo el ancho disponible
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  
});

export default styles;
