import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/Colors";

const styles = StyleSheet.create({
    mainViewContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 10
    },
    scrollView: {
        flex: 1
    },
    carType: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.car_primary_color,
        paddingLeft: 30,
        paddingTop: 20
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    image: {
        width: '100%',
        marginTop: -130
    },
    infoView: {
        flex: 1,
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        marginTop: Dimensions.get('window').height / 3,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35
    },
    itemPadding: {
        paddingBottom: 10,
        paddingLeft: 16,
      },
       cartPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#151515',
        paddingLeft: 30,
        paddingTop: 20,
      },
      featuresTitle: {
        fontSize: 16,
        color: "#363636",
        paddingLeft: 30,
        paddingTop: 20,
      },
      features: {
        fontSize: 14,
        fontWeight: '400',
        color: '#707070',
        // paddingLeft: 30,
        marginHorizontal:12
    
      },
      addToCart: {
        backgroundColor: '#6C91A1',
        borderRadius: 8,
        height: 45,
        width: 133,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        padding: 10
      },
      addToCartText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
      },
      rowView:{
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      circle: {
        width: 24,
        height: 24,
        borderRadius: 24/2,
        marginRight: 8
     },
     border:{
      borderColor:"#CBC7C7",
      borderWidth: 3
     },
     carColors: {
      height: 30,
      flexGrow: 0,
      paddingLeft: 30,
      marginTop: 10,
     },
     heart:{
      padding: 20
     }
});


export default styles