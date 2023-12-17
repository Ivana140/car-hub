import { Image, ImageBackground, Pressable, ScrollView, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { HeartSvg } from "../../assets/svg";
import colors from "../../constants/Colors";
import CarItem from "../Wishlist/CarItem/CarItem";
import styles from "./CarDetails.style";
import ColorComponent from "./Color";


const CarDetails = ({route}: {route: any}) => {
    const item = route.params

    const CartButton = () => {
        return(
            <Pressable  style={styles.addToCart}  onPress={() => ({})}>
                <Text style={styles.addToCartText}>RENT</Text>
            </Pressable>
        )
    }
    return (
        <ImageBackground source={require('../../assets/details_BG.png')} style={styles.imageBackground}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.infoView}>
                    <Image style={styles.image} source={item.image}/>
                    <View style={styles.rowView}>
                        <Text style={styles.carType}>{item.type}</Text>
                        <View style={styles.heart}>
                            <HeartSvg size={22} color={colors.dark_blue_color}/>
                        </View>
                    </View>
                   {/* TODO: Add Colors here */}
                   <FlatList 
                    style={styles.carColors}
                    horizontal={true}
                    data={item.carColors}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (<ColorComponent key={item.id} selected={item.isSelected} style={{backgroundColor: item.color}}/>)}
                   />
                  <Text style={[styles.itemPadding, styles.featuresTitle]}>Features:</Text>
                  <Text style={[styles.itemPadding, styles.features]}>{item.features}</Text>
                  <View style={styles.rowView}>
                    <Text style={styles.cartPrice}>{item.price}</Text>
                    <CartButton />
                  </View>


                </View>
            </ScrollView>
        </ImageBackground>
    );
}

export default CarDetails;