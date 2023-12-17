import React, { useState, useEffect } from "react";
import { FlatList, View, Text, TextInput } from "react-native";
import { cars, Car } from "../../../Model/Car"; // Import the Car type
import CarItem from "../CarItem/CarItem";
import styles from "./CarList.style";

const CarList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState(cars);

  useEffect(() => {
    // Filtriraj podatke na osnovu unetog teksta
    const newFilteredCars = cars.filter(item =>
      item.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCars(newFilteredCars);
  }, [searchQuery]);

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
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCarItem}
      />
    </View>
  );
};

export default CarList;