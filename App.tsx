import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./App.style";
import CarApp from "./src/screens/CarApp";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { useCallback } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({});

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <CarApp />
      <StatusBar style="auto" />
    </View>
  );
}
