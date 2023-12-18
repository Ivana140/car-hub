import { View, Image, Text, Pressable } from "react-native";
import styles from "./CarItem.style";
import { HeartSvg } from "../../../assets/svg";
import colors from "../../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Car } from "../../../Model/Car";
import { encode as btoa } from 'base-64';


export type RootStaclParamList = {
  CarDetails: {item: Car};
}
const CarItem = ({ item }: any) => {
  let imageUri: string | undefined;

  if (item.imageData && item.imageData.data) {
    const binaryString = item.imageData.data.reduce((acc: any, byte: any) => acc + String.fromCharCode(byte), '');
    const base64String = btoa(binaryString);
    imageUri = `data:${item.imageData.type};base64,${base64String}`;
    console.log(imageUri);
  }

  const navigation = useNavigation<StackNavigationProp<RootStaclParamList>>()
    return (
      <Pressable onPress={()=> navigation.navigate("CarDetails", item)}>
      <View style={styles.container}>
      <Text style={styles.type}>{item.model}</Text>

        {/* <Image style={styles.image} source={item.image} /> */}
        
        {imageUri ?
          <Image style={styles.image} source={{ uri: imageUri }} />
          :
          <Image style={styles.image} source={require("../../../assets/Cars/blue_car.png")} />
        }
        
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