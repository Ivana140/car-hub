import { View, Image, Text, Pressable } from "react-native";
import styles from "./CarItem.style";
import { HeartSvg } from "../../../assets/svg";
import colors from "../../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Car } from "../../../Model/Car";


export type RootStaclParamList = {
  CarDetails: {item: Car};
}
const CarItem = ({ item }: any) => {
  const navigation = useNavigation<StackNavigationProp<RootStaclParamList>>()
    return (
      <Pressable onPress={()=> navigation.navigate("CarDetails", item)}>
      <View style={styles.container}>
      <Text style={styles.type}>{item.model}</Text>

        {/* <Image style={styles.image} source={item.image} /> */}
        <Image style={styles.image} source={require("../../../assets/Cars/grey_car.png")} />
        <View style={styles.featuresContainer}>

        <Text style={styles.featuresTextContainer}>{item.fuel_type}</Text>
        <Text style={styles.featuresTextContainer}>{item.drive}</Text>
        <Text style={styles.featuresTextContainer}>{item.city_mpg} MPG</Text>
        </View>

        <View style={styles.priceView}>
            {/* <Text style={styles.price}>{item.price}</Text> */}
            <Text style={styles.price}>{"$1000"}</Text>
            <HeartSvg size={22} color={colors.dark_blue_color}/>
         </View>
      </View>
      </Pressable>
    );
  }
  
  export default CarItem;