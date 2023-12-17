import { StyleSheet } from "react-native";
import colors from "../../../constants/Colors";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
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
  text1:{
    fontSize:30,
    textAlign:"center",
    fontWeight:"500",
    fontFamily:"Garamond",
    marginHorizontal:30,
    marginVertical:20
  },
  text2:{
    fontSize:12,
    fontFamily:"Garamond",
    fontStyle:"italic",
    textAlign:"center",
    marginHorizontal:24
  },
  button1:{
    marginTop:20,
    fontSize:20,
    color:colors.car_primary_color,
    fontWeight:"bold"
  }
  });


  export default styles;