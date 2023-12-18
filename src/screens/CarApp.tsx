import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions, Pressable, Text, TouchableOpacity, View } from "react-native";
import { MenuSvg } from "../assets/svg";
import colors from "../constants/Colors";
import CarDetails from "./Details/CarDetails";
import CarList from "./Wishlist/list/CarList";
import { FontAwesome } from '@expo/vector-icons';
import HomePage from "./Wishlist/list/HomePage";
import SignUp from "./SignInUp/SignUp";
import SignIn from "./SignInUp/SignIn";
import { AuthProvider } from "../AuthContext";
import { useAuth } from "../AuthContext";
import StackNavigatorComponent from "../StackNavigatorComponent";

const Stack = createStackNavigator()
const CarApp = () => {
    return (
      <AuthProvider>
        <StackNavigatorComponent/>
      </AuthProvider>
    );
};

export default CarApp;

