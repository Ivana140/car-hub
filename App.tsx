import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './App.style';
import CarApp from './src/screens/CarApp';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  return (
    <View style={styles.container}>
      <CarApp />
      <StatusBar style="auto" />
    </View>
  );
}

