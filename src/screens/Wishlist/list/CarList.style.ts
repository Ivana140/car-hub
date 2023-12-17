import { StyleSheet } from "react-native";
import colors from "../../../constants/Colors";

const styles = StyleSheet.create({
 list: {
    paddingTop: 10
 },
 mainViewContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 50,
    backgroundColor: colors.car_mainBG_color
 },
 title: {
    fontWeight: 'bold',
    color: colors.dark_color,
    textAlign: 'center'
 },
 searchInput: {
   height: 40,
   borderColor: 'gray',
   borderWidth: 1,
   margin: 10,
   padding: 5,
 },

})

export default styles;