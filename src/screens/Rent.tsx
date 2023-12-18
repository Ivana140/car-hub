import React, { useState } from "react";
import { Image, ImageBackground, Pressable, ScrollView, Text, View, TouchableOpacity, StyleSheet, Button, } from "react-native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { FlatList } from "react-native-gesture-handler";
import { HeartSvg } from "../assets/svg";
import colors from "../constants/Colors";
import CarItem, { RootStaclParamList } from "./Wishlist/CarItem/CarItem";
import styles from "./Details/CarDetails.style";
import { useNavigation } from "@react-navigation/native";
// import styles from "../Wishlist/CarItem/CarItem.style";
import ColorComponent from "./Details/Color";
import { encode as btoa } from 'base-64';
import { StackNavigationProp } from "@react-navigation/stack";
import { useAuth } from "../AuthContext";

interface DateRange {
    startDate: Date | null;
    endDate: Date | null;
}

const Rent = ({route, navigation}: {route: any, navigation: any}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dates, setDates] = useState<DateRange>({ startDate: null, endDate: null });
    const [pickingStart, setPickingStart] = useState(true); // To track if picking start or end date

    let imageUri: string | undefined;
    const item = route.params

    const { token, userId } = useAuth();

    if (item.imageData && item.imageData.data) {
        const binaryString = item.imageData.data.reduce((acc: any, byte: any) => acc + String.fromCharCode(byte), '');
        const base64String = btoa(binaryString);
        imageUri = `data:${item.imageData.type};base64,${base64String}`;
        // console.log('IMAGE URIs: ', imageUri);
    }

    const rentCar = async (carId: string, userId: any, fromDate: any, toDate: any) => {
        try {
          const response = await fetch(`http://10.0.2.2:3000/rent-car/${carId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId,
              fromDate,
              toDate,
            }),
          });
      
          if (!response.ok) {
            const errorData = await response.text();
            throw new Error(errorData || 'An error occurred while renting the car');
          }
      
          alert('Car rental updated successfully');
        } catch (error: any) {
          console.error('Error:', error);
          alert('Error renting car: ' + error.message);
        }
      };

    const handleRent = () => {
        // console.log(item._id, userId, dates["startDate"], dates["endDate"])
        rentCar(item._id, userId, dates["startDate"], dates["endDate"])
        navigation.navigate("CarList");
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        if (pickingStart) {
        setDates({ ...dates, startDate: date });
        setPickingStart(false);
        hideDatePicker()
        } else {
        setDates({ ...dates, endDate: date });
        setPickingStart(true); // Reset for next use
        hideDatePicker(); // Now hide the picker as both dates are selected
        }
    };

    return (
        <ImageBackground source={require('../assets/details_BG.png')} style={styles.imageBackground}>
                <View style={styles.infoView}>
                    {imageUri ?
                        <Image style={style.image} source={{ uri: imageUri }} />
                        :
                        <Image style={style.image} source={require("../assets/Cars/blue_car.png")} />
                    }
                    <View style={styles.rowView}>
                        <Text style={styles.carType}>{item.model}</Text>
                        <View style={styles.heart}>
                            <HeartSvg size={22} color={colors.dark_blue_color}/>
                        </View>
                    </View>
                    <View>
                        {!dates.startDate && <Button title="Select Start Date" onPress={showDatePicker} />}
                        {dates.startDate && !dates.endDate && <Button title="Select End Date" onPress={showDatePicker} />}
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                            minimumDate={new Date()}
                        />
                        {dates.startDate && <Text>Start Date: {dates.startDate.toDateString()}</Text>}
                        {dates.endDate && <Text>End Date: {dates.endDate.toDateString()}</Text>}
                        {dates.startDate && dates.endDate && <Button title="RENT" onPress={handleRent}/>}
                    </View>
                </View>
        </ImageBackground>
    );
}

const style = StyleSheet.create({
    image: {
        flex: 1,
        width: "100%",
        marginBottom: 160,
        zIndex: 1000,
    },
  });

export default Rent;