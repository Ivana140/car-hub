import { StyleSheet } from 'react-native';
import colors from "../../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 30,
        paddingHorizontal: 25,
        paddingTop: 50,
        backgroundColor:"#E8E8E8",
        borderRadius: 25,
        flex: 1,
    },
    image: {
        flex: 1,
        width: "100%",
        height: 150,
        marginTop: -80,
        marginBottom: 30,
        zIndex: 1,
    },
    type: {
        color: colors.car_primary_color,
        fontSize: 22,
        fontWeight: "bold",
        paddingBottom:100,
        backgroundColor:"#E8E8E8"
    },
    price: {
        fontSize: 12,
        color:"gray"
    },
    priceView: {
        flexDirection: "row",
        justifyContent:"space-between",
        paddingTop: 10,
        paddingBottom: 20
    },
    // featuresCard:{
    //     color:colors.car_primary_color,
    //     // fontSize:16,
    //     // textAlign:'center',
    //     // paddingBottom:45,
    //     // paddingTop:15,
    //     // fontWeight:"600"
    // },
    featuresContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Ovo je opcionalno, dodajte ako želite centralizovati vertikalno
      },
      featuresTextContainer: {
        marginLeft: 45, 
        color:colors.car_primary_color,
        fontSize:16,
        textAlign:'center',
        paddingBottom:45,
        paddingTop:15,
        fontWeight:"600"
      },
    
});

export default styles;