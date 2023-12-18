import React, { useState, useEffect } from "react";
import { FlatList, View, Text, TextInput } from "react-native";
import { cars, Car } from "../../../Model/Car"; // Import the Car type
import CarItem from "../CarItem/CarItem";
import styles from "./CarList.style";
import axios from "axios";

const CarList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState(cars);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:3000/cars');
        // console.log(response.data);
        setFilteredCars(response.data)
      } catch (error) {
        // console.error('Error:', error);
        if (axios.isAxiosError(error)) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('Error response data:', error.response.data);
            console.log('Error response status:', error.response.status);
            console.log('Error response headers:', error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log('Error request:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error message:', error.message);
          }
          console.log('Error config:', error.config);
        } else {
          // Non-Axios error
          console.error('Error:', error);
        }
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   // Filtriraj podatke na osnovu unetog teksta
  //   console.log(cars)
  //   const newFilteredCars = cars.filter(item =>
  //     item.type.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setFilteredCars(newFilteredCars);
  // }, [searchQuery]);

  const renderCarItem = ({ item }: { item: Car }) => (
    <CarItem item={item} />
  );

  return (
    <View style={styles.mainViewContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
      <FlatList
        style={styles.list}
        data={filteredCars}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderCarItem}
      />
    </View>
  );
};

export default CarList;