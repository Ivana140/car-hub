import { Image, ImageBackground, Pressable, ScrollView, Text, View, TouchableOpacity, } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { HeartSvg } from "../../assets/svg";
import colors from "../../constants/Colors";
import CarItem, { RootStaclParamList } from "../Wishlist/CarItem/CarItem";
import styles from "./CarDetails.style";
import { useNavigation } from "@react-navigation/native";
// import styles from "../Wishlist/CarItem/CarItem.style";
import ColorComponent from "./Color";
import { encode as btoa } from 'base-64';
import { StackNavigationProp } from "@react-navigation/stack";
import { useAuth } from "../../AuthContext";

const CarDetails = ({route, navigation}: {route: any, navigation: any}) => {
    let imageUri: string | undefined;
    const item = route.params
    const { isAuthenticated } = useAuth();

    if (item.imageData && item.imageData.data) {
        const binaryString = item.imageData.data.reduce((acc: any, byte: any) => acc + String.fromCharCode(byte), '');
        const base64String = btoa(binaryString);
        imageUri = `data:${item.imageData.type};base64,${base64String}`;
        // console.log('IMAGE URIs: ', imageUri);
    }

    const CartButton = () => {
        return(
            <Pressable  style={styles.addToCart}  onPress={() => navigation.navigate("Rent", item)}>
                <Text style={styles.addToCartText}>RENT</Text>
            </Pressable>
        )
    }

    // const navigation = useNavigation<StackNavigationProp<RootStaclParamList>>()
    
    return (
        <ImageBackground source={require('../../assets/details_BG.png')} style={styles.imageBackground}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.infoView}>
                    {/* <Image style={styles.image} source={item.image}/> */}
                    {/* <Image style={styles.image} source={{ uri: imageUri }} /> */}
                    {imageUri ?
                        <Image style={styles.image} source={{ uri: imageUri }} />
                        :
                        <Image style={styles.image} source={require("../../assets/Cars/blue_car.png")} />
                    }
                    <View style={styles.rowView}>
                        <Text style={styles.carType}>{item.model}</Text>
                        <View style={styles.heart}>
                            <HeartSvg size={22} color={colors.dark_blue_color}/>
                        </View>
                    </View>
                   {/* TODO: Add Colors here */}
                   {/* <FlatList 
                    style={styles.carColors}
                    horizontal={true}
                    data={item.carColors}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (<ColorComponent key={item.id} selected={item.isSelected} style={{backgroundColor: item.color}}/>)}
                   /> */}
                  <Text style={[styles.itemPadding, styles.featuresTitle]}>Features:</Text>
                  {Object.keys(item).map((key) => (
                    <Text style={[styles.itemPadding, styles.features]} key={key}>
                    {`${key}: ${item[key]}`}
                    </Text>
                ))}
                  {/* <Text style={[styles.itemPadding, styles.features]}>{item.features}</Text> */}
                  <View style={styles.rowView}>
                    <Text style={styles.cartPrice}>{item.price}</Text>
                    {isAuthenticated ? 
                        <CartButton /> :
                        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                                <Text>You need to be signed in to rent cars!</Text>
                        </TouchableOpacity>
                    }
                  </View>

                  


                </View>
            </ScrollView>
        </ImageBackground>
    );
}

export default CarDetails;