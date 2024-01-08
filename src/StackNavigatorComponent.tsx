import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Dimensions,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MenuSvg } from "./assets/svg";
import colors from "./constants/Colors";
import CarDetails from "./screens/Details/CarDetails";
import CarList from "./screens/Wishlist/list/CarList";
import { FontAwesome } from "@expo/vector-icons";
import HomePage from "./screens/Wishlist/list/HomePage";
import SignUp from "./screens/SignInUp/SignUp";
import SignIn from "./screens/SignInUp/SignIn";
import { AuthProvider } from "./AuthContext";
import { useAuth } from "./AuthContext";
import Rent from "./screens/Rent";
import Profile from "./screens/Profile";
import RentOut from "./screens/RentOut/RentOut";

const Stack = createStackNavigator();

const StackNavigatorComponent: React.FC = () => {
  const menuViewStyle = { paddingHorizontal: 16 };
  const closeViewStyle = {
    backgroundColor: "#fff",
    height: 40,
    width: 36.36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 16,
    marginTop: 16,
  };
  const closeText = {
    fontSize: 20,
    color: colors.gray_dar_color,
  };
  const { isAuthenticated, logout } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={({ navigation }) => ({
            title: "Car Hub",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: colors.car_primary_color,
            },
            headerRight: () => (
              <View style={{ marginRight: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    isAuthenticated ? logout() : navigation.navigate("SignIn");
                  }}
                >
                  {isAuthenticated ? (
                    <Text style={{ color: "white" }}>Logout</Text>
                  ) : (
                    <Text style={{ color: "white" }}>Sign in</Text>
                  )}
                </TouchableOpacity>
              </View>
            ),

            headerTitleStyle: {
              fontFamily: "Helvetica Neue",
              fontSize: 18,
              color: "white",
            },
          })}
          name={"HomePage"}
          key={"HomePage"}
          component={HomePage}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            title: "Car catalogue",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: colors.car_primary_color,
            },
            headerLeft: () => (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    {
                      isAuthenticated && navigation.navigate("Profile");
                    }
                  }}
                >
                  <FontAwesome
                    name="car"
                    size={20}
                    color="white"
                    style={{ marginLeft: 15, fontFamily: "Helvetica Neue" }}
                  />
                </TouchableOpacity>
              </View>
            ),

            headerTitleStyle: {
              fontFamily: "Helvetica Neue",
              fontSize: 18,
              color: "white",
            },
            //headerTransparent: true,
            cardStyle: { height: Dimensions.get("window").height },
          })}
          name={"CarList"}
          key={"CarList"}
          component={CarList}
        />

        <Stack.Screen
          options={({ navigation }) => ({
            title: "",
            headerLeft: () => (
              <Pressable onPress={() => navigation.pop()}>
                <View style={closeViewStyle}>
                  <Text style={closeText}>X</Text>
                </View>
              </Pressable>
            ),
            headerTransparent: true,
            cardStyle: { height: Dimensions.get("window").height },
          })}
          name={"CarDetails"}
          key={"CarDetails"}
          component={CarDetails}
        />
        <Stack.Screen name={"SignUp"} key={"SignUp"} component={SignUp} />
        <Stack.Screen name={"SignIn"} key={"SignIn"} component={SignIn} />
        <Stack.Screen name={"Rent"} key={"Rent"} component={Rent} />
        <Stack.Screen
          options={({ navigation }) => ({
            title: "Profile",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: colors.car_primary_color,
            },
            headerTitleStyle: {
              fontFamily: "Helvetica Neue",
              fontSize: 18,
              color: "white",
            },
            //headerTransparent: true,
            cardStyle: { height: Dimensions.get("window").height },
          })}
          name={"Profile"}
          key={"Profile"}
          component={Profile}
        />
        <Stack.Screen
          options={{
            title: "Rent out a car",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: colors.car_primary_color,
            },
            headerLeft: () => (
              <View>
                <FontAwesome
                  name="car"
                  size={20}
                  color="white"
                  style={{ marginLeft: 15, fontFamily: "Helvetica Neue" }}
                />
              </View>
            ),
            headerTitleStyle: {
              fontFamily: "Helvetica Neue",
              fontSize: 18,
              color: "white",
            },
            //headerTransparent: true,
          }}
          name={"RentOut"}
          key={"RentOut"}
          component={RentOut}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigatorComponent;
