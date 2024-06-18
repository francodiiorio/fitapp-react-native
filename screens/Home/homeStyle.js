import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingTop: 20 * 2,
    },
    header: {
        marginBottom: 20 * 2,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#333333',
        textTransform: 'uppercase',
    },
    subtitle: {
        fontSize: 20,
        color: '#555555',
        textAlign: 'center',
        marginTop: 10,
    },
    exercisesContainer: {
        marginTop: 20,
        backgroundColor: '#FEA28F',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20 * 2,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
    },
    excerciseTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#F5F4F4',
        marginBottom: 10,
    },
    adviceText: {
        fontSize: 18,
        textAlign: 'center',
        
        color: '#F5F4F4',
        lineHeight: 22,
    },
    adviceTitle: {
        fontSize: 18,
        textAlign: 'center',
        color: '#666666',
        fontWeight: 'bold',
        lineHeight: 22,
    },
    carouselContainer: {
        marginTop: 20,
    },
   
    
});

export default styles;
