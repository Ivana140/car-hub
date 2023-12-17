import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Button,Image } from "react-native";
import styles from "./HomePage.style";

const HomePage = ({ navigation }) => {
  return (
    // <ImageBackground source={require('../../../assets/details_BG.png')} style={styles.imageBackground}>
      <View style={styles.container}>
      <Text style={styles.text1}>Find, book, rent a car-quick and super easy!</Text>
      <Text style={styles.text2}>Streamline your car rental experience with our effortless booking process.</Text>

      <Image
      source={require('../../../assets/car_noBG.png')} // Adjust the path based on your project structure
      style={{ width: 400, height: 300, marginTop:50,marginRight:20}} // Adjust the dimensions as needed
    />
      <TouchableOpacity onPress={() => navigation.navigate('CarList')} style={styles.button1} >
        <Text style={styles.button1}>Explore luxurious cars</Text>
      </TouchableOpacity>
      </View>
    // </ImageBackground>
  );
};

export default HomePage;