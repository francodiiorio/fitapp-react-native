import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants"

const styles = StyleSheet.create({
    title: {
        fontSize: SIZES.xxLarge,
        margin: SIZES.xxLarge
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        height:600
    },
    text_container: {
        justifyContent: "center",
        gap: 15,
        padding: 10
    },
    text_container_item: {
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 2
    },
    textInput: {
        width: 250,
        height: 50,
        fontSize: SIZES.large
    },
    buttonContainer: {
        alignContent: "center"
    },
    buttonWraper: {
        backgroundColor: COLORS.gray,
        borderRadius: 30,
        paddingVertical: 20,
        width: 150,
        marginTop: 20
    },
    button: {
        textAlign: "center",
        color: COLORS.primary,
        fontSize: SIZES.xLarge,
        margin: 20
    
    }
})

export default styles